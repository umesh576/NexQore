import Link from "next/link";
import React from "react";

const Unauthorization = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center border border-gray-200">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          🚫 Unauthorized
        </h1>
        <p className="text-gray-700 mb-6">
          You do not have permission to access this page.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Unauthorization;
