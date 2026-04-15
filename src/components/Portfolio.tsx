import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Cyberpunk Brand Identity",
    category: "Design",
    image: "https://picsum.photos/seed/cyber/800/600",
  },
  {
    title: "E-Commerce Revolution",
    category: "Web Dev",
    image: "https://picsum.photos/seed/web/800/600",
  },
  {
    title: "Cinematic Music Video",
    category: "Video",
    image: "https://picsum.photos/seed/video/800/600",
  },
  {
    title: "Viral Social Campaign",
    category: "Growth",
    image: "https://picsum.photos/seed/social/800/600",
  },
  {
    title: "Tech Startup Platform",
    category: "Web Dev",
    image: "https://picsum.photos/seed/startup/800/600",
  },
  {
    title: "Luxury Product Shoot",
    category: "Video",
    image: "https://picsum.photos/seed/luxury/800/600",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold uppercase italic mb-6"
            >
              Selected <span className="text-secondary">Works</span>
            </motion.h2>
            <p className="text-white/50 text-lg font-light">
              A glimpse into the digital powerhouses we've built for our elite clients.
            </p>
          </div>
          
          <div className="flex gap-4">
            {['All', 'Video', 'Design', 'Web'].map((cat) => (
              <button 
                key={cat}
                className="px-6 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-secondary hover:text-black hover:border-secondary transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square rounded-xl overflow-hidden glass border border-secondary/15 hover:border-secondary transition-all duration-500"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="flex items-center justify-between"
                >
                  <div>
                    <span className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-extrabold text-white uppercase tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary shadow-[0_0_15px_#00BFFF]">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-12 py-4 glass rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all border border-white/10">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
