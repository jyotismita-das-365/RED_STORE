const Account = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-red-600">
          Create Your Account
        </h1>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-base font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              className="border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-base font-medium mb-2">
              Phone Number
            </label>
            <input
              type="number"
              name="number"
              placeholder="Enter Phone Number"
              minLength={10}
              className="border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-base font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Create Secure Password"
              className="border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button className="bg-red-500 text-white font-semibold py-3 rounded hover:bg-red-600 transition mt-4 text-lg">
            Submit
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-base">
            Already Have an Account?{" "}
            <a
              href="#login"
              className="text-red-500 hover:underline font-semibold"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
