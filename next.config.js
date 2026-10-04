/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // /admin → 静态 CMS 引导页 public/admin/index.html（Decap 官方标准形态）：
  // 相对路径 config.yml 在 /admin/index.html 下解析为 /admin/config.yml，避免 404。
  async redirects() {
    return [{ source: '/admin', destination: '/admin/index.html', permanent: false }];
  },
  experimental: {
    // Next 14.2 中 outputFileTracingIncludes 仍归属 experimental（顶层键会被忽略并告警）。
    // 动态路由命中未知 slug 时会在 serverless 运行时渲染（返回 404），
    // 此时 lib 加载器仍会读取内容目录，需把 content/ 打进函数文件追踪：
    outputFileTracingIncludes: {
      '/articles/[slug]': ['./content/**/*'],
      '/zh/articles/[slug]': ['./content/**/*'],
      '/course/[slug]': ['./content/**/*'],
      '/zh/course/[slug]': ['./content/**/*'],
    },
  },
};
module.exports = nextConfig;
