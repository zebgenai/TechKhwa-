
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Star } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Kashif Ali",
      role: "Founder & CEO",
      image: "/lovable-uploads/b744b657-f441-47b5-940f-7c69da4136e2.png",
      linkedIn: "https://www.linkedin.com/in/kashif-ali",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "Rooh Ullah",
      role: "Co Founder & CTO",
      image: "/lovable-uploads/db8f9294-8d98-4702-af17-404d59ddbd25.png",
      linkedIn: "https://www.linkedin.com/in/rohullah-hamid",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Hassnain",
      role: "Co Founder & COO",
      image: "/lovable-uploads/4e7bb6d8-c11b-42bf-9411-14edf83be201.png",
      linkedIn: "https://www.linkedin.com/in/syed-hasnain-ali-shah",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 max-w-4xl bg-gradient-to-r from-blue-400/10 via-purple-300/10 to-pink-300/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, rotate: -5 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-full shadow-xl">
              <Star className="h-12 w-12 text-white" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6 mx-auto rounded-full"
          ></motion.div>
          
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Meet Our Team
          </motion.h2>
          
          <motion.p
            className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            The passionate visionaries behind Techkhwa's mission to transform tech education 
            and empower the next generation of innovators.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="h-full group"
            >
              <Card className="overflow-hidden h-full border-0 shadow-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-md hover:shadow-3xl transition-all duration-500 relative">
                {/* Gradient border */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${member.gradient}`}></div>
                
                {/* Glowing effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`}></div>
                
                <CardContent className="p-0 h-full flex flex-col relative">
                  <div className="overflow-hidden relative">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-[4/5] object-cover object-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Role badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className={`absolute top-4 right-4 bg-gradient-to-r ${member.gradient} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}
                    >
                      {member.role.split(' ')[0]}
                    </motion.div>
                  </div>
                  
                  <div className="p-8 text-center flex flex-col flex-grow justify-between bg-white dark:bg-gray-800 relative">
                    <div>
                      <motion.h3 
                        className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {member.name}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-600 dark:text-gray-400 mb-8 text-lg font-semibold"
                        whileHover={{ scale: 1.02 }}
                      >
                        {member.role}
                      </motion.p>
                    </div>
                    
                    <motion.a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} blur opacity-0 group-hover/link:opacity-50 transition-opacity duration-300`}></div>
                      <div className={`relative inline-flex items-center justify-center gap-3 bg-gradient-to-r ${member.gradient} text-white py-4 px-8 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300`}>
                        <Linkedin size={24} />
                        <span>Connect</span>
                      </div>
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
