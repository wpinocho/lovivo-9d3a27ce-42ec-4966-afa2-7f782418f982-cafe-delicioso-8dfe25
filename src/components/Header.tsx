import { ShoppingCart, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  console.log("Header rendered with cart items count:", cartItemsCount);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Coffee className="h-8 w-8 text-amber-600" />
          <h1 className="text-2xl font-bold text-foreground">CaféDelicia</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-foreground hover:text-amber-600 transition-colors">
            Inicio
          </a>
          <a href="#productos" className="text-foreground hover:text-amber-600 transition-colors">
            Productos
          </a>
          <a href="#nosotros" className="text-foreground hover:text-amber-600 transition-colors">
            Nosotros
          </a>
          <a href="#contacto" className="text-foreground hover:text-amber-600 transition-colors">
            Contacto
          </a>
        </nav>

        <Button
          variant="outline"
          size="sm"
          onClick={onCartClick}
          className="relative"
        >
          <ShoppingCart className="h-4 w-4" />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
};