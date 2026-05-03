"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/login";
  };

  const navLinks = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/courses">Courses</Link></li>
      {user && <li><Link href="/my-profile">My Profile</Link></li>}
    </>
  );

  return (
    <nav className="navbar bg-base-100 shadow-md px-4 md:px-12 sticky top-0 z-50 h-20">
      <div className="navbar-start">
        {/* --- Mobile Hamburger Menu --- */}
        <div className="dropdown">
          {/* ✅ CHANGED: lg:hidden to md:hidden. Now hides on tablets (768px+) */}
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold border border-base-200"
          >
            {navLinks}
          </ul>
        </div>

        <Link
          href="/"
          /* ✅ CHANGED: lg:ml-0 to md:ml-0 to match the new breakpoint */
          className="text-2xl font-black text-primary tracking-tight ml-2 md:ml-0"
        >
          SkillSphere
        </Link>
      </div>

      {/* --- Desktop Menu --- */}
      {/* ✅ CHANGED: lg:flex to md:flex. Full menu now appears on tablets */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-bold gap-4">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end flex items-center gap-3">
            <span className="font-bold hidden md:block text-gray-700">
              Hi, {user.name?.split(" ")[0]}
            </span>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar border-2 border-primary"
            >
              <div className="w-10 rounded-full">
                <img
                  src={user.image || `https://ui-avatars.com/api/?name=${user.name}`}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-base-200"
            >
              <li>
                <button onClick={handleLogout} className="text-error font-bold">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/login" className="btn btn-ghost btn-sm md:btn-md font-bold">
              Login
            </Link>
            <Link href="/register" className="btn btn-primary btn-sm md:btn-md text-white font-bold px-4 md:px-6">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}