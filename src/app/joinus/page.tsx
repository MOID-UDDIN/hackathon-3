"use client";

import React, { useState } from "react";
import Image from "next/image";

function JoinUs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("India");
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      email,
      password,
      firstName,
      lastName,
      dob,
      gender,
      country,
      newsletter,
    });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/login/nikeSymbol.svg"
            alt="Nike Symbol"
            width={324}
            height={182}
          />
          <p className="mt-2 text-lg font-bold">BECOME A NIKE MEMBER</p>
          <p className="mt-2 text-sm text-gray-500">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration, and community.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-gray-500">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded border-gray-300"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded border-gray-300"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded border-gray-300"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded border-gray-300"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded border-gray-300"
              required
            />
          </div>
          <p className="text-xs text-gray-500">
            Get a Nike Member Reward every year on your Birthday.
          </p>
          <div>
            <label className="text-sm text-gray-500">Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded border-gray-300"
            >
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="USA">USA</option>
              <option value="England">England</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <div
              className={`flex-1 px-3 py-2 border rounded border-gray-300 text-center cursor-pointer ${gender === "Male" ? "bg-gray-300" : ""}`}
              onClick={() => setGender("Male")}
            >
              <p className="text-sm text-gray-500">Male</p>
            </div>
            <div
              className={`flex-1 px-3 py-2 border rounded border-gray-300 text-center cursor-pointer ${gender === "Female" ? "bg-gray-300" : ""}`}
              onClick={() => setGender("Female")}
            >
              <p className="text-sm text-gray-500">Female</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={newsletter}
              onChange={() => setNewsletter(!newsletter)}
              className="w-5 h-5"
            />
            <p className="text-xs text-gray-500">
              Sign up for emails to get updates from Nike on products, offers,
              and your Member benefits.
            </p>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">
            By creating an account, you agree to Nike's Privacy Policy and Terms
            of Use.
          </p>
          <button
            type="submit"
            className="w-full py-2 bg-black text-white text-center rounded"
          >
            <p className="text-sm">JOIN US</p>
          </button>
          <p className="text-center text-sm text-gray-500 mt-4">
            Already a Member?{" "}
            <span className="text-blue-500 cursor-pointer">Sign In.</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default JoinUs;
