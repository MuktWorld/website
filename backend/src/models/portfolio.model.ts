import mongoose, { Document, Schema } from "mongoose";

export interface Portfolio extends Document {
  service: string;
  fileUrl: string;
}

const PortfolioSchema: Schema<Portfolio> = new Schema(
  {
    service: { type: String, required: true },
    fileUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export const Portfolio =
  (mongoose.models?.Portfolio as mongoose.Model<Portfolio>) ||
  mongoose.model<Portfolio>("Portfolio", PortfolioSchema);
