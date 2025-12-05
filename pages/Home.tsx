import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, ChevronRight, Download, Settings, Cpu, Briefcase, BookOpen, Armchair } from "lucide-react";
import { FEATURES, PRODUCTS } from "../constants";

const Hero = () => (
  <section className="relative bg-brand-dark overflow-hidden min-h-[600px] flex items-center">
    {/* Abstract Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Industrial Background"
        className="w-full h-full object-cover opacity-25 filter contrast-125"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/50"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl">
        <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-8">
          Precision <span className="text-brand-accent">Fastening</span> <br />
          For Every Industry.
        </h1>
        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
          From solid rivets for heavy machinery to delicate double-caps for leather goods. We deliver ready-stock and custom OEM solutions in copper, iron, aluminum, and stainless steel.
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <Link
            to="/products"
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-brand-dark bg-brand-accent hover:bg-brand-accentHover transition-all shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-1"
          >
            View Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-8 py-4 border border-slate-600 text-base font-bold rounded-xl text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 bg-white relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32">
        {FEATURES.map((feature, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-dark group-hover:text-brand-accent transition-colors text-brand-dark">
              <feature.icon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedCategories = () => (
  <section className="py-20 bg-brand-light">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <h2 className="text-base font-bold text-brand-accent tracking-widest uppercase mb-2">Our Catalog</h2>
          <h3 className="text-4xl font-extrabold text-brand-dark">Featured Products</h3>
        </div>
        <Link to="/products" className="hidden md:flex items-center text-brand-dark font-bold hover:text-brand-accent transition-colors">
          Browse All Categories <ChevronRight className="ml-1 h-5 w-5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.slice(0, 4).map((product) => (
          <Link key={product.id} to="/products" className="group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 h-full flex flex-col">
              <div className="aspect-w-16 aspect-h-12 bg-slate-100 relative overflow-hidden h-56">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">{product.category}</span>
                </div>
                <h4 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-accent transition-colors">{product.name}</h4>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-1">{product.description}</p>
                <div className="flex items-center text-sm font-semibold text-brand-dark group-hover:translate-x-1 transition-transform">
                  View Specs <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-12 text-center md:hidden">
         <Link to="/products" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 rounded-lg text-brand-dark font-bold hover:bg-white transition-colors">
          Browse All Categories
        </Link>
      </div>
    </div>
  </section>
);

const IndustriesPreview = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl mb-6">
          Serving Diverse Industries
        </h2>
        <p className="text-lg text-slate-600">
          From heavy-duty mechanical engineering to high-end fashion hardware, Boltin provides the connecting strength you need.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-8">
        {[
          { name: "Machinery", icon: Settings },
          { name: "Electronics", icon: Cpu },
          { name: "Leather Goods", icon: Briefcase },
          { name: "Stationery", icon: BookOpen },
          { name: "Furniture", icon: Armchair },
        ].map((ind, i) => (
          <Link to="/solutions" key={i} className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl hover:bg-brand-dark hover:text-white transition-all duration-300 group cursor-pointer border border-slate-100">
            <ind.icon className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform text-brand-dark group-hover:text-brand-accent" />
            <span className="font-bold text-sm sm:text-base">{ind.name}</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const AboutTeaser = () => (
  <section className="bg-brand-dark text-white py-24 relative overflow-hidden">
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-brand-accent rounded-tl-3xl"></div>
            <img 
              src="https://images.pexels.com/photos/4792480/pexels-photo-4792480.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Boltin Manufacturing" 
              className="rounded-2xl shadow-2xl relative z-10 w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-accent text-brand-dark p-6 rounded-xl shadow-lg z-20 hidden sm:block">
              <p className="text-3xl font-extrabold">30+</p>
              <p className="text-sm font-bold uppercase tracking-wide">Years of Excellence</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-base font-bold text-brand-accent uppercase tracking-widest mb-3">About Boltin</h2>
          <h3 className="text-4xl font-extrabold mb-6 leading-tight">Craftsmanship in Every Connection</h3>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            We operate a state-of-the-art manufacturing facility equipped with advanced cold-heading machines and automated quality inspection systems. Whether you need 1,000 pieces or 1,000,000, we guarantee precision in every rivet and screw.
          </p>
          
          <ul className="space-y-4 mb-10">
            <li className="flex items-center text-slate-200">
              <CheckCircle className="w-5 h-5 text-brand-accent mr-3" />
              ISO 9001 Certified Production
            </li>
            <li className="flex items-center text-slate-200">
              <CheckCircle className="w-5 h-5 text-brand-accent mr-3" />
              In-House Tooling & Design
            </li>
            <li className="flex items-center text-slate-200">
              <CheckCircle className="w-5 h-5 text-brand-accent mr-3" />
              Rapid Prototyping Services
            </li>
          </ul>
          
          <Link 
            to="/about"
            className="inline-flex items-center font-bold text-white hover:text-brand-accent transition-colors border-b-2 border-transparent hover:border-brand-accent pb-1"
          >
            Learn More About Our Factory <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedCategories />
      <IndustriesPreview />
      <AboutTeaser />
      
      {/* CTA Section */}
      <section className="bg-slate-100 py-20 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-brand-dark mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Send us your drawings or samples. Our engineering team specializes in developing custom fasteners tailored to your exact specifications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link
              to="/contact"
              className="inline-block bg-brand-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-slate-800 transition-all hover:scale-105"
            >
              Start Custom Order
            </Link>
            <Link
              to="/products"
              className="inline-block bg-white text-brand-dark border border-slate-300 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors"
            >
              Download Catalog <Download className="inline-block ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;