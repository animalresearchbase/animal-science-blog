export default function About() {
  return (
    <div className="p-6 flex flex-col md:flex-row items-center">
      <img src="/profile.jpg" alt="Muhammad Rizwan Yousaf" className="w-48 rounded-full mr-6" />
      <div>
        <h1 className="text-2xl font-bold mb-2">Muhammad Rizwan Yousaf</h1>
        <p className="text-gray-700">
          I'm an animal science scientist, and I'm thrilled to lead this project with passion and expertise in wildlife research.
        </p>
      </div>
    </div>
  );
}
