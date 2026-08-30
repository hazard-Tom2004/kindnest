import { Cta, Hero, OfferingCards } from "../components"; 
import { heroImages } from "../content";
export const metadata={title:"What we do"};
export default function WhatWeDo(){
    return <>
    <Hero eyebrow="What we do" title="Two distinct services, thoughtfully delivered" text="Kindnest is built around two specialist services: person-centred Supported Living for adults, and a child-led Children Contact Service for families navigating separation or professional involvement." images={heroImages.whatWeDo}/>
    <section className="section">
        <div className="shell">
            <div className="section-head">
                <p className="eyebrow">Our two services</p>
                <h2>Care with clarity, safety and warmth</h2>
                {/* <p>Each service has its own experienced approach, contact route and dedicated team support.</p> */}
            </div>
            <OfferingCards/>
        </div>
    </section>
    <section className="section section-tint">
        <div className="shell detail-grid">
            <article className="detail-card">
                <h3>Supported Living</h3>
                <p>High-quality homes and support for adults aged 18+ with learning disabilities and autism, designed around individual goals, routines and independence.</p>
                <div style={{ marginTop: 22 }}>
                    <Cta href="/supported-living">Explore supported living</Cta>
                </div>
            </article>
            <article className="detail-card">
                <h3>Children Contact Service</h3>
                <p>Supervised contact, supported contact and handovers that put a child’s wellbeing first, helping families maintain important relationships safely.</p>
                <div style={{ marginTop: 22 }}>
                    <Cta href="/children-contact-service">Explore children contact</Cta>
                </div>
            </article>
        </div>
    </section>
</>
}
