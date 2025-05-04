
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Kashif Ali",
      role: "Founder & CEO",
      image: "/lovable-uploads/2f31bff6-62aa-4c62-bfdf-63d86e6c7322.png",
      linkedIn: "https://www.linkedin.com/in/kashif-ali"
    },
    {
      name: "Rohullah Hamid",
      role: "Co Founder & CTO",
      image: "/lovable-uploads/16ed9cf1-22e8-4926-9f60-6dfc586775f9.png",
      linkedIn: "https://www.linkedin.com/in/rohullah-hamid"
    },
    {
      name: "Syed Hasnain Ali Shah",
      role: "Co Founder & COO",
      image: "/lovable-uploads/5eda64ac-dd61-44cc-b2d4-204c4a676303.png",
      linkedIn: "https://www.linkedin.com/in/syed-hasnain-ali-shah"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
            ></motion.div>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Meet Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The passionate individuals behind Techkhwa's mission to transform tech education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full hover:shadow-2xl transition-shadow duration-300 border-0 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="overflow-hidden">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-[4/5] object-cover object-center hover:scale-105 transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  <div className="p-6 text-center flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{member.role}</p>
                    </div>
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 mt-auto"
                    >
                      <Linkedin size={18} /> Connect on LinkedIn
                    </a>
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
