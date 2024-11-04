import React, { useState } from "react";
import { useForm } from "react-hook-form";








function SignUp() {


  const { register, handleSubmit, formState: { errors } } = useForm();


  return (
    <div className="flex justify-center">
      <div className=" bg-slate-100 w-1/2 h-screen">
        Booking IO
      </div>
      <div className="w-1/2 flex justify-center">
      <div className=" w-[370px] p-5 mt-10 h-[450px]">
        <header className=" mb-5">
          <h1 className=" font-bold text-3xl">Create account</h1>
          <p className=" mt-5 text-gray-400">Welcome to Booking! Please enter your details</p>
        </header>
        <form>

          {/*Email section */}
          <div className=" mt-8">
          
          <label className="block mb-2" For="email">
            Email:
          </label>
          <input
            className="w-full px-2 py-1 mb-6 text-indigo-700 border border-gray-400 rounded-md  focus:bg-gray-100 placeholder:text-sm "
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <p>{errors.email.message}</p>}
          </div>

          
          {/*Password section */}
          <div>
          <label className="block mb-2" For="password">
            Password:
          </label>
          <input
            className="w-full px-2 py-1 mb-6 text-indigo-700 border border-gray-400 rounded-md  focus:bg-gray-100 placeholder:text-sm"
            type="password"
            placeholder="............"
            id="password"
            name="password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          </div>

          <div>
          <label className="block mb-2" For="name">
            Phone
          </label>
          <input
            className="w-full px-2 py-1 mb-6 text-indigo-700 border border-gray-400 rounded-md focus:bg-gray-300 placeholder:text-sm"
            type="tel"
            placeholder="Enter your phone number"
            id="phone"
            name="phone"
          />
          </div>

         

          <button
            className="w-full bg-indigo-700 text-white hover:bg-gray-200 font-bold py-2 px-4 mb-6 rounded mt-5 text-sm"
            type="submit"
          >
            Create Account
          </button>
        </form>
        <footer>
          <p className=" text-center text-sm">
            Already have an account ? <a href="/login" className=" text-indigo-500"> Login Here </a>
          </p>
        </footer>
      </div>
      </div>
    </div>
  );
}

export default SignUp;