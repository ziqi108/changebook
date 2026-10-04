# Generates branded 1200x675 OG PNGs with GDI+ (fallback: text-to-image API unavailable).
Add-Type -AssemblyName System.Drawing

$W = 1200; $H = 675
$ink = [System.Drawing.Color]::FromArgb(255, 14, 20, 25)
$beige = [System.Drawing.Color]::FromArgb(233, 223, 201)
$vermilion = [System.Drawing.Color]::FromArgb(192, 57, 43)

function New-Canvas {
  $bmp = New-Object System.Drawing.Bitmap($W, $H)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  # ink background
  $g.Clear($ink)
  # soft radial glow
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.AddEllipse(-200, -260, 1200, 1100)
  $pgb = New-Object System.Drawing.Drawing2D.PathGradientBrush($path)
  $pgb.CenterColor = [System.Drawing.Color]::FromArgb(38, 46, 52)
  $pgb.SurroundColors = @([System.Drawing.Color]::FromArgb(255, 14, 20, 25))
  $g.FillPath($pgb, $path)
  $path.Dispose(); $pgb.Dispose()
  return @($bmp, $g)
}

function Draw-Wordmark($g, $sub) {
  $fam = New-Object System.Drawing.FontFamily('Georgia')
  $fTitle = New-Object System.Drawing.Font($fam, 30, [System.Drawing.FontStyle]::Regular)
  $fSub = New-Object System.Drawing.Font('Segoe UI', 11, [System.Drawing.FontStyle]::Regular)
  $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(210, 233, 223, 201))
  $brushDim = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(110, 233, 223, 201))
  $g.DrawString('Yi Wisdom', $fTitle, $brush, 80, 64)
  $sb = New-Object System.Text.StringBuilder
  foreach ($ch in $sub.ToCharArray()) {
    if ([char]::IsLetterOrDigit($ch)) { [void]$sb.Append("$ch ") } else { [void]$sb.Append($ch) }
  }
  $g.DrawString($sb.ToString(), $fSub, $brushDim, 84, 118)
  $fTitle.Dispose(); $fSub.Dispose(); $brush.Dispose(); $brushDim.Dispose(); $fam.Dispose()
}

function Draw-Seal($g) {
  $x = 1066; $y = 567; $s = 62
  $rect = New-Object System.Drawing.Drawing2D.GraphicsPath
  $r = 10
  $rect.AddArc($x, $y, $r, $r, 180, 90)
  $rect.AddArc($x + $s - $r, $y, $r, $r, 270, 90)
  $rect.AddArc($x + $s - $r, $y + $s - $r, $r, $r, 0, 90)
  $rect.AddArc($x, $y + $s - $r, $r, $r, 90, 90)
  $rect.CloseFigure()
  $brush = New-Object System.Drawing.SolidBrush($vermilion)
  $g.FillPath($brush, $rect)
  $brush.Dispose(); $rect.Dispose()
  $fSeal = New-Object System.Drawing.Font('Microsoft YaHei', 30, [System.Drawing.FontStyle]::Bold)
  $wb = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 241, 232))
  $glyph = [string][char]0x6613
  $sz = $g.MeasureString($glyph, $fSeal)
  $gx = [single]($x + ($s - $sz.Width) / 2)
  $gy = [single]($y + ($s - $sz.Height) / 2 - 2)
  $g.DrawString($glyph, $fSeal, $wb, $gx, $gy)
  $fSeal.Dispose(); $wb.Dispose()
}

function Draw-Bar($g, $cx, $cy, $len, $thick, $solid, $alpha) {
  $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb($alpha, 233, 223, 201))
  if ($solid) {
    $rr = New-Object System.Drawing.Drawing2D.GraphicsPath
    $h = $thick / 2
    $rr.AddRectangle((New-Object System.Drawing.RectangleF(($cx - $len / 2), ($cy - $h), $len, $thick)))
    $g.FillPath($brush, $rr); $rr.Dispose()
  } else {
    $gap = 30; $part = ($len - $gap) / 2
    $g.FillRectangle($brush, ($cx - $len / 2), ($cy - $thick / 2), $part, $thick)
    $g.FillRectangle($brush, ($cx + $gap / 2), ($cy - $thick / 2), $part, $thick)
  }
  $brush.Dispose()
}

# ---------- og-image.png : taiji + eight trigrams ----------
$pair = New-Canvas; $bmp = $pair[0]; $g = $pair[1]
Draw-Wordmark $g 'THE CLASSIC OF CHANGE'
$cx0 = 600; $cy0 = 372; $R = 128
# trigrams ring (bottom->top bit patterns), drawn horizontally around the circle
$trigrams = @(
  @(1,1,1), @(0,1,1), @(1,0,1), @(0,0,1),
  @(1,1,0), @(0,1,0), @(1,0,0), @(0,0,0)
)
$ringR = 232
for ($i = 0; $i -lt 8; $i++) {
  $ang = [Math]::PI * 2 * $i / 8 - [Math]::PI / 2
  $tx = $cx0 + $ringR * [Math]::Cos($ang)
  $ty = $cy0 + $ringR * [Math]::Sin($ang)
  for ($j = 0; $j -lt 3; $j++) {
    $lineY = $ty + (1 - $j) * 15
    Draw-Bar $g $tx $lineY 64 7 $trigrams[$i][$j] 60
  }
}
# taiji
$bBeige = New-Object System.Drawing.SolidBrush($beige)
$bInk = New-Object System.Drawing.SolidBrush($ink)
$g.FillEllipse($bBeige, ($cx0 - $R), ($cy0 - $R), (2 * $R), (2 * $R))
$g.FillPie($bInk, ($cx0 - $R), ($cy0 - $R), (2 * $R), (2 * $R), -90, 180)
$g.FillEllipse($bInk, ($cx0 - $R / 2), ($cy0 - $R), $R, $R)
$g.FillEllipse($bBeige, ($cx0 - $R / 2), $cy0, $R, $R)
$dot = $R / 7
$g.FillEllipse($bBeige, ($cx0 - $dot / 2), ($cy0 - $R / 2 - $dot / 2), $dot, $dot)
$g.FillEllipse($bInk, ($cx0 - $dot / 2), ($cy0 + $R / 2 - $dot / 2), $dot, $dot)
$ringPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(160, 233, 223, 201), 2)
$g.DrawEllipse($ringPen, ($cx0 - $R - 2), ($cy0 - $R - 2), (2 * $R + 4), (2 * $R + 4))
$ringPen.Dispose(); $bBeige.Dispose(); $bInk.Dispose()
Draw-Seal $g
$bmp.Save("$PWD\public\og-image.png", [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose()

# ---------- og-course.png : six yao over mountains ----------
$pair = New-Canvas; $bmp = $pair[0]; $g = $pair[1]
Draw-Wordmark $g 'ONLINE STUDY PROGRAMS'
# layered mountain silhouettes
$mists = @(
  @{ pts = @(@(0, 500), @(260, 360), @(470, 470), @(700, 330), @(960, 480), @(1200, 380), @(1200, 675), @(0, 675)); a = 26 },
  @{ pts = @(@(0, 560), @(200, 470), @(430, 540), @(660, 450), @(900, 545), @(1200, 470), @(1200, 675), @(0, 675)); a = 18 }
)
foreach ($m in $mists) {
  $pp = New-Object System.Drawing.Drawing2D.GraphicsPath
  $p0 = $m.pts[0]
  $pp.AddLine($p0[0], $p0[1], $p0[0], $p0[1])
  for ($i = 1; $i -lt $m.pts.Count; $i++) { $pp.AddLine($m.pts[$i - 1][0], $m.pts[$i - 1][1], $m.pts[$i][0], $m.pts[$i][1]) }
  $pp.CloseFigure()
  $mb = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb($m.a, 233, 223, 201))
  $g.FillPath($mb, $pp); $mb.Dispose(); $pp.Dispose()
}
# hexagram 63 (Jì Jì): bottom->top 1,0,1,0,1,1
$lines = @(1, 0, 1, 0, 1, 1)
$baseX = 380; $baseY = 520
for ($i = 0; $i -lt 6; $i++) {
  Draw-Bar $g $baseX ($baseY - $i * 42) 300 16 $lines[$i] 225
}
Draw-Seal $g
$bmp.Save("$PWD\public\og-course.png", [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose()

# ---------- og-article.png : enso brush circle + trigram ----------
$pair = New-Canvas; $bmp = $pair[0]; $g = $pair[1]
Draw-Wordmark $g 'THE JOURNAL · I CHING READINGS'
$ecx = 600; $ecy = 366; $eR = 168
$rand = New-Object System.Random(7)
for ($k = 0; $k -lt 26; $k++) {
  $rr = $eR + $rand.Next(-7, 8)
  $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb($rand.Next(28, 75), 233, 223, 201), ($rand.Next(22, 40)))
  $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $start = $rand.Next(-30, 18)
  $sweep = 300 + $rand.Next(-26, 30)
  $g.DrawArc($pen, ($ecx - $rr), ($ecy - $rr), (2 * $rr), (2 * $rr), $start, $sweep)
  $pen.Dispose()
}
# trigram ☲ (Li) at centre, low alpha
for ($j = 0; $j -lt 3; $j++) {
  Draw-Bar $g $ecx ($ecy + (1 - $j) * 22) 120 11 @(1,0,1)[$j] 150
}
Draw-Seal $g
$bmp.Save("$PWD\public\og-article.png", [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose()

Get-ChildItem "$PWD\public\og-*.png" | ForEach-Object { "$($_.Name) $($_.Length)" }
