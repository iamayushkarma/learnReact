import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormValidationFormikYap() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username must be less than 20 characters")
        .required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .required("Password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);
      alert("Form submitted successfully!");
      resetForm();
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d1117]">
      <div className="w-90 bg-[#161b22] border border-[#30363d] rounded-md p-6">
        <h2 className="text-white text-lg font-medium mb-5">Create account</h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1 text-left">
                Name
              </label>
              <input
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-3 py-2 bg-[#0d1117] border rounded-md text-white text-sm text-left focus:outline-none ${
                  formik.touched.username && formik.errors.username
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#30363d] focus:border-blue-500"
                }`}
              />
              {formik.touched.username && formik.errors.username && (
                <p className="text-red-500 text-xs mt-1 text-left">
                  {formik.errors.username}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1 text-left">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-3 py-2 bg-[#0d1117] border rounded-md text-white text-sm text-left focus:outline-none ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#30363d] focus:border-blue-500"
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1 text-left">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1 text-left">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-3 py-2 bg-[#0d1117] border rounded-md text-white text-sm text-left focus:outline-none ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#30363d] focus:border-blue-500"
                }`}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs mt-1 text-left">
                  {formik.errors.password}
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
