import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="container max-w-4xl mx-auto">{children}</section>;
}
