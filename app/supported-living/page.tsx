import { Carousel, Cta, Hero } from "../components"; 
import { heroImages, images, slides } from "../content";
export const metadata = { title: "Supported living" };
export default function SupportedLiving() {
    return <>
        <Hero eyebrow="Supported living" title="Safe homes. Real independence. Genuine connection." text="Safe, high-quality and person-centred supported living services for adults aged 18 and over with learning disabilities and autism." images={heroImages.supportedLiving}>
            <Cta href="/contact?service=supported-living">Enquire now</Cta>
        </Hero>
        <section className="section">
            <div className="shell split">
                <div className="glass-copy">
                    <p className="eyebrow">What makes us different</p>
                    <h2>A home, not a placement</h2>
                    <p>We combine professional excellence with genuine human connection — building homes where people feel respected, understood and empowered to thrive.</p>
                    <div className="pills">
                        <span>Individual support plans</span>
                        <span>Real-life skills</span>
                        <span>Community connection</span>
                        <span>Trained staff</span>
                    </div>
                </div>
                <img src={images.supportedliving2} alt="Support worker walking with an adult" className="feature-image" />
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
                        <li>People transitioning from children’s services or residential care</li>
                    </ul>
                </article>
                <article className="detail-card">
                    <h3>Making a referral</h3>
                    <p>Contact us to discuss the person’s needs, preferred location and the kind of support that would help them thrive.</p>
                    <div style={{ marginTop: 22 }}>
                        <Cta href="/contact?service=supported-living">Start a referral</Cta>
                    </div>
                </article>
            </div>
        </section></>
}
