import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Calendar, Users, Clock, Star, BookOpen, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@/hooks/use-user";

const zoneData = {
  reading: {
    title: "Reading Circle",
    subtitle: "Deep Literary Exploration",
    icon: "📚",
    description: "Dive deep into literary masterpieces. Weekly book discussions, author studies, and critical analysis sessions for passionate readers.",
    image: "https://picsum.photos/seed/reading-circle/800/600.jpg",
    color: "bg-cream",
    textColor: "text-ink",
    activities: [
      {
        title: "Classic Literature Study",
        description: "In-depth analysis of classic novels and their cultural impact",
        schedule: "Mondays 5:00 PM - 7:00 PM",
        difficulty: "Intermediate",
        participants: "8-12",
      },
      {
        title: "Author Spotlight",
        description: "Monthly deep dives into specific authors and their works",
        schedule: "First Wednesday of month 6:00 PM - 8:00 PM",
        difficulty: "All Levels",
        participants: "10-15",
      },
      {
        title: "Book Club Discussions",
        description: "Group discussions on selected contemporary and classic works",
        schedule: "Fridays 4:00 PM - 6:00 PM",
        difficulty: "Beginner",
        participants: "12-20",
      },
      {
        title: "Literary Analysis Workshop",
        description: "Learn techniques for critical literary analysis and interpretation",
        schedule: "Tuesdays 6:00 PM - 7:30 PM",
        difficulty: "Advanced",
        participants: "6-10",
      },
    ],
    achievements: [
      "Literary Scholar",
      "Book Club Leader",
      "Critical Reader Award",
      "Literature Enthusiast",
    ],
    coordinator: {
      name: "Dr. Eleanor Mitchell",
      title: "Literature Professor",
      email: "e.mitchell@litera.edu",
    },
  },
  writing: {
    title: "Writer's Workshop",
    subtitle: "Craft Your Literary Voice",
    icon: "✍️",
    description: "Craft your own stories. Poetry workshops, creative writing exercises, and peer review sessions to hone your literary voice.",
    image: "https://picsum.photos/seed/writing-workshop/800/600.jpg",
    color: "bg-cream",
    textColor: "text-ink",
    activities: [
      {
        title: "Fiction Writing",
        description: "Short story and novel writing techniques and workshops",
        schedule: "Tuesdays 5:00 PM - 7:00 PM",
        difficulty: "Intermediate",
        participants: "8-12",
      },
      {
        title: "Creative Writing Exercises",
        description: "Daily prompts and exercises to spark creativity",
        schedule: "Wednesdays 4:00 PM - 6:00 PM",
        difficulty: "All Levels",
        participants: "10-15",
      },
      {
        title: "Peer Review Sessions",
        description: "Constructive feedback and editing workshops",
        schedule: "Thursdays 6:00 PM - 8:00 PM",
        difficulty: "Intermediate",
        participants: "6-10",
      },
      {
        title: "Publishing Workshop",
        description: "Learn about publishing, agents, and the writing industry",
        schedule: "Second Saturday of month 10:00 AM - 1:00 PM",
        difficulty: "Advanced",
        participants: "8-12",
      },
    ],
    achievements: [
      "Emerging Writer",
      "Workshop Leader",
      "Creative Excellence",
      "Published Author",
    ],
    coordinator: {
      name: "Prof. James Anderson",
      title: "Creative Writing Director",
      email: "j.anderson@litera.edu",
    },
  },
  poetry: {
    title: "Poetry Society",
    subtitle: "Where Words Dance and Flow",
    icon: "�",
    description: "Where words dance and emotions flow. Poetry slams, open mic nights, and verse composition in various forms and styles.",
    image: "https://picsum.photos/seed/poetry-society/800/600.jpg",
    color: "bg-gold",
    textColor: "text-ink",
    activities: [
      {
        title: "Poetry Workshop",
        description: "Explore different poetic forms and techniques",
        schedule: "Mondays 4:00 PM - 6:00 PM",
        difficulty: "All Levels",
        participants: "8-12",
      },
      {
        title: "Open Mic Night",
        description: "Share your original poetry in a supportive environment",
        schedule: "First Friday of month 7:00 PM - 9:00 PM",
        difficulty: "All Levels",
        participants: "15-25",
      },
      {
        title: "Poetry Slam Competition",
        description: "Competitive poetry performance events",
        schedule: "Third Thursday of month 6:00 PM - 8:00 PM",
        difficulty: "Intermediate",
        participants: "10-20",
      },
      {
        title: "Verse Analysis",
        description: "Deep analysis of classical and contemporary poetry",
        schedule: "Wednesdays 5:00 PM - 7:00 PM",
        difficulty: "Advanced",
        participants: "6-10",
      },
    ],
    achievements: [
      "Poetry Slam Champion",
      "Verse Master",
      "Performance Poet",
      "Literary Poet",
    ],
    coordinator: {
      name: "Ms. Sofia Rodriguez",
      title: "Poetry Program Director",
      email: "s.rodriguez@litera.edu",
    },
  },
  debate: {
    title: "Literary Debate",
    subtitle: "Intellectual Literary Discourse",
    icon: "�",
    description: "Engage in intellectual discourse. Debates on literary themes, character motivations, and the impact of literature on society.",
    image: "https://picsum.photos/seed/literary-debate/800/600.jpg",
    color: "bg-cream",
    textColor: "text-ink",
    activities: [
      {
        title: "Literary Theme Debates",
        description: "Debate major themes and motifs in classic literature",
        schedule: "Tuesdays 6:00 PM - 8:00 PM",
        difficulty: "Intermediate",
        participants: "8-12",
      },
      {
        title: "Character Analysis Debates",
        description: "Analyze and debate character motivations and development",
        schedule: "Thursdays 5:00 PM - 7:00 PM",
        difficulty: "Advanced",
        participants: "6-10",
      },
      {
        title: "Modern vs Classic Literature",
        description: "Compare and contrast different literary periods and styles",
        schedule: "First Wednesday of month 6:00 PM - 8:00 PM",
        difficulty: "All Levels",
        participants: "10-15",
      },
      {
        title: "Literary Impact Discussions",
        description: "Explore literature's influence on society and culture",
        schedule: "Fridays 4:00 PM - 6:00 PM",
        difficulty: "Intermediate",
        participants: "8-12",
      },
    ],
    achievements: [
      "Debate Champion",
      "Literary Analyst",
      "Critical Thinker",
      "Discussion Leader",
    ],
    coordinator: {
      name: "Dr. Robert Chen",
      title: "Literary Criticism Professor",
      email: "r.chen@litera.edu",
    },
  },
  cafe: {
    title: "Literary Café",
    subtitle: "Cozy Literary Conversations",
    icon: "☕",
    description: "Relaxed discussions over coffee. Casual book chats and community building in a cozy atmosphere.",
    image: "https://picsum.photos/seed/literary-cafe/800/600.jpg",
    color: "bg-cream",
    textColor: "text-ink",
    activities: [
      {
        title: "Casual Book Chats",
        description: "Informal discussions about what you're currently reading",
        schedule: "Daily 3:00 PM - 5:00 PM",
        difficulty: "Easy",
        participants: "10-20",
      },
      {
        title: "Author Birthday Celebrations",
        description: "Celebrate authors' birthdays with readings and discussions",
        schedule: "Varies by author",
        difficulty: "All Levels",
        participants: "20-30",
      },
      {
        title: "Community Reading",
        description: "Group reading sessions of short stories and poems",
        schedule: "Fridays 4:00 PM - 6:00 PM",
        difficulty: "Easy",
        participants: "12-18",
      },
    ],
    achievements: [
      "Community Builder",
      "Literary Host",
      "Book Enthusiast",
      "Café Regular",
    ],
    coordinator: {
      name: "Ms. Emma Thompson",
      title: "Community Engagement Coordinator",
      email: "e.thompson@litera.edu",
    },
  },
};

export default function ZoneDetail() {
  const { zoneId } = useParams();
  const [imageError, setImageError] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const { toast } = useToast();
  const { data: user } = useUser();
  const zone = zoneData[zoneId as keyof typeof zoneData];
  
  const handleJoinZone = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to join a zone",
        variant: "destructive",
      });
      return;
    }
    
    setIsJoining(true);
    try {
      const response = await fetch(`/api/zones/${zoneId}/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ zoneName: zone.title }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to join zone");
      }
      
      toast({
        title: "Success!",
        description: `You've joined ${zone.title}`,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to join zone",
        variant: "destructive",
      });
    } finally {
      setIsJoining(false);
    }
  };
  
  if (!zone) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-4xl font-bold text-ink mb-4">Zone Not Found</h1>
          <Link href="/zones">
            <Button className="bg-ink text-cream hover:bg-gold hover:text-ink">
              Back to Zones
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Back Navigation */}
        <Link href="/zones" className="inline-flex items-center gap-2 text-ink hover:text-gold transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-accent text-sm uppercase tracking-widest">Back to Zones</span>
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="relative">
            <div className={`absolute inset-0 ${zone.color} translate-x-4 translate-y-4 rounded-sm`}></div>
            {!imageError ? (
              <img 
                src={zone.image} 
                alt={zone.title}
                className="relative z-10 w-full aspect-[4/3] object-cover rounded-sm"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className={`relative z-10 w-full aspect-[4/3] ${zone.color} rounded-sm flex items-center justify-center border-2 border-gold/20`}>
                <div className="text-center">
                  <div className="text-8xl mb-4">{zone.icon}</div>
                  <p className="font-display text-xl text-ink/60">{zone.title}</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="text-6xl mb-6">{zone.icon}</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-[1.1] mb-4">
              {zone.title}
            </h1>
            <h2 className="font-body text-2xl text-gold mb-6">{zone.subtitle}</h2>
            <p className="font-body text-xl text-ink/70 leading-relaxed mb-8">
              {zone.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleJoinZone}
                disabled={isJoining}
                className="bg-ink text-cream font-accent text-sm uppercase tracking-widest px-8 py-4 hover:bg-gold hover:text-ink"
              >
                {isJoining ? "Joining..." : "Join Zone"} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-gold text-gold font-accent text-sm uppercase tracking-widest px-8 py-4 hover:bg-gold hover:text-ink">
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-ink mb-4">Weekly Activities</h2>
            <p className="font-body text-lg text-ink/60 max-w-2xl mx-auto">
              Regular sessions designed to develop your skills and passion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {zone.activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border-2 border-ink/5 p-8 rounded-sm shadow-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl font-bold text-ink">{activity.title}</h3>
                  <span className={`px-3 py-1 text-xs font-accent uppercase tracking-wider rounded-full ${
                    activity.difficulty === 'Advanced' ? 'bg-rust/10 text-rust' :
                    activity.difficulty === 'Intermediate' ? 'bg-gold/10 text-gold' :
                    activity.difficulty === 'Beginner' ? 'bg-ink/10 text-ink' :
                    'bg-ink/5 text-ink'
                  }`}>
                    {activity.difficulty}
                  </span>
                </div>
                
                <p className="font-body text-ink/70 mb-6">{activity.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm font-body text-ink/60">
                    <Calendar className="w-4 h-4 text-gold" />
                    {activity.schedule}
                  </div>
                  <div className="flex items-center gap-3 text-sm font-body text-ink/60">
                    <Users className="w-4 h-4 text-gold" />
                    {activity.participants} participants
                  </div>
                </div>
                
                <Button variant="ghost" className="text-gold hover:text-ink p-0 h-auto font-accent mt-4">
                  Register →
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <Award className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="font-display text-4xl font-bold text-ink mb-4">Achievements & Recognition</h2>
            <p className="font-body text-lg text-ink/60 max-w-2xl mx-auto">
              Earn recognition for your dedication and excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {zone.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cream border-2 border-gold flex items-center justify-center rounded-full mx-auto mb-4">
                  <Star className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-body font-semibold text-ink">{achievement}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coordinator Section */}
        <div className="bg-ink text-cream p-12 rounded-sm border-2 border-gold/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Zone Coordinator</h2>
              <p className="font-body text-cream/80 mb-6">
                Meet the dedicated professional who leads and mentors this zone.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-xl font-bold">{zone.coordinator.name}</h3>
                  <p className="font-accent text-gold/80">{zone.coordinator.title}</p>
                </div>
                
                <div className="flex items-center gap-3 text-cream/80">
                  <BookOpen className="w-5 h-5 text-gold" />
                  <span>{zone.coordinator.email}</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button className="bg-gold text-ink font-accent text-sm uppercase tracking-widest px-8 py-4 hover:bg-cream hover:text-ink">
                Contact Coordinator
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
