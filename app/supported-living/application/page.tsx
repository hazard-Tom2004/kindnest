import { ApplicationForm } from "../application-form";

export const metadata = { title: "Apply to work with us" };

export default function SupportedLivingApplication() {
  return <><section className="application-hero"><div className="shell"><p className="eyebrow">Careers at Kindnest Care</p><h1>Build a career that helps people thrive.</h1><p>Complete the screening form below to apply for a Supported Living role. Please do this before sending your CV and application letter.</p></div></section><main className="application-section"><div className="shell"><ApplicationForm /></div></main></>;
}
