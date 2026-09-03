"use client";
import { useState, type FormEvent } from "react";

const contacts = {
  "supported-living": { label: "Supported Living", email: "info@kindnestcare.co.uk" },
  "children-contact": { label: "Children Contact Service", email: "contact@kindnestcare.co.uk" },
} as const;

type Service = keyof typeof contacts;

export function ContactForm({ initialService = "supported-living" }: { initialService?: Service }) {
  const [service, setService] = useState<Service>(initialService);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const contact = contacts[service];

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const d = new FormData(e.currentTarget);
    const payload = {
      name: d.get("name"),
      email: d.get("email"),
      phone: d.get("phone"),
      message: d.get("message"),
      service,
      website: d.get("website"), // honeypot, should always be empty
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <h2>{contact.label} enquiry</h2>
      <p style={{ margin: "10px 0 24px", color: "var(--muted)" }}>
        Your enquiry will be addressed to <strong>{contact.email}</strong>. Please avoid detailed personal or case-sensitive information.
      </p>

      {status === "sent" ? (
        <p role="status">Thank you — your enquiry has been sent to {contact.email}. We'll be in touch soon.</p>
      ) : (
        <>
          <div className="service-switch" aria-label="Choose service">
            <button type="button" className={service === "supported-living" ? "active" : ""} onClick={() => setService("supported-living")}>
              Supported Living
            </button>
            <button type="button" className={service === "children-contact" ? "active" : ""} onClick={() => setService("children-contact")}>
              Children Contact
            </button>
          </div>

          <div className="form-grid">
            <label>Full name<input required name="name" autoComplete="name" /></label>
            <label>Email address<input required type="email" name="email" autoComplete="email" /></label>
            <label>Phone number<input name="phone" type="tel" autoComplete="tel" /></label>
            <label>Service
              <select value={service} onChange={e => setService(e.target.value as Service)}>
                <option value="supported-living">Supported Living</option>
                <option value="children-contact">Children Contact Service</option>
              </select>
            </label>
          </div>

          <label style={{ display: "block", marginTop: 16 }}>
            How can we help?<textarea required name="message" />
          </label>

          {/* honeypot — hidden from real users, bots fill it in */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}
            aria-hidden="true"
          />

          {status === "error" && (
            <p role="alert" style={{ color: "crimson", marginTop: 12 }}>{errorMsg}</p>
          )}

          <button className="cta" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send enquiry"}
          </button>
        </>
      )}
    </form>
  );
}