import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/privacy', '/terms'],
        },
        sitemap: 'https://www.wholesession.com/sitemap.xml',
    }
}
