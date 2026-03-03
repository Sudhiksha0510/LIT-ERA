import { motion } from "framer-motion";
import { FileText, BookOpen, Newspaper, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import SubmissionModal from "@/components/SubmissionModal";
import MagazineGuidelinesModal from "@/components/MagazineGuidelinesModal";
import PublicationCard from "@/components/PublicationCard";
import { usePublications } from "@/hooks/use-publications";

export default function Magazine() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [submissionOpen, setSubmissionOpen] = useState(false);
  const [guidelinesOpen, setGuidelinesOpen] = useState(false);
  
  // Fetch publications from database
  const { data: publicationsFromDB = [], isLoading, refetch } = usePublications();

  // Listen for custom event to open submission modal from guidelines
  useEffect(() => {
    const handleOpenSubmission = () => setSubmissionOpen(true);
    window.addEventListener('openSubmissionModal', handleOpenSubmission);
    return () => window.removeEventListener('openSubmissionModal', handleOpenSubmission);
  }, []);

  // Fallback publications for display (will be replaced by database data)
  const fallbackPublications = [
    {
      id: 1,
      title: "19th Year on Earth",
      category: "Book",
      author: "Yashwanth Rishindra",
      date: "January 11, 2026",
      description: "The 19th year on Earth represents a critical bridge between adolescence and adulthood, often characterized by intense personal growth, self-discovery, and significant life shifts. It is a phase of exploring identity, purpose, and independence, marking the transition away from high school and into higher education, early career, or personal freedom.",
      image: "https://www.amazon.in/19th-Year-Earth-YASHWANTH-RISHINDRA-ebook/dp/B0GG6GTKJ4",
      type: "Book",
      pages: 24,
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
    { id: "anthology", name: "Anthologies", icon: <FileText className="w-4 h-4" /> },
    { id: "article", name: "Articles", icon: <FileText className="w-4 h-4" /> }
  ];

  // Use database publications if available, otherwise use fallback
  const publications = publicationsFromDB.length > 0 ? publicationsFromDB : fallbackPublications;

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      book: 'D4AF37',      // Gold
      magazine: '4A5568',  // Gray
      newspaper: '2D3748', // Dark gray
      journal: '1A202C',   // Almost black
      anthology: 'B8860B', // Dark gold
      article: '6B7280'    // Medium gray
    };
    return colors[category?.toLowerCase()] || '4A5568';
  };

  // Map database fields to display format
  const publicationsDisplay = publications.map((pub: any) => ({
    id: pub.id,
    title: pub.title,
    category: pub.category,
    author: pub.author,
    date: pub.publishDate || pub.date,
    description: pub.description,
    // Use cover image if available, otherwise use a placeholder with category-based color
    image: pub.coverImage || pub.image || `https://placehold.co/400x300/${getCategoryColor(pub.category)}/white?text=${encodeURIComponent(pub.title)}`,
    type: pub.category ? pub.category.charAt(0).toUpperCase() + pub.category.slice(1) : pub.type,
    pages: pub.pages,
    downloads: pub.downloads,
    views: pub.views,
    likes: pub.likes,
    featured: pub.featured,
    pdfFile: pub.pdfFile || null,
    pdfFileName: pub.pdfFileName || null
  }));

  const filteredPublications = selectedCategory === "all" 
    ? publicationsDisplay 
    : publicationsDisplay.filter((pub: any) => pub.category === selectedCategory);

  const featuredPublications = publicationsDisplay.filter((pub: any) => pub.featured);

  const handleDownload = async (id: number, pdfFile: string | null, fileName: string | null) => {
    if (!pdfFile) {
      alert("PDF file not available");
      return;
    }
    
    try {
      const response = await fetch(`/api/publications/${id}/download`);
      if (!response.ok) throw new Error("Download failed");
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName || 'publication.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download file");
    }
  };

  const handleView = async (id: number, pdfFile: string | null) => {
    if (!pdfFile) {
      alert("PDF file not available");
      return;
    }
    
    // Increment view count
    try {
      await fetch(`/api/publications/${id}`, { method: 'GET' });
      // Refetch publications to show updated view count
      refetch();
    } catch (error) {
      console.error("Error tracking view:", error);
    }
    
    // Open PDF in new tab
    window.open(pdfFile, '_blank');
  };

  const handleLike = async (id: number) => {
    try {
      const response = await fetch(`/api/publications/${id}/like`, {
        method: 'POST',
      });
      
      if (response.ok) {
        // Refetch publications to show updated like count
        refetch();
      }
    } catch (error) {
      console.error("Like error:", error);
      alert("Failed to like publication");
    }
  };

  const handleShare = async (publication: any) => {
    const shareData = {
      title: publication.title,
      text: `Check out "${publication.title}" by ${publication.author}`,
      url: window.location.href
    };

    try {
      // Check if Web Share API is supported
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy link to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Share error:", error);
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } catch (clipboardError) {
        alert("Unable to share. Please copy the URL manually.");
      }
    }
  };

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
            {featuredPublications.map((publication: any, index: number) => (
              <PublicationCard
                key={publication.id}
                publication={publication}
                index={index}
                onDownload={handleDownload}
                onView={handleView}
                onLike={handleLike}
                onShare={handleShare}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 mx-auto max-w-lg">
            {categories.map((category: any) => (
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
            {filteredPublications.map((publication: any, index: number) => (
              <PublicationCard
                key={publication.id}
                publication={publication}
                index={index}
                onDownload={handleDownload}
                onView={handleView}
                onLike={handleLike}
                onShare={handleShare}
              />
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


