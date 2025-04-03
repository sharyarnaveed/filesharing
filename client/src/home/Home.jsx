import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-2xl w-full max-w-md">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Easy File Share
          </h1>
          
          <div className="space-y-6">
            <Link to="/send" className="block w-full py-4 px-6 bg-white hover:bg-opacity-90 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <div className="flex items-center justify-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span className="text-lg font-semibold text-gray-800">Send File</span>
              </div>
            </Link>

            <Link to="/receive" className="block w-full py-4 px-6 bg-white hover:bg-opacity-90 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <div className="flex items-center justify-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="text-lg font-semibold text-gray-800">Receive File</span>
              </div>
            </Link>
          </div>
          
          <p className="text-white text-center mt-8 text-sm">
            Securely share files with anyone, anywhere
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home