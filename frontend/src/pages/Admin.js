import { useEffect, useState } from "react";
import axios from "axios";
import { createPost, getPosts } from "../api";

export default function Admin() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    getPosts().then((res) => setPosts(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("category", category);
    data.append("content", content);
    if (image) data.append("image", image);

    await createPost(data);
    alert("Post created!");
    getPosts().then((res) => setPosts(res.data));
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/posts/${id}`);
    getPosts().then((res) => setPosts(res.data));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 my-4 border p-4 rounded"
      >
        <input
          className="border p-2"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2"
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <textarea
          className="border p-2"
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button className="bg-orange-600 text-white py-2 rounded">
          Add Post
        </button>
      </form>

      <div>
        <h2 className="text-xl mb-2">Posts</h2>
        {posts.map((p) => (
          <div
            key={p._id}
            className="border rounded p-2 flex justify-between items-center my-2"
          >
            <span>{p.title}</span>
            <button
              onClick={() => handleDelete(p._id)}
              className="bg-red-600 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
