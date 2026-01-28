import { useEffect, useState } from "react";

export default function SimpleFormValidation() {
  const initialValues = { username: "", password: "", email: "" };
  const [input, setInput] = useState(initialValues);
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(e) {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  }
  function handleValidation(value) {
    const errors = {};
    const emailVarificationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    const username = value.username;
    if (!username) {
      errors.username = "Username is required!";
    }
    const email = value.email;
    if (!email) {
      errors.email = "Email is required!";
    } else if (!emailVarificationRegex.test(email)) {
      errors.email = "Email must be valid";
    }
    const password = value.password;
    if (!password) {
      errors.password = "Password is required!";
    } else if (password.length < 4 || password.length > 20) {
      errors.password = "Password must be between 4 and 20 characters!";
    }

    return errors;
  }
  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = handleValidation(input);
    setError(validationErrors);
    setIsSubmit(true);

    if (Object.keys(validationErrors).length === 0) {
      setInput(initialValues);
    }
  }
  useEffect(() => {
    if (!isSubmit) return;
    const timer = setTimeout(() => {
      setIsSubmit(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [isSubmit]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d1117]">
      <div className="w-90 bg-[#161b22] border border-[#30363d] rounded-md p-6">
        <h2 className="text-white text-lg font-medium mb-5">Create account</h2>
        {Object.keys(error).length === 0 && isSubmit ? (
          <div className="text-green-500">Successfully submited</div>
        ) : (
          ""
        )}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1 text-left">
                Name
              </label>
              <input
                type="text"
                name="username"
                value={input.username}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded-md text-white text-sm text-left focus:outline-none focus:border-blue-500"
              />
              <div className="text-red-500 flex items-start text-[0.86rem] mt-0.5">
                {error.username}
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1 text-left">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded-md text-white text-sm text-left focus:outline-none focus:border-blue-500"
              />
              <div className="text-red-500 flex items-start text-[0.86rem] mt-0.5">
                {error.email}
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1 text-left">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded-md text-white text-sm text-left focus:outline-none focus:border-blue-500"
              />
              <div className="text-red-500 flex items-start text-[0.86rem] mt-0.5">
                {error.password}
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-2 bg-blue-600! hover:bg-blue-700 text-white text-sm font-medium rounded-md transition"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
