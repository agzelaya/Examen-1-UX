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
      <Box sx={
        {
       '@media (max-width: 2000px)': {
          marginBottom: '5%',
        },
        '@media (max-width: 1700px)': {
          marginBottom: '10%',
        },
        '@media (max-width: 1550px)': {
          marginBottom: '20%',
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
      <SeriesScrollable title="Most Popular" sName="ss1"></SeriesScrollable>
      <SeriesScrollable title="Bingeworthy TV Shows" sName="ss2"></SeriesScrollable>
      <SeriesScrollable title="Today's Picks for You" sName="ss3"></SeriesScrollable>
      <SeriesScrollable title="Crowd Pleasers" sName="ss4"></SeriesScrollable>
     </Box>
      
     

    </>
  );
}
