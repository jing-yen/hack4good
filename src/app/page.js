'use client';
import SignInPage from "./pages/SignInPage";
import { useState } from "react";
import HomePage from "./pages/HomePage";

export default function Home() {
  const [signedIn, setSignedIn] = useState(false);
  if (!signedIn) return (<SignInPage setSignedIn={setSignedIn}/>);
  return (<HomePage/>);
}