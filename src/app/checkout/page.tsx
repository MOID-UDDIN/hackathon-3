"use client";
import React, { useState, useEffect } from "react";

function Checkout() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [addressLine3, setAddressLine3] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [locality, setLocality] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pan, setPan] = useState("");
  const [saveAddress, setSaveAddress] = useState(false);
  const [makePreferred, setMakePreferred] = useState(false);

  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(items);
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Form submitted:", {
      firstName,
      lastName,
      addressLine1,
      addressLine2,
      addressLine3,
      postalCode,
      locality,
      state,
      email,
      phoneNumber,
      pan,
      saveAddress,
      makePreferred,
    });
  };

  const currentDate = new Date();
  const deliveryDate = new Date(currentDate);
  deliveryDate.setDate(currentDate.getDate() + 3);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-x-10">
      {/*Customer Information Form */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl font-bold  mb-8">
          How would you like to get your order?
        </h1>
        <p className="text-gray-600 mb-6">
          Custom regulations for India require a copy of the recipient's KYC.
          The address on the KYC needs to match the shipping address. Our
          courier will contact you via SMS/email to obtain a copy of your KYC.
          The KYC will be stored securely and used solely for the purpose of
          clearing customs (including sharing it with customs officials for all
          orders and returns). If your KYC does not match your shipping address,
          please click the link for more information.
          <a href="#" className="text-blue-500 hover:underline">
            Learn More
          </a>
        </p>

        <h2 className="text-xl font-semibold mb-4">
          Enter your name and address:
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          {/* Customer info fields */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="addressLine1"
            >
              Address Line 1
            </label>
            <input
              type="text"
              id="addressLine1"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="addressLine2"
            >
              Address Line 2
            </label>
            <input
              type="text"
              id="addressLine2"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="addressLine3"
            >
              Address Line 3
            </label>
            <input
              type="text"
              id="addressLine3"
              value={addressLine3}
              onChange={(e) => setAddressLine3(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="postalCode"
            >
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="locality"
            >
              Locality
            </label>
            <input
              type="text"
              id="locality"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="state"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-4">
              What's your contact information?
            </h2>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-4">What's your PAN?</h2>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pan"
            >
              PAN
            </label>
            <input
              type="text"
              id="pan"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Address options */}
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={saveAddress}
                onChange={() => setSaveAddress(!saveAddress)}
              />
              <span className="ml-2">Save this address</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={makePreferred}
                onChange={() => setMakePreferred(!makePreferred)}
              />
              <span className="ml-2">Make this my preferred address</span>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/*Order Summary */}
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="w-full bg-white p-4 rounded-lg shadow-lg">
          <div className="mb-4 flex items-center space-x-2">
            <h3 className="text-lg font-bold">Subtotal:</h3>
            <p>{`₹${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}`}</p>
          </div>
          <div className="mb-4 flex items-center space-x-2">
            <h3 className="text-lg font-bold">Delivery/Shipping:</h3>
            <p>Free</p>
          </div>
          <div className="mb-4 flex items-center space-x-2">
            <h3 className="text-lg font-bold">Total:</h3>
            <p>{`₹${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}`}</p>
          </div>

          <div className="mt-4 flex items-center space-x-2">
            <h3 className="text-lg font-bold">Arrives:</h3>
            <p className="text-lg font-bold">{deliveryDate.toDateString()}</p>
          </div>

          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            cart.map((item: any, index) => (
              <div
                key={index}
                className="flex items-start mb-6 border-b pb-4 last:border-none"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded mr-4"
                />

                <div>
                  <h4 className="text-md font-bold">{item.productName}</h4>
                  <p className="text-sm text-gray-600">{item.category}</p>
                  <p className="text-sm text-gray-600">Color: {item.colors}</p>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-sm font-medium">{`₹${item.price}`}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
