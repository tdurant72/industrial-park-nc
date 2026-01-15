"use client";
import { useState } from "react";

const initialStep1 = {
  projectType: "",
  investmentRange: "",
  timeline: "",
};
const initialStep2 = {
  siteRequirements: "",
  workforceNeeds: "",
  confidentiality: false,
};
const initialStep3 = {
  contactMethod: "",
};

export default function ConfidentialInquiryForm() {
  const [step, setStep] = useState(1);
  const [step1, setStep1] = useState(initialStep1);
  const [step2, setStep2] = useState(initialStep2);
  const [step3, setStep3] = useState(initialStep3);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/confidential-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ step1, step2, step3 }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-6 bg-green-50 border border-green-200 rounded text-green-800">
        <h2 className="text-xl font-bold mb-2">Inquiry Submitted</h2>
        <p>Your confidential inquiry has been received. Our executive director will respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <h3 className="text-lg font-bold mb-2">Step 1: Project Overview</h3>
          <label className="block mb-2">Project Type
            <select className="w-full p-2 border rounded" value={step1.projectType} onChange={e => setStep1(s => ({ ...s, projectType: e.target.value }))} required>
              <option value="">Select...</option>
              <option>Manufacturing</option>
              <option>Logistics</option>
              <option>Tech</option>
            </select>
          </label>
          <label className="block mb-2">Estimated Capital Investment
            <select className="w-full p-2 border rounded" value={step1.investmentRange} onChange={e => setStep1(s => ({ ...s, investmentRange: e.target.value }))} required>
              <option value="">Select...</option>
              <option>$50M–$100M</option>
              <option>$100M–$250M</option>
              <option>$250M–$500M+</option>
            </select>
          </label>
          <label className="block mb-2">Target Timeline
            <select className="w-full p-2 border rounded" value={step1.timeline} onChange={e => setStep1(s => ({ ...s, timeline: e.target.value }))} required>
              <option value="">Select...</option>
              <option>0–6 months</option>
              <option>6–12 months</option>
              <option>12–24 months</option>
            </select>
          </label>
          <button type="button" className="mt-4 px-4 py-2 bg-slate-900 text-white rounded" onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h3 className="text-lg font-bold mb-2">Step 2: Site & Workforce Needs</h3>
          <label className="block mb-2">Site Requirements
            <input className="w-full p-2 border rounded" type="text" value={step2.siteRequirements} onChange={e => setStep2(s => ({ ...s, siteRequirements: e.target.value }))} required />
          </label>
          <label className="block mb-2">Workforce Needs
            <input className="w-full p-2 border rounded" type="text" value={step2.workforceNeeds} onChange={e => setStep2(s => ({ ...s, workforceNeeds: e.target.value }))} required />
          </label>
          <label className="block mb-2">
            <input type="checkbox" checked={step2.confidentiality} onChange={e => setStep2(s => ({ ...s, confidentiality: e.target.checked }))} /> Confidentiality preference
          </label>
          <div className="flex gap-2 mt-4">
            <button type="button" className="px-4 py-2 bg-slate-200 text-slate-900 rounded" onClick={handleBack}>Back</button>
            <button type="button" className="px-4 py-2 bg-slate-900 text-white rounded" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <h3 className="text-lg font-bold mb-2">Step 3: Preferred Contact Method</h3>
          <label className="block mb-2">How would you prefer initial contact?
            <select className="w-full p-2 border rounded" value={step3.contactMethod} onChange={e => setStep3(s => ({ ...s, contactMethod: e.target.value }))} required>
              <option value="">Select...</option>
              <option>Encrypted email</option>
              <option>Call via assistant</option>
              <option>NDA first</option>
            </select>
          </label>
          <div className="flex gap-2 mt-4">
            <button type="button" className="px-4 py-2 bg-slate-200 text-slate-900 rounded" onClick={handleBack}>Back</button>
            <button type="submit" className="px-4 py-2 bg-green-700 text-white rounded" disabled={submitting}>{submitting ? "Submitting..." : "Submit Inquiry"}</button>
          </div>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </div>
      )}
    </form>
  );
}
