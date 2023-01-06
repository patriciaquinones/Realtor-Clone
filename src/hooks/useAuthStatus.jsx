import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react'
import { useState } from 'react'
import { getAuth } from 'firebase/auth';

export function useAuthStatus() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);

    useEffect(() => {
        // Check if user is logged in
        const auth = getAuth();
        // Listen for auth state changes
        onAuthStateChanged(auth, (user) => {
            // If user is logged in, set loggedIn to true
            if (user) {
                setLoggedIn(true);
            }
            // If user is not logged in, set loggedIn to false
            setCheckingStatus(false);
            })
    }, [])
  return { loggedIn, checkingStatus }
}
