import type { Metadata } from "next";
import "./globals.css";
import "./offerings.css";
import "./brand-logo.css";
import "./hero-carousel.css";
import "./gallery.css";
import "./application-form.css";
import "./careers.css";
import { SiteFooter, SiteHeader } from "./site-shell";
import { PageTransition } from "./motion";

export const metadata: Metadata = {
  title: { default: "Kindnest Care | Specialist Social Work", template: "%s | Kindnest Care" },
  description: "Professional, compassionate specialist social work and supported living services for children, adults and families.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><main><PageTransition>{children}</PageTransition></main><SiteFooter /></body></html>;
}
