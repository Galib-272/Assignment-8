"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: photoUrl,
    });

    if (error) {
      toast.error(error.message || "Registration failed!");
    } else {
      await authClient.signOut();
      toast.success("Account Created! Please login 🎉");
      router.push("/login");
    }

    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      setIsGoogleLoading(false);
      toast.error("Google login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
      <div className="card w-full max-w-md bg-white shadow-2xl p-8 border border-gray-100 rounded-xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-primary mb-2">
            Create Account
          </h2>
          <p className="text-gray-500 font-medium">
            Join SkillSphere to start learning
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="form-control">
            <label className="label py-1">
              <span className="label-text font-bold text-gray-400 uppercase text-xs">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered focus:outline-primary w-full bg-gray-50"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label py-1">
              <span className="label-text font-bold text-gray-400 uppercase text-xs">
                Email Address
              </span>
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="input input-bordered focus:outline-primary w-full bg-gray-50"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label py-1">
              <span className="label-text font-bold text-gray-400 uppercase text-xs">
                Photo URL
              </span>
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered focus:outline-primary w-full bg-gray-50"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label py-1">
              <span className="label-text font-bold text-gray-400 uppercase text-xs">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered focus:outline-primary w-full bg-gray-50"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full text-white font-bold text-lg shadow-lg mt-2"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <div className="divider my-8 text-gray-400 text-xs font-bold uppercase tracking-widest">
          Or
        </div>

        <button
          type="button"
          disabled={isGoogleLoading}
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full border-gray-200 flex items-center gap-3 normal-case hover:bg-gray-50 bg-white"
        >
          {isGoogleLoading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <>
              <FcGoogle className="text-2xl" />
              <span className="text-gray-700 font-bold">
                Continue with Google
              </span>
            </>
          )}
        </button>

        <p className="mt-8 text-center text-gray-700 font-medium">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary font-extrabold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
