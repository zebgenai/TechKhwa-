
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Kashif Ali",
      role: "Founder & CEO",
      image: "/lovable-uploads/b744b657-f441-47b5-940f-7c69da4136e2.png",
      linkedIn: "https://www.linkedin.com/in/kashif-ali"
    },
    {
      name: "Rooh Ullah",
      role: "Co Founder & CTO",
      image: "/lovable-uploads/db8f9294-8d98-4702-af17-404d59ddbd25.png",
      linkedIn: "https://www.linkedin.com/in/rohullah-hamid"
    },
    {
      name: "Hassnain",
      role: "Co Founder & COO",
      image: "/lovable-uploads/4e7bb6d8-c11b-42bf-9411-14edf83be201.png",
      linkedIn: "https://www.linkedin.com/in/syed-hasnain-ali-shah"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/10">
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg font-medium">
            The passionate individuals behind Techkhwa's mission to transform tech education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-white dark:bg-gray-800 backdrop-blur-sm">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="overflow-hidden relative">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-[4/5] object-cover object-center hover:scale-105 transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-8 text-center flex flex-col flex-grow justify-between bg-white dark:bg-gray-800">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg font-semibold">
                        {member.role}
                      </p>
                    </div>
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 mt-auto font-semibold text-base shadow-lg hover:shadow-xl"
                    >
                      <Linkedin size={20} /> Connect on LinkedIn
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
