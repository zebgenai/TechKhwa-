
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { toast } from "@/components/ui/sonner";
import { User, UserRound, Key, Phone, Mail, BookOpen, FilePen } from "lucide-react";

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

const CourseRegistrationForm = () => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm(initialState);
      toast.success("Registration Successful!", {
        description: "Your application has been submitted.",
        action: { label: "OK", onClick: () => {} }
      });
    }, 1100);
  };

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-blue-50/40 via-purple-50/20 to-blue-100/10 dark:from-gray-950/90 dark:to-gray-900">
      <div className="container max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-gradient-primary">Apply for a Course</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Fill out the form to register for your desired course at Techkhwa.</p>
        <form className="bg-white dark:bg-gray-800 glass-morphism rounded-xl shadow-lg p-6 md:p-10 space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <Label htmlFor="name" className="flex items-center gap-1"><User className="w-4 h-4" /> Name</Label>
            <Input id="name" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>
          {/* Father name */}
          <div>
            <Label htmlFor="fatherName" className="flex items-center gap-1"><UserRound className="w-4 h-4" /> Father Name</Label>
            <Input id="fatherName" name="fatherName" placeholder="Enter father's name" value={form.fatherName} onChange={handleChange} />
            {errors.fatherName && <p className="text-sm text-red-500 mt-1">{errors.fatherName}</p>}
          </div>
          {/* CINC Number */}
          <div>
            <Label htmlFor="cinc" className="flex items-center gap-1"><Key className="w-4 h-4" /> CINC Number</Label>
            <Input id="cinc" name="cinc" placeholder="Enter CINC number" value={form.cinc} onChange={handleChange} />
            {errors.cinc && <p className="text-sm text-red-500 mt-1">{errors.cinc}</p>}
          </div>
          {/* Contact */}
          <div>
            <Label htmlFor="contact" className="flex items-center gap-1"><Phone className="w-4 h-4" /> Contact</Label>
            <Input id="contact" name="contact" placeholder="Enter phone number" value={form.contact} onChange={handleChange} />
            {errors.contact && <p className="text-sm text-red-500 mt-1">{errors.contact}</p>}
          </div>
          {/* Gmail */}
          <div>
            <Label htmlFor="email" className="flex items-center gap-1"><Mail className="w-4 h-4" /> Gmail</Label>
            <Input id="email" name="email" type="email" placeholder="Enter your gmail" value={form.email} onChange={handleChange} />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>
          {/* Course selection */}
          <div>
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
          </div>
          {/* Submit */}
          <div className="text-center pt-2">
            <Button type="submit" disabled={submitting} className="w-full flex items-center justify-center gap-2">
              <FilePen className="w-4 h-4" />
              {submitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CourseRegistrationForm;

