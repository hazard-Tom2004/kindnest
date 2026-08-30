import { Mail, Phone, Clock } from "lucide-react"; import { Hero } from "../components"; import { heroImages } from "../content"; import { ContactForm } from "./contact-form";
export const metadata = { title: "Contact & referrals" };
export default async function Contact({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
    const { service } = await searchParams;
    const initialService = service === "children-contact" ? "children-contact" : "supported-living";
    return <>
        <Hero eyebrow="Contact" title="Tell us what you need" text="Choose the service you need and your enquiry will be addressed directly to the right Kindnest team." images={heroImages.contact} />
        <section className="section section-tint">
            <div className="shell contact-grid">
                <div>
                    <p className="eyebrow">Get in touch</p>
                    <h2 style={{ fontSize: "clamp(2.7rem,5vw,4.6rem)", margin: "12px 0 22px" }}>We’re here to listen</h2>
                    <div className="contact-list">
                        <a href="tel:01992714626"><Phone size={19} />01992 714626</a>
                        <a href="mailto:info@kindnestcare.co.uk">
                            <Mail size={19} />Supported Living: info@kindnestcare.co.uk</a>
                        <a href="mailto:contact@kindnestcare.co.uk">
                            <Mail size={19} />Children Contact: contact@kindnestcare.co.uk</a>
                        <p style={{ display: "flex", gap: 10, alignItems: "center", fontWeight: 700 }}><Clock size={19} />Mon–Fri, 9am–5pm</p>
                    </div>
                </div>
                <ContactForm initialService={initialService} />
            </div>
        </section></>
}
