import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "http://localhost:3000", // the base url of your auth server
});

// this is hou you use it:
// export const { signIn, signUp, useSession } = createAuthClient()
