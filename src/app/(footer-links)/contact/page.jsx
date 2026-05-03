export default function Contact() {
  return (
    <div className="container mx-auto p-10 min-h-[70vh] flex flex-col items-center justify-center">
      <h1 className="text-5xl font-black text-primary mb-10 text-center uppercase tracking-tighter">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="bg-base-100 p-8 shadow-2xl border border-base-200 rounded-3xl text-center hover:border-primary transition-all group">
          <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Email Us</h3>
          <p className="text-gray-600 font-medium">support@skillsphere.com</p>
          <p className="text-gray-600 font-medium">info@skillsphere.com</p>
        </div>

        <div className="bg-base-100 p-8 shadow-2xl border border-base-200 rounded-3xl text-center hover:border-primary transition-all group">
          <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Call Us</h3>
          <p className="text-gray-600 font-medium">+1 (555) 000-1234</p>
          <p className="text-gray-600 font-medium">Mon - Fri, 9am - 6pm</p>
        </div>

        <div className="bg-base-100 p-8 shadow-2xl border border-base-200 rounded-3xl text-center hover:border-primary transition-all group">
          <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Visit Us</h3>
          <p className="text-gray-600 font-medium">
            123 Tech Avenue, Silicon Valley
          </p>
          <p className="text-gray-600 font-medium">California, USA</p>
        </div>
      </div>
    </div>
  );
}
