import React from "react";
import Contactform from "./../../component/connection/contactform";

const page = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-black">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&aops;s work together. Fill out the form
            below and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mb-12">
          <div className="w-20 h-1 bg-linear-to-r from-transparent via-black to-transparent rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left Info Card */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">📍</span>
                </div>
                <h3 className="font-bold text-lg text-black">Location</h3>
              </div>
              <p className="text-gray-600">
                123 Creative Street
                <br />
                Digital City, DC 10001
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">📧</span>
                </div>
                <h3 className="font-semibold text-lg text-black">Email</h3>
              </div>
              <a
                href="mailto:hello@example.com"
                className="text-black hover:text-gray-700 transition-colors"
              >
                hello@example.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">⏰</span>
                </div>
                <h3 className="font-semibold text-lg text-black">
                  Response Time
                </h3>
              </div>
              <p className="text-gray-600">
                Usually within 24 hours
                <br />
                Monday - Friday
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-black to-gray-800 rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl">✉️</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Send a Message
                  </h2>
                  <p className="text-gray-500">Fill in the details below</p>
                </div>
              </div>
              <Contactform />
            </div>

            {/* Note */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg text-center">
              <p className="text-gray-700 text-sm">
                💡 Looking for a quick quote? Include project details and
                timeline for faster response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
