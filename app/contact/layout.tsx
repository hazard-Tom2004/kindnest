import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kindnest Care | Contact",
  description:
    "Choose the service you need and your enquiry will be addressed directly to the right Kindnest team.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
