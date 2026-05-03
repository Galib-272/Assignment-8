"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client"; // Import the client you created

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // 1. Handle Email/Password Login via BetterAuth
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/", // Where to go after success
    });

    if (error) {
      toast.error(error.message || "Invalid email or password!");
    } else {
      toast.success("Login Successful!");
      // BetterAuth handles the redirect, but window.location ensures 
      // the Navbar detects the new session cookie immediately.
      window.location.href = "/";
    }
    setLoading(false);
  };

  // 2. Handle Google Login via BetterAuth
  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/", 
    });
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-base-200 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl p-10 border border-base-300">
        <h2 className="text-4xl font-bold mb-8 text-center text-primary">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-gray-600">Email</span>
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="input input-bordered focus:outline-primary w-full"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-gray-600">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered focus:outline-primary w-full"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="btn btn-primary w-full text-white text-lg capitalize"
          >
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
          </button>
        </form>

        <div className="divider my-6 text-gray-400 text-sm">OR</div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline border-gray-300 flex items-center gap-3 normal-case w-full hover:bg-gray-50"
          >
            <FcGoogle className="text-2xl" />
            <span className="text-gray-700 font-semibold">
              Login with Google
            </span>
          </button>
        </div>

        <p className="mt-8 text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-bold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}