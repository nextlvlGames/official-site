import { useState, useEffect } from 'react';
// Import the utility functions for employee verification
import { verifyEmployeeByCode, verifyEmployeeWithFirebase } from '../utils/employeeVerification';
import { Link } from 'react-router-dom';

// Firebase is initialized in the employeeVerification.js utility file

function EmployeeVerification() {
  const [employeeData, setEmployeeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function verifyEmployee() {
      try {
        setLoading(true);
        
        // Get employee_id from URL
        const params = new URLSearchParams(window.location.search);
        const employeeId = params.get('employee_id');
        
        if (!employeeId) {
          setError('No employee ID provided');
          setLoading(false);
          return;
        }
          // Try Firebase verification first
        const firebaseResult = await verifyEmployeeWithFirebase(employeeId);
        
        if (firebaseResult.success) {
          // Use the employee data from Firebase
          setEmployeeData(firebaseResult.data);
          setLoading(false);
          return;
        }        // If Firebase verification failed, try verification by code as fallback
        const verificationResult = await verifyEmployeeByCode(employeeId);
        if (verificationResult.success) {
          // Use the employee ID from the code verification to get employee data
          const employeeData = await verifyEmployeeWithFirebase(verificationResult.employeeId);
          if (employeeData.success) {
            setEmployeeData(employeeData.data);
            setLoading(false);
            return;
          } else {
            setError('Employee data not found. Please contact support.');
          }
        } else {
          setError('Employee not found');
        }
      } catch (err) {
        console.error('Error verifying employee:', err);
        setError('Error verifying employee status');
      } finally {
        setLoading(false);
      }
    }
    
    verifyEmployee();
  }, []);

  // Format date function
  const formatDate = (dateObj) => {
    if (!dateObj || !dateObj.seconds) return 'N/A';
    const date = new Date(dateObj.seconds * 1000);
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center p-6 sm:p-8 bg-soulblue-700 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Verifying Employee Status...</h2>
          <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-soulblue-400 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center p-6 sm:p-8 bg-soulblue-700 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl sm:text-2xl font-bold text-red-500 mb-3 sm:mb-4">Verification Failed</h2>
          <p className="text-white">{error}</p>
          <Link to="/" className="mt-4 sm:mt-6 inline-block bg-soulblue-500 hover:bg-soulblue-400 text-white font-bold py-2 px-4 rounded-lg">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center p-6 sm:p-8 bg-soulblue-700 rounded-lg shadow-lg w-full max-w-md">
        <div className="bg-soulblue-600 p-3 sm:p-4 rounded-lg inline-block mb-3 sm:mb-4">
          <img src="/images/logo.png" alt="NextLvlGames" className="h-12 sm:h-16 w-auto" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-green-400 mb-3 sm:mb-4">Employee Verified</h2>
        
        {employeeData && (
          <div className="bg-soulblue-800 p-4 sm:p-6 rounded-lg text-left">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-soulblue-400 mb-4">Employee Information</h3>
              <div className="space-y-3 text-left">
                {employeeData.name && (
                  <p className="text-white"><span className="text-soulblue-400 font-semibold">Name:</span> {employeeData.name}</p>
                )}
                {employeeData.role && (
                  <p className="text-white"><span className="text-soulblue-400 font-semibold">Position:</span> {employeeData.role}</p>
                )}
                {employeeData.joinDate && (
                  <p className="text-white"><span className="text-soulblue-400 font-semibold">Join Date:</span> {formatDate(employeeData.joinDate)}</p>
                )}
                {employeeData.endDate && (
                  <p className="text-white"><span className="text-soulblue-400 font-semibold">End Date:</span> {formatDate(employeeData.endDate)}</p>
                )}
                {employeeData.salary && (
                  <p className="text-white"><span className="text-soulblue-400 font-semibold">Compensation:</span> {employeeData.salary}</p>
                )}
                {employeeData.mentor && (
                  <p className="text-white"><span className="text-soulblue-400 font-semibold">Mentor:</span> {employeeData.mentor}</p>
                )}
                {employeeData.mentorPosition && (
                  <p className="text-white"><span className="text-soulblue-400 font-semibold">Mentor Position:</span> {employeeData.mentorPosition}</p>
                )}
              </div>
            </div>
            
            {employeeData.testimonial && (
              <div className="mt-6 bg-soulblue-700 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-soulblue-400 mb-2">Mentor Testimonial</h4>
                <blockquote className="italic text-gray-300 border-l-4 border-soulblue-400 pl-4">
                  "{employeeData.testimonial}"
                </blockquote>
              </div>
            )}
          </div>
        )}
        
        <div className="mt-4 sm:mt-6">
          <p className="text-soulblue-400">This employee is verified as a member of NextLvlGames.</p>
          <Link to="/" className="mt-3 sm:mt-4 inline-block bg-soulblue-500 hover:bg-soulblue-400 text-white font-bold py-2 px-4 rounded-lg">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmployeeVerification;
