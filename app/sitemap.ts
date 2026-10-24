import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAllSlugs } from "@/lib/destinations";
import { getAllRouteSlugs } from "@/lib/seo-routes";
import { getAllBlogSlugs } from "@/lib/blogs";
import { BUS_SEO_PAGES } from "@/lib/bus-seo-pages";
import { BUS_PAGES_LAST_UPDATED } from "@/lib/bus-seo-shared";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/21-seater-bus-rental-bangalore`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/fleet`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/destinations`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.85 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/taxi-service-bangalore`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const busRoutes: MetadataRoute.Sitemap = BUS_SEO_PAGES.map((p) => ({
    url: `${base}/${p.slug}`,
    lastModified: new Date(BUS_PAGES_LAST_UPDATED),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const destinationRoutes: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${base}/destinations/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  const seoRouteRoutes: MetadataRoute.Sitemap = getAllRouteSlugs().map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...busRoutes, ...destinationRoutes, ...seoRouteRoutes, ...blogRoutes];
}
