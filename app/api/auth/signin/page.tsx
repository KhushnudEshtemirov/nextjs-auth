"use client";

import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex w-full h-screen gap-5 items-center justify-center flex-col">
      <h2 className="text-3xl">Login account</h2>
      <form onSubmit={handleSubmit}>
        <div className="bg-zinc-200 flex flex-col gap-5 p-5">
          <label>
            Enter email
            <input
              className="outline-none rounded p-2 px-3 ml-2"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Enter password
            <input
              className="outline-none rounded p-2 px-3 ml-2"
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit" className="bg-green-500 text-white rounded p-2">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
