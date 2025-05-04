
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface RegistrationData {
  name: string;
  fatherName: string;
  cinc: string;
  contact: string;
  email: string;
  course: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const registrationData: RegistrationData = await req.json();
    console.log("Received registration:", registrationData);

    // Send email notification
    const emailResponse = await resend.emails.send({
      from: "Course Registration <onboarding@resend.dev>",
      to: ["atifcyber7@gmail.com"], // Admin email address
      subject: `New Course Registration: ${registrationData.course}`,
      html: `
        <h1>New Course Registration</h1>
        <p><strong>Course:</strong> ${registrationData.course}</p>
        <p><strong>Name:</strong> ${registrationData.name}</p>
        <p><strong>Father's Name:</strong> ${registrationData.fatherName}</p>
        <p><strong>CINC:</strong> ${registrationData.cinc}</p>
        <p><strong>Contact:</strong> ${registrationData.contact}</p>
        <p><strong>Email:</strong> ${registrationData.email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in course registration function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
