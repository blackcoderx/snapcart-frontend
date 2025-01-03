import {apiSlice} from "./auth";

const overrideConfig = {
    overrideExisting: true
};


export const usersApi = apiSlice.injectEndpoints({
    overrideConfig: overrideConfig,
    endpoints: (builder) =>
        ({
            registerUser:
                builder.mutation({
                    query: (user) => ({
                        url: "auth/users/",
                        method: "POST",
                        body: JSON.stringify(user),
                    }),
                }),
            fetchUser:
                builder.query({
                    query: () => `auth/users/me/`,
                }),
            activation:
                builder.mutation({
                    query: (uid, token) => ({
                        url: "auth/users/activation/",
                        method: "POST",
                        body: JSON.stringify({uid, token}),
                    })
                }),
            reSendActivation:
                builder.mutation({
                    query: (email) => ({
                        url: 'auth/users/resend_activation/',
                        method: 'POST',
                        body: {email}
                    })
                }),
            resetPassword:
                builder.mutation({
                    query: (email) => ({
                        url: 'auth/users/reset_password/',
                        method: 'POST',
                        body: {email}
                    })
                }),
            resetPasswordConfirmation:
                builder.mutation({
                    query: (uid, token, new_password, re_new_password) =>({
                        url: 'auth/users/reset_password_confirm/',
                        method: 'POST',
                        body: JSON.stringify({uid, token, new_password, re_new_password})
                    })
                }),
            loginUser:
            builder.mutation({
                query: (credentials) => ({
                    url: "auth/jwt/create/",
                    method: "POST",
                    body: credentials,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }),
            }),
            logoutUser:
            builder.mutation({
                query: () => ({
                    url: "/auth/logout/",
                    method: "POST",
                }),
            }),
            verify:
                builder.mutation({
                query: () => ({
                    url: 'auth/jwt/verify/',
                    method: 'POST',
                }),
            }),
            getCurrentUserFollows:
            builder.query({
                query:()  => `auth/user/follows/`,
            }),
            followUser:
            builder.mutation({
                query: (userId) => ({
                    url: `auth/users/follows/${userId}/`,
                    method: "POST",
                })
            }),
            unFollowUser:
            builder.mutation({
                query: (userId) => ({
                    url: `auth/users/unfollow/${userId}/`,
                    method: "POST",
                })
            }),
            getUserProfile:
            builder.query({
                query: (username) => `auth/user/profile/${username}/`,
            }),

        })

})

export const {
    useRegisterUserMutation,
    useFetchUserQuery,
    useActivationMutation,
    useResendActivationMutation,
    useResetPasswordMutation,
    useResetPasswordConfirmationMutation,
    useLoginUserMutation,
    useLogoutUserMutation,
    useVerifyMutation,
    useGetCurrentUserFollowsQuery,
    useUnFollowUserMutation,
    useFollowUserMutation,
    useGetUserProfileQuery,
} = usersApi






