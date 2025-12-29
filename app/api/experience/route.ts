import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import Experience from "@/models/Experience";

// GET: Fetch all experiences
export async function GET() {
  await connectToDatabase();
  const experiences = await Experience.find();

  return NextResponse.json(experiences, { status: 200 });
}

// POST: Add a new experience
export async function POST(request: Request) {
  await connectToDatabase();
  const body = await request.json();

  const experience = await Experience.create(body);
  return NextResponse.json(experience, { status: 201 });
}
