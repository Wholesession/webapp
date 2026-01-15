import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = (process.env.NEXT_PUBLIC_APP_URL || 'https://wholesession.com').replace(/\/$/, '')

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/privacy', '/terms', '/checkout/success'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
