import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    joinAs: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    joinAs: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      joinAs: "",
    };
    let isValid = true;

    // Validate fields
    if (!formData.firstName) {
      newErrors.firstName = "First name is required.";
      isValid = false;
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required.";
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone || !phonePattern.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    if (!formData.joinAs) {
      newErrors.joinAs = "Please select your role.";
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      // Handle form submission
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4 flex">
            <div className="w-1/2 pr-2">
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-semibold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your first name"
                required
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-2">{errors.firstName}</p>
              )}
            </div>
            <div className="w-1/2 pl-2">
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-semibold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your last name"
                required
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-2">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="mb-4 flex">
            <div className="w-1/2 pr-2">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )}
            </div>
            <div className="w-1/2 pl-2">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold mb-2"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your phone number"
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="mb-4 flex">
            <div className="w-1/2 pr-2">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                required
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-2">{errors.password}</p>
              )}
            </div>
            <div className="w-1/2 pl-2">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Confirm your password"
                required
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="joinAs"
              className="block text-gray-700 font-semibold mb-2"
            >
              Join As
            </label>
            <select
              id="joinAs"
              name="joinAs"
              value={formData.joinAs}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select your role</option>
              <option value="professional">Join as a professional</option>
              <option value="manager">Hire event manager</option>
            </select>
            {errors.joinAs && (
              <p className="text-red-500 text-sm mt-2">{errors.joinAs}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 font-semibold">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
