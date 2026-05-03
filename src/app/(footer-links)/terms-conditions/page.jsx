export default function TermsConditions() {
  return (
    <div className="container mx-auto p-10 min-h-[70vh]">
      <h1 className="text-3xl font-black text-primary mb-6">
        Terms & Conditions
      </h1>
      <div className="bg-base-200 p-8 rounded-xl text-gray-700 leading-relaxed space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing SkillSphere, you agree to be bound by these terms. If
            you do not agree, please do not use our services.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">2. Course Access</h2>
          <p>
            All content provided is for educational purposes. Unauthorized
            distribution of course materials is strictly prohibited.
          </p>
        </section>
      </div>
    </div>
  );
}
