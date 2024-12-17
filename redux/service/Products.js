import {apiSlice} from "./auth";


export const productsApi = apiSlice.injectEndpoints( {

    endpoints: (builder) => ({
        getProducts:
            builder.query({ query: () => 'products/',}),
        getProductById:
            builder.query({ query: (id) => `products/${id}/`,
            }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: "products/post/",
                method: "POST",
                body: JSON.stringify(product),
            })
        }),
        likeProduct: builder.mutation(
            { query: (id) => ({
                    url: `products/${id}/like/`,
                    method: 'POST',
                }),
            }),
        unLikeProduct: builder.mutation(
            { query: (id) => ({
                    url:`products/${id}/unlike/`,
                   method: 'DELETE',
                })
            }),
        commentProduct: builder.mutation(
            { query: (id) => `products/${id}/comment/`,
            }),
        deleteProduct: builder.mutation(
            { query: (id) => ({
                    url:`products/${id}/delete`,
                   method: 'DELETE'
                }),
            }),
    }),


})






export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useAddProductMutation,
    useLikeProductMutation,
    useUnLikeProductMutation,
    useCommentProductMutation,
    useDeleteProductMutation } = productsApi


