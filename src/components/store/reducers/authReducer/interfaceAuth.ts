export interface User {
  email: string;
  password?: string;
}

export interface inicialAuthState {
  isAuthenticated: boolean;
  user: User | null;
}
