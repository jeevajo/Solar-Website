export default function Products() {
return (
<section className="p-10 bg-gray-100">
<h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{[1, 2, 3].map((i) => (
<div key={i} className="bg-white p-5 shadow rounded">
<img src={`/images/placeholder-${i}.jpg`} className="rounded mb-4" />
<h3 className="text-xl font-semibold">Solar Panel {i}</h3>
<p className="text-gray-600">High efficiency solar module for homes & industries.</p>
</div>
))}
</div>
</section>
);
}
