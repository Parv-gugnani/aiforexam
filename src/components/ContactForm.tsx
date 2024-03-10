"use client";
import React, { useRef, useEffect, useState } from "react";
// import emailjs from "@emailjs/browser";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import Footer from "./Footer";

export default function ContactForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  return (
    <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      {/* add handle submit */}
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-sm font-semibold">
            Name
          </label>
          <input
            ref={nameRef}
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-sm font-semibold">
            Email
          </label>
          <input
            ref={emailRef}
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 text-sm font-semibold">
            Message
          </label>
          <textarea
            ref={messageRef}
            id="message"
            placeholder="Enter your message"
            className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
            rows={4}
          ></textarea>
        </div>
        <Button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </Button>
      </form>
    </div>
  );
}
