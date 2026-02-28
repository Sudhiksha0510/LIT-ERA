import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, Calendar, Users, MapPin, Pause, Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const eventPhotos = [
  {
    id: 1,
    title: "Literary Debate Championship",
    date: "March 15, 2026",
    location: "Main Auditorium",
    attendees: 45,
    image: "https://picsum.photos/seed/literary-debate-2026/600/400.jpg",
    category: "Debate"
  },
  {
    id: 2,
    title: "Poetry Slam Night",
    date: "March 8, 2026",
    location: "Literary Café",
    attendees: 32,
    image: "https://picsum.photos/seed/poetry-slam-2026/600/400.jpg",
    category: "Poetry"
  },
  {
    id: 3,
    title: "Book Reading Session",
    date: "March 1, 2026",
    location: "Reading Circle",
    attendees: 28,
    image: "https://picsum.photos/seed/book-reading-2026/600/400.jpg",
    category: "Reading"
  },
  {
    id: 4,
    title: "Creative Writing Workshop",
    date: "February 22, 2026",
    location: "Writer's Workshop",
    attendees: 18,
    image: "https://picsum.photos/seed/writing-workshop-2026/600/400.jpg",
    category: "Writing"
  },
  {
    id: 5,
    title: "MUN Conference 2026",
    date: "February 15-17, 2026",
    location: "Conference Hall",
    attendees: 120,
    image: "https://picsum.photos/seed/mun-conference-2026/600/400.jpg",
    category: "Conference"
  },
  {
    id: 7,
    title: "Author Meet & Greet",
    date: "February 1, 2026",
    location: "Main Library",
    attendees: 52,
    image: "https://picsum.photos/seed/author-meet-2026/600/400.jpg",
    category: "Special Event"
  },
  {
    id: 8,
    title: "Community Book Drive",
    date: "January 25, 2026",
    location: "Community Center",
    attendees: 67,
    image: "https://picsum.photos/seed/book-drive-2026/600/400.jpg",
    category: "Community"
  }
];

export default function EventPhotoGallery() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate photos for seamless scrolling
  const duplicatedPhotos = [...eventPhotos, ...eventPhotos];

  return (
    <section className="py-20 px-6 lg:px-8 bg-cream/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold"></div>
            <span className="font-accent text-gold text-sm tracking-[0.3em] uppercase">Club Memories</span>
            <div className="w-12 h-px bg-gold"></div>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">
            Event <span className="italic text-gold font-light">Gallery</span>
          </h2>
          
          <p className="font-body text-lg text-ink/60 max-w-2xl mx-auto">
            Capturing moments from our literary adventures, debates, workshops, and community gatherings.
          </p>
        </div>

        {/* Photo Carousel */}
        <div className="relative"
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}>
          {/* Pause/Play Button */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="absolute top-4 right-4 z-30 w-10 h-10 bg-ink/80 text-cream rounded-full flex items-center justify-center hover:bg-gold hover:text-ink transition-all duration-300 shadow-lg backdrop-blur-sm"
          >
            {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          </button>

          {/* Photo Container */}
          <div className="overflow-hidden mx-16">
            <motion.div
              animate={{ x: isPaused ? 0 : "-50%" }}
              transition={{ 
                duration: 20, 
                ease: "linear", 
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="flex gap-6"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {duplicatedPhotos.map((photo, index) => (
                <motion.div
                  key={`${photo.id}-${index}`}
                  whileHover={{ y: -10 }}
                  className="flex-none w-full md:w-1/2 lg:w-1/4"
                >
                  <div className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-cream">
                        <h3 className="font-display text-lg font-bold mb-2">{photo.title}</h3>
                        
                        <div className="space-y-1 text-sm font-body text-cream/80">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3 text-gold" />
                            {photo.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3 text-gold" />
                            {photo.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-3 h-3 text-gold" />
                            {photo.attendees} attendees
                          </div>
                        </div>

                        <div className="mt-3">
                          <span className="inline-block px-2 py-1 bg-gold text-ink text-xs font-accent uppercase tracking-wider rounded">
                            {photo.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/events">
            <button className="px-8 py-4 border-2 border-gold text-gold font-accent text-sm uppercase tracking-widest hover:bg-gold hover:text-ink transition-all duration-300">
              View All Events
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
