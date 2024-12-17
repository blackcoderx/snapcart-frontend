import {apiSlice} from "./auth";

export const orderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        placeOrder:
            builder.mutation({
                query: (order) => ({
                    url: "/order/create",
                    method: "POST",
                    body: JSON.stringify(order),
                }),
            }),
        getOrderList:
        builder.query({ query: () => `/order/`, }),
        getOrderItem:
        builder.query({ query: (id) => `/order/${id}/details/`, }),

    })

})

export const {
    usePlaceOrderMutation,
    useGetOrderListQuery,
    useGetOrderItemQuery,
} = orderApi