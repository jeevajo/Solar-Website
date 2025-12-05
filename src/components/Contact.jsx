export default function Contact() {
return (
<section className="p-10">
<h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
<form className="max-w-xl mx-auto bg-white p-6 shadow rounded">
<input className="w-full p-3 my-2 border" placeholder="Your Name" />
<input className="w-full p-3 my-2 border" placeholder="Email" />
<textarea className="w-full p-3 my-2 border" placeholder="Message" rows="4"></textarea>
<button className="px-5 py-3 bg-orange-500 text-white rounded mt-3 w-full">Send</button>
</form>
</section>
);
}
