"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const A = () => {
  const { status } = useSession();
  console.log("status", status);
  return (
    <div>
      <button onClick={() => signIn()}>Click</button>
      {/* <button onClick={() => signIn("google")}>Sign in with Google</button> */}
    </div>
  );
};

export default A;
