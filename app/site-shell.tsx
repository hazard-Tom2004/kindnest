"use client";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { images, accreditations } from "./content";
const links = [
    ["/", "Home"],
    ["/about", "About us"],
    ["/what-we-do", "What we do"],
    ["/supported-living", "Supported living"],
    ["/children-contact-service", "Children contact"],
    ["/gallery", "Gallery"],
    ["/contact", "Contact"]
] as const;
export function SiteHeader() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const update = () => setScrolled(window.scrollY > 16);
        update(); window.addEventListener("scroll", update,
            { passive: true });
        return () =>
            window.removeEventListener("scroll", update);
    },
        []);
    return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="island">
            <Link href="/" className="brand" aria-label="Kindnest Care home">
                <img className="brand-logo" src={images.logo} alt="Kindnest logo" />

            </Link>
            <nav className="desktop-nav" aria-label="Primary">{links.slice(0, 6).map(([href, label]) =>
                <Link key={href} href={href}>{label}</Link>)}
                <Link className="nav-cta" href="/contact">Make a referral <ArrowUpRight size={15} /></Link>
            </nav>
            <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X /> : <Menu />}
            </button>
        </div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">{links.map(([href, label]) =>
            <Link onClick={() => setOpen(false)} key={href} href={href}>{label}</Link>)}</nav>}
    </header>;
}
export function SiteFooter() {
    return <footer className="footer">
        <div className="shell footer-grid">
            <div className="footer-branding">
                <Link href="/" aria-label="Kindnest Care home" className="footer-logo-link">
                    <img className="footer-logo" src={images.logo} alt="Kindnest logo" />
                </Link>
                <p>Professional expertise. Compassionate practice. Positive change.</p>
            </div>
            <div>
                <p className="footer-label">Explore</p>
                {links.slice(1).map(([href, label]) =>
                    <Link key={href} href={href}>{label}</Link>)}
            </div>
            <div>
                <p className="footer-label">Get in touch</p>
                <a href="tel:01992714626"><Phone size={15} />01992 714626</a>
                <a href="mailto:info@kindnestcare.co.uk"><Mail size={15} />Supported Living: info@kindnestcare.co.uk</a>
                <a href="mailto:contact@kindnestcare.co.uk"><Mail size={15} />Children Contact: contact@kindnestcare.co.uk</a>
                <p className="footer-label">Opening Hours</p>
                <p>Mon - Fri: 9:00 - 17:00<br />Saturday and Sunday:<br />Emergencies Only<br />Referrals accepted nationwide. </p>
            </div>
        </div>

        <div className="footer-accreditations">
    <div className="shell footer-accreditations-row">
        {accreditations.map((item) =>
            <img key={item.src} src={item.src} alt={item.alt} title={item.title} className="footer-accreditation-logo" />
        )}
    </div>
</div>

        <div className="shell footer-bottom">
            © {new Date().getFullYear()} Kindnest Care Limited <span>Designed with care · All Rights Reserved</span>
        </div>
    </footer>;
}
