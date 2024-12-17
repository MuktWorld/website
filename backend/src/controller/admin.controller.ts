import { credentials } from '../constant';
import { ApiError } from '../utils/ApiError';
import { ApiResponse } from '../utils/ApiResponse';
import { asyncHandler } from '../utils/asyncHandler';
import jwt from 'jsonwebtoken';

const checkAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // Ensure username and password are provided
  if (!username || !password) {
    throw new ApiError(404, 'Missing username or password');
  }

  // Validate credentials (use a secure method in production, e.g., bcrypt)
  if (username !== credentials.username || password !== credentials.password) {
    throw new ApiError(403, 'Wrong credentials, please provide valid credentials');
  } else {
    // Generate a JWT token
    const token = jwt.sign(
      { username },  // Payload: user information (this could be expanded to include roles, permissions, etc.)
      process.env.JWT_SECRET_KEY as string,  // Secret key for signing the token (store securely, e.g., in .env)
      { expiresIn: '1h' }  // Expiry time for the token
    );

    return res.status(200).json(new ApiResponse(
      200,
      { token },  // Send the token back to the client
      'Logged in successfully',
    ));
  }
});


export {
  checkAdmin,
};
