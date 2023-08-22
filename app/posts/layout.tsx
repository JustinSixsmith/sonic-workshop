"use client";

import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createPagesBrowserClient());
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh();
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [supabase, router]);

  const signUp = (e: any) => {
    // Change button background color
    e.target.style.backgroundColor = "#ebebeb";
    supabase.auth.signUp({
      email: "justinsixsmith@gmail.com",
      password: "sup3rs3cur3",
    });
  };

  const signIn = () => {
    supabase.auth.signInWithPassword({
      email: "justinsixsmith@gmail.com",
      password: "sup3rs3cur3",
    });
  };

  const signOut = () => {
    supabase.auth.signOut();
  };

  return (
    <main>
      <div className="flex justify-center gap-5 bg-212936 p-5 text-[#ebebeb]">
        <button onClick={signUp}>Sign up</button>
        <button onClick={signIn}>Sign in</button>
        <button onClick={signOut}>Sign out</button>
      </div>

      <div className="flex-1">{children}</div>
    </main>
  );
}
