import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kindnest Care | What we do",
  description:
    "Kindnest was created to provide care with clarity, safety and warmth",
};

export default function WhatWeDoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
