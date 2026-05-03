"use client";
import { useState, useEffect, useRef } from "react"; // ✅ add useRef
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function UpdateProfile() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const initialized = useRef(false); // ✅ tracks if fields are filled

  useEffect(() => {
    // ✅ Only fill fields once when session loads
    if (session?.user && !initialized.current) {
      initialized.current = true;
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await authClient.updateUser({
        name: name,
        image: image,
      });

      if (error) {
        toast.error(error.message || "Failed to update profile");
      } else {
        toast.success("Profile updated successfully! 🎉");
        router.push("/my-profile");
        router.refresh();
      }
    } catch (err) {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-10 flex justify-center">
      <div className="card w-full max-w-md bg-white shadow-2xl border border-gray-100 p-8 rounded-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-gray-800">Update Profile</h2>
          <p className="text-gray-500 font-medium">
            Modify your public information
          </p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="form-control">
            <label className="label py-1">
              <span className="label-text font-bold text-gray-400 uppercase text-xs">
                Full Name
              </span>
            </label>
            <input
              type="text"
              className="input border-2 border-[#4338ca] focus:border-[#4338ca] outline-none w-full bg-gray-50 font-medium"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label py-1">
              <span className="label-text font-bold text-gray-400 uppercase text-xs">
                Profile Image URL
              </span>
            </label>
            <input
              type="url"
              className="input border-2 border-[#4338ca] focus:border-[#4338ca] outline-none w-full bg-gray-50 font-medium"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn bg-[#4338ca] hover:bg-[#3730a3] text-white border-none w-full mt-4 shadow-lg text-lg font-bold"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Update Information"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => router.back()}
            className="text-sm font-bold text-gray-400 hover:text-[#4338ca] transition-colors"
          >
            Cancel and Go Back
          </button>
        </div>
      </div>
    </div>
  );
}