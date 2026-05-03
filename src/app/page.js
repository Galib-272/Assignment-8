"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [popularCourses, setPopularCourses] = useState([]);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        const top3 = data.sort((a, b) => b.rating - a.rating).slice(0, 3);
        setPopularCourses(top3);
      });
  }, []);

  return (
    <div>
      <Hero />

      {/* --- Popular Courses Section --- */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }} // Slower fade in
          className="text-4xl font-black text-center mb-10 text-primary"
        >
          🔥 Popular Courses
        </motion.h2>

        {popularCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                // Increased delay (0.3s) and duration (0.8s) for a slower "waterfall" effect
                transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center py-10">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        )}
      </section>

      {/* --- Learning Tips Section --- */}
      <section className="bg-primary text-primary-content py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-10 text-white">
            📌 Learning Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 p-6 rounded-xl border border-white/20"
            >
              <h3 className="font-bold text-xl mb-2 text-white">Study techniques</h3>
              <p className="text-blue-50 italic">Active recall and spaced repetition are your best friends when learning code.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 p-6 rounded-xl border border-white/20"
            >
              <h3 className="font-bold text-xl mb-2 text-white">Time management</h3>
              <p className="text-blue-50 italic">Use the Pomodoro technique: 25 mins work, 5 mins break to keep your mind fresh.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- EXTRA SECTION: Trending Courses --- */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex flex-col md:flex-row items-center justify-between bg-slate-900 p-8 md:p-16 rounded-[3rem] text-white shadow-2xl border-b-4 border-primary relative overflow-hidden"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10"></div>

            <div className="max-w-md text-center md:text-left mb-8 md:mb-0">
              <span className="badge badge-primary mb-4 font-bold p-3 animate-bounce">
                ✨ NEW RELEASES
              </span>
              <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                Trending This Month 📈
              </h2>
              <p className="text-gray-400 text-lg">
                Master AI, Data Science, and Cyber Security with our updated 2026 curriculum. 
                Stay ahead of the curve.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Link href="/courses">
                <motion.button 
                  // Pulsing Glow Animation
                  animate={{ 
                    boxShadow: [
                      "0px 0px 0px rgba(100, 28, 243, 0)", 
                      "0px 0px 20px rgba(100, 28, 243, 0.6)", 
                      "0px 0px 0px rgba(100, 28, 243, 0)"
                    ],
                    scale: [1, 1.03, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-lg btn-primary border-none font-black px-12 rounded-full shadow-lg"
                >
                  Check Trends 🚀
                </motion.button>
              </Link>
              <p className="text-xs text-primary mt-4 font-bold tracking-widest uppercase opacity-70">
                Limited Spots Available
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Top Instructors Section --- */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-primary mb-3 uppercase tracking-tighter">
              Top Instructors
            </h2>
            <p className="text-gray-500 font-medium italic">Learn from industry-leading professionals</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Sarah Johnson", role: "Web Developer", img: "https://i.pravatar.cc/150?u=sarah" },
              { name: "Mark Thompson", role: "UI/UX Designer", img: "https://i.pravatar.cc/150?u=mark" },
              { name: "Emily Chen", role: "Marketing Guru", img: "https://i.pravatar.cc/150?u=emily" },
              { name: "David Miller", role: "AI Specialist", img: "https://i.pravatar.cc/150?u=david" },
            ].map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }} // Slower staggered delay
                className="card bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <figure className="px-10 pt-10">
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 group-hover:scale-110 transition-transform duration-500">
                      <img src={instructor.img} alt={instructor.name} />
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="text-xl font-bold text-gray-800">{instructor.name}</h3>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wide">{instructor.role}</p>
                  <div className="flex gap-4 mt-4">
                    <button className="text-gray-400 hover:text-blue-600 transition-colors"><FaLinkedin size={20} /></button>
                    <button className="text-gray-400 hover:text-blue-400 transition-colors"><FaTwitter size={20} /></button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}