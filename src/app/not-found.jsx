import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      
      {/* 404 at the top */}
      <h1 className="text-[180px] font-black text-primary opacity-10 leading-none select-none">
        404
      </h1>
      <br />

      {/* Text below the 404 */}
      <h2 className="text-3xl font-black text-base-content -mt-8">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mt-3 max-w-sm">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <Link href="/" className="btn btn-primary px-10 text-white font-bold mt-6">
        Back to Home
      </Link>

    </div>
  );
}