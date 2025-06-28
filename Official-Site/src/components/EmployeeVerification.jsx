import React, { useState } from 'react';

const EmployeeVerification = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [status, setStatus] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy verification logic
    if (employeeId && verificationCode) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-soulblue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-soulblue-700 rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Employee Verification</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="employeeId" className="block text-sm font-medium mb-1">
                Employee ID
              </label>
              <input
                type="text"
                id="employeeId"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                className="w-full px-4 py-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-soulblue-500"
                placeholder="Enter your employee ID"
                required
              />
            </div>
            
            <div>
              <label htmlFor="verificationCode" className="block text-sm font-medium mb-1">
                Verification Code
              </label>
              <input
                type="text"
                id="verificationCode"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="w-full px-4 py-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-soulblue-500"
                placeholder="Enter verification code"
                required
              />
            </div>
            
            <div>
              <button 
                type="submit" 
                className="w-full bg-soulblue-500 hover:bg-soulblue-600 py-2 rounded font-medium transition duration-300"
              >
                Verify
              </button>
            </div>
          </form>
          
          {status === 'success' && (
            <div className="mt-6 bg-green-900 bg-opacity-50 border border-green-500 rounded p-4 text-green-200">
              <p className="font-medium">Verification successful!</p>
              <p className="text-sm mt-1">Welcome back, employee.</p>
            </div>
          )}
          
          {status === 'error' && (
            <div className="mt-6 bg-red-900 bg-opacity-50 border border-red-500 rounded p-4 text-red-200">
              <p className="font-medium">Verification failed!</p>
              <p className="text-sm mt-1">Please check your credentials and try again.</p>
            </div>
          )}
          
          <div className="mt-8 text-center text-sm text-soulblue-300">
            <p>Need help? <a href="#" className="underline hover:text-white">Contact Support</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeVerification;