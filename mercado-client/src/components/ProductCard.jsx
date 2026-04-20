import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-pink-200 bg-pink-50 text-pink-900 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden rounded-[1.25rem] bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="space-y-3 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-pink-600">
          {product.category} {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="text-xl font-semibold text-pink-900">{product.title}</h3>
        <p className="text-base font-bold text-pink-600">{product.price}</p>
        <p className="text-sm leading-6 text-pink-500">
          {product.content[0].substring(0, 120)}...
        </p>
        <Button
          to={`/products/${product.name}`}
          className="mt-4"
          variant="primary"
        >
          View Product
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
