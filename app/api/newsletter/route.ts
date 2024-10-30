// import { NextResponse } from "next/server";
// import { createClient } from "@/utils/supabase/server";
// import { z } from "zod";
// import type { SubscriberType } from "@/types/newsletter";

// const supabase = createClient();

// const userSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   name: z.string().optional(),
//   interests: z.array(z.string()).optional(),
//   type: z.literal("user"),
// });

// const businessSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   company_name: z.string().optional(), // Made optional to match your frontend
//   industry: z.string().optional(),
//   size: z.string().optional(),
//   type: z.literal("business"),
// });

// const subscriberSchema = z.discriminatedUnion("type", [
//   userSchema,
//   businessSchema,
// ]);

// export async function POST(request: Request) {
//   try {
//     const json = await request.json();

//     // Log the received data for debugging
//     console.log("Received payload:", json);

//     // Validate the data
//     const data = subscriberSchema.parse(json);

//     // Determine table name
//     const tableName =
//       data.type === "business" ? "business_subscribers" : "user_subscribers";

//     // Check if email already exists
//     const { data: existingSubscriber } = await supabase
//       .from(tableName)
//       .select("email")
//       .eq("email", data.email)
//       .single();

//     if (existingSubscriber) {
//       return NextResponse.json(
//         { error: "Email already subscribed" },
//         { status: 400 }
//       );
//     }

//     // Remove type from data before insertion
//     const { type, ...subscriberData } = data;

//     // Insert new subscriber
//     const { error: insertError } = await supabase.from(tableName).insert([
//       {
//         ...subscriberData,
//         subscribed_at: new Date().toISOString(),
//       },
//     ]);

//     if (insertError) {
//       console.error("Supabase insert error:", insertError);
//       throw insertError;
//     }

//     return NextResponse.json(
//       { message: "Successfully subscribed to newsletter" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Newsletter subscription error:", error);

//     // Provide more specific error messages
//     if (error instanceof z.ZodError) {
//       return NextResponse.json(
//         { error: "Invalid data format", details: error.errors },
//         { status: 400 }
//       );
//     }

//     return NextResponse.json(
//       { error: "Failed to subscribe to newsletter" },
//       { status: 500 }
//     );
//   }
// }
