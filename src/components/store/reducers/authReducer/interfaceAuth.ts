export interface AuthUser {
  message: string;
  token: string;
}

export interface inicialAuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
}
