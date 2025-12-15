import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  projectName: string;
  startDate?: Date;
  endDate?: Date;
  description?: string;
  deploymentLink?: string;
  githubLink?: string;
}

const projectSchema: Schema = new Schema({
  projectName: { type: String, required: true },
  startDate: { type: Date, required: false },
  endDate: { type: Date, required: false },
  description: { type: String, required: false },
  deploymentLink: { type: String, required: false },
  githubLink: { type: String, required: false },
});

export default mongoose.model<IProject>("Project", projectSchema);
