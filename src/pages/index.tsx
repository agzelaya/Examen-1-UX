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
import KWScroll from "./CustomComponents/KWScroll";
import  {useState, useEffect} from "react"


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

interface Series {
  imagenBtn: string;
  mainVideo: string;
  EpCount: string;
  Age: string;
  g1: string;
  g2?: string;
  g3?: string;
}



export default function Home() {
  const[series1,setSeries1] = useState<Series[]>([
    {
      imagenBtn: "/ArcaneS2SSCITEM.jpg",
      mainVideo:"ysqiEC6bLUI",
      EpCount: "9",
      Age: "16",
      g1: "Fantasy",
      g2: "Action",
      g3: "Steampunk"
    },
    {
      imagenBtn: "/breaking-bad.jpeg",
      mainVideo:"HhesaQXLuRY",
      EpCount: "62",
      Age: "18",
      g1: "Crime",
      g2: "Drama",
      g3: "Thriller"
    },
    {
      imagenBtn: "/culinary-class-wars.jpeg",
      mainVideo:"QNAEIuDf-rI",
      EpCount: "10",
      Age: "10",
      g1: "Cooking",
      g2: "Reality",
      g3: "Competition"
    },
    {
      imagenBtn: "/jujutsu-kaisen.jpeg",
      mainVideo:"pkKu9hLT-t8",
      EpCount: "10",
      Age: "16",
      g1: "Shonen",
      g2: "Fantasy",
      g3: "Action"
    },
  ]);

  return (
    
    <>
      <Head>
        <title>Netflix</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Box sx={
        {
       '@media (max-width: 2000px)': {
          marginBottom: '5%',
        },
        '@media (max-width: 1700px)': {
          marginBottom: '10%',
        },
        '@media (max-width: 1550px)': {
          marginBottom: '12%',
        },
        '@media (max-width: 1350px)':{
          marginBottom: '30%'
        },
        '@media (max-width: 1150px)':{
          marginBottom: '40%'
        },
        '@media (max-width: 950px)':{
          marginBottom: '50%'
        },
        }
      }>
      <Banner mainImg="/dandadanMain.jpg" logo="/dandadanLogo.png"
        description="In a bet to prove whether ghosts or aliens exist, two high schoolers face terrifying paranormal threats, gain superpowers and maybe even fall in love?!"
      ></Banner>
      </Box>
     <Box 
     sx={{
      
     }}>
      <KWScroll title="Keep Watching" sName="kw1"></KWScroll>
      <SeriesScrollable title="Most Popular" sName="ss1" series={series1} setSeries={setSeries1}></SeriesScrollable>
      {/* <SeriesScrollable title="Bingeworthy TV Shows" sName="ss2"></SeriesScrollable>
      <SeriesScrollable title="Today's Picks for You" sName="ss3"></SeriesScrollable>
      <SeriesScrollable title="Crowd Pleasers" sName="ss4"></SeriesScrollable> */}
     </Box>
    </>
  );
}
