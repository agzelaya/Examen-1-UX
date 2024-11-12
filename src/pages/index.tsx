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
    {
      imagenBtn: "/baki.jpg",
      mainVideo:"1fSp8NJEw34",
      EpCount: "12",
      Age: "14",
      g1: "Action",
      g2: "Shonen",
      g3: "Sport"
    },
    {
      imagenBtn: "/dexter.jpeg",
      mainVideo:"mzUx1hyL-yk",
      EpCount: "24",
      Age: "18",
      g1: "Drama",
      g2: "Thriller",
      g3: "Mystery"
    },
    {
      imagenBtn: "/the-umbrella-academy.jpg",
      mainVideo:"0DAmWHxeoKw",
      EpCount: "24",
      Age: "16",
      g1: "Action",
      g2: "Superhero",
      g3: "Comedy"
    },
    {
      imagenBtn: "/the-walking-dead.jpg",
      mainVideo:"sfAc2U20uyg",
      EpCount: "10",
      Age: "18",
      g1: "Zombie",
      g2: "Thriller",
      g3: "Action"
    },
    {
      imagenBtn: "/squid-game.jpeg",
      mainVideo:"lQBmZBJCYcY",
      EpCount: "12",
      Age: "18",
      g1: "Drama",
      g2: "Thriller",
      g3: "Action"
    },
    {
      imagenBtn: "/digital-circus.jpeg",
      mainVideo:"iuaRQ5NQFq8",
      EpCount: "3",
      Age: "14",
      g1: "Comedy",
      g2: "Mystery",
      g3: "Animation"
    },
    
  ]);

  const [series2, setSeries2] = useState<Series[]>([
    {
      imagenBtn: "/alice-in-borderland.jpeg",
      mainVideo: "49_44FFKZ1M",
      EpCount: "8",
      Age: "16",
      g1: "Thriller",
      g2: "Sci-Fi",
      g3: "Drama"
    },
    {
      imagenBtn: "/cyberpunk.png",
      mainVideo: "KvMY1uzSC1E",
      EpCount: "10",
      Age: "18",
      g1: "Action",
      g2: "Sci-Fi",
      g3: "Adventure"
    },
    {
      imagenBtn: "/drstone.jpg",
      mainVideo: "JxaJXnWDAN8",
      EpCount: "35",
      Age: "13",
      g1: "Adventure",
      g2: "Sci-Fi",
      g3: "Shonen"
    },
    {
      imagenBtn: "/death-note.jpeg",
      mainVideo: "kNyR46eHDxE",
      EpCount: "37",
      Age: "16",
      g1: "Mystery",
      g2: "Psychological",
      g3: "Thriller"
    },
    {
      imagenBtn: "/evangelion.jpg",
      mainVideo: "13nSISwxrY4",
      EpCount: "26",
      Age: "16",
      g1: "Mecha",
      g2: "Psychological",
      g3: "Drama"
    },
    {
      imagenBtn: "/hunterxhunter.png",
      mainVideo: "d6kBeJjTGnY",
      EpCount: "148",
      Age: "13",
      g1: "Adventure",
      g2: "Fantasy",
      g3: "Shonen"
    },
    {
      imagenBtn: "/dexter.jpeg",
      mainVideo: "YQeUmSD1c3g",
      EpCount: "96",
      Age: "18",
      g1: "Crime",
      g2: "Drama",
      g3: "Mystery"
    },
    {
      imagenBtn: "/mob-psycho.jpeg",
      mainVideo: "nTze7vAdRpM",
      EpCount: "25",
      Age: "16",
      g1: "Comedy",
      g2: "Action",
      g3: "Supernatural"
    },
    {
      imagenBtn: "/jojos.jpg",
      mainVideo: "EeCX8Y0a278",
      EpCount: "152",
      Age: "16",
      g1: "Adventure",
      g2: "Fantasy",
      g3: "Action"
    },
    {
      imagenBtn: "/squid-game.jpeg",
      mainVideo: "lQBmZBJCYcY",
      EpCount: "12",
      Age: "18",
      g1: "Drama",
      g2: "Thriller",
      g3: "Action"
    }
]);

const [series3, setSeries3] = useState<Series[]>([
  {
    imagenBtn: "/one-piece.jpeg",
    mainVideo: "yu-0eh9jdZg",
    EpCount: "1000+",
    Age: "13",
    g1: "Adventure",
    g2: "Fantasy",
    g3: "Shonen"
  },
  {
    imagenBtn: "/the-office.jpg",
    mainVideo: "LHOtME2DL4g",
    EpCount: "201",
    Age: "13",
    g1: "Comedy",
    g2: "Sitcom",
    g3: "Mockumentary"
  },
  {
    imagenBtn: "/baki.jpg",
    mainVideo: "1fSp8NJEw34",
    EpCount: "61",
    Age: "10",
    g1: "Adventure",
    g2: "Fantasy",
    g3: "Action"
  },
  {
    imagenBtn: "/cowboy-bebop.jpg",
    mainVideo: "EL-D9LrFJd4",
    EpCount: "26",
    Age: "16",
    g1: "Adventure",
    g2: "Sci-Fi",
    g3: "Drama"
  },
  {
    imagenBtn: "/breaking-bad.jpeg",
    mainVideo: "HhesaQXLuRY",
    EpCount: "62",
    Age: "18",
    g1: "Crime",
    g2: "Drama",
    g3: "Thriller"
  },
  {
    imagenBtn: "/the-witcher.jpg",
    mainVideo: "ndl1W4ltcmg",
    EpCount: "24",
    Age: "18",
    g1: "Fantasy",
    g2: "Adventure",
    g3: "Drama"
  },
  {
    imagenBtn: "/ranma.jpeg",
    mainVideo: "V77a7NUof4I",
    EpCount: "161",
    Age: "13",
    g1: "Comedy",
    g2: "Romance",
    g3: "Action"
  },
  {
    imagenBtn: "/jujutsu-kaisen.jpeg",
    mainVideo: "UPRqnFnnrr8",
    EpCount: "24",
    Age: "16",
    g1: "Fantasy",
    g2: "Action",
    g3: "Shonen"
  },
  {
    imagenBtn: "/better-call-sauljpeg.jpeg",
    mainVideo: "HN4oydykJFc",
    EpCount: "63",
    Age: "18",
    g1: "Crime",
    g2: "Drama",
    g3: "Legal"
  },
  {
    imagenBtn: "/arcaneS2SSCITEM.jpg",
    mainVideo: "JpQOtc-YgUY",
    EpCount: "9",
    Age: "16",
    g1: "Fantasy",
    g2: "Action",
    g3: "Steampunk"
  }
]);

const [series4, setSeries4] = useState<Series[]>([
    {
      imagenBtn: "/dr-house.jpg",
      mainVideo: "MczMB8nU1sY",
      EpCount: "177",
      Age: "16",
      g1: "Drama",
      g2: "Medical",
      g3: "Mystery"
    },
    {
      imagenBtn: "/digital-circus.jpeg",
      mainVideo: "iuaRQ5NQFq8",
      EpCount: "13",
      Age: "13",
      g1: "Fantasy",
      g2: "Animation",
      g3: "Adventure"
    },
    {
      imagenBtn: "/adventure-time.jpeg",
      mainVideo: "DRaLQ3kKz_k",
      EpCount: "283",
      Age: "10",
      g1: "Adventure",
      g2: "Fantasy",
      g3: "Comedy"
    },
    {
      imagenBtn: "/spyxfamily.jpeg",
      mainVideo: "",
      EpCount: "25",
      Age: "13",
      g1: "Comedy",
      g2: "Action",
      g3: "Slice of Life"
    },
    {
      imagenBtn: "/pinkfong.jpeg",
      mainVideo: "ofXigq9aIpo",
      EpCount: "52",
      Age: "3",
      g1: "Kids",
      g2: "Educational",
      g3: "Music"
    },
    {
      imagenBtn: "/great-pretender.png",
      mainVideo: "-1NvtV2-Olw",
      EpCount: "23",
      Age: "16",
      g1: "Adventure",
      g2: "Crime",
      g3: "Drama"
    },
    {
      imagenBtn: "/the-boy-and-the-heronjpeg.jpeg",
      mainVideo: "yncJ5HKs93o",
      EpCount: "1",
      Age: "10",
      g1: "Fantasy",
      g2: "Drama",
      g3: "Adventure"
    },
    {
      imagenBtn: "/venom.jpeg",
      mainVideo: "zcuWXgzIMog",
      EpCount: "2",
      Age: "16",
      g1: "Action",
      g2: "Sci-Fi",
      g3: "Thriller"
    },
    {
      imagenBtn: "/the-umbrella-academy.jpg",
      mainVideo: "0DAmWHxeoKw",
      EpCount: "30",
      Age: "16",
      g1: "Action",
      g2: "Superhero",
      g3: "Comedy"
    },
    {
      imagenBtn: "/you.jpg",
      mainVideo: "ga1m0wjzscU",
      EpCount: "177",
      Age: "14",
      g1: "Thriller",
      g2: "Psychological",
      g3: "Drama"
    }
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
      <SeriesScrollable title="Bingeworthy TV Shows" sName="ss2" series={series2} setSeries={setSeries2}></SeriesScrollable>
      <SeriesScrollable title="Today's Picks for You" sName="ss3" series={series3} setSeries={setSeries3}></SeriesScrollable>
      <SeriesScrollable title="Crowd Pleasers" sName="ss4" series={series4} setSeries={setSeries4}></SeriesScrollable> 
     </Box>

      <footer>
        <Box sx={{m:1 , color: 'grey'}}>&copy; 1997-2024 Netflix, Inc.</Box>
      </footer>
    </>
  );
}
