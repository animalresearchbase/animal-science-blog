import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={post.image || "/default.jpg"} alt={post.title} className="w-full h-40 object-cover rounded" />
      <h2 className="font-bold text-xl mt-2">{post.title}</h2>
      <p className="text-gray-600">{post.category}</p>
      <Link to={`/post/${post._id}`} className="text-orange-600 mt-2 block">Read More</Link>
    </div>
  );
}
