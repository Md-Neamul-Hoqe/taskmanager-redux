import Post from "../components/posts/post";
import { useGetPostQuery, useGetPostsQuery } from "../redux/features/postApi";

const Posts = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery();
  const {
    data: post,
    isLoading: isLoadingPost,
    error: postError,
  } = useGetPostQuery(50);

  return (
    <div>
      <h1 className="text-5xl my-10 text-center capitalize">All posts here</h1>
      <div className="flex max-lg:flex-col-reverse gap-6 w-full mx-5">
        <div className="flex-1">
          {error ? (
            <p className="text-xl text-red-500 font-mono">
              {error.status}: Oh! Something wrong.
            </p>
          ) : isLoading ? (
            <h1 className="text-5xl text-center">Data Loading...</h1>
          ) : posts?.length ? (
            <div className="grid grid-flow-row grid-cols-1 gap-6">
              {posts.map((post) => (
                <Post key={post?.id} post={post} />
              ))}
            </div>
          ) : null}
        </div>
        <hr className="lg:hidden border-cyan-600 border-4 border-double border-separate" />
        <div className="flex-1">
          {postError ? (
            <p className="text-xl text-red-500 font-mono">
              {error.status}: Oh! Something wrong.
            </p>
          ) : isLoadingPost ? (
            <h1 className="text-5xl text-center">Data Loading...</h1>
          ) : posts?.length ? (
            <div className="p-0 m-0 border border-cyan-200">
              <Post post={post} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Posts;
