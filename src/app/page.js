'use client';
import Image from "next/image";
import styles from "./page.module.css";
import SignInPage from "./SignInPage";
import { useState } from "react";
import HomePage from "./HomePage";

export default function Home() {
  const [signedIn, setSignedIn] = useState(false);
  if (!signedIn) return (<SignInPage setSignedIn={setSignedIn}/>);
  return (<HomePage/>);
}