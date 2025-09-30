import React, { useContext } from "react";
import { NavLink } from "react-router";
import RegisterLottie from "../../assets/Register.json";
import Lottie from "lottie-react";
import { AuthContext } from "./../../providers/AuthProvider";

const Register = () => {
  const { signUpUser, updateUserProfile } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    signUpUser(email, password).then((result) => {
      console.log(result.user);
      updateUserProfile(name, "").then(() => {
        // create user in the database
        console.log("Profile updated successful.");
      });
    });

    console.log("Register info:", { name, email, password });
  };
  return (
    <div className="flex flex-col md:flex-row p-8">
      <div className="flex-1 max-w-xs md:max-w-md">
        <Lottie animationData={RegisterLottie}></Lottie>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Register
          </h2>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>

          {/* Extra Links */}
          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <NavLink to="/login" className="text-blue-600 hover:underline">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
