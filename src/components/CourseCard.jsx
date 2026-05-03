"use client";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function CourseCard({ course }) {
  return (
    <motion.div 
      // 1. While hovering, the card pops up and grows slightly
      whileHover={{ scale: 1.05, translateY: -10 }} 
      // 2. When it first appears, it fades in and slides up
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card bg-base-100 shadow-xl border border-base-300 h-full flex flex-col"
    >
      <figure className="px-4 pt-4">
        <img 
          src={course.image} 
          alt={course.title} 
          className="rounded-xl h-48 w-full object-cover" 
        />
      </figure>
      
      <div className="card-body flex flex-col flex-grow">
        <h2 className="card-title text-primary">{course.title}</h2>
        <p className="text-sm text-gray-500">By {course.instructor}</p>
        
        <div className="flex justify-between items-center mt-2">
          <div className="badge badge-secondary font-semibold">⭐ {course.rating}</div>
          <div className="text-xs font-bold uppercase">{course.level}</div>
        </div>

        <div className="card-actions mt-auto pt-4">
          <Link 
            href={`/courses/${course.id}`} 
            className="btn btn-primary btn-sm w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}