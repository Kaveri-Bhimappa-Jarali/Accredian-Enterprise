import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations/lead";

// In-memory store for demonstration purposes (would be a database like Supabase/Prisma in production)
const leadsDb: any[] = [];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Validate request body against schema
    const validatedData = leadSchema.safeParse(body);
    
    if (!validatedData.success) {
      return NextResponse.json(
        { 
          error: "Validation failed", 
          details: validatedData.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    // 2. Prepare data for insertion
    const newLead = {
      id: crypto.randomUUID(),
      ...validatedData.data,
      createdAt: new Date().toISOString(),
    };

    // 3. Store the lead (mock database insert)
    leadsDb.push(newLead);
    
    // Log for debugging during the assignment evaluation
    console.log("New lead captured successfully:", newLead);
    console.log("Total leads in mock DB:", leadsDb.length);

    // 4. Return success response
    return NextResponse.json(
      { message: "Lead successfully submitted", id: newLead.id },
      { status: 201 }
    );
    
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
