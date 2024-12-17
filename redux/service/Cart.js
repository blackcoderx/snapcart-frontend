import {apiSlice} from "./auth";

export const cartApi = apiSlice.injectEndpoints({
    endpoints: (builder) =>
        ({
            addToCart:
                builder.mutation({
                    query: (product_id) => ({
                        url: `/cart/add/${product_id}/`,
                        method: "POST",
                    }),

                }),
            removeFromCart:
            builder.mutation({
                query: (product_id) => ({
                    url: `/cart/remove/${product_id}/`,
                    method: "POST",
                }),
            }),
            getCart:
            builder.query({ query: () => '/cart/', }),
            updateCart:
            builder.mutation({
                query: (product_id, quantity) => ({
                    url: `/cart/update/${product_id}/`,
                    method: "POST",
                    body: JSON.stringify({quantity}),
                }),
            })

        })
})


export const {
    useAddToCartMutation,
    useRemoveFromCartMutation,
    useGetCartQuery,
    useUpdateCartMutation,
} = cartApi