import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

export default function Home2() {
  const user = useUser();

  return (
    <div>
      <h1>index.js</h1>
      <h1> user: {user?.id} </h1>
    </div>
  );
}
