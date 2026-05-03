"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MyProfile() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  if (isPending)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );

  if (!session) {
    router.push("/login");
    return null;
  }

  const { user } = session;

  return (
    <div className="container mx-auto p-10 flex justify-center">
      <div className="card w-full max-w-2xl bg-base-100 shadow-2xl border border-base-200">
        <div className="card-body items-center text-center">
          <div className="avatar mb-4">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={
                  user.image || `https://ui-avatars.com/api/?name=${user.name}`
                }
                alt="Profile"
              />
            </div>
          </div>
          <h2 className="card-title text-3xl font-black">{user.name}</h2>
          <p className="text-gray-500 font-medium">{user.email}</p>

          <div className="divider w-full"></div>

          <div className="grid grid-cols-1 gap-4 w-full">
            <div className="bg-base-200 p-4 rounded-lg text-left">
              <span className="text-xs uppercase font-bold text-gray-400">
                User ID
              </span>
              <p className="font-mono text-sm truncate">{user.id}</p>
            </div>
          </div>

          <div className="card-actions mt-8">
            <Link href="/update-profile" className="btn btn-primary px-10">
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
