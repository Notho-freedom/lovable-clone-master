import { Link } from "react-router-dom";
import { ThumbsUp } from "lucide-react";
import product1 from "@/assets/product1.png";
import product2 from "@/assets/product2.png";

const products = [
  {
    id: 1,
    title: "Apprends à créer du contenu vidéo avec ton AVATAR IA",
    image: product1,
    discount: "68% off",
    rating: "100%",
    ratingCount: 3,
    originalPrice: "$20.16",
    salePrice: "$6.48",
  },
  {
    id: 2,
    title: "Cours rapide : créez des vidéos IA facilement et efficacement",
    image: product2,
    discount: "83% off",
    rating: "0%",
    ratingCount: 0,
    originalPrice: "$27.74",
    salePrice: "$4.63",
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => (
  <div className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
    <div className="relative overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
      />
      <span className="absolute right-3 top-3 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
        {product.discount}
      </span>
    </div>
    <div className="p-5 space-y-3">
      <h3 className="text-base font-semibold leading-snug line-clamp-2">
        {product.title}
      </h3>
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <ThumbsUp className="h-4 w-4" />
        {product.rating} ({product.ratingCount} Ratings)
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground line-through">
          {product.originalPrice}
        </span>
        <span className="text-lg font-bold" style={{ color: "hsl(142, 71%, 35%)" }}>
          {product.salePrice}
        </span>
      </div>
      <button className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
        Buy now
      </button>
    </div>
  </div>
);

const ProductsPage = () => {
  return (
    <div className="container py-10 space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold leading-tight max-w-3xl">
        Trouvez ici toutes les ressources dont vous avez besoin pour vous former en intelligence artificielle.
      </h2>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <select className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-muted-foreground outline-none">
          <option>Category</option>
        </select>
        <select className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-muted-foreground outline-none">
          <option>Product type</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
