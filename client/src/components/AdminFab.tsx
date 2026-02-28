import { Settings } from "lucide-react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/use-auth";

export function AdminFab() {
  const { isAdmin } = useAuth();
  const [, setLocation] = useLocation();

  const handleClick = () => {
    // If the user is an admin, send them to the dashboard.
    // Otherwise, send them to the login page so they can authenticate.
    setLocation(isAdmin ? "/admin" : "/login");
  };

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group inline-flex items-center gap-3 px-4 py-3 rounded-full bg-ink text-cream shadow-xl shadow-ink/40 hover:bg-gold hover:text-ink transition-colors duration-300 font-accent text-xs tracking-[0.2em] uppercase"
    >
      <span className="w-8 h-8 rounded-full bg-gold text-ink flex items-center justify-center group-hover:bg-ink group-hover:text-cream transition-colors">
        <Settings className="w-4 h-4" />
      </span>
      <span>Admin Panel</span>
    </motion.button>
  );
}

