'use client';
import SignInPage from "./pages/SignInPage";
import { useState } from "react";
import Index from "./pages/Index";

export default function Home() {
  const [signedIn, setSignedIn] = useState(false);
  if (false) return (<SignInPage setSignedIn={setSignedIn}/>);
  return (<Index/>);
}