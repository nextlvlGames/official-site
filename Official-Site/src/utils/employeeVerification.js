/**
 * Verify employee by secret code
 * @param {string} secretCode - The secret code to verify
 * @returns {object} - Result of verification { success: boolean, message: string }
 */
export const verifyEmployeeByCode = (secretCode) => {
  console.log('Verifying employee with code:', secretCode);
  console.log('Current environment:', process.env.NODE_ENV || 'development');
  console.log('Browser location:', window.location);
  console.log('Document URL:', document.URL);
  console.log('Pathname:', window.location.pathname);
    try {
    // For now, we're hard-coding the verification for the specific ID
    if (secretCode === 'l29sm5nv7ubr') {
      // Use environment variables to determine if we're in production
      const isProduction = import.meta.env.VITE_IS_PRODUCTION === 'true';
      const domain = isProduction ? 'https://nextlvlgames.site' : window.location.origin;
      const redirectUrl = `/verify?employee_id=${secretCode}`;
      
      console.log('Environment:', isProduction ? 'Production' : 'Development');
      console.log('Using domain:', domain);
      console.log('Employee verified successfully');
      console.log('Generated redirect URL:', redirectUrl);
      console.log('Full URL would be:', `${domain}${redirectUrl}`);
      console.log('Base URL:', window.location.origin);
      console.log('Protocol:', window.location.protocol);
      console.log('Host:', window.location.host);
      console.log('Hostname:', window.location.hostname);
      console.log('Available routes check - current URL structure:');
      console.log('Request headers:', document.cookie ? 'Cookies available' : 'No cookies');
      
      // Debug info for checking URL construction
      const constructedUrl = new URL(redirectUrl, window.location.origin);
      console.log('Constructed URL object:', constructedUrl.toString());
      console.log('URL pathname:', constructedUrl.pathname);
      console.log('URL search params:', constructedUrl.search);        return { 
        success: true, 
        message: 'Verified',
        redirectUrl: isProduction ? `${domain}${redirectUrl}` : redirectUrl
      };
    } else {
      console.log('Employee verification failed - Invalid code provided');
      return { 
        success: false, 
        message: 'Not Verified',
        redirectUrl: null
      };
    }
  } catch (error) {
    console.error('Error in verification process:', error);
    return { 
      success: false, 
      message: 'Error verifying employee',
      redirectUrl: null
    };
  }
};

/**
 * In the future, this could be expanded to include Firebase verification
 * by importing the necessary Firebase client libraries
 */
