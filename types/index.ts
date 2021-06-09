import Firebase from '../firebase';

// =============================================
// Context Items
// =============================================

export type AuthFn = (
  email: string,
  password: string
) => Promise<Firebase.auth.UserCredential>;

export type firebaseAuthHook = {
  authUser: { uid: string; email: string };
  loading: boolean;
  signInWithEmailAndPassword: AuthFn;
  createUserWithEmailAndPassword: AuthFn;
  signOut: () => Promise<any>;
};

export type AuthContextType = {
  authUser: any;
  loading: boolean;
  signInWithEmailAndPassword?: AuthFn;
  createUserWithEmailAndPassword?: AuthFn;
  signOut?: () => Promise<any>;
};

// =============================================
// State Items
// =============================================

export type FormData = {
  email: string;
  password: string;
};

export type AppAuthState = {
  uid: string;
  email: string;
};

// =============================================
// Items
// =============================================
export type User = {
  email: string;
  accountsConnected: AccountConnected[];
};

export type AccountConnected = {
  config: string;
  data: {
    screen_name: string;
    user_id: string;
    oauth_token: string;
    oauth_token_secret: string;
  };
};

export type SocialIconType = { type: string; color: string };

export type Account = {
  name: string;
  for: string;
  icon: string;
  iconColor: string;
};

export type Tweets = {
  text: string;
  mediaUrl: string;
  created: number;
  user: string;
  isScheduled: Boolean;
  scheduledTime: Date;
  mediaId: string | Number;
  postId: string | Number;
};
