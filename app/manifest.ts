import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Zerovo Labs',
        short_name: 'Zerovo Labs',
        description: 'AI Automation & Custom Software Development',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a1929',
        theme_color: '#0a1929',
        icons: [
            {
                src: '/icon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
            {
                src: '/apple-icon.png',
                type: 'image/png',
                sizes: '180x180',
            },
            {
                src: '/favicon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            }
        ],
    }
}
