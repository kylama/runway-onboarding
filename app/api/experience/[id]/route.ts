import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import Experience from "@/models/Experience";

// GET: Fetch a single experience by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();
  const experience = await Experience.findById(params.id);

  if (!experience) {
    return NextResponse.json(
      { error: "Experience not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(experience, { status: 200 });
}

// PUT: Update an experience
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();
  const body = await request.json();

  const updatedExperience = await Experience.findByIdAndUpdate(
    params.id,
    body,
    { new: true }
  );

  if (!updatedExperience) {
    return NextResponse.json(
      { message: "Experience not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(updatedExperience, { status: 200 });
}

// DELETE: Delete an experience
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();
  const deletedExperience = await Experience.findByIdAndDelete(params.id);

  if (!deletedExperience) {
    return NextResponse.json(
      { message: "Experience not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ message: "Experience deleted" }, { status: 200 });
}
