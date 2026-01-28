import { useForm } from "react-hook-form";

export default function FormValidationReactHookForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d1117]">
      <div className="w-90 bg-[#161b22] border border-[#30363d] rounded-md p-6">
        <h2 className="text-white text-lg font-medium mb-5">Create account</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1 text-left">
                Name
              </label>
              <input
                type="text"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Username must be less than 20 characters",
                  },
                })}
                className={`w-full px-3 py-2 bg-[#0d1117] border rounded-md text-white text-sm text-left focus:outline-none ${
                  errors.username
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#30363d] focus:border-blue-500"
                }`}
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1 text-left">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1 text-left">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-3 py-2 bg-[#0d1117] border rounded-md text-white text-sm text-left focus:outline-none ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#30363d] focus:border-blue-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 text-left">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1 text-left">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  validate: {
                    hasLowerCase: (value) =>
                      /[a-z]/.test(value) ||
                      "Password must contain at least one lowercase letter",
                    hasUpperCase: (value) =>
                      /[A-Z]/.test(value) ||
                      "Password must contain at least one uppercase letter",
                    hasNumber: (value) =>
                      /[0-9]/.test(value) ||
                      "Password must contain at least one number",
                  },
                })}
                className={`w-full px-3 py-2 bg-[#0d1117] border rounded-md text-white text-sm text-left focus:outline-none ${
                  errors.password
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#30363d] focus:border-blue-500"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 text-left">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
