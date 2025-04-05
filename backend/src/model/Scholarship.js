import mongoose, { Schema } from "mongoose";

const scholarshipSchema = new mongoose.Schema({
  category: String,
  title: String,
  course: String,
  year: String,
  provider: String,
  eligibility: {
    caste: String,
    incomeBelow: Number,
  },
  benefits: String,
  requiredDocuments: [String],
});

const Scholarship = mongoose.model("Scholarship", scholarshipSchema);
