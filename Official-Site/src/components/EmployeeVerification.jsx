import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
        
        // Query Firestore for the employee
        const employeeRef = doc(db, 'employees', employeeId);
        const employeeSnapshot = await getDoc(employeeRef);
        
        if (employeeSnapshot.exists()) {
          setEmployeeData(employeeSnapshot.data());
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-soulblue-800">
        <div className="text-center p-8 bg-soulblue-700 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Verifying Employee Status...</h2>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-soulblue-400 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-soulblue-800">
        <div className="text-center p-8 bg-soulblue-700 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Verification Failed</h2>
          <p className="text-white">{error}</p>
          <a href="/" className="mt-6 inline-block bg-soulblue-500 hover:bg-soulblue-400 text-white font-bold py-2 px-4 rounded-lg">
            Return to Homepage
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-soulblue-800">
      <div className="text-center p-8 bg-soulblue-700 rounded-lg shadow-lg max-w-md w-full">
        <div className="bg-soulblue-600 p-4 rounded-lg inline-block mb-4">
          <img src="/images/logo.png" alt="NextLvlGames" className="h-16 w-auto" />
        </div>
        <h2 className="text-2xl font-bold text-green-400 mb-4">Employee Verified</h2>
        
        {employeeData && (
          <div className="bg-soulblue-800 p-6 rounded-lg">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-soulblue-400">Employee Information</h3>
            </div>
            <div className="space-y-2 text-left">
              {employeeData.name && (
                <p className="text-white"><span className="text-soulblue-400 font-semibold">Name:</span> {employeeData.name}</p>
              )}
              {employeeData.position && (
                <p className="text-white"><span className="text-soulblue-400 font-semibold">Position:</span> {employeeData.position}</p>
              )}
              {employeeData.department && (
                <p className="text-white"><span className="text-soulblue-400 font-semibold">Department:</span> {employeeData.department}</p>
              )}
              {employeeData.joinDate && (
                <p className="text-white"><span className="text-soulblue-400 font-semibold">Join Date:</span> {new Date(employeeData.joinDate.seconds * 1000).toLocaleDateString()}</p>
              )}
            </div>
          </div>
        )}
        
        <div className="mt-6">
          <p className="text-soulblue-400">This employee is verified as a member of NextLvlGames.</p>
          <a href="/" className="mt-4 inline-block bg-soulblue-500 hover:bg-soulblue-400 text-white font-bold py-2 px-4 rounded-lg">
            Return to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}

export default EmployeeVerification;
