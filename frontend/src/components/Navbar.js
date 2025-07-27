import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-orange-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-lg">Animal Science Blog</Link>
      <div>
        <Link className="px-2" to="/blog">Blog</Link>
        <Link className="px-2" to="/about">About</Link>
        <Link className="px-2" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
