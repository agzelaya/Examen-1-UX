import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import ResponsiveAppBar from "./CustomComponents/Navbar";
import Box from '@mui/material/Box';
import Banner from "./CustomComponents/Banner"
import SeriesScrollable from "./CustomComponents/SeriesScrollable";
import { Card } from "@mui/material";
import CardNetflix from "./CustomComponents/CardNetflix";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface Video {
  mainImg: number;
  img: string;
  description: string;
}



export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Banner mainImg="/dandadanMain.jpg" logo="/dandadanLogo.png"
        description="In a bet to prove whether ghosts or aliens exist, two high schoolers face terrifying paranormal threats, gain superpowers and maybe even fall in love?!"
      ></Banner>
      <SeriesScrollable title="Most Popular" sName="ss1"></SeriesScrollable>
      <SeriesScrollable title="Most Popular" sName="ss2"></SeriesScrollable>
      <SeriesScrollable title="Most Popular" sName="ss3"></SeriesScrollable>
      
     

    </>
  );
}
