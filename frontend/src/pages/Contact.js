export default function Contact() {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form className="flex flex-col space-y-4">
        <input className="border p-2" type="text" placeholder="Name" />
        <input className="border p-2" type="email" placeholder="Email" />
        <textarea className="border p-2" placeholder="Message"></textarea>
        <button className="bg-orange-600 text-white py-2 rounded">Send</button>
      </form>
    </div>
  );
}
