import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {login, logout} from "../features/authSlice";
import { Mutex } from 'async-mutex';

// Create a mutex to prevent multiple refresh token requests
const mutex = new Mutex();

// Set up the base query with the API URL and cookie handling
const baseQuery = fetchBaseQuery({
    baseUrl: `https://snapcart-3o5b.onrender.com/api/v1/`,
    // baseUrl: `http://localhost:8000/api/v1/`,
    credentials: 'include', // This ensures cookies are sent with requests
});

// Create a custom base query that handles token refresh
const baseQueryWithReAuth = async (args, api, extraOptions) => {
    // Wait if there's a token refresh in progress
    await mutex.waitForUnlock();
    // Try the initial query
    let result = await baseQuery(args, api, extraOptions);

    // If we get a 401 (Unauthorized) error, try to refresh the token
    if (result.error && result.error.status === 401) {
        // Check if we're already refreshing the token
        if (!mutex.isLocked()) {
            // Lock the mutex to prevent multiple refresh requests
            const release = await mutex.acquire();

            try {
                // Attempt to refresh the token
                const refreshResult = await baseQuery(
                    {
                        url: 'auth/jwt/refresh/',
                        method: 'POST',
                    },
                    api,
                    extraOptions
                );

                if (refreshResult.data) {
                    // If refresh successful, update auth state
                    api.dispatch(login());
                    // Retry the initial query
                    result = await baseQuery(args, api, extraOptions);
                } else {
                    // If refresh failed, log the user out
                    api.dispatch(logout());
                }
            } finally {
                // Always release the mutex
                release();
            }
        } else {
            // If another refresh is in progress, wait for it to complete
            await mutex.waitForUnlock();
            // Retry the initial query
            result = await baseQuery(args, api, extraOptions);
        }
    }
    return result;
};

// Create the API slice with the custom base query
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReAuth,
    endpoints: builder => ({}), // Endpoints will be injected in other files
});