import { Cta, Hero } from "../components"; 
import { heroImages, images } from "../content";
export const metadata = { title: "Children contact service" };
const services = [
    ["Children & Families Social Work", images.hands, ["Family and parenting assessments", "Family group conferences", "Safeguarding support", "Section 7 reports", "Family relationship work", "Support around children with trauma and adversity", "Support for families involved with children's social care", "Professional consultations for parents and carers"]],
    ["Safeguarding & Risk", images.childCare2, ["Safeguarding consultations", "Risk identification and safety planning", "Professional safeguarding advice", "Child and adult protection support", "Domestic abuse-related family support", "Neglect and vulnerability assessments", "Professional reflective discussions", "Safeguarding training and awareness"]],
    ["Parenting & Family Support", images.garden, ["Parenting guidance", "Understanding children's behaviour", "Trauma-informed parenting", "SEN and neurodevelopmental support", "Managing family conflict", "Building Positive parent-child relationships, routines, boundaries and emotional regulation", "Preparing families for changes in circumstances"]],
    ["Adult Social Work Services", images.childCare3, ["Adult social care assessments", "Needs and strengths assessments", "Safeguarding support", "Advocacy and risk assessment", "Care and support planning", "Family relationship support", "Support with transitions", "Community-based intervention", "Signposting and multi-agency coordination"]],
    ["Independent Social Work & Consultancy", images.hero, ["Independent social work assessments", "Case consultation and reviews", "Standard of care reviews", "Safeguarding consultations", "Quality assurance and audits", "Report writing", "Social work consultancy"]]
] as const;
export default function ChildrenContact() {
    return <>
        <Hero eyebrow="Children contact service" title="Safe, child-led family time" text="Specialist social work services for children, adults and families, including supervised contact, supported contact and handovers." images={heroImages.childrenContact}>
            <Cta href="/contact?service=children-contact">Discuss a referral</Cta>
        </Hero>
        <section className="section">
            <div className="shell split">
                <img src={images.childCare} alt="Family walking through a park" className="feature-image" />
                <div className="glass-copy">
                    <p className="eyebrow">How it works</p>
                    <h2>Structured, observed and carefully recorded</h2>
                    <p>Every session is planned in advance, supported by an experienced practitioner and recorded factually. We create calm, welcoming settings where children can feel safe, heard and at ease.</p>
                    <div className="pills">
                        <span>Supervised contact</span>
                        <span>Supported contact</span>
                        <span>Neutral handovers</span>
                        <span>Child-centred planning</span>
                    </div>
                </div>
            </div>
        </section>
        <section className="section section-tint">
            <div className="shell">
                <div className="section-head">
                    <p className="eyebrow">Specialist social work</p>
                    <h2>Support that extends around the whole family</h2>
                    <p>Hover or focus a service to reveal the kind of practical, professional support available through Kindnest.</p>
                </div>
                <div className="contact-service-grid">{services.map(([title, image, perks]) => <article className="contact-service-card" key={title}>
                    <img src={image} alt="" />
                    <div>
                        <h3>{title}</h3>
                        <ul>
                            {perks.map(perk => <li key={perk}>{perk}</li>)}
                        </ul>
                    </div>
                </article>)}
                </div>
                </div>
                
                </section>
                <section className="section">
                    <div className="shell detail-grid">
                        <article className="detail-card">
                            <h3>Referral routes</h3>
                            <ul>
                                <li>Family courts and legal representatives</li>
                                <li>Children’s social care and local authorities</li>
                                <li>Parents, guardians and kinship carers</li>
                                <li>Independent social workers and Cafcass-involved cases</li>
                            </ul>
                        </article>
                        <article className="detail-card">
                            <h3>Safeguarding and standards</h3>
                            <p>We work in line with recognised child-contact standards. Practitioners hold enhanced DBS clearance, follow safeguarding and confidentiality policies, and receive regular professional supervision.</p>
                            <div className="pills">
                                <span>NACCC-aligned practice</span>
                                <span>Enhanced DBS checked</span>
                                <span>Safeguarding policy</span>
                                <span>Fully insured</span>
                            </div>
                            <div style={{ marginTop: 22 }}>
                                <Cta href="/contact?service=children-contact">Contact children contact</Cta>
                            </div>
                        </article>
                    </div>
                </section></>
}
