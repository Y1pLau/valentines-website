import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = '181015514651-iq6hn140uv50roq8aqa7thflrnhqgdu8.apps.googleusercontent.com'; // Replace with your Google OAuth client ID
const API_KEY = 'YOUR_API_KEY'; // Replace with your Google API key
const SCOPES = 'https://www.googleapis.com/auth/photoslibrary.readonly';

function GoogleAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        setIsAuthenticated(authInstance.isSignedIn.get());
        authInstance.isSignedIn.listen(setIsAuthenticated);
      });
    });
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={handleAuthClick}>Sign in with Google</button>
      ) : (
        <p>Authenticated</p>
      )}
    </div>
  );
}

export default GoogleAuth;
