import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../react-query/api/auth";
import { useMutation } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import { Spin } from "antd";  

import "react-toastify/dist/ReactToastify.css";
import { setUserInfo } from "../../utils/localStorage";

function Login() {
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data)
    mutation.mutate(data);
  };

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setLoading(false);
      setUserInfo(data.token);
      toast.success("Successfully logged in");
      data.role === "Admin" ? navigate("/admin") : navigate("/");
    },
    onError: (error) => {
      setLoading(false);
      toast.error(error.response.data.message);
    },
  });

  return (
    <div
      className="flex items-center justify-center h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-vector/abstract-technology-particles-low-poly-background_1017-23831.jpg?t=st=1731160202~exp=1731163802~hmac=de4e6561b23c066d07916113e5d42b0a299769c9ad489f4e5552c0bd67d75ca0&w=1060)`,
      }}
    >
      <div className="flex flex-col bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-lg p-8 w-full max-w-md md:max-w-lg">
        <p className="text-2xl font-semibold text-blue-700 text-center mb-4">Welcome Back!</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-gray-600 text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              {...register("userId")}
              className="text-gray-700 border border-gray-300 rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              {...register("password")}
              className="text-gray-700 border border-gray-300 rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              required
            />
            <a href="#" className="text-xs text-blue-600 hover:underline float-right mt-1">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 w-full rounded-full hover:bg-blue-700 transition-all"
          >
            {loading ? <Spin spinning={loading} /> : "Login"}
          </button>
        </form>
        <button
          className="flex items-center justify-center bg-gray-200 mt-4 py-2 px-4 w-full rounded-full text-gray-600 hover:bg-gray-300 transition-all"
        >
          <svg className="h-5 w-5 mr-2" viewBox="0 0 40 40">
            <path
              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              fill="#FFC107"
            />
          </svg>
          Sign in with Google
        </button>
        <div className="text-center mt-4 text-sm text-gray-600">
          Don&apos;t have an account yet?
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 cursor-pointer ml-1 hover:underline"
          >
            Sign Up
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
