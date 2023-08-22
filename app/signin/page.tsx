export default function SignIn() {
  return (
    <div className="flex h-screen items-start justify-center bg-[#212936] pt-28 text-[#ebebeb]">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-[#337180] p-8 shadow-2xl">
        <h1 className="mb-4 text-center text-2xl font-bold">Welcome Back</h1>
        <form className="space-y-4">
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

          <div className="flex items-center justify-between">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-[#ebebeb]">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-[#cad2c5] underline">
              Forgot password?
            </a>
          </div>

          <button className="font-boltransition w-full rounded bg-[#d64933] p-2 hover:opacity-90">
            Sign In
          </button>
        </form>

        <div className="text-center">
          <p className="text-[#ebebeb]">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-[#cad2c5] underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
