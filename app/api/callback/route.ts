import type { NextRequest } from 'next/server';

export const runtime = 'nodejs';

/**
 * Decap CMS GitHub OAuth 回调：校验 state → 换 access token →
 * 按 Decap 协议 postMessage 回 opener（authorization:github:success:{token,...}）。
 * token 页绝不缓存。
 */

const errorHtml = (message: string) => `<!doctype html>
<html lang="zh-CN"><body style="font-family: sans-serif; padding: 2rem;">
<p>登录失败：${message}</p><p>请关闭本窗口重试。</p></body></html>`;

const successHtml = (token: string) => {
  // token 序列化后内插，避免注入
  const payload = JSON.stringify({ token, provider: 'github' });
  return `<!doctype html><html><body><script>(function(){
  var msg = 'authorization:github:success:' + ${JSON.stringify(payload)};
  function send(origin) {
    if (!window.opener) return;
    window.opener.postMessage(msg, origin);
    window.close();
  }
  // 1) 先发就绪信号；2) 收到 CMS 应答后按其 origin 回传；3) 超时兜底同源回传
  window.addEventListener('message', function (e) {
    if (e.data === 'authorizing:github') send(e.origin);
  });
  window.opener.postMessage('authorizing:github', '*');
  setTimeout(function () { send(window.location.origin); }, 1000);
})();</script></body></html>`;
};

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');
  const state = req.nextUrl.searchParams.get('state');
  const cookieState = req.cookies.get('decap_oauth_state')?.value;
  const noStore = { 'Cache-Control': 'no-store', 'Content-Type': 'text/html; charset=utf-8' };

  if (!code || !state || !cookieState || state !== cookieState) {
    return new Response(errorHtml('state 校验未通过'), { status: 403, headers: noStore });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return new Response(errorHtml('OAuth 未配置（缺少环境变量）'), { status: 500, headers: noStore });
  }

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });
  const tokenJson = (await tokenRes.json()) as {
    access_token?: string;
    error_description?: string;
  };
  if (!tokenJson.access_token) {
    return new Response(errorHtml(tokenJson.error_description ?? '令牌交换失败'), {
      status: 400,
      headers: noStore,
    });
  }

  return new Response(successHtml(tokenJson.access_token), { headers: noStore });
}
