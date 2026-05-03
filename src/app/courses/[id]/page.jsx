"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react"; // ✅ add useRef
import { toast } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const hasRun = useRef(false); // ✅ prevents double run in Strict Mode

  useEffect(() => {
    const id = params?.id;
    if (!id) return;

    // ✅ If already ran once, skip the second run
    if (hasRun.current) return;
    hasRun.current = true;

    const loadData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const { data: session } = await authClient.getSession();

        if (!session) {
          toast.error("Please login first!"); // ✅ now fires only once
          router.push("/login");
          return;
        }

        const res = await fetch("/courses.json");
        const data = await res.json();
        const found = data.find((c) => String(c.id) === String(id));

        if (found) {
          setCourse(found);
        } else {
          toast.error("Course not found!");
        }
      } catch (err) {
        console.error("Error:", err);
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [params?.id]); // ✅ only id as dependency, not whole params/router

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );

  if (!course)
    return (
      <div className="text-center mt-20 text-xl font-bold">
        Course not found.
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto my-10 p-5">
      <div className="card bg-base-100 shadow-xl overflow-hidden border">
        <figure>
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-72 object-cover"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title text-3xl font-bold">{course.title}</h2>
            <span className="badge badge-primary">{course.category}</span>
          </div>
          <p className="text-xl text-gray-600">
            Instructor: {course.instructor}
          </p>
          <div className="flex gap-4 my-2">
            <div className="badge badge-outline">⏱ {course.duration}</div>
            <div className="badge badge-outline">📊 {course.level}</div>
            <div className="badge badge-secondary">⭐ {course.rating}</div>
          </div>
          <div className="divider"></div>
          <p className="text-lg leading-relaxed">{course.description}</p>
          <div className="card-actions justify-end mt-6">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => toast.success("Enrollment Successful!")}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}