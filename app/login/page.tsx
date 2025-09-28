"use client";
import { useQuery } from "@apollo/client/react";
import Link from "next/link";
import { GetUsersQuery } from "./lib/types";
import { GET_USERS } from "../lib/queries";
import React from "react";

export default function Page() {
  const { data, loading, error } = useQuery<GetUsersQuery>(GET_USERS);

  React.useEffect(() => {
    if (data) {
      data?.users?.map((users) => console.log(users));
    }
  }, [data]);
  return (
    <div className="flex flex-wrap max-h-screen w-full justify-center rounded-l-xl py-40">
      <div className="bg-primary flex shadow-md rounded-xl">
        <div
          className="flex flex-wrap content-center justify-start rounded-l-xl bg-primaryOrange"
          style={{ width: "24rem", height: "32rem" }}
        >
          <div className="flex items-center justify-start space-x-3 ms-6">
            {/* <img
                alt="navbar logo"
                src={NavBarLogo}
                className=" rounded-full w-full h-12 mb-4"
              /> */}
          </div>
          <div className="space-y-5 ms-6 text-white">
            <h1 className="lg:text-3xl xl:text-4xl xl:leading-snug font-extrabold">
              Enter your account and discover our services
            </h1>
            <p className="text-lg">You do not have an account?</p>
            <Link
              href="/Sign Up"
              className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-primaryGreen bg-primaryGreen text-white no-underline"
            >
              Create account here
            </Link>
          </div>
        </div>

        <div
          className="flex flex-wrap content-center justify-center rounded-r-xl"
          style={{ width: "24rem", height: "32rem" }}
        >
          <div className="w-72">
            <div className="text-white">
              <h1 className="text-xl font-semibold">Log into Lunan</h1>
              <small className="text-gray-400">
                Please enter your account !
              </small>
            </div>

            <form
              className="mt-4 text-white"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="mb-3 text-black">
                <label className="mb-2 block text-xs font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  //   value={email}
                  //   onChange={handleEmailChange}
                  className="block w-full rounded-md border border-gray-300 focus:border-primaryOrange focus:outline-none focus:ring-1 focus:ring-primaryOrange py-1 px-1.5 "
                  required
                />
              </div>

              <div className="mb-3 text-black">
                <label className="mb-2 block text-xs font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="*********"
                  className="block w-full rounded-md border border-gray-300 focus:border-primaryOrange focus:outline-none focus:ring-1 focus:ring-primaryOrange py-1 px-1.5"
                  //   value={password}
                  //   onChange={handlePasswordChange}
                  required
                />
              </div>
              <button
                className="inline-block flex-none mt-2 px-5 py-2 border-2 rounded-lg font-medium border-primaryOrange bg-primaryOrange text-white"
                onClick={async () => {
                  //   await login(email, password);
                }}
              >
                Login
              </button>
              <div className="mb-3 mt-2 flex flex-wrap content-center">
                <button
                  className="text-xs font-semibold text-primaryOrange"
                  //   onClick={HandleModalShow}
                  style={{ cursor: "pointer" }}
                >
                  Forgot password?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
