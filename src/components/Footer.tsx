import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <ul className="space-y-2">
              <li className="font-medium text-white">FIND A STORE</li>
              <li>
                <Link href="/joinus">
                  <button>BECOME A MEMBER</button>
                </Link>
              </li>
              <li>
                <Link href="/joinus">
                  <button>SIGN UP FOR EMAIL</button>
                </Link>
              </li>
              <li>
                <Link href="/joinus">
                  <button>US FEEDBACK SEND</button>
                </Link>
              </li>
              <li>STUDENT DISCOUNTS</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="font-medium text-white">GET HELP</li>
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us On Nike.com Inquiries</li>
              <li>Contact Us On All Other Inquiries</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="font-medium text-white">ABOUT NIKE</li>
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </ul>
          </div>
          <div className="flex space-x-4">
            <img
              src="/footer/twitter.svg"
              alt="Twitter"
              className="h-6 w-6 cursor-pointer hover:opacity-80"
            />
            <img
              src="/footer/facebook.svg"
              alt="Facebook"
              className="h-6 w-6 cursor-pointer hover:opacity-80"
            />
            <img
              src="/footer/youtube.svg"
              alt="YouTube"
              className="h-6 w-6 cursor-pointer hover:opacity-80"
            />
            <img
              src="/footer/instagram.svg"
              alt="Instagram"
              className="h-6 w-6 cursor-pointer hover:opacity-80"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <img
              src="/footer/location.svg"
              alt="Location"
              className="h-5 w-5"
            />
            <p className="text-sm text-white">India</p>
            <p className="text-sm text-gray-500">
              &copy; 2023 Nike, Inc. All Rights Reserved
            </p>
          </div>
          <div className="hidden sm:flex text-sm space-x-6">
            <Link href="#">
              <button className="hover:text-white">Guides</button>
            </Link>
            <Link href="#">
              <button className="hover:text-white">Terms of Sale</button>
            </Link>
            <Link href="#">
              <button className="hover:text-white">Terms of Use</button>
            </Link>
            <Link href="#">
              <button className="hover:text-white">Nike Privacy Policy</button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
