import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import Project from "@/models/Project";

// GET: Fetch a single project by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();
  const project = await Project.findById(params.id);

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project, { status: 200 });
}

// PUT: Update a project
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();
  const body = await request.json();

  const updatedProject = await Project.findByIdAndUpdate(params.id, body, {
    new: true,
  });

  if (!updatedProject) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(updatedProject, { status: 200 });
}

// DELETE: Delete a project
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();
  const deletedProject = await Project.findByIdAndDelete(params.id);

  if (!deletedProject) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Project deleted" }, { status: 200 });
}
