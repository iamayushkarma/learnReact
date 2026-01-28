import { useId } from "react";

export default function UseId() {
  return (
    <div className="min-h-screen bg-[#0d1117] p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          React useId() Hook Demo
        </h1>

        <div className="space-y-6">
          {/* Example 1: Simple Form */}
          <FormSection />

          {/* Example 2: Multiple Instances */}
          <div className="bg-[#161b22] p-6 rounded-lg border border-[#30363d]">
            <h2 className="text-xl font-semibold text-white mb-4">
              Multiple Form Instances
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Notice how each form gets unique IDs even though they use the same
              component
            </p>
            <FormSection />
            <FormSection />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable form component
function FormSection() {
  // useId generates a unique ID for this component instance
  const nameId = useId();
  const emailId = useId();

  return (
    <div className="bg-[#161b22] p-6 rounded-lg border border-[#30363d]">
      <h3 className="text-lg font-medium text-white mb-4">User Form</h3>

      <div className="space-y-4">
        <div>
          <label htmlFor={nameId} className="block text-sm text-gray-400 mb-2">
            Name
          </label>
          <input
            id={nameId}
            type="text"
            className="w-full px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded-md text-white"
            placeholder="Enter your name"
          />
          <p className="text-xs text-gray-500 mt-1">ID: {nameId}</p>
        </div>

        <div>
          <label htmlFor={emailId} className="block text-sm text-gray-400 mb-2">
            Email
          </label>
          <input
            id={emailId}
            type="email"
            className="w-full px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded-md text-white"
            placeholder="Enter your email"
          />
          <p className="text-xs text-gray-500 mt-1">ID: {emailId}</p>
        </div>
      </div>
    </div>
  );
}
