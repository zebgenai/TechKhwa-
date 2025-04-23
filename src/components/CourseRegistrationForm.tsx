
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { toast } from "@/components/ui/sonner";
import { User, UserRound, Key, Phone, Mail, BookOpen, FilePen } from "lucide-react";
import SuccessCelebration from "./SuccessCelebration";

const courses = [
  "Cybersecurity Fundamentals",
  "Artificial Intelligence & Machine Learning",
  "Full Stack Development",
  "AWS Cloud",
  "Networking"
];

const initialState = {
  name: "",
  fatherName: "",
  cinc: "",
  contact: "",
  email: "",
  course: ""
};

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzfLINgy48vKZ0ySskedaIqF0EeCAeCEp8l6B546ozXq09HrdpuF1a3lbPJJrQ7yPwF/exec";

const CourseRegistrationForm = () => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleCourse = (course: string) => {
    setForm({ ...form, course });
    setErrors({ ...errors, course: "" });
  };

  const validate = () => {
    let err: any = {};
    if (!form.name) err.name = "Name is required";
    if (!form.fatherName) err.fatherName = "Father name is required";
    if (!form.cinc) err.cinc = "CINC Number is required";
    if (!form.contact) err.contact = "Contact is required";
    if (!form.email) err.email = "Gmail is required";
    if (!form.course) err.course = "Please select a course";
    return err;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }
    setSubmitting(true);

    try {
      // Create a form data object for submission to Google Scripts
      // (This helps bypass CORS restrictions)
      const formData = new FormData();
      
      // Add the form data as a JSON string parameter
      formData.append('data', JSON.stringify(form));
      
      // Use no-cors mode to ensure the request completes even with CORS limitations
      await fetch(GOOGLE_SCRIPT_URL + "?action=addRow", {
        method: "POST",
        mode: "no-cors", // This ensures the request doesn't fail due to CORS
        body: formData
      });
      
      // Since no-cors mode doesn't return readable response, we assume success
      // if no error is thrown during fetch
      setForm(initialState);
      setShowCelebration(true);
      toast.success("Registration Successful!", {
        description: "Your application has been submitted.",
        action: { label: "OK", onClick: () => {} }
      });
    } catch (error) {
      toast.error("Something went wrong!", {
        description: "There was a problem submitting your application. Please try again.",
      });
      console.error("Form submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.section
      id="registration"
      className="py-20 bg-gradient-to-br from-blue-50/40 via-purple-50/20 to-blue-100/10 dark:from-gray-950/90 dark:to-gray-900"
      initial={{ opacity: 0, scale: 0.96, y: 36 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.85, type: "spring", bounce: 0.22 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {showCelebration && (
        <SuccessCelebration dismiss={() => setShowCelebration(false)} />
      )}
      <div className="container max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-gradient-primary animate-fade-in">Apply for a Course</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 animate-fade-in">Fill out the form to register for your desired course at Techkhwa.</p>
        <motion.form
          className="bg-white dark:bg-gray-800 glass-morphism rounded-xl shadow-lg p-6 md:p-10 space-y-5 animate-fade-in"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.69, delay: 0.32, type: "spring" }}
        >
          {/* Name */}
          <motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 }}>
            <Label htmlFor="name" className="flex items-center gap-1"><User className="w-4 h-4" /> Name</Label>
            <Input id="name" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </motion.div>
          {/* Father name */}
          <motion.div initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.17 }}>
            <Label htmlFor="fatherName" className="flex items-center gap-1"><UserRound className="w-4 h-4" /> Father Name</Label>
            <Input id="fatherName" name="fatherName" placeholder="Enter father's name" value={form.fatherName} onChange={handleChange} />
            {errors.fatherName && <p className="text-sm text-red-500 mt-1">{errors.fatherName}</p>}
          </motion.div>
          {/* CINC Number */}
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.22 }}>
            <Label htmlFor="cinc" className="flex items-center gap-1"><Key className="w-4 h-4" /> CINC Number</Label>
            <Input id="cinc" name="cinc" placeholder="Enter CINC number" value={form.cinc} onChange={handleChange} />
            {errors.cinc && <p className="text-sm text-red-500 mt-1">{errors.cinc}</p>}
          </motion.div>
          {/* Contact */}
          <motion.div initial={{ opacity: 0, x: 19 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.27 }}>
            <Label htmlFor="contact" className="flex items-center gap-1"><Phone className="w-4 h-4" /> Contact</Label>
            <Input id="contact" name="contact" placeholder="Enter phone number" value={form.contact} onChange={handleChange} />
            {errors.contact && <p className="text-sm text-red-500 mt-1">{errors.contact}</p>}
          </motion.div>
          {/* Gmail */}
          <motion.div initial={{ opacity: 0, x: -19 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.33 }}>
            <Label htmlFor="email" className="flex items-center gap-1"><Mail className="w-4 h-4" /> Gmail</Label>
            <Input id="email" name="email" type="email" placeholder="Enter your gmail" value={form.email} onChange={handleChange} />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </motion.div>
          {/* Course selection */}
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.39 }}>
            <Label htmlFor="course" className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> Select Course</Label>
            <Select value={form.course} onValueChange={handleCourse}>
              <SelectTrigger id="course">
                <SelectValue placeholder="Choose a course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.course && <p className="text-sm text-red-500 mt-1">{errors.course}</p>}
          </motion.div>
          {/* Submit */}
          <motion.div className="text-center pt-2" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}>
            <Button type="submit" disabled={submitting} className="w-full flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105">
              <FilePen className="w-4 h-4" />
              {submitting ? "Submitting..." : "Submit Application"}
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default CourseRegistrationForm;
