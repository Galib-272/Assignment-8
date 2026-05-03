export default function AboutUs() {
  return (
    <div className="container mx-auto p-10 min-h-[70vh]">
      <h1 className="text-4xl font-black text-primary mb-6">About SkillSphere</h1>
      <div className="prose lg:prose-xl max-w-4xl text-gray-600 space-y-4">
        <p>
          Welcome to <strong>SkillSphere</strong>, your premier destination for mastering the digital world. 
          Our mission is to bridge the gap between education and industry by providing high-quality, 
          accessible courses for everyone.
        </p>
        <p>
          Founded in 2026, we have helped thousands of students transition into tech careers 
          through our specialized tracks in Web Development, UI/UX Design, and Data Science.
        </p>
      </div>
    </div>
  );
}