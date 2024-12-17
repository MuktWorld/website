import multer, { StorageEngine, FileFilterCallback } from "multer";
import { Request } from "express";

// Define the storage with types
const storage: StorageEngine = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
    cb(null, "./public/temp");
  },
  filename: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) {
    cb(null, file.originalname);
  },
});

// Define the file filter with types
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  if (file.mimetype.startsWith("image/")) {
    // File is an image
    cb(null, true); // Accept the file
  } else if (file.mimetype.startsWith("video/")) {
    // File is a video
    cb(null, true); // Accept the file
  } else {
    // Reject file if it's neither image nor video
    cb(new Error("Only images and videos are allowed")); // Pass an error to reject
  }
};

// Export the multer upload instance
export const upload = multer({ 
  storage, 
  fileFilter,
});
