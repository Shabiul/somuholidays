import type { Metadata } from "next";
import BusSeoPage from "@/components/BusSeoPage/BusSeoPage";
import { getBusPageBySlug } from "@/lib/bus-seo-pages";
import { SITE } from "@/lib/site";

const page = getBusPageBySlug("21-seater-mini-bus-rental");

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  alternates: { canonical: "/21-seater-mini-bus-rental" },
  keywords: [page.keyword],
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: `${SITE.url}/21-seater-mini-bus-rental`,
    type: "website",
    images: [{ url: `${SITE.url}/21-seater-luxury-ac-bus-bangalore.jpeg`, width: 1200, height: 675, alt: "21 seater AC bus for hire in Bangalore - Somu Holidays" }],
  },
  twitter: { card: "summary_large_image", title: page.metaTitle, description: page.metaDescription },
};

export default function Page() {
  return <BusSeoPage page={page} />;
}
