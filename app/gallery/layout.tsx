import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kindnest Care | Gallery",
  description:
    "View our current Space",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
