import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kindnest Care | About",
  description:
    "Kindnest was created to provide a professional, compassionate service where people feel heard, respected and supported, even during difficult periods. We bring informed guidance to situations that can otherwise feel overwhelming.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
