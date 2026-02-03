import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://zerovolabs.in"

    // Core pages
    const routes = [
        "",
        "/about",
        "/contact",
        "/projects",
        "/services",
        "/services/ai-automation",
        "/services/ai-web-development",
        "/services/custom-ai",
        "/services/saas-development",
        "/services/ai-orchestration",
        "/locations/hyderabad",
        "/privacy",
        "/terms",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }))

    return routes
}
