import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Fatima Maroof",
      role: "Full Stack Developer",
      text: "Techkhwa helped me transition from a different field into tech. The mentorship and practical projects were invaluable.",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
    },
    {
      name: "Michael Chen",
      role: "AI Engineer",
      text: "The AI course at Techkhwa gave me the foundation I needed to land my dream job. The hands-on approach made complex concepts accessible.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Emily Rodriguez",
      role: "Cybersecurity Analyst",
      text: "The cybersecurity program was comprehensive and up-to-date with current industry standards. I highly recommend it to anyone interested in the field.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 48, scale: 0.89 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.24, duration: 0.65 } },
    hover: { scale: 1.025, boxShadow: "0 4px 22px rgba(80,0,230,0.13)" }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in">
            Student Success Stories
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in">
            Hear from our graduates who have successfully transformed their careers through Techkhwa.
          </p>
        </motion.div>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div
                  className="h-full"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <Card className="border-0 shadow-lg animate-scale-in">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <motion.img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full object-cover shadow-lg"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.65 }}
                          whileHover={{ scale: 1.09, boxShadow: "0 4px 16px rgba(80,0,230,0.22)" }}
                        />
                        <div className="text-center md:text-left animate-fade-in">
                          <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                            "{testimonial.text}"
                          </p>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
