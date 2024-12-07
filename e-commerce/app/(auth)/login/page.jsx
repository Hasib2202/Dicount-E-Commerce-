"use client"
import Link from "next/link";
import toast from "react-hot-toast";
import { auth } from "lib/firebase";

export default function Page() {
  return (
    <main className="flex items-center justify-center w-full min-h-screen p-10 bg-gray-300 md:p-24">
      <section className="flex flex-col gap-3">
        <div className="flex justify-center">
          <img src="/logo.png" className="h-12" alt="" />
        </div>
        <div className="flex flex-col gap-3 bg-white md:p-10 p-5 rounded-xl md:min-w-[440px] w-full ">
          <h1 className="text-xl font-bold">Login With Email </h1>
          <form action="" className="flex flex-col gap-3">
            <input
              placeholder="Enter Your Email"
              type="email"
              name="user-email"
              id="user-email"
              className="w-full px-3 py-2 border rounded-xl focus:outline-none"
            />

            <input
              placeholder="Enter Your Password"
              type="password"
              name="user-password"
              id="user-password"
              className="w-full px-3 py-2 border rounded-xl focus:outline-none"
            />

            <button className="px-3 py-2 bg-blue-600 rounded-xl hover:bg-sky-700 ">
              Login
            </button>
            <hr />
          </form>
          <div className="flex justify-between">
            <Link href={"/sign-up"}>
              <button className="text-sm font-semibold text-blue-400">
                Create Account
              </button>
            </Link>
            <Link href={"/forget-password"}>
              <button className="text-sm font-semibold text-blue-400">
                Forget Password?
              </button>
            </Link>
          </div>
          <SignInWithGoogle />
        </div>
      </section>
    </main>
  );
}

function SignInWithGoogle() {
  const handleLogin = async () => {
    try {
      const user = await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <button onClick={handleLogin} className="px-3 py-2 bg-gray-400 rounded-xl hover:bg-sky-700 ">
      Sign InWith Google
    </button>
  );
}
