import { ReactNode, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { router } from "expo-router";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const getSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session === null) {
      router.replace("/login");
    }
  };

  useEffect(() => {
    getSession();
  }, []);

  return children;
}
