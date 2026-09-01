import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kindnest Care | Children Contact Service",
  description:
    "Specialist social work services for children, adults and families, including supervised contact, supported contact and handovers.",
};

export default function ChildrenContactServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
