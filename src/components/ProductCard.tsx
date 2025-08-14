import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/pages/Index";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  console.log("ProductCard rendered for:", product.name);

  const handleAddToCart = () => {
    console.log("Add to cart clicked for:", product.name);
    onAddToCart(product);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <Badge className="absolute top-2 right-2 bg-amber-600 hover:bg-amber-700">
            {product.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-600">
            ${product.price}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white"
        >
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};