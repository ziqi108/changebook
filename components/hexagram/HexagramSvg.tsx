'use client';

export function HexagramSvg({
  lines,
  size = 240,
  color = '#0E1419',
}: {
  lines: ('yang' | 'yin')[];
  size?: number;
  color?: string;
  delay?: number;
}) {
  const width = size;
  const height = size * 1.5;
  const padY = height * 0.08;
  const padX = width * 0.1;
  const lineGap = (height - padY * 2) / 6;
  const lineLen = width - padX * 2;
  const stroke = Math.max(3, size * 0.016);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="block"
    >
      {lines.map((kind, i) => {
        const y = padY + lineGap * i + lineGap * 0.5;

        if (kind === 'yang') {
          return (
            <line
              key={i}
              x1={padX}
              y1={y}
              x2={padX + lineLen}
              y2={y}
              stroke={color}
              strokeWidth={stroke}
              strokeLinecap="round"
            />
          );
        }
        const gap = lineLen * 0.12;
        const mid = padX + lineLen / 2;
        return (
          <g key={i}>
            <line
              x1={padX}
              y1={y}
              x2={mid - gap}
              y2={y}
              stroke={color}
              strokeWidth={stroke}
              strokeLinecap="round"
            />
            <line
              x1={mid + gap}
              y1={y}
              x2={padX + lineLen}
              y2={y}
              stroke={color}
              strokeWidth={stroke}
              strokeLinecap="round"
            />
          </g>
        );
      })}
    </svg>
  );
}
