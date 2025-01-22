"use client";

import React, { useState } from "react";
import Image from "next/image";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleCheckboxChange = () => setIsChecked(!isChecked);

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col items-center">
          <Image
            src="/login/nikeSymbol.svg"
            alt="Nike Symbol"
            width={324}
            height={17}
          />
          <p className="mt-4 text-center text-lg font-bold">
            YOUR ACCOUNT FOR EVERYTHING NIKE
          </p>
        </div>
        <div className="mt-6 space-y-4">
          {/* Email Input */}
          <div>
            <p className="text-sm text-gray-500">Email address</p>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="w-full mt-2 px-3 py-2 border rounded"
            />
          </div>
          {/* Password Input */}
          <div>
            <p className="text-sm text-gray-500">Password</p>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              className="w-full mt-2 px-3 py-2 border rounded"
            />
          </div>
          {/* Keep me signed in */}
          <div className="flex justify-between items-center text-sm mt-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-black border-gray-300 rounded"
              />
              <p className="ml-2 text-gray-500">Keep me signed in</p>
            </div>
            <p className="text-gray-400">Forgotten your password?</p>
          </div>
          {/* Terms */}
          <div className="text-center text-xs text-gray-500 mt-4">
            <p>
              By logging in, you agree to Nike's Privacy Policy and Terms of
              Use.
            </p>
          </div>
          {/* Sign In Button */}
          <button className="w-full bg-black text-white py-2 rounded mt-4">
            SIGN IN
          </button>
          <p className="text-center text-sm text-gray-500 mt-4">
            Not a Member?{" "}
            <span className="text-blue-500 cursor-pointer">Join Us.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
