import ConfidentialInquiryForm from "@/components/confidential-inquiry-form";

export default function ConfidentialInquiryPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 md:py-24 px-4">
      <h1 className="text-4xl font-bold mb-4 text-slate-900">Confidential Site Evaluation</h1>
      <p className="text-lg mb-6 text-slate-700">This process is designed for large-scale industrial and logistics projects requiring discretion, speed, and regulatory clarity.</p>
      <ul className="mb-6 list-disc pl-6 text-slate-700">
        <li>NDA available upon request</li>
        <li>Single senior point of contact</li>
        <li>No public disclosure without written consent</li>
        <li>State & local partners engaged confidentially</li>
      </ul>
      <div className="mb-8 p-4 bg-slate-50 rounded border border-slate-200">
        <p className="font-semibold text-slate-800 mb-2">In exchange for limited information, we’ll deliver clarity:</p>
        <ul className="list-disc pl-6 text-slate-700">
          <li>Preliminary site fit assessment</li>
          <li>Infrastructure readiness snapshot</li>
          <li>Incentive eligibility overview</li>
        </ul>
      </div>
      <ConfidentialInquiryForm />
    </section>
  );
}
