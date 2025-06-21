import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Verify employee by secret code
 * @param {string} secretCode - The secret code to verify
 * @returns {object} - Result of verification { success: boolean, message: string }
 */
export const verifyEmployeeByCode = async (secretCode) => {
  console.log('Verifying employee with code:', secretCode);
  
  try {
    // We should check against a list of valid employee codes stored in Firestore
    // rather than hardcoding them
    const employeeRef = doc(db, 'employee_codes', secretCode);
    const employeeSnapshot = await getDoc(employeeRef);
    
    if (employeeSnapshot.exists()) {
      // Use environment variables to determine if we're in production
      const isProduction = import.meta.env.VITE_IS_PRODUCTION === 'true';
      const domain = isProduction ? 'https://nextlvlgames.site' : window.location.origin;
      const redirectUrl = `/verify?employee_id=${secretCode}`;
      
      // Get the associated employee ID from the code document
      const associatedEmployeeId = employeeSnapshot.data().employeeId || secretCode;
      
      console.log('Employee verification code found');
      
      // Return enhanced response with redirection options
      return { 
        success: true, 
        message: 'Verified',
        // The relative URL path for client-side routing
        redirectUrl: redirectUrl,
        // The full URL with domain for direct browser navigation
        fullUrl: `${domain}${redirectUrl}`,
        // The employee ID associated with this code
        employeeId: associatedEmployeeId,
        // State flag that can be used by the component
        verified: true
      };
    } else {
      console.log('Employee verification failed - Invalid code provided');
      return { 
        success: false, 
        message: 'Not Verified',
        redirectUrl: null,
        verified: false
      };
    }
  } catch (error) {
    console.error('Error in verification process:', error);
    return { 
      success: false, 
      message: 'Error verifying employee',
      redirectUrl: null,
      verified: false
    };
  }
};

/**
 * Verify employee using Firebase
 * @param {string} employeeId - The employee ID to look up in Firestore
 * @returns {Promise<object>} - Employee data or null if not found
 */
export const verifyEmployeeWithFirebase = async (employeeId) => {
  try {
    const employeeRef = doc(db, 'employees', employeeId);
    const employeeSnapshot = await getDoc(employeeRef);
    
    if (employeeSnapshot.exists()) {
      return {
        success: true,
        message: 'Verified via Firebase',
        data: employeeSnapshot.data(),
        employeeId: employeeId,
        verified: true
      };
    } else {
      return {
        success: false,
        message: 'Employee not found in database',
        data: null,
        verified: false
      };
    }
  } catch (error) {
    console.error('Firebase verification error:', error);
    return {
      success: false,
      message: 'Error verifying with database',
      error: error.message,
      verified: false
    };
  }
};
