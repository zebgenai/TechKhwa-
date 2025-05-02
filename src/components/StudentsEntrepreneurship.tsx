
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StudentsEntrepreneurship = () => {
  const entrepreneurshipSteps = [
    {
      step: "1",
      title: "Ideation & Validation",
      description: "We help students refine their business ideas and validate them through market research and feasibility studies."
    },
    {
      step: "2",
      title: "Mentorship & Guidance",
      description: "Our experienced mentors provide personalized guidance to navigate the challenges of starting a business."
    },
    {
      step: "3",
      title: "Resources & Funding",
      description: "We connect students with essential resources and potential funding opportunities to bring their ideas to life."
    },
    {
      step: "4",
      title: "Launch & Growth",
      description: "We support the launch phase and provide continued assistance to help student ventures grow and succeed."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Students Entrepreneurship
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We empower students by supporting their ideas, helping them turn their dreams into reality, and guiding them on their entrepreneurial journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Students Entrepreneurship"
              className="rounded-lg shadow-xl max-h-96 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {entrepreneurshipSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudentsEntrepreneurship;
