import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/pages/Index";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  totalPrice: number;
}

export const Cart = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
  totalPrice
}: CartProps) => {
  console.log("Cart rendered, isOpen:", isOpen, "items:", items.length);

  if (!isOpen) return null;

  const handleCheckout = () => {
    console.log("Checkout initiated with items:", items);
    alert("¡Gracias por tu compra! Funcionalidad de pago en desarrollo.");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
      <div className="bg-background w-full max-w-md h-full overflow-y-auto">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Carrito de Compras
          </h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-amber-600 font-semibold">${item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="h-6 w-6 p-0"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="h-6 w-6 p-0"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onRemoveItem(item.id)}
                          className="ml-auto text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-amber-600">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                >
                  Proceder al Pago
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};