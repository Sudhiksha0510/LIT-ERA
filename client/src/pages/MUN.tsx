import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Globe, Users, FileText, Trophy, Calendar, MapPin, Star, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import MUNGuidelinesModal from "@/components/MUNGuidelinesModal";
import MUNRegistrationModal from "@/components/MUNRegistrationModal";

export default function MUN() {
  const [guidelinesOpen, setGuidelinesOpen] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(false);

  const committees = [
    {
      name: "UN General Assembly",
      topic: "Global Climate Action & Sustainable Development",
      description: "Addressing climate change through international cooperation and policy frameworks.",
      difficulty: "Intermediate",
      delegates: "45",
    },
    {
      name: "UN Security Council",
      topic: "International Peace & Security in the Digital Age",
      description: "Cyber threats, information warfare, and modern security challenges.",
      difficulty: "Advanced",
      delegates: "15",
    },
    {
      name: "UN Human Rights Council",
      topic: "Digital Rights & Privacy in the 21st Century",
      description: "Balancing technological advancement with fundamental human rights.",
      difficulty: "Intermediate",
      delegates: "47",
    },
    {
      name: "UN Economic and Social Council",
      topic: "Global Economic Recovery Post-Pandemic",
      description: "Building resilient economies and addressing inequality.",
      difficulty: "Beginner",
      delegates: "54",
    },
  ];

  const events = [
    {
      title: "Opening Ceremony",
      date: "Day 1 - 9:00 AM",
      description: "Keynote speeches and committee assignments",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "Committee Sessions",
      date: "Days 1-2 - Various Times",
      description: "Formal debates and moderated caucuses",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Crisis Simulation",
      date: "Day 2 - 3:00 PM",
      description: "Emergency scenario response and rapid diplomacy",
      icon: <Target className="w-5 h-5" />,
    },
    {
      title: "Awards Ceremony",
      date: "Day 3 - 5:00 PM",
      description: "Recognition of outstanding delegates",
      icon: <Trophy className="w-5 h-5" />,
    },
  ];

  const awards = [
    "Best Delegate",
    "Outstanding Delegate",
    "Honorable Mention",
    "Best Position Paper",
    "Best Delegation",
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold"></div>
            <span className="font-accent text-gold text-sm tracking-[0.3em] uppercase">LIT'ERA MUN 2026</span>
            <div className="w-12 h-px bg-gold"></div>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-[1.1] mb-6">
            Model United <br />
            <span className="italic text-gold font-light">Nations</span>
          </h1>
          
          <p className="font-body text-xl text-ink/70 leading-relaxed mb-10 max-w-3xl mx-auto">
            Experience the art of diplomacy, debate, and global problem-solving. Join delegates from around the world in addressing the most pressing international issues of our time.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button 
              onClick={() => setRegistrationOpen(true)}
              className="bg-ink text-cream font-accent text-sm tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold hover:text-ink transition-all"
            >
              Register Now <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            <Button 
              variant="outline"
              className="border-gold text-gold font-accent text-sm tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold hover:text-ink transition-all"
              onClick={() => setGuidelinesOpen(true)}
            >
              View Guidelines
            </Button>
          </div>
        </div>

        {/* Key Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div whileHover={{ y: -5 }} className="text-center">
            <div className="w-16 h-16 bg-gold text-ink flex items-center justify-center rounded-full mx-auto mb-4">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-ink mb-2">April 16-17, 2026</h3>
            <p className="font-body text-ink/60">Two days of intense debate and diplomacy</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="text-center">
            <div className="w-16 h-16 bg-ink text-cream flex items-center justify-center rounded-full mx-auto mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-ink mb-2">GLEC Campus</h3>
            <p className="font-body text-ink/60">Gokaraju Lailavathi Engineering College</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="text-center">
            <div className="w-16 h-16 bg-gold text-ink flex items-center justify-center rounded-full mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-ink mb-2">200+ Delegates</h3>
            <p className="font-body text-ink/60">From universities worldwide</p>
          </motion.div>
        </div>

        {/* Committees Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-ink mb-4">Committees & Topics</h2>
            <p className="font-body text-lg text-ink/60 max-w-2xl mx-auto">
              Four dynamic committees addressing contemporary global challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {committees.map((committee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border-2 border-ink/5 p-8 rounded-sm shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-accent uppercase tracking-wider rounded-full ${
                    committee.difficulty === 'Advanced' ? 'bg-rust/10 text-rust' :
                    committee.difficulty === 'Intermediate' ? 'bg-gold/10 text-gold' :
                    'bg-ink/10 text-ink'
                  }`}>
                    {committee.difficulty}
                  </span>
                </div>

                <Globe className="w-8 h-8 text-gold mb-4" />
                <h3 className="font-display text-2xl font-bold text-ink mb-3">{committee.name}</h3>
                <h4 className="font-body text-lg font-semibold text-gold mb-3">{committee.topic}</h4>
                <p className="font-body text-ink/70 mb-6">{committee.description}</p>
                
                <div className="flex items-center justify-between text-sm font-body text-ink/60">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {committee.delegates} Delegates
                  </span>
                  <Button variant="ghost" className="text-gold hover:text-ink p-0 h-auto font-accent">
                    Learn More →
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Schedule Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-ink mb-4">Event Schedule</h2>
            <p className="font-body text-lg text-ink/60 max-w-2xl mx-auto">
              Three days of diplomatic engagement and intellectual challenge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-ink text-cream p-6 rounded-sm shadow-sm"
              >
                <div className="w-12 h-12 bg-gold text-ink flex items-center justify-center rounded-sm mb-4">
                  {event.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{event.title}</h3>
                <p className="font-accent text-sm text-gold/80 mb-3">{event.date}</p>
                <p className="font-body text-cream/70 text-sm">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <Award className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="font-display text-4xl font-bold text-ink mb-4">Awards & Recognition</h2>
            <p className="font-body text-lg text-ink/60 max-w-2xl mx-auto">
              Excellence in diplomacy, research, and public speaking
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cream border-2 border-gold flex items-center justify-center rounded-full mx-auto mb-4">
                  <Star className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-body font-semibold text-ink">{award}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Registration CTA */}
        <div className="text-center bg-ink text-cream p-12 rounded-sm border-2 border-gold/20">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Make Your Voice Heard?</h2>
          <p className="font-body text-lg text-cream/80 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable experience of diplomacy, debate, and global citizenship.
          </p>
          
          <div className="flex flex-wrap items-center justify-center">
            <Button 
              onClick={() => setRegistrationOpen(true)}
              className="bg-gold text-ink font-accent text-sm tracking-[0.2em] uppercase px-8 py-4 hover:bg-cream hover:text-ink transition-all"
            >
              Register as Delegate <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* MUN Guidelines Modal */}
      <MUNGuidelinesModal isOpen={guidelinesOpen} onClose={() => setGuidelinesOpen(false)} />
      
      {/* MUN Registration Modal */}
      <MUNRegistrationModal isOpen={registrationOpen} onClose={() => setRegistrationOpen(false)} />
    </div>
  );
}
