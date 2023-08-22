export default function SignUp() {
  return (
    <div className="flex h-screen items-start justify-center bg-[#212936] p-20 text-[#ebebeb]">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-[#337180] p-8 shadow-2xl">
        <h1 className="mb-4 text-center text-2xl font-bold">Join Us</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="mb-2 block text-[#ebebeb]">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full rounded border border-[#ebebeb] bg-[#212936] p-2 text-[#ebebeb] transition hover:border-[#cad2c5] focus:border-[#d64933]"
              placeholder="Username"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-[#ebebeb]">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded border border-[#ebebeb] bg-[#212936] p-2 text-[#ebebeb] transition hover:border-[#cad2c5] focus:border-[#d64933]"
              placeholder="user@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-[#ebebeb]">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded border border-[#ebebeb] bg-[#212936] p-2 text-[#ebebeb] transition hover:border-[#cad2c5] focus:border-[#d64933]"
              placeholder="********"
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="mb-2 block text-[#ebebeb]"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full rounded border border-[#ebebeb] bg-[#212936] p-2 text-[#ebebeb] transition hover:border-[#cad2c5] focus:border-[#d64933]"
              placeholder="********"
            />
          </div>

          <button className="w-full rounded bg-[#d64933] p-2 font-bold transition hover:opacity-90">
            Sign Up
          </button>
        </form>

        <div className="text-center">
          <p className="text-[#ebebeb]">
            Already have an account?{" "}
            <a href="/signin" className="text-[#cad2c5] underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
