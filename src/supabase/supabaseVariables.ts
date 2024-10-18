import { createClient } from "@supabase/supabase-js";
import { env } from "../env.mjs";

const supabaseInit = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_ANON_KEY,
);

export default supabaseInit;
