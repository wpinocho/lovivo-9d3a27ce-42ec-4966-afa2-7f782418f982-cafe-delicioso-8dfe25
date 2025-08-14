import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/pages/Index";

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: "Café Colombiano Premium",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
    description: "Granos selectos de las montañas colombianas con notas frutales y chocolate.",
    category: "Premium"
  },
  {
    id: 2,
    name: "Espresso Italiano",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&h=400&fit=crop",
    description: "Mezcla tradicional italiana perfecta para espresso con crema dorada.",
    category: "Espresso"
  },
  {
    id: 3,
    name: "Café Orgánico Guatemala",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0d9?w=400&h=400&fit=crop",
    description: "Café orgánico de comercio justo con sabor suave y aromático.",
    category: "Orgánico"
  },
  {
    id: 4,
    name: "Blend de la Casa",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=400&fit=crop",
    description: "Nuestra mezcla especial balanceada para el disfrute diario.",
    category: "Blend"
  },
  {
    id: 5,
    name: "Café Etíope Single Origin",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400ac?w=400&h=400&fit=crop",
    description: "Granos únicos de Etiopía con notas florales y cítricas distintivas.",
    category: "Single Origin"
  },
  {
    id: 6,
    name: "Descafeinado Suizo",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    description: "Proceso suizo de descafeinado que preserva todo el sabor original.",
    category: "Descafeinado"
  }
];

export const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  console.log("ProductGrid rendered with", products.length, "products");

  return (
    <section id="productos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nuestros Cafés Premium
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selección cuidadosa de los mejores granos del mundo, tostados artesanalmente 
            para ofrecerte una experiencia única en cada taza.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};