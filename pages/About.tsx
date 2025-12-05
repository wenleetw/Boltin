import { Link } from "react-router-dom";
import { ShieldCheck, Target, Hammer, Settings } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white">
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h1 className="text-4xl font-extrabold text-brand-dark sm:text-5xl mb-6">
                    Our Story: <br/>
                    <span className="text-brand-accent">Precision in Every Piece</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Established in 2005, Boltin has grown from a specialized rivet workshop to a full-scale fastener manufacturer. We serve global clients in machinery, electronics, and fashion industries.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    Our philosophy is simple: A product is only as strong as its smallest connection. That's why we treat every 2mm rivet with the same precision as a structural bolt.
                </p>
                <div className="grid grid-cols-3 gap-8 text-center border-t border-slate-200 pt-8">
                    <div>
                        <div className="text-3xl font-extrabold text-brand-dark">50+</div>
                        <div className="text-xs text-slate-500 uppercase mt-1">Heading Machines</div>
                    </div>
                    <div>
                        <div className="text-3xl font-extrabold text-brand-dark">20M+</div>
                        <div className="text-xs text-slate-500 uppercase mt-1">Monthly Capacity</div>
                    </div>
                    <div>
                        <div className="text-3xl font-extrabold text-brand-dark">15+</div>
                        <div className="text-xs text-slate-500 uppercase mt-1">Years Exp.</div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="absolute inset-0 bg-brand-accent/20 transform rotate-3 rounded-2xl"></div>
                <img 
                    src="https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                    alt="Factory Floor" 
                    className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                />
            </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-brand-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-brand-dark">Manufacturing Excellence</h2>
                <p className="text-slate-600 mt-4">From raw wire to finished product, we control every step.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Cold Heading", desc: "Advanced multi-station headers form complex shapes with minimal waste.", icon: Hammer },
                    { title: "Thread Rolling", desc: "Precision threading for screws ensuring high tensile strength.", icon: Settings },
                    { title: "Surface Treatment", desc: "In-house plating (Nickel, Zinc, Brass) and heat treatment.", icon: Target },
                ].map((process, i) => (
                    <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-brand-dark text-brand-accent rounded-lg flex items-center justify-center mb-6">
                            <process.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">{process.title}</h3>
                        <p className="text-slate-600">{process.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Quality Control Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-brand-dark rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row text-white">
          <div className="p-12 lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-brand-accent" />
                <h2 className="text-3xl font-bold">Total Quality Management</h2>
            </div>
            <p className="text-slate-300 mb-8 leading-relaxed text-lg">
              We employ automated optical sorting machines to ensure zero defects. Our lab is equipped with Vickers hardness testers, salt-spray chambers, and tensile testing machines.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="font-medium">Dimensional Inspection</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="font-medium">Torque Testing</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="font-medium">RoHS Compliant Materials</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="font-medium">ISO 9001:2015</span>
                </div>
            </div>
            <Link to="/contact" className="inline-block bg-brand-accent text-brand-dark font-bold px-8 py-3 rounded-lg hover:bg-white transition-colors self-start shadow-lg">
              Download Quality Certs
            </Link>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img 
              src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Quality Control Lab" 
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
             <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-dark/50"></div>
          </div>
        </div>
      </div>
      
      <div className="text-center pb-20">
          <p className="text-slate-500 text-sm">Committed to sustainability. 100% recyclable metal waste.</p>
      </div>
    </div>
  );
};

export default About;