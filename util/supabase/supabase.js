import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getSessionData = async () => {
  const sessionData = await supabase.auth.getSession();
  console.log("getSessionData", sessionData.data.session.user);
};
