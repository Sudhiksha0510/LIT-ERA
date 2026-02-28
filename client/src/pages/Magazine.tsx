import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Calendar, User, FileText, BookOpen, Newspaper, Download, Eye, Heart, Share2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import SubmissionModal from "@/components/SubmissionModal";
import MagazineGuidelinesModal from "@/components/MagazineGuidelinesModal";

export default function Magazine() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [submissionOpen, setSubmissionOpen] = useState(false);
  const [guidelinesOpen, setGuidelinesOpen] = useState(false);

  // Listen for custom event to open submission modal from guidelines
  useEffect(() => {
    const handleOpenSubmission = () => setSubmissionOpen(true);
    window.addEventListener('openSubmissionModal', handleOpenSubmission);
    return () => window.removeEventListener('openSubmissionModal', handleOpenSubmission);
  }, []);

  const publications = [
    {
      id: 1,
      title: "Litera Times - March 2026 Edition",
      category: "newspaper",
      author: "Editorial Team",
      date: "March 15, 2026",
      description: "Monthly newspaper featuring club news, literary reviews, and student articles.",
      image: "https://picsum.photos/seed/litera-times-march/400/300.jpg",
      type: "Newspaper",
      pages: 12,
      downloads: 145,
      views: 892,
      likes: 67,
      featured: true
    },
    {
      id: 2,
      title: "Literary Voices - Spring Collection",
      category: "magazine",
      author: "Creative Writing Team",
      date: "March 10, 2026",
      description: "Collection of poetry, short stories, and creative writing from club members.",
      image: "https://picsum.photos/seed/literary-voices-spring/400/300.jpg",
      type: "Magazine",
      pages: 24,
      downloads: 89,
      views: 456,
      likes: 43,
      featured: true
    },
    {
      id: 3,
      title: "Research Journal - Literary Analysis",
      category: "journal",
      author: "Academic Committee",
      date: "March 5, 2026",
      description: "Peer-reviewed research papers on contemporary literary themes and analysis.",
      image: "https://picsum.photos/seed/research-journal/400/300.jpg",
      type: "Research Journal",
      pages: 36,
      downloads: 67,
      views: 234,
      likes: 29,
      featured: false
    },
    {
      id: 4,
      title: "Litera Times - February 2026 Edition",
      category: "newspaper",
      author: "Editorial Team",
      date: "February 15, 2026",
      description: "Previous edition with event coverage, interviews, and literary news.",
      image: "https://picsum.photos/seed/litera-times-february/400/300.jpg",
      type: "Newspaper",
      pages: 10,
      downloads: 123,
      views: 678,
      likes: 54,
      featured: false
    },
    {
      id: 5,
      title: "Poetry Anthology 2026",
      category: "anthology",
      author: "Poetry Society",
      date: "February 28, 2026",
      description: "Annual collection of original poetry from club members and guest poets.",
      image: "https://picsum.photos/seed/poetry-anthology/400/300.jpg",
      type: "Anthology",
      pages: 48,
      downloads: 156,
      views: 789,
      likes: 89,
      featured: true
    },
    {
      id: 6,
      title: "Literary Criticism Quarterly",
      category: "journal",
      author: "Critics Circle",
      date: "February 20, 2026",
      description: "Quarterly publication featuring critical essays and book reviews.",
      image: "https://picsum.photos/seed/criticism-quarterly/400/300.jpg",
      type: "Journal",
      pages: 18,
      downloads: 45,
      views: 189,
      likes: 23,
      featured: false
    }
  ];

  const categories = [
    { id: "all", name: "All Publications", icon: <BookOpen className="w-4 h-4" /> },
    { id: "newspaper", name: "Newspapers", icon: <Newspaper className="w-4 h-4" /> },
    { id: "magazine", name: "Magazines", icon: <FileText className="w-4 h-4" /> },
    { id: "journal", name: "Journals", icon: <BookOpen className="w-4 h-4" /> },
    { id: "anthology", name: "Anthologies", icon: <FileText className="w-4 h-4" /> }
  ];

  const filteredPublications = selectedCategory === "all" 
    ? publications 
    : publications.filter(pub => pub.category === selectedCategory);

  const featuredPublications = publications.filter(pub => pub.featured);

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative py-20 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <div className="w-20 h-20 bg-gold text-ink flex items-center justify-center rounded-full mx-auto mb-6">
              <Newspaper className="w-10 h-10" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
              LIT'ERA Magazine
            </h1>
            <p className="font-accent text-xl text-gold tracking-widest uppercase mb-6">
              Literary Publications & News
            </p>
            <p className="font-body text-ink/70 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore our collection of newspapers, magazines, research journals, and creative anthologies. 
              Discover the voices of our literary community and stay updated with club news and events.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8 mx-auto max-w-lg w-full"
          >
            <Button 
              className="!bg-gold !text-ink font-accent text-sm tracking-[0.2em] uppercase px-8 py-4 hover:!bg-cream hover:!text-ink transition-all"
              onClick={() => setSubmissionOpen(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Submit Publication
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Publications */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
              Featured Publications
            </h2>
            <p className="font-body text-ink/70 max-w-2xl mx-auto">
              Highlighted works from our literary community, showcasing exceptional writing and editorial excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPublications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group"
              >
                <Card className="bg-cream border-ink/10 overflow-hidden h-full hover:shadow-2xl transition-all duration-300 transform-gpu">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={publication.image} 
                      alt={publication.title}
                      className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-150 ease-out"
                    />
                    <div className="absolute top-4 right-4 bg-gold text-ink px-3 py-1 rounded-full text-xs font-accent uppercase tracking-widest">
                      Featured
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-accent text-gold uppercase tracking-widest">
                        {publication.type}
                      </span>
                      <span className="text-xs text-ink/60">
                        {publication.pages} pages
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-ink mb-2 group-hover:text-gold transition-colors">
                      {publication.title}
                    </h3>
                    <p className="font-body text-ink/70 text-sm mb-4 line-clamp-2">
                      {publication.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-ink/60 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {publication.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {publication.date}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-xs text-ink/60">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {publication.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {publication.downloads}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {publication.likes}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-ink text-cream font-accent text-xs uppercase tracking-widest hover:bg-gold hover:text-ink transition-all shadow-sm"
                      >
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-ink text-ink font-accent text-xs uppercase tracking-widest hover:bg-ink hover:text-cream transition-all shadow-sm"
                      >
                        <Eye className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 mx-auto max-w-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-accent text-xs uppercase tracking-widest transition-all border ${
                  selectedCategory === category.id
                    ? "bg-ink text-cream border-ink"
                    : "bg-cream text-ink border-ink/30 hover:bg-ink hover:text-cream hover:border-ink"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Publications */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
              All Publications
            </h2>
            <p className="font-body text-ink/70 max-w-2xl mx-auto">
              Complete collection of LIT'ERA publications including newspapers, magazines, journals, and creative anthologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPublications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group"
              >
                <Card className="bg-cream border-ink/10 overflow-hidden h-full hover:shadow-2xl transition-all duration-300 transform-gpu">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={publication.image} 
                      alt={publication.title}
                      className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-150 ease-out"
                    />
                    {publication.featured && (
                      <div className="absolute top-4 right-4 bg-gold text-ink px-3 py-1 rounded-full text-xs font-accent uppercase tracking-widest">
                        Featured
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-accent text-gold uppercase tracking-widest">
                        {publication.type}
                      </span>
                      <span className="text-xs text-ink/60">
                        {publication.pages} pages
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-ink mb-2 group-hover:text-gold transition-colors">
                      {publication.title}
                    </h3>
                    <p className="font-body text-ink/70 text-sm mb-4 line-clamp-2">
                      {publication.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-ink/60 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {publication.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {publication.date}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-xs text-ink/60">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {publication.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {publication.downloads}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {publication.likes}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-ink text-cream font-accent text-xs uppercase tracking-widest hover:bg-gold hover:text-ink transition-all shadow-sm"
                      >
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-ink text-ink font-accent text-xs uppercase tracking-widest hover:bg-ink hover:text-cream transition-all shadow-sm"
                      >
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-ink text-ink font-accent text-xs uppercase tracking-widest hover:bg-ink hover:text-cream transition-all shadow-sm"
                      >
                        <Share2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Section */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
              Submit Your Work
            </h2>
            <p className="font-body text-ink/70 mb-8">
              Share your literary creations with our community. We accept articles, poetry, short stories, 
              research papers, and creative writing for publication in our magazines and journals.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mx-auto max-w-lg w-full">
              <Button 
                className="!bg-ink !text-cream font-accent text-sm tracking-[0.2em] uppercase px-8 py-4 hover:!bg-gold hover:!text-ink transition-all"
                onClick={() => setSubmissionOpen(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Submit Article
              </Button>
              <Button 
                variant="outline"
                className="!border-ink !text-ink font-accent text-sm tracking-[0.2em] uppercase px-8 py-4 hover:!bg-ink hover:!text-cream transition-all"
                onClick={() => setGuidelinesOpen(true)}
              >
                Submission Guidelines
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Submission Modal */}
      <SubmissionModal isOpen={submissionOpen} onClose={() => setSubmissionOpen(false)} />
      
      {/* Magazine Guidelines Modal */}
      <MagazineGuidelinesModal isOpen={guidelinesOpen} onClose={() => setGuidelinesOpen(false)} />
    </div>
  );
}
