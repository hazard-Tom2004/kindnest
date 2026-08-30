"use client";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Heart, ShieldCheck, Users, Home, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export function Rings() {
    return <svg className="hero-rings" viewBox="0 0 640 640" fill="none" aria-hidden="true">
        <circle cx="480" cy="160" r="60" stroke="#B9863C" strokeWidth="1" />
        <circle cx="480" cy="160" r="120" stroke="#1F3A34" strokeWidth="1" />
        <circle cx="480" cy="160" r="180" stroke="#1F3A34" strokeWidth="1" />
        <circle cx="480" cy="160" r="240" stroke="#A9BFAE" strokeWidth="1" />
        <circle cx="480" cy="160" r="300" stroke="#A9BFAE" strokeWidth=".6" />
    </svg>;
}
export function Cta({ href, children, ghost = false }: { href: string; children: ReactNode; ghost?: boolean }) {
    return <Link href={href} className={`cta ${ghost ? "cta-ghost" : ""}`}>
        {children}<ArrowRight size={17} />
    </Link>;
}
export function Hero({ eyebrow, title, text, images, children }: { eyebrow: string; title: string; text: string; images: readonly string[]; children?: ReactNode }) {
    const [activeImage, setActiveImage] = useState(0);
    useEffect(() => {
        if (images.length < 2) return;
        const timer = window.setInterval(() => setActiveImage(current => (current + 1) % images.length), 6500);
        return () => window.clearInterval(timer);
    }, [images]);
    return <section className="hero">
        {images.map((image, index) => <img key={image} src={image} alt="" className="hero-image" style={{ opacity: index === activeImage ? 1 : 0 }} />)}
        <div className="hero-shade" />
        <Rings />
        <div className="shell hero-content">
            <p className="eyebrow-home">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="hero-text">{text}</p>
            {children}
        </div>
    </section>;
}
export function Reveal({ children, className = "" }:
    { children: ReactNode; className?: string }) {
    return <div className={`reveal ${className}`}>
        {children}
    </div>;
}
export function Carousel({ slides }:
    { slides: { src: string; title: string; text: string }[] }) {
    const [i, setI] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setI(x => (x + 1) % slides.length), 6000);
        return () =>
            clearInterval(id)
    }, [slides.length]);
    const s = slides[i] ?? slides[0];
    if (!s) return null;
    return <section className="carousel">
        <img src={s.src} alt="" />
        <div className="carousel-copy">
           
            <h3>{s.title}</h3>
            <p>{s.text}</p>
        </div>
        <div className="carousel-controls">
            <button onClick={() => setI((i - 1 + slides.length) % slides.length)} aria-label="Previous slide">
                <ChevronLeft />
            </button>
            <button onClick={() => setI((i + 1) % slides.length)} aria-label="Next slide">
                <ChevronRight />
            </button>
        </div>
    </section>;
}
const icons = [Users, ShieldCheck, Sparkles, Heart, Home];
export function ServiceCards({ items }:
    { items: readonly (readonly [string, string, string])[] }) {
    return <div className="service-grid">{items.map(([number, title, text], i) => {
        const Icon = icons[i] ?? Heart;
        return <article className="service-card" key={number}>
            <span>{number}</span>
            <Icon size={22} />
            <h3>{title}</h3>
            <p>{text}</p>
            <Link href="/what-we-do" aria-label={`Learn about ${title}`}>
                <ArrowRight size={19} />
            </Link>
        </article>
    })}
    </div>;
}
export function OfferingCards() {
    const cards =
        [{
            title: "Supported living",
            copy: "A real home, tailored support and independence at each person’s pace.",
            image: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008798/hands-drawing-1_rtqn5k.jpg",
            href: "/supported-living",
            perks: [
                "Adults aged 18+",
                "Learning disabilities & autism",
                "Individual support plans",
                "Everyday independence",
            ]
        },
        {
            title: "Children contact",
            copy: "Calm, supported family time that keeps children’s wellbeing at the centre.",
            image: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008784/pexels-pavel-danilyuk-8422262_bnti7c.jpg",
            href: "/children-contact-service",
            perks: [
                "Supervised contact",
                "Supported handovers",
                "Child-led planning",
                "Clear, factual records"
            ]
        }];
    return <div className="offering-grid">{cards.map(card => <article className="offering-card" key={card.title}>
        <img src={card.image} alt="" />
        <div className="offering-overlay">
            <p className="eyebrow">Kindnest service</p>
            <h3>{card.title}</h3>
            <p>{card.copy}</p>
            <ul>
                {card.perks.map(perk => <li key={perk}>{perk}</li>)}
            </ul>
            <Cta href={card.href}>Learn more</Cta>
        </div>
    </article>)}</div>
}
