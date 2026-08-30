"use client";
import { useState, type FormEvent } from "react";
const contacts = { "supported-living": { label: "Supported Living", email: "info@kindnestcare.co.uk" }, "children-contact": { label: "Children Contact Service", email: "contact@kindnestcare.co.uk" } } as const;
type Service = keyof typeof contacts;
export function ContactForm({ initialService = "supported-living" }: { initialService?: Service }) {
    const [service, setService] = useState<Service>(initialService);
    const [sent, setSent] = useState(false);
    const contact = contacts[service];
    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const d = new FormData(e.currentTarget); window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`${contact.label} enquiry`)}&body=${encodeURIComponent(`Name: ${d.get("name")}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone")}\n\n${d.get("message")}`)}`; setSent(true)
    }
    return <form className="form" onSubmit={submit}>
        <h2>{contact.label} enquiry</h2>
        <p style={{ margin: "10px 0 24px", color: "var(--muted)" }}>Your enquiry will be addressed to <strong>{contact.email}</strong>. Please avoid detailed personal or case-sensitive information.</p>
        {sent ? <p role="status">Your email client should now be open with an enquiry addressed to {contact.email}.</p> : <>
            <div className="service-switch" aria-label="Choose service">
                <button type="button" className={service === "supported-living" ? "active" : ""} onClick={() => setService("supported-living")}>Supported Living</button>
                <button type="button" className={service === "children-contact" ? "active" : ""} onClick={() => setService("children-contact")}>Children Contact</button>
            </div>
            <div className="form-grid">
                <label>Full name<input required name="name" autoComplete="name" /></label>
                <label>Email address<input required type="email" name="email" autoComplete="email" /></label>
                <label>Phone number<input name="phone" type="tel" autoComplete="tel" />
                </label>
                <label>Service<select value={service} onChange={e => setService(e.target.value as Service)}>
                    <option value="supported-living">Supported Living</option>
                    <option value="children-contact">Children Contact Service</option>
                </select>
                </label>
            </div>
            <label style={{ display: "block", marginTop: 16 }}>How can we help?<textarea required name="message" /> </label>
            <button className="cta" type="submit">Send enquiry</button>
        </>}
    </form>
}
