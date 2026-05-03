import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="hero min-h-[85vh]"
      style={{
        /* A high-end dark tech/coding background */
        backgroundImage:
          "url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* THE TRANSPARENCY FIX: 
         Instead of a flat color, we use a Radial Gradient.
         It's darker in the center (to make text pop) and 
         more transparent on the edges (to show the tech image).
      */}
      <div className="hero-overlay bg-gradient-to-b from-slate-900/10 via-slate-900/70 to-slate-700/90 backdrop-blur-[1px]"></div>
      
      <div className="hero-content text-center text-white">
        <div className="max-w-3xl px-4">
          <h1 className="mb-6 text-5xl md:text-7xl font-black leading-tight tracking-tight">
            Upgrade Your <span className="text-primary italic">Skills</span> Today 🚀
          </h1>
          
          <p className="mb-10 text-lg md:text-2xl font-medium opacity-90 leading-relaxed">
            Learn from Industry Experts. Explore over 500+ skill-based programs
            in Web Development, Design, and Marketing.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link 
              href="/courses" 
              className="btn btn-primary btn-lg px-12 shadow-2xl text-white font-extrabold border-none hover:scale-105 transition-transform"
            >
              Explore Courses
            </Link>
            {/* ✅ FIXED: Changed button to Link and added href */}
            <Link 
              href="/about-us" 
              className="btn btn-outline btn-lg border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}