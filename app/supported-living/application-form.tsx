"use client";

import { useState, type FormEvent } from "react";

const yesNo = ["Yes", "No"] as const;
const experienceOptions = ["Less than 1 year", "1–2 years", "3–5 years", "6–10 years", "10+ years"];
const hoursOptions = ["Full-time", "Part-time", "Bank / flexible", "Any available hours"];

function YesNo({ name, label }: { name: string; label: string }) {
  return <fieldset className="application-choice"><legend>{label}</legend><div>{yesNo.map(option => <label key={option}><input required type="radio" name={name} value={option} /> <span>{option}</span></label>)}</div></fieldset>;
}

function CheckList({ title, name, items }: { title: string; name: string; items: readonly string[] }) {
  return <fieldset className="application-checks"><legend>{title}</legend><div>{items.map(item => <label key={item}><input type="checkbox" name={name} value={item} /> <span>{item}</span></label>)}</div></fieldset>;
}

export function ApplicationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const fields = Object.fromEntries(data.entries());
    const experience = data.getAll("experience");
    const qualifications = data.getAll("qualifications");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "supported-living-application",
          name: fields["fullName"],
          email: fields["email"],
          phone: fields["phone"],
          website: fields["website"],
          application: { ...fields, experience, qualifications },
        }),
      });
      const result = await response.json();
      if (!response.ok) { setErrorMessage(result.error || "Something went wrong. Please try again."); setStatus("error"); return; }
      setStatus("sent");
      form.reset();
    } catch { setErrorMessage("Network error. Please check your connection and try again."); setStatus("error"); }
  }

  return <form className="application-form" onSubmit={submit}>
    <p className="application-intro">Please complete this short screening form before sending your CV and application letter. We use this information only for recruitment and keep it confidential.</p>
    {status === "sent" ? <div className="application-success" role="status"><h2>Thank you for applying</h2><p>Your screening form has been sent to the Kindnest Care recruitment team. We will be in touch if your application progresses.</p></div> : <>
      <section className="application-group"><span className="application-number">01</span><div><h2>Your details</h2><div className="application-fields">
        <label>Full name<input required name="fullName" autoComplete="name" /></label>
        <label>Phone number<input required name="phone" type="tel" autoComplete="tel" /></label>
        <label>Email address<input required name="email" type="email" autoComplete="email" /></label>
        <label>Postcode<input required name="postcode" autoComplete="postal-code" /></label>
        <label>Role applying for<input required name="role" placeholder="e.g. Support Worker" /></label>
        <label>How did you hear about Kindnest Care?<input required name="heardAbout" /></label>
      </div></div></section>

      <section className="application-group"><span className="application-number">02</span><div><h2>Eligibility</h2><div className="application-choice-grid">
        <YesNo name="over18" label="Are you 18 or over?" /><YesNo name="rightToWork" label="Do you have the right to work in the UK?" />
        <YesNo name="dbs" label="Are you willing to complete an enhanced DBS check (or hold one on the Update Service)?" /><YesNo name="travel" label="Can you travel to our services in and around Waltham Forest?" />
        <YesNo name="shifts" label="Can you work shifts, including nights, weekends and bank holidays?" /><YesNo name="references" label="Can you provide two references covering the last 5 years, including your most recent employer?" />
      </div></div></section>

      <section className="application-group"><span className="application-number">03</span><div><h2>Experience</h2><div className="application-fields">
        <label className="full-width">Current or most recent job, and reason for leaving<textarea required name="currentJob" rows={4} /></label>
        <label>Years of experience in care or support work<select required name="careExperience"><option value="">Select an option</option>{experienceOptions.map(option => <option key={option}>{option}</option>)}</select></label>
        <label>Any gaps in work history in the last 5 years?<textarea required name="workGaps" rows={3} placeholder="State no gaps if not applicable" /></label>
      </div><div className="application-check-grid"><CheckList name="experience" title="Experience with (tick all that apply)" items={["Learning disabilities", "Autism", "Mental health", "Older people", "Supported living", "Medication administration"]} /><CheckList name="qualifications" title="Qualifications and training (tick all that apply)" items={["Care Certificate", "Level 2 H&SC", "Level 3 H&SC", "Level 5 H&SC", "Safeguarding", "Moving and handling", "First aid"]} /></div></div></section>

      <section className="application-group"><span className="application-number">04</span><div><h2>Availability</h2><div className="application-fields">
        <label>Earliest start date or notice period<input required name="startDate" /></label>
        <label>Hours wanted<select required name="hours"><option value="">Select an option</option>{hoursOptions.map(option => <option key={option}>{option}</option>)}</select></label>
        <label>Days and times you can work<textarea required name="availability" rows={3} /></label>
        <YesNo name="transport" label="Do you drive or have your own transport?" />
      </div></div></section>

      <section className="application-group"><span className="application-number">05</span><div><h2>About you and care</h2><div className="application-fields application-answers">
        <label>Why do you want to work in supported living?<textarea required name="whySupportedLiving" rows={5} /></label>
        <label>How would you promote a person&apos;s dignity, privacy and independence?<textarea required name="dignity" rows={5} /></label>
        <label>A service user refuses their medication. What do you do?<textarea required name="medication" rows={5} /></label>
        <label>You see a colleague speak rudely to a service user. What do you do?<textarea required name="colleague" rows={5} /></label>
        <label>A service user tells you something worrying and asks you to keep it secret. What do you do?<textarea required name="safeguarding" rows={5} /></label>
      </div></div></section>

      <section className="application-declaration"><label><input required type="checkbox" name="declaration" value="confirmed" /> <span>I confirm the information above is true, and I understand Kindnest Care will use it only for recruitment and keep it confidential.</span></label></section>
      <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {status === "error" && <p className="application-error" role="alert">{errorMessage}</p>}
      <button className="cta application-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? "Submitting…" : "Submit screening form"}</button>
    </>}
  </form>;
}
