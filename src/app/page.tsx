"use client"
import { createClient } from "~/supabase/client";
import { useUserHook } from "~/supabase/useUserHook";

export default function Home2() {
  
  const supabase = createClient();
  const { user } = useUserHook(supabase);

  return (
    <div>
      <h1>index.js</h1>
      <h1> user: {user?.id} </h1>
    </div>
  );
}
