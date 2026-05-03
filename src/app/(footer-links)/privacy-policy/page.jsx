export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto p-10 min-h-[70vh]">
      <h1 className="text-3xl font-black text-primary mb-6">Privacy Policy</h1>
      <div className="prose max-w-none text-gray-600">
        <p className="mb-4">Last Updated: May 2026</p>
        <p className="mb-4">
          At SkillSphere, we take your privacy seriously. This policy explains
          how we collect, use, and protect your personal data when you use our
          platform.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Data Collection:</strong> We collect info like name and
            email for account creation.
          </li>
          <li>
            <strong>Cookies:</strong> We use cookies to enhance your browsing
            experience.
          </li>
          <li>
            <strong>Security:</strong> Your data is encrypted and never sold to
            third parties.
          </li>
        </ul>
      </div>
    </div>
  );
}
