"use client";
import { useState } from "react";

import { Carousel, Cta, Hero } from "../components";
import { heroImages, images, slides } from "../content";

type ServiceCardProps = {
    index: number;
    title: string;
    summary: string;
    details: string[];
};

type Service = Omit<ServiceCardProps, "index">;

const services: Service[] = [
    {
        title: "Personalised Support and Care",
        summary: "Individualised plans built around each person's goals and abilities.",
        details: [
            "Support plans designed around goals, abilities and preferences",
            "Delivered in partnership with individuals, families and professionals",
            "Flexible, person-centred support that promotes independence",
        ],
    },
    {
        title: "Support with Daily Living",
        summary: "Practical, everyday support delivered with dignity.",
        details: [
            "Personal care (where required)",
            "Meal planning and preparation",
            "Personal hygiene and grooming",
            "Laundry and housekeeping",
            "Shopping and household management",
        ],
    },
    {
        title: "Independent Living Skills",
        summary: "Building the skills to live as independently as possible.",
        details: [
            "Cooking and nutrition",
            "Budgeting and money management",
            "Household tasks",
            "Time management",
            "Using public transport",
            "Accessing local services",
        ],
    },
    {
        title: "Health and Wellbeing",
        summary: "Supporting physical, emotional and mental health.",
        details: [
            "Supporting attendance at healthcare appointments",
            "Medication support where required",
            "Encouraging healthy eating and exercise",
            "Promoting emotional wellbeing",
            "Monitoring health needs and responding appropriately",
        ],
    },
    {
        title: "Community Participation",
        summary: "Helping people become active members of their community.",
        details: [
            "Access to education and training",
            "Seeking employment or volunteering opportunities",
            "Participating in social and recreational activities",
            "Building and maintaining meaningful relationships",
            "Reducing social isolation",
        ],
    },
    {
        title: "Positive Behaviour and Emotional Support",
        summary: "Compassionate, trauma-informed support for positive outcomes.",
        details: [
            "Positive Behaviour Support (PBS)",
            "Emotional regulation strategies",
            "Anxiety management",
            "Trauma-informed approaches",
            "Positive risk-taking that encourages independence",
        ],
    },
    {
        title: "Safeguarding and Risk Management",
        summary: "Robust safeguarding that respects rights, dignity and choice.",
        details: [
            "Proactive risk management systems",
            "Procedures that protect without restricting unnecessarily",
            "Respect for individual rights, dignity and choices",
        ],
    },
    {
        title: "Advocacy and Empowerment",
        summary: "Making sure every voice is heard in decisions about their life.",
        details: [
            "Support to express wishes and preferences",
            "Access to independent advocacy services where needed",
            "Ensuring rights are respected in every decision",
        ],
    },
    {
        title: "Flexible 24-Hour Support",
        summary: "Staffing levels matched to assessed need — including 24-hour care.",
        details: [
            "Support level based on individual assessment",
            "Available 24-hour staffing where required",
            "Structured to maximise independence, not limit it",
        ],
    },
];

function ServiceCard({ index, title, summary, details }: ServiceCardProps) {
    const [open, setOpen] = useState(false);
    return (
        <article
            className="support-card"
            data-open={open}
            tabIndex={0}
            role="button"
            onClick={() => setOpen((o) => !o)}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpen((o) => !o);
                }
            }}
            aria-expanded={open}
        >
            <div className="support-card-head">
                <span className="support-card-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="support-card-toggle" aria-hidden="true">{open ? "−" : "+"}</span>
            </div>
            <h3>{title}</h3>
            {open ? (
                <ul className="support-card-details">
                    {details.map((d) => <li key={d}>{d}</li>)}
                </ul>
            ) : (
                <p className="support-card-summary">{summary}</p>
            )}
        </article>
    );
}

export default function SupportedLiving() {
    return <>
        <Hero eyebrow="Supported living" title="Safe homes. Real independence. Genuine connection." text="Safe, high-quality and person-centred supported living services for adults aged 18 and over with learning disabilities and autism." images={heroImages.supportedLiving}>
            <Cta href="/contact?service=supported-living">Enquire now</Cta>
        </Hero>

        <section className="section">
            <div className="shell split">
                <div className="glass-copy">
                    <p className="eyebrow">Person-centred support</p>
                    <h2>Support built around the person, not the service</h2>
                    <p>
                        At Kindnest Care Limited, we provide high-quality supported living services for adults aged 18 and over with learning disabilities and autism. Our support is tailored to each individual's unique needs, preferences, strengths, and aspirations, empowering them to live independently while enjoying the safety and comfort of their own home.
                    </p>
                    <div className="pills">
                        <span>Individual choice</span>
                        <span>Life skills</span>
                        <span>Community life</span>
                    </div>
                </div>
                <img src={images.supportedliving2} alt="Support worker walking with an adult" className="feature-image" />
            </div>
        </section>

        <section className="section section-tint">
            <div className="shell">
                <div className="section-head">
                    <p className="eyebrow">Our services</p>
                    <h2>Nine areas of support, one plan around you</h2>
                    <p className="support-grid-hint">Tap a card to see the full detail.</p>
                </div>
                <div className="support-grid">
                    {services.map((s, i) => (
                        <ServiceCard key={s.title} index={i} {...s} />
                    ))}
                </div>
            </div>
        </section>

        <section className="section section-tint">
            <div className="shell">
                <Carousel slides={slides} />
            </div>
        </section>

        <section className="section">
            <div className="shell detail-grid">
                <article className="detail-card">
                    <h3>Who it is for</h3>
                    <ul>
                        <li>Adults aged 18 and over</li>
                        <li>People with learning disabilities</li>
                        <li>Autistic adults with sensory and communication needs</li>
                        <li>People transitioning from children's services or residential care</li>
                    </ul>
                </article>
                <article className="detail-card">
                    <h3>Making a referral</h3>
                    <p>Contact us to discuss the person's needs, preferred location and the kind of support that would help them thrive.</p>
                    <div style={{ marginTop: 22 }}>
                        <Cta href="/contact?service=supported-living">Start a referral</Cta>
                    </div>
                </article>
            </div>
        </section>
    </>
}