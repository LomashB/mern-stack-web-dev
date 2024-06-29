// The Token Manager:
// You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token, expirationMinutes) {
    const expirationMS = expirationMinutes * 60 * 1000; 
    const expirationTime = new Date().getTime() + expirationMS; 
    localStorage.setItem('authToken', token);
    localStorage.setItem('authTokenExpiration', expirationTime.toString());
}

// Example usage
const authToken = 'your_auth_token_here'; 
const expirationMinutes = 60; 

setAuthToken(authToken, expirationMinutes);
