import mongoose, { Schema, Document, models, model } from "mongoose";

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

const Project = models.Project || model<IProject>("Project", projectSchema);

export default Project;
