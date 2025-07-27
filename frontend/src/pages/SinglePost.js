import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch(() => setPost(null));
  }, [id]);

  if (!post) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full my-4 rounded"
        />
      )}
      <p>{post.content}</p>
      <div className="text-gray-600 mt-4">
        <p>Category: {post.category}</p>
        <p>Author: {post.author || "Admin"}</p>
        <p>Date: {new Date(post.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
}
