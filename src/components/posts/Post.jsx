import { useDispatch } from "react-redux";
import { useRemovePostMutation } from "../../redux/features/postInjectEndPointsApi";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const [removePost] = useRemovePostMutation();

  // console.log(isLoading, isError, error, data);
  /**
 * Uncaught Error: Actions must be plain objects. Use custom middleware for async actions.
    at Object.performAction (<anonymous>:1:41503)
 */
  const handleDelete = () => {
    dispatch(removePost({ id: post?.id }));
  };

  return (
    <div className="border rounded-md p-10 max-w-3xl">
      <div className="flex">
        <h1 className="text-xl">
          Post ID-{post?.id} [User Id - {post?.userId}]:{" "}
          <span className="italic font-mono capitalize">{post?.title}</span>
        </h1>
        <button
          onClick={handleDelete}
          className="btn btn-danger hover:bg-opacity-80">
          D
        </button>
      </div>
      <hr />
      <p className="mt-2 text-justify leading-7 tracking-widest">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem id
        laudantium fugiat sint assumenda a veritatis blanditiis nemo dolore modi
        molestiae asperiores iusto, est harum! Tenetur eius earum quis?
      </p>
    </div>
  );
};

export default Post;
