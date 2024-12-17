import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

// Define the type for the response
interface CloudinaryResponse {
  url: string;
  public_id: string;
  secure_url: string;
}

// Function to upload to Cloudinary
const uploadOnCloudinary = async (localFilePath: string): Promise<CloudinaryResponse | null> => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto", // automatically detects file type (image/video)
    });

    // Remove the local file after uploading
    fs.unlinkSync(localFilePath);
    
    return response as CloudinaryResponse;
  } catch (error) {
    // Remove the local file even in case of an error
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    return null;
  }
};

export { uploadOnCloudinary };
