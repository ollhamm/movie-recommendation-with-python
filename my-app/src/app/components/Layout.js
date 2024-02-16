import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full z-0"
        style={{ filter: "blur(3px)", overflow: "hidden" }}
      >
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative flex-grow z-10">
        <nav className=" p-4 px-32">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white text-xl font-semibold">
              Recommend
            </Link>
            <div className="flex space-x-8">
              <Link className="text-white hover:text-blue-200" href="/about">
                About
              </Link>
              <Link className="text-white hover:text-blue-200" href="/use">
                Use
              </Link>
              <Link className="text-white hover:text-blue-200" href="/services">
                services
              </Link>
            </div>
          </div>
        </nav>
        {/* Main content */}
        <main className="container mx-auto px-4 py-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
