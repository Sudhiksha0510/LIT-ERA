import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-8 bg-cream">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4 block">Our Story</span>
          <h1 className="font-display text-5xl md:text-6xl text-ink font-bold mb-6">
            The Genesis of <span className="italic font-light text-gold">LIT'ERA</span>
          </h1>
          <div className="w-24 h-px bg-gold mx-auto"></div>
        </motion.div>

        {/* Content Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          
          {/* Left: Image / Decorative */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 relative"
          >
            <div className="aspect-[3/4] bg-ink relative rounded-sm overflow-hidden p-8 flex flex-col justify-between border-l-4 border-gold group">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
              
              <div className="relative z-10 text-gold opacity-50 font-display text-6xl">"</div>
              
              <div className="relative z-10 font-display text-2xl text-cream italic leading-relaxed">
                We read to know we are not alone. Literature is the most agreeable way of ignoring life.
              </div>
              
              <div className="relative z-10 font-accent text-gold text-xs tracking-widest uppercase">
                — Core Philosophy
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-7 flex flex-col justify-center space-y-8 font-body text-lg text-ink/80 leading-relaxed"
          >
            <p className="first-letter:text-7xl first-letter:font-display first-letter:font-bold first-letter:text-gold first-letter:mr-3 first-letter:float-left">
              Founded on the belief that words possess an inherent magic, LIT'ERA began as a small gathering of passionate readers. What started as hushed conversations in dimly lit coffee shops has blossomed into a thriving sanctuary for literary enthusiasts.
            </p>
            
            <p>
              Our club is more than just a place to discuss books; it's a vibrant ecosystem where creativity intersects with intellect. We recognize that true appreciation of literature extends beyond the pages—it bleeds into art, conversation, and action.
            </p>

            <div className="bg-white p-8 border border-ink/5 relative mt-4">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
              <h3 className="font-display text-2xl text-ink font-bold mb-3">Our Mission</h3>
              <p className="text-base text-ink/70">
                To foster a community that celebrates the written word, nurtures creative expression, and encourages intellectual growth through engaging discourse and collaborative events.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Our Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <span className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4 block">Leadership</span>
            <h2 className="font-display text-4xl md:text-5xl text-ink font-bold mb-6">
              Our <span className="italic font-light text-gold">Team</span>
            </h2>
            <div className="w-24 h-px bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="relative mb-6 overflow-hidden rounded-sm shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/sudeepthi-kalisapudi/400/600.jpg"
                    alt="Sudeepthi Kalisapudi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-display text-2xl text-ink font-bold mb-2">Sudeepthi Kalisapudi</h3>
              <p className="font-accent text-gold text-sm tracking-widest uppercase mb-3">President</p>
              <p className="font-body text-ink/70 text-sm leading-relaxed">
                Leading our literary community with vision and passion for fostering creative expression.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="relative mb-6 overflow-hidden rounded-sm shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/supritha-akula/400/600.jpg"
                    alt="Supritha Akula"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-display text-2xl text-ink font-bold mb-2">Supritha Akula</h3>
              <p className="font-accent text-gold text-sm tracking-widest uppercase mb-3">Vice President</p>
              <p className="font-body text-ink/70 text-sm leading-relaxed">
                Supporting our mission through innovative programs and community engagement initiatives.
              </p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="relative mb-6 overflow-hidden rounded-sm shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/jsai-neelima/400/600.jpg"
                    alt="J Sai Neelima"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-display text-2xl text-ink font-bold mb-2">J Sai Neelima</h3>
              <p className="font-accent text-gold text-sm tracking-widest uppercase mb-3">Secretary</p>
              <p className="font-body text-ink/70 text-sm leading-relaxed">
                Managing our resources with precision to support our literary endeavors and events.
              </p>
            </motion.div>
          </div>

          {/* Additional Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {/* Team Member 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="relative mb-6 overflow-hidden rounded-sm shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/namrata-mokshgundam/400/600.jpg"
                    alt="Namrata Mokshgundam"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-display text-2xl text-ink font-bold mb-2">Namrata Mokshgundam</h3>
              <p className="font-accent text-gold text-sm tracking-widest uppercase mb-3">Treasurer</p>
              <p className="font-body text-ink/70 text-sm leading-relaxed">
                Bringing our literary vision to life through stunning visual design and creative direction.
              </p>
            </motion.div>

            {/* Team Member 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="relative mb-6 overflow-hidden rounded-sm shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/psanjana/400/600.jpg"
                    alt="P Sanjana"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-display text-2xl text-ink font-bold mb-2">P Sanjana</h3>
              <p className="font-accent text-gold text-sm tracking-widest uppercase mb-3">Docs Lead</p>
              <p className="font-body text-ink/70 text-sm leading-relaxed">
                Building bridges with our community and fostering meaningful connections through outreach.
              </p>
            </motion.div>

            {/* Team Member 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="relative mb-6 overflow-hidden rounded-sm shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/swetha-sivakumar/400/600.jpg"
                    alt="Swetha Sivakumar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-display text-2xl text-ink font-bold mb-2">Swetha Sivakumar</h3>
              <p className="font-accent text-gold text-sm tracking-widest uppercase mb-3">Social Media Head</p>
              <p className="font-body text-ink/70 text-sm leading-relaxed">
                Amplifying our voice across digital platforms and engaging our community online.
              </p>
            </motion.div>
          </div>

          {/* Litera Members Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <span className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4 block">Community</span>
              <h3 className="font-display text-3xl text-ink font-bold mb-4">
                Litera <span className="italic font-light text-gold">Members</span>
              </h3>
              <div className="w-16 h-px bg-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {/* Litera Members */}
              {[
                "Bheema Sai Surya", "Charitha", "Keerthana", "Varnika Mishra", "Hasika Reddy",
                "Akshitha Reddy", "Akshaya Thummala", "Nirali Chowdary", "Siri Anusha", "Sathwika",
                "Navodith", "Sudhiksha", "Ravi Teja", "Bhanu Teja", "Jaahnavi Yeturi",
                "Azra", "Afiya Sulthana", "Navya Sri", "Satya Sahithi", "Lahari",
                "Shashank Seera", "Hemtej", "Surya Vadan", "Neha", "Sneha",
                "Gnaneshwari", "Lakshaya", "Sushrutha", "Deepika", "Aashitha",
                "Yashwanth", "Manaswitha", "Shalini"
              ].map((name, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="relative mb-3 overflow-hidden rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={`https://picsum.photos/seed/litera-member-${index}/200/200.jpg`}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="font-body text-sm text-ink font-medium group-hover:text-gold transition-colors duration-300">
                    {name}
                  </h4>
                  <p className="font-accent text-xs text-gold/70 tracking-widest uppercase">
                    Member
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
