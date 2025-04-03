import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Recieve = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    try {

      const response = await axios.post("http://localhost:3000/api/user/recieve", data, {
        responseType: "blob", 
      });
      console.log(response.data);
      
if(response.data.success===false)
{
  console.log("notfound");
  
}
else{
      const contentDisposition = response.headers['content-disposition'];
      let filename = data.code; 
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="(.+)"/);
        if (filenameMatch && filenameMatch[1]) {
          filename = filenameMatch[1];
        }
      }

      const url = window.URL.createObjectURL(new Blob([response.data], { 
        type: response.headers['content-type'] 
      }));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
}

    } catch (error) {
      console.error("Error in downloading file", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-white text-center mb-8">
            Receive File
          </h1>

          <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <input
                type="text"
                placeholder="Enter your code here..."
                {...register("code", { required: "Code is required" })}
                className="w-full px-4 py-3 text-xl text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {errors.code && (
              <p style={{ color: "red" }}>{errors.code.message}</p>
            )}

            <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition-colors shadow-lg flex items-center justify-center space-x-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download File</span>
            </button>
          </form>

          <div className="mt-6 text-center text-white text-sm">
            Enter the code to download your file
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recieve;
