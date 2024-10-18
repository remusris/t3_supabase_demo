import { useEffect, useState } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { User } from "@supabase/supabase-js";

export const useUserHook = (supabase: SupabaseClient<any, "public", any>) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
          const { data: { user } } = await supabase.auth.getUser();
          setUser(user);
        };
    
        fetchUser();
      }, [supabase.auth]);

    return { user };
}