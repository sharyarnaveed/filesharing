import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import generateUniqueId from "generate-unique-id";
import axios from "axios";
const Send = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");

const [success,SetSuccessState]=useState(false);
const [SuccessMsg,SetSuccessMsg]=useState("");

const [errorState,SeterrorState]=useState(false)
const [errorMsg,SetErrormsg]=useState("")


const selectedfile=watch("file")
const [generatedcode,SetGeeratedcode]=useState("");
useEffect(()=>
{

  const id=generateUniqueId({
    length:9
  });
  SetGeeratedcode(id)
  console.log(id);
},[])


const onsubmit=async(data)=>
{

  console.log("Uploaded File:", data.file[0]); // Logs file object
  const formData = new FormData();
  formData.append("file", data.file[0]);
  formData.append("gencode",generatedcode)
const responce=await axios.post("http://localhost:3000/api/user/save",formData);
console.log(responce.data);

if (responce.data.success) {
  SetSuccessState(true);
  SetSuccessMsg(responce.data.message);

setTimeout(()=>
{
  SetSuccessState(false);
  SetSuccessMsg("");

},4000)

}
else{
  SeterrorState(true);
  SetErrormsg(responce.data.message);
  setTimeout(()=>
    {
      SeterrorState(false);
      SetErrormsg("");
      },4000)
      }




}

const copytext=()=>
{

}
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-white text-center mb-8">
            Send File
          </h1>
{success&&(
  <div className="bg-green-100 border border-green-400 text-green-700">
    {SuccessMsg}
    </div>

)}
          <div className="bg-gray-900 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-sm">Your Code</span>
              <button onClick={copytext} className="text-gray-400 hover:text-white text-sm">
                Copy
              </button>
            </div>
            <div className="font-mono text-2xl text-center text-white tracking-wider" >
              {generatedcode}
            </div>
          </div>

          <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">
            <div className="flex items-center justify-center w-full">
              <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide border border-blue-200 cursor-pointer hover:bg-gray-50 transition-colors">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="mt-2 text-base leading-normal text-gray-600">
                  Select a file
                </span>
                <input
                  type="file"
                  {...register("file", { required: "File Is required" })}
                  className="hidden"
                  
                />
                {errors.file && (
                  <p style={{ color: "red" }}>{errors.file.message}</p>
                )}
              </label>
            </div>

            {/* Send Button */}
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              <span>Send File</span>
            </button>
          </form>

          {/* File Info Display */}
          <div className="mt-6 text-center text-white text-sm">
          File Selected:{" "}
          {selectedfile?.length > 0 ? selectedfile[0].name : "No file selected"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Send;
