import { v2 as cloudinary } from "cloudinary";
import { ApiError } from "./ApiError";

// Define the type for the return object
interface DeleteFileResponse {
  success: boolean;
  message?: string; // Optional, because it's only included when there's a failure
}

// Function to delete image or video from Cloudinary
const deleteFileFromCloudinary = async (fileUrl: string): Promise<DeleteFileResponse> => {
  try {
    // Extract the file name and extension from the URL
    const fileNameWithExtension = fileUrl.split("/").pop();
    const fileExtension = fileNameWithExtension?.split(".")[1];
    const publicId = fileNameWithExtension?.split(".")[0]; // Get the public_id without the extension

    if (!fileExtension || !publicId) {
      throw new ApiError(400, "Invalid file URL.");
    }

    // Determine the resource type based on the file extension
    const resourceType = ["mp4", "mov", "avi", "webm"].includes(fileExtension.toLowerCase())
      ? "video"
      : "image";

    // Destroy the file in Cloudinary
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType,
    });

    if (result.result === "ok") {
      return { success: true };
    } else {
      return { success: false, message: result.result };
    }
  } catch (error) {
    throw new ApiError(500, "Something went wrong while deleting the file.");
  }
};

export { deleteFileFromCloudinary };
