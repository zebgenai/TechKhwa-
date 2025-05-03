
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      console.log("Submitting form data:", formData);
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);
        
      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }
      
      // Send email notification after successful database insertion
      try {
        const emailResponse = await supabase.functions.invoke('send-contact-email', {
          body: {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        });

        if (emailResponse.error) {
          console.error("Email notification error:", emailResponse.error);
          // We continue even if email fails, since the data is saved in the database
        } else {
          console.log("Email notification sent successfully");
        }
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // We continue even if email fails
      }
      
      console.log("Form submitted successfully");
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll respond as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">contact@techkhwa.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+1 (234) 567-8900</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">123 Tech Street, Silicon Valley, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Contact Us"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Your name" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Your email" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Your message" 
                    className="min-h-[150px]" 
                    required 
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={submitting}>
                  <Send className="mr-2 h-4 w-4" /> {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
