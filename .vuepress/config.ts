import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    base: '/webrtc/',
    lang: 'zh-CN',
    title: 'Webman开放平台',
    description: '让Webman开发更简单',
    themeConfig: {
        logo: '/images/logo.jpg',
        theme: 'bar',
        navbar: [
            { text: 'Home', link: '/' },
        ],
        repo: 'https://github.com/yansongda/pay',
        docsRepo: 'https://github.com/yansongda/pay-site',
        docsBranch: 'master',
        lastUpdated: true,
        sidebarDepth: 2,
        sidebar: {
            '/docs/v1': [
                {
                    text: '快速入门',
                    children: [
                        '/docs/v1/quick-start/overview.md',
                        '/docs/v1/quick-start/authentication.md',
                    ]
                },
                {
                    text: '基础管理',
                    children: [
                        '/docs/v1/basic/user.md',
                        '/docs/v1/basic/api.md',
                        '/docs/v1/basic/resource.md',
                    ]
                }
            ]
        }
    },
})
