import type { NextRequest } from 'next/server';

export const runtime = 'nodejs';

/**
 * Decap CMS GitHub OAuth 入口：302 → GitHub 授权页。
 * state 写 HttpOnly cookie，回调时校验防 CSRF。
 */
export async function GET(req: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return new Response('OAuth 未配置：缺少 GITHUB_CLIENT_ID 环境变量', { status: 500 });
  }
  const origin = req.nextUrl.origin;
  const state = crypto.randomUUID();
  const qs = new URLSearchParams({
    client_id: clientId,
    redirect_uri: `${origin}/api/callback`,
    scope: 'repo', // 忽略 Decap 传入的 scope，统一申请仓库读写
    state,
  });
  return new Response(null, {
    status: 302,
    headers: {
      Location: `https://github.com/login/oauth/authorize?${qs}`,
      'Set-Cookie': `decap_oauth_state=${state}; Path=/api/callback; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
    },
  });
}
