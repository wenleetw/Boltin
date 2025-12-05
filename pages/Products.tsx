import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Filter, Download, Layers, PenTool, Database } from "lucide-react";
import { PRODUCTS } from "../constants";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const productGridRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    if (productGridRef.current) {
      const offsetTop = productGridRef.current.offsetTop - 100;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const categories = [
    "All",
    "Solid Rivets",
    "Rivets", // Groups hollow/double-cap for simplicity or specific names
    "Screws",
    "Nuts",
    "Washers",
    "Binding",
    "Eyelets"
  ];

  // Filter helper logic (simple string matching for this demo)
  const filteredProducts = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category.includes(activeCategory) || (activeCategory === "Rivets" && (p.category === "Solid Rivets" || p.category === "Rivets")));

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Header */}
      <div className="bg-brand-dark text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Products</h1>
              <p className="text-lg text-slate-300 max-w-2xl">
                A comprehensive catalog of standard and custom fasteners. <br/>
                Manufactured with precision for durability and performance.
              </p>
            </div>
            <button className="flex items-center gap-2 bg-brand-accent text-brand-dark px-6 py-3 rounded-lg font-bold hover:bg-brand-accentHover transition-colors">
              <Download className="w-5 h-5" />
              Download PDF Catalog
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-brand-dark font-bold text-lg">
                <Filter className="w-5 h-5" />
                <h2>Category</h2>
              </div>
              
              <div className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === category
                        ? "bg-brand-dark text-white shadow-md"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <h3 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-wide">Customization</h3>
                <ul className="space-y-3">
                    <li className="flex items-center text-sm text-slate-600 gap-3">
                        <PenTool className="w-4 h-4 text-brand-accent" /> Custom Head Styles
                    </li>
                    <li className="flex items-center text-sm text-slate-600 gap-3">
                        <Database className="w-4 h-4 text-brand-accent" /> Special Coatings
                    </li>
                    <li className="flex items-center text-sm text-slate-600 gap-3">
                        <Layers className="w-4 h-4 text-brand-accent" /> Non-Standard Sizes
                    </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1" ref={productGridRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-brand-accent/30 transition-all duration-300 group flex flex-col">
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute top-2 left-2">
                       <span className="px-2 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-brand-dark uppercase tracking-wider shadow-sm">
                           {product.category}
                       </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-5 leading-relaxed flex-1">
                      {product.description}
                    </p>
                    
                    <div className="mb-6 flex flex-wrap gap-2">
                      {product.specs.map((spec, i) => (
                        <span key={i} className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                          {spec}
                        </span>
                      ))}
                    </div>

                    <Link 
                      to="/contact" 
                      className="flex items-center justify-center w-full py-3 bg-brand-dark text-white text-sm font-bold rounded-lg hover:bg-brand-accent hover:text-brand-dark transition-all"
                    >
                      Request Specs
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                <p className="text-slate-500 text-lg">No items found in this category.</p>
                <button 
                  onClick={() => setActiveCategory("All")}
                  className="mt-4 text-brand-accent font-bold hover:underline"
                >
                  View all products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;