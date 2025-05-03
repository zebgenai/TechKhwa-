
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Inbox } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

const Dashboard = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const { data, error } = await supabase
          .from("contact_submissions")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

        setSubmissions(data || []);
      } catch (error) {
        console.error("Error fetching contact submissions:", error);
        toast({
          title: "Error",
          description: "Failed to load contact submissions. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [toast]);

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
            Admin Dashboard
          </h1>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Inbox className="h-6 w-6" />
                Contact Submissions
              </CardTitle>
              <CardDescription>
                View all messages received through the contact form.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-10">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                  <p className="mt-4">Loading submissions...</p>
                </div>
              ) : submissions.length === 0 ? (
                <div className="text-center py-10 border rounded-lg bg-gray-50 dark:bg-gray-800">
                  <Inbox className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-semibold">No submissions</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    No messages have been received yet.
                  </p>
                </div>
              ) : (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="w-[40%]">Message</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {submissions.map((submission) => (
                        <TableRow key={submission.id}>
                          <TableCell className="font-medium">
                            {format(new Date(submission.created_at), "MMM d, yyyy h:mm a")}
                          </TableCell>
                          <TableCell>{submission.name}</TableCell>
                          <TableCell>{submission.email}</TableCell>
                          <TableCell className="max-w-xs truncate">
                            {submission.message}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
