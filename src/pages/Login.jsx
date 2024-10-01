import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../assets/EyeSlashFilledIcon";
import Logo from '../assets/medic.jpg'

export default function Login() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex h-screen justify-center items-center bg-light-green">
  <div className="bg-white rounded-lg shadow-lg p-10 max-w-md flex-grow"> 
        <img
          alt="Your Company"
          src={Logo} 
          className="mx-auto h-20 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>

        <form action="#" method="POST" className="space-y-6 mt-10">
          <div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input type="email" label="Email" />
            </div>
          </div>

          <div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input
                label="Password"
                placeholder="Enter your password"
                type={isVisible ? "text" : "password"}
                className="w-full"
              />
              <button
                className="focus:outline-none ml-2"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            </div>
          </div>

          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}