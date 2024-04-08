import { postApi } from "./postApi";

export const postInjectEndPointsApi = postApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["posts", "post"],
    }),

    getPost: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: ["post"],
    }),

    setPost: builder.mutation({
      query: ({ ...post }) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["posts"],
    }),

    removePost: builder.mutation({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["posts", "post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useSetPostMutation,
  useRemovePostMutation,
} = postInjectEndPointsApi;
