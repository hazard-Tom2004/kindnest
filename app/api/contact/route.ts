import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env["RESEND_API_KEY"];

if (!RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not set in environment variables.");
}

const resend = new Resend(RESEND_API_KEY);

const contacts = {
  "supported-living": { label: "Supported Living", email: "info@kindnestcare.co.uk" },
  "children-contact": { label: "Children Contact Service", email: "contact@kindnestcare.co.uk" },
} as const;

type Service = keyof typeof contacts;

// crude in-memory rate limit — resets on redeploy, fine for low-traffic sites
const submissions = new Map<string, number>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

function isRateLimited(ip: string) {
  const now = Date.now();
  const last = submissions.get(ip) ?? 0;
  if (now - last < WINDOW_MS) return true;
  submissions.set(ip, now);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please wait a moment." }, { status: 429 });
    }

    const body = await req.json();
    const { name, email, phone, message, service } = body;

    if (!name || !email || !message || !service) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (!(service in contacts)) {
      return NextResponse.json({ error: "Invalid service." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    // honeypot field — see form change below
    if (body.website) {
      return NextResponse.json({ ok: true }); // silently accept, don't send
    }

    const contact = contacts[service as Service];

    await resend.emails.send({
      from: "Kindnest Website <enquiries@kindnestcare.co.uk>", // must be a verified domain address
      to: contact.email,
      replyTo: email,
      subject: `${contact.label} enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}