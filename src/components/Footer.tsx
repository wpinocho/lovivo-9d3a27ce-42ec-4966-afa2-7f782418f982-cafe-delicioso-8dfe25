import { Coffee, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  console.log("Footer component rendered");

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-amber-600" />
              <h3 className="text-2xl font-bold">CaféDelicia</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Pasión por el café desde 1995. Ofrecemos los mejores granos del mundo 
              con un tostado artesanal que garantiza calidad en cada taza.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-amber-600 transition-colors">Inicio</a></li>
              <li><a href="#productos" className="text-gray-400 hover:text-amber-600 transition-colors">Productos</a></li>
              <li><a href="#nosotros" className="text-gray-400 hover:text-amber-600 transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-amber-600 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">Café Premium</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">Espresso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">Orgánico</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">Descafeinado</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-600" />
                <span className="text-gray-400 text-sm">Calle del Café 123, Ciudad</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-600" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-600" />
                <span className="text-gray-400 text-sm">info@cafedelicia.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 CaféDelicia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};