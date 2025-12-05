import { Link } from "react-router-dom";
import { Check, ArrowRight, Settings, Briefcase, BookOpen, Cpu, Armchair } from "lucide-react";
import { SOLUTIONS } from "../constants";

const Solutions = () => {
  
  // Icon mapping helper
  const getIcon = (title: string) => {
    if (title.includes("Machinery")) return Settings;
    if (title.includes("Leather")) return Briefcase;
    if (title.includes("Stationery")) return BookOpen;
    if (title.includes("Electronics")) return Cpu;
    return Armchair;
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-brand-dark py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Assembly Line"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 block">Applications</span>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Connecting Your World
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
             From heavy industrial load-bearing structures to the fine aesthetic details of luxury leather goods, Boltin fasteners are the hidden strength behind diverse products.
          </p>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-20">
          {SOLUTIONS.map((solution, index) => {
            const Icon = getIcon(solution.title);
            return (
              <div 
                key={solution.id} 
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group border-4 border-white">
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={solution.image} 
                      alt={solution.title} 
                      className="w-full h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 bg-white p-4 rounded-tr-2xl z-20">
                        <Icon className="w-8 h-8 text-brand-dark" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-md bg-brand-light text-brand-dark text-xs font-bold uppercase tracking-wider border border-slate-200">
                    {solution.industry}
                  </div>
                  <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
                    {solution.title}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-brand-dark mb-4 text-sm uppercase">Key Advantages</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {solution.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center">
                            <Check className="h-4 w-4 text-brand-accent mr-3 flex-shrink-0" />
                            <span className="text-sm text-slate-700 font-medium">{benefit}</span>
                        </div>
                        ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center text-brand-dark font-bold hover:text-brand-accent transition-colors group text-lg"
                    >
                      Consult for {solution.industry}
                      <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Bottom Banner */}
      <div className="bg-brand-accent py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-extrabold text-brand-dark mb-6">Don't see your industry?</h2>
              <p className="text-brand-dark/80 text-lg mb-8 max-w-2xl mx-auto font-medium">
                  We specialize in custom manufacturing. If you have a blueprint, we can make the fastener.
              </p>
              <Link to="/contact" className="inline-block bg-brand-dark text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-slate-800 transition-colors">
                  Contact Our Engineers
              </Link>
          </div>
      </div>
    </div>
  );
};

export default Solutions;