import { Mail, Phone, MapPin, FileText } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-brand-light min-h-screen">
      <div className="bg-brand-dark pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">Request a Quote</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to order? Fill out the form below. <br/>
            For custom parts, please include material specs and dimensions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-slate-100 pb-4">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0">
                     <MapPin className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-dark">Factory Location</p>
                    <p className="text-sm text-slate-600 mt-1">No. 88, Industrial Road<br />Taichung City, Taiwan 407</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-dark">Phone</p>
                    <p className="text-sm text-slate-600 mt-1">+886-4-2345-6789</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-dark">Email</p>
                    <p className="text-sm text-slate-600 mt-1">sales@boltin-fasteners.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-blue p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-brand-accent/20 rounded-full blur-2xl"></div>
              <h3 className="text-lg font-bold mb-4 relative z-10">FAQ</h3>
              <div className="space-y-4 relative z-10">
                <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Standard Lead Time</p>
                    <p className="text-sm text-slate-200">2-3 weeks for production</p>
                </div>
                <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">MOQ</p>
                    <p className="text-sm text-slate-200">Standard: 1,000 pcs<br/>Custom: 5,000 - 10,000 pcs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-brand-dark mb-8 flex items-center">
                 <FileText className="w-6 h-6 text-brand-accent mr-2" />
                 Product Inquiry Form
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                    <input type="text" id="company" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all" placeholder="Manufacturing Inc." />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all" placeholder="jane@company.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all" />
                  </div>
                </div>

                <div className="p-6 bg-brand-light/50 rounded-xl border border-slate-100 space-y-6">
                    <h4 className="font-bold text-brand-dark text-sm uppercase tracking-wide border-b border-slate-200 pb-2">Product Details</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="productType" className="block text-sm font-medium text-slate-700 mb-2">Product Type</label>
                            <select id="productType" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-accent outline-none">
                                <option>Solid Rivets</option>
                                <option>Hollow Rivets</option>
                                <option>Double-Cap Rivets</option>
                                <option>Machine Screws</option>
                                <option>Eyelets</option>
                                <option>Other / Custom</option>
                            </select>
                        </div>
                         <div>
                            <label htmlFor="material" className="block text-sm font-medium text-slate-700 mb-2">Preferred Material</label>
                            <select id="material" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-accent outline-none">
                                <option>Steel (Iron)</option>
                                <option>Stainless Steel</option>
                                <option>Aluminum</option>
                                <option>Brass / Copper</option>
                                <option>Not Sure</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                            <label htmlFor="size" className="block text-sm font-medium text-slate-700 mb-2">Size / Dimensions</label>
                            <input type="text" id="size" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-accent outline-none" placeholder="e.g., M4 x 10mm" />
                        </div>
                        <div>
                            <label htmlFor="qty" className="block text-sm font-medium text-slate-700 mb-2">Estimated Quantity</label>
                            <input type="text" id="qty" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-accent outline-none" placeholder="e.g., 50,000 pcs" />
                        </div>
                    </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Additional Notes</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all" placeholder="Any special finishing requirements, tolerance needs, or application details..."></textarea>
                </div>

                <div className="flex items-center gap-4">
                  <button type="button" className="flex-1 md:flex-none px-10 py-4 bg-brand-accent text-brand-dark font-bold rounded-xl hover:bg-brand-accentHover transition-colors shadow-lg transform active:scale-95">
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;