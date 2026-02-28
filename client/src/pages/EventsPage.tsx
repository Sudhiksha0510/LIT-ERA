import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, MapPin, Users, Clock, ArrowRight, Filter, Search, Tag, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const allEvents = [
  {
    id: 1,
    title: "Literary Debate Championship",
    date: "March 15, 2026",
    time: "5:00 PM - 8:00 PM",
    location: "Main Auditorium",
    attendees: 45,
    maxAttendees: 60,
    category: "Debate",
    description: "Join us for an exciting evening of intellectual discourse as debaters tackle contemporary literary themes and classic philosophical questions.",
    image: "https://picsum.photos/seed/literary-debate-2026/800/500.jpg",
    featured: true,
    registrationOpen: true,
  },
  {
    id: 2,
    title: "Poetry Slam Night",
    date: "March 22, 2026",
    time: "7:00 PM - 9:00 PM",
    location: "Literary Café",
    attendees: 32,
    maxAttendees: 40,
    category: "Poetry",
    description: "Express your soul through verse. Open mic night for poets of all levels to share their original works and inspired performances.",
    image: "https://picsum.photos/seed/poetry-slam-2026/800/500.jpg",
    featured: true,
    registrationOpen: true,
  },
  {
    id: 3,
    title: "Classic Literature Book Club",
    date: "March 25, 2026",
    time: "4:00 PM - 6:00 PM",
    location: "Reading Circle",
    attendees: 18,
    maxAttendees: 25,
    category: "Reading",
    description: "Deep dive into classic literature. This month we're exploring '1984' by George Orwell and its modern relevance.",
    image: "https://picsum.photos/seed/classic-literature-2026/800/500.jpg",
    featured: false,
    registrationOpen: true,
  },
  {
    id: 4,
    title: "Creative Writing Workshop",
    date: "April 1, 2026",
    time: "5:00 PM - 7:00 PM",
    location: "Writer's Workshop",
    attendees: 12,
    maxAttendees: 20,
    category: "Writing",
    description: "Hone your craft with professional guidance. Learn techniques for character development, dialogue, and narrative structure.",
    image: "https://picsum.photos/seed/writing-workshop-2026/800/500.jpg",
    featured: false,
    registrationOpen: true,
  },
  {
    id: 5,
    title: "Author Meet & Greet",
    date: "April 8, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "Main Library",
    attendees: 52,
    maxAttendees: 75,
    category: "Special Event",
    description: "Meet renowned author Sarah Mitchell as she discusses her latest novel and the journey of literary creation.",
    image: "https://picsum.photos/seed/author-meet-2026/800/500.jpg",
    featured: true,
    registrationOpen: true,
  },
    {
    id: 7,
    title: "Community Book Drive",
    date: "April 15, 2026",
    time: "10:00 AM - 2:00 PM",
    location: "Community Center",
    attendees: 67,
    maxAttendees: 100,
    category: "Community",
    description: "Help us promote literacy in our community. Bring your gently used books to donate to local schools and libraries.",
    image: "https://picsum.photos/seed/book-drive-2026/800/500.jpg",
    featured: false,
    registrationOpen: false,
  },
  {
    id: 8,
    title: "Spring Poetry Festival",
    date: "April 20-21, 2026",
    time: "10:00 AM - 6:00 PM",
    location: "Outdoor Garden",
    attendees: 120,
    maxAttendees: 150,
    category: "Festival",
    description: "Two-day celebration of poetry featuring readings, workshops, open mic sessions, and guest poets from around the region.",
    image: "https://picsum.photos/seed/poetry-festival-2026/800/500.jpg",
    featured: true,
    registrationOpen: true,
  },
];

const categories = ["All", "Debate", "Poetry", "Reading", "Writing", "Special Event", "Community", "Festival"];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = allEvents.filter((event) => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredEvents = allEvents.filter(event => event.featured);
  const upcomingEvents = filteredEvents.filter(event => new Date(event.date) >= new Date());

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold"></div>
            <span className="font-accent text-gold text-sm tracking-[0.3em] uppercase">Club Calendar</span>
            <div className="w-12 h-px bg-gold"></div>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-[1.1] mb-6">
            Literary <span className="italic text-gold font-light">Events</span>
          </h1>
          
          <p className="font-body text-xl text-ink/70 leading-relaxed max-w-3xl mx-auto">
            Join us for engaging literary events, workshops, debates, and community gatherings. 
            Expand your horizons and connect with fellow literature enthusiasts.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/40" />
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-ink/20 focus:border-gold"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-ink text-cream hover:bg-gold hover:text-ink"
                    : "border-gold text-gold hover:bg-gold hover:text-ink"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Events */}
        {selectedCategory === "All" && !searchTerm && (
          <section className="mb-20">
            <h2 className="font-display text-3xl font-bold text-ink mb-8 flex items-center gap-3">
              <Star className="w-8 h-8 text-gold" />
              Featured Events
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-gold text-ink text-xs font-accent uppercase tracking-wider rounded">
                            {event.category}
                          </span>
                          {event.featured && (
                            <span className="px-3 py-1 bg-rust text-cream text-xs font-accent uppercase tracking-wider rounded">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <h3 className="font-display text-2xl font-bold mb-2">{event.title}</h3>
                        <p className="font-body text-cream/80 mb-4 line-clamp-2">{event.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-1 text-sm font-body text-cream/70">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-gold" />
                              {event.date}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-gold" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-gold" />
                              {event.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* All Events */}
        <section>
          <h2 className="font-display text-3xl font-bold text-ink mb-8">
            {selectedCategory === "All" && !searchTerm ? "Upcoming Events" : "Search Results"}
            <span className="font-body text-lg text-ink/60 ml-3">({upcomingEvents.length})</span>
          </h2>
          
          {upcomingEvents.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-body text-xl text-ink/60">No events found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-ink/10 rounded-sm shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-cream text-ink text-xs font-accent uppercase tracking-wider rounded">
                        {event.category}
                      </span>
                      {event.featured && (
                        <span className="px-2 py-1 bg-gold/10 text-gold text-xs font-accent uppercase tracking-wider rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-display text-xl font-bold text-ink mb-2">{event.title}</h3>
                    <p className="font-body text-ink/70 mb-4 line-clamp-3">{event.description}</p>
                    
                    <div className="space-y-2 text-sm font-body text-ink/60 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gold" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gold" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gold" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gold" />
                        {event.attendees}/{event.maxAttendees} attending
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-ink">
                      Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
