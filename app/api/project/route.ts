import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import Project from "@/models/Project";

// GET: Fetch all projects
export async function GET() {
  await connectToDatabase();
  const project = await Project.find();

  return NextResponse.json(project, { status: 200 });
}

// POST: Add a new project
export async function POST(request: Request) {
  await connectToDatabase();
  const body = await request.json();

  const project = await Project.create(body);
  return NextResponse.json(project, { status: 201 });
}
