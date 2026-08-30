import { Carousel, Cta, Hero, OfferingCards } from "./components";
import { images, heroImages, slides } from "./content";
export default function HomePage() {
    return <>
        <Hero eyebrow="Kindnest Care Limited" title="Supporting people. Strengthening families. Creating positive change." text="Specialist social work for children, adults and families — and person-centred supported living for adults with learning disabilities and autism." images={heroImages.home}>
            <Cta href="/contact">Make a referral</Cta>
        </Hero>
        <section className="section">
            <div className="shell">
                <div className="section-head">
                    <p className="eyebrow">How we help</p>
                    <h2>Two specialist services, one caring approach</h2>
                    <p>Explore Kindnest’s supported living and children contact services, each shaped around safety, dignity and meaningful progress.</p>
                </div><OfferingCards /></div>
        </section>
        <section className="section section-tint">
            <div className="shell"><Carousel slides={slides} />
            </div>
        </section>
        <section className="section">
            <div className="shell split">
                <img className="feature-image" src={images.reading} alt="An adult reading with a child" />
                <div className="glass-copy">
                    <p className="eyebrow">Our commitment</p>
                    <h2>Where expertise meets human understanding</h2>
                    <p>We look beyond the presenting issue to relationships, strengths, vulnerabilities, risks and aspirations — creating support that is meaningful as well as professionally informed.</p>
                    <div className="pills">
                        <span>Integrity</span>
                        <span>Compassion</span>
                        <span>Discretion</span>
                        <span>Collaboration</span>
                        <span>Outcomes</span>
                    </div>
                    <div style={{ marginTop: 28 }}>
                        <Cta href="/about">About Kindnest</Cta>
                    </div>
                </div>
            </div>
        </section>
    </>
}
