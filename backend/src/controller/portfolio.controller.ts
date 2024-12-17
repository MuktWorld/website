import { Portfolio } from "../models/portfolio.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import { deleteFileFromCloudinary } from "../utils/deleteFileFromCloudinary";
import { uploadOnCloudinary } from "../utils/uploadOnCloudinary";

const uplodePortfolio = asyncHandler(async (req, res) => {
  const { service } = req.body;

  if (!service) {
    throw new ApiError(400, "Missing service.");
  } 

  const validServices = [
    "Film Making",
    "Videography",
    "Photography",
    "Graphic Design",
    "Post Production",
    "Advertisement",
    "Events",
    "Social Media Content",
  ];

  if (!validServices.includes(service)) {
    throw new ApiError(400, "Invalid service.");
  }

  if (!req.file) {
    throw new ApiError(400, "No file uploaded.");
  }
  console.log(req.file);
  
  try {
    const cloudinaryUrl = await uploadOnCloudinary(req.file.path);

    if (!cloudinaryUrl) {
      throw new ApiError(500, "File upload failed.");
    }

    const portfolio = await Portfolio.create({
      service,
      fileUrl: cloudinaryUrl.secure_url,
    });

    return res
      .status(201)
      .json(new ApiResponse(201, portfolio, "Portfolio uploaded successfully"));
  } catch (error) {
    console.error("Error uploading portfolio:", error);
    throw new ApiError(500, "An error occurred during upload.");
  }
});


const deletePortfolio = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const portfolio = await Portfolio.findById(id);
  if (!portfolio) {
    throw new ApiError(404, "file not found");
  }
  console.log(portfolio);

  const deletedFile = await deleteFileFromCloudinary(portfolio.fileUrl);
  if (!deletedFile.success) {
    throw new ApiError(404, `${deletedFile.message} || "Failed to delete file"`);
  }

  const deletedPortfolio = await Portfolio.deleteOne({ _id: id });
  if (deletedPortfolio.deletedCount === 0) {
    throw new ApiError(404, "book not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "file deleted successfully"));
});

const getPortfolio = asyncHandler(async (req, res) => {
  const portfolio = await Portfolio.find();
  if (!portfolio) {
    throw new ApiError(404, "file not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, portfolio, "Portfolio fetched successfully"));
});

export { uplodePortfolio, deletePortfolio, getPortfolio };
