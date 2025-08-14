import { Button } from "@/components/ui/button";

export const Hero = () => {
  console.log("Hero component rendered");

  return (
    <section id="inicio" className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              El Mejor Café
              <span className="text-amber-600 block">Artesanal</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Descubre nuestra selección premium de granos de café tostados a la perfección. 
              Cada taza cuenta una historia de pasión y calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
                onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Productos
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3"
              >
                Nuestra Historia
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-amber-600 rounded-full opacity-20 absolute -top-4 -left-4"></div>
              <div className="w-72 h-72 bg-gradient-to-br from-amber-800 to-orange-900 rounded-full flex items-center justify-center relative z-10">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">☕</div>
                  <p className="text-lg font-semibold">Café Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};