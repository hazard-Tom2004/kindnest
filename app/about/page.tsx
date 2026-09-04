import { Cta, Hero } from "../components"; 
import { heroImages, images } from "../content";
export const metadata = { title: "About us" };
export default function About() {
    return <>
        <Hero eyebrow="About Kindnest Care" title="Specialist social work for children, adults and families" text="Established in 2026, Kindnest Care brings together frontline social work, management and complex intervention experience." images={heroImages.about}>
            <Cta href="/what-we-do">Explore our services</Cta>
        </Hero>
        <section className="section">
            <div className="shell split">
                <div className="glass-copy">
                    <p className="eyebrow">A clear vision</p>
                    <h2>Trust, clarity and a way forward</h2>
                    <p>Kindnest Care was created to provide a professional, compassionate service where people feel heard, respected and supported, even during difficult periods. We bring informed guidance to situations that can otherwise feel overwhelming.</p>
                </div>
                <img src={images.professionals2} className="feature-image" alt="Professionals in conversation" />
            </div>
        </section>
        <section className="section section-tint">
            <div className="shell">
                <div className="section-head">
                    <p className="eyebrow">Our mission</p>
                    <h2>To protect, empower and strengthen</h2>
                    <p>We listen to people, understand their individual circumstances and work alongside them towards positive, safe and sustainable outcomes.</p>
                </div>
                <div className="detail-grid">
                    {[
                        ["Integrity", "Acting honestly, ethically and professionally."],
                        ["Expertise", "Experienced social work knowledge in every case."],
                        ["Compassion", "Understanding people without judgement."],
                        ["Discretion", "Sensitive information treated with the utmost care."],
                        ["Collaboration", "Working constructively with families and professionals."],
                        ["Outcomes", "Focusing on meaningful, sustainable positive change."]
                    ].map(([t, p]) => <div className="detail-card" key={t}><h3>{t}</h3><p>{p}</p></div>)
                    }
                </div>
            </div>
        </section></>
}
