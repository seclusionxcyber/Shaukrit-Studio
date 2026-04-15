import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold uppercase italic mb-8 leading-[0.9]">
              Ready To <br />
              <span className="text-secondary">Ignite</span> Your <br />
              Brand?
            </h2>
            <p className="text-white/50 text-xl font-light mb-12">
              Let's discuss how we can turn your vision into a digital powerhouse. 
              Our team is ready to scale your business to the next level.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email Us", value: "hello@shaukrit.studio" },
                { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Visit Us", value: "Digital Valley, Cyber City" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all border border-white/10">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-white text-lg font-bold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-xl border border-secondary/15 relative"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[2px] text-white/40 ml-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[2px] text-white/40 ml-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[2px] text-white/40 ml-2">Service</label>
                <select className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-secondary transition-colors appearance-none">
                  <option className="bg-black">Cinematic Edit</option>
                  <option className="bg-black">UX Architecture</option>
                  <option className="bg-black">Brand Strategy</option>
                  <option className="bg-black">Growth Engine</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[2px] text-white/40 ml-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-secondary transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-secondary text-primary font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-3 shadow-[0_8px_24px_rgba(0,191,255,0.3)] transition-all"
              >
                Initiate Project <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
