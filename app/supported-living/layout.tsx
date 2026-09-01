import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kindnest Care | Supported Living",
  description:
    "Safe, high-quality and person-centred supported living services for adults aged 18 and over with learning disabilities and autism.",
};

export default function SupportedLivingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
