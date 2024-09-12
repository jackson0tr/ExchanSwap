import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots{
    const baseUrl = 'https://exchanswap.com'

    return{
        rules: {
            userAgent: '*',
            allow: ["/", '/posts', '/about', '/privacy', '/faq', '/profile'],
            disallow: []
        },
        sitemap: `${baseUrl}/sitemap.xml`
    }
}