export interface PortfolioItem {
  id: string;
  service: Service;
  fileUrl: string;
  fileType: 'image' | 'video';
  createdAt: string;
}

export type Service = 
  | 'Film Making'
  | 'Videography'
  | 'Photography'
  | 'Graphic Design'
  | 'Post Production'
  | 'Advertisement'
  | 'Events'
  | 'Social Media Content';

export interface AuthResponse {
  success: boolean;
  token?: string;
  message?: string;
}