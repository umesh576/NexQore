"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contactform = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await fetch(
      "http://localhost:5000/api/contact/addcontact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    const result = await response.json();

    if (!response.ok) {
      console.log(result.message);
      // alert(result.message || "Something went wrong");
      return;
    }

    setShowSuccess(true);
    reset();

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="max-w-xl mx-auto p-6 shadow-lg rounded-lg bg-white border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h2>

      {showSuccess && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md border border-green-200 animate-fadeIn">
          ✅ Message sent successfully! I&apos;ll get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-black">
        {/* Name */}
        <div className="group">
          <input
            type="text"
            placeholder="Your Name"
            className={`w-full border p-3 rounded-md transition-all focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-400 focus:ring-red-200"
                : "border-gray-300 focus:border-black focus:ring-gray-200"
            }`}
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name should be at least 2 characters",
              },
            })}
          />
          {errors.name && (
            <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
              <span>⚠️</span>
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="group">
          <input
            type="email"
            placeholder="Your Email"
            className={`w-full border p-3 rounded-md transition-all focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-400 focus:ring-red-200"
                : "border-gray-300 focus:border-black focus:ring-gray-200"
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
              <span>⚠️</span>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Purpose - Fixed typo "Fininical" to "Financial" */}
        <div className="group">
          <select
            className={`w-full border p-3 rounded-md transition-all focus:outline-none focus:ring-2 appearance-none ${
              errors.purpose
                ? "border-red-400 focus:ring-red-200"
                : "border-gray-300 focus:border-black focus:ring-gray-200"
            }`}
            {...register("purpose", {
              required: "Please select a purpose",
            })}
          >
            <option value="" className="text-gray-400">
              Select Purpose
            </option>
            <option value="Web development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Graphics Designing">Graphics Designing</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Content Writing">Content Writing</option>
            <option value="Financial Support">Financial Support</option>
            <option value="Other">Other</option>
          </select>
          {errors.purpose && (
            <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
              <span>⚠️</span>
              {errors.purpose.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="group">
          <textarea
            placeholder="Your Message..."
            className={`w-full border p-3 rounded-md transition-all focus:outline-none focus:ring-2 resize-none ${
              errors.message
                ? "border-red-400 focus:ring-red-200"
                : "border-gray-300 focus:border-black focus:ring-gray-200"
            }`}
            rows="4"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message should be at least 10 characters",
              },
            })}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
              <span>⚠️</span>
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-md font-medium transition-all ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800 active:scale-[0.98]"
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default Contactform;
