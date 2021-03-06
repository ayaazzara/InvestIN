export interface User {
  userId?: string;
  email?: string;
  displayName?: string;
  avatar?: string;
  createdAt?: string;
  bio?: string;
  city?: string;
  province?: string;
  investorRole?: boolean;
  organization?: string;
  category?: string;
  postsLiked?: string[];
}
