import { motion } from "framer-motion";
import { Link } from "wouter";
import { Book, PenTool, Users, Mic, Coffee, Library, Scroll, Feather } from "lucide-react";

export default function Zones() {
  const zones = [
    {
      id: "reading",
      title: "Reading Circle",
      icon: Book,
      color: "bg-cream",
      textColor: "text-ink",
      desc: "Dive deep into literary masterpieces. Weekly book discussions, author studies, and critical analysis sessions for passionate readers.",
      image: "https://picsum.photos/seed/reading-circle/800/600.jpg",
    },
    {
      id: "writing",
      title: "Writer's Workshop",
      icon: PenTool,
      color: "bg-cream",
      textColor: "text-ink",
      desc: "Craft your own stories. Poetry workshops, creative writing exercises, and peer review sessions to hone your literary voice.",
      image: "https://picsum.photos/seed/writing-workshop/800/600.jpg",
    },
    {
      id: "poetry",
      title: "Poetry Society",
      icon: Feather,
      color: "bg-gold",
      textColor: "text-ink",
      desc: "Where words dance and emotions flow. Poetry slams, open mic nights, and verse composition in various forms and styles.",
      image: "https://picsum.photos/seed/poetry-society/800/600.jpg",
    },
    {
      id: "debate",
      title: "Literary Debate",
      icon: Mic,
      color: "bg-cream",
      textColor: "text-ink",
      desc: "Engage in intellectual discourse. Debates on literary themes, character motivations, and the impact of literature on society.",
      image: "https://picsum.photos/seed/literary-debate/800/600.jpg",
    },
    {
      id: "cafe",
      title: "Literary Café",
      icon: Coffee,
      color: "bg-cream",
      textColor: "text-ink",
      desc: "Relaxed discussions over coffee. Casual book chats and community building in a cozy atmosphere.",
      image: "https://picsum.photos/seed/literary-cafe/800/600.jpg",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-cream text-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-24">
          <span className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
            The Ecosystem
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-ink">
            Club <span className="italic font-light text-gold">Zones</span>
          </h1>
          <p className="font-body text-xl text-ink/70 max-w-2xl mx-auto">
            LIT'ERA is multifaceted. Explore our specialized zones designed to cater to every dimension of student life.
          </p>
        </div>

        <div className="space-y-32">
          {zones.map((zone, index) => (
            <motion.div 
              key={zone.id}
              id={zone.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}
            >
              <div className="w-full md:w-1/2 relative group">
                <div className={`absolute inset-0 ${zone.color} translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6`}></div>
                <img 
                  src={zone.image} 
                  alt={zone.title}
                  className="relative z-10 w-full aspect-[4/3] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="w-full md:w-1/2">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${zone.color} ${zone.textColor} mb-8 shadow-md`}
                >
                  <zone.icon className="w-8 h-8" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-ink">
                  {zone.title}
                </h2>
                <p className="font-body text-xl text-ink/70 leading-relaxed mb-10">
                  {zone.desc}
                </p>
                <Link href={`/zones/${zone.id}`}>
                  <button className="px-8 py-4 border border-gold text-gold font-accent text-sm uppercase tracking-widest hover:bg-gold hover:text-ink transition-colors duration-300">
                    Join this Zone
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
