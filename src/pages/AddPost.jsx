import { useForm } from "react-hook-form";
import { useSetPostMutation } from "../redux/features/postApi";

const AddPost = () => {
  const [setPost, { isError, error, isLoading, isSuccess, data: thePost }] =
    useSetPostMutation();

  console.log(isError, error, isLoading, isSuccess, thePost);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setPost(data);

    /* Reset form after post */
    reset();
  };

  return (
    <>
      <h1 className="text-xl text-center py-10 capitalize">Add new post</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 border rounded-md p-5">
        <div>
          <div>
            <label htmlFor="userId" className="font-mono">
              Author
            </label>
            <input
              className="w-full py-3 px-5 rounded-md"
              type="text"
              defaultValue={2}
              placeholder="Md. Neamul Hoqe"
              {...register("userId", { value: 2, required: true })}
            />
            {errors.userId && (
              <p className="text-red-600 font-mono py-1">Author is required.</p>
            )}
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="title" className="font-mono">
              Title
            </label>
            <input
              className="w-full py-3 px-5 rounded-md"
              type="text"
              placeholder="Title you post"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-red-600 font-mono py-1">Title is required.</p>
            )}
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="post" className="font-mono">
              Post
            </label>
            <textarea
              rows={5}
              className="w-full py-3 px-5 rounded-md"
              type="text"
              placeholder="Write your post here..."
              {...register("post", { required: true })}
            />
            {errors.post && (
              <p className="text-red-600 font-mono py-1">Post is required.</p>
            )}
          </div>
        </div>
        <div className="text-end">
          <button
            type="submit"
            className="border rounded-md px-5 py-3 hover:bg-cyan-100 hover:font-semibold">
            Post now
          </button>
        </div>
      </form>
    </>
  );
};

export default AddPost;
