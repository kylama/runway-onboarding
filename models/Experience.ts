import mongoose, { Schema, Document } from "mongoose";

export interface IExperience extends Document {
  company: string;
  title: string;
  location?: string;
  startDate?: Date;
  endDate?: Date;
  description?: string;
}

const experienceSchema: Schema = new Schema({
  company: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: false },
  startDate: { type: Date, required: false },
  endDate: { type: Date, required: false },
  description: { type: String, required: false },
});

export default mongoose.model<IExperience>("Experience", experienceSchema);
