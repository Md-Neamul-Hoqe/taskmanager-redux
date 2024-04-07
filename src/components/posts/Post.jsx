const Post = ({ post }) => {
    return (
        <div className="border rounded-md p-10 max-w-3xl">
            <h1 className="text-xl">Post ID-{post?.id} [User Id - {post?.userId}]: <span className="italic font-mono capitalize">{post?.title}</span></h1>
            <hr />
            <p className="mt-2 text-justify leading-7 tracking-widest">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem id laudantium fugiat sint assumenda a veritatis blanditiis nemo dolore modi molestiae asperiores iusto, est harum! Tenetur eius earum quis?</p>
        </div>
    );
};

export default Post;