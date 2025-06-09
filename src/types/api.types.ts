export interface AdminLoginResponse {
  id?: string;
  email: string;
  role: string;
  rating: number;
  created_at: string | Date;
}

export interface LoginFormData {
  email: string;
  password: string;
}
