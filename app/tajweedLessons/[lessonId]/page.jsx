"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Lesson from './lesson'

import Loading from "@/app/components/Loading";
import Alert from "@/app/components/Alert";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';


export default function Page({params}) {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  let { data: session } = useSession();

  let [isAList, setIsAList] = useState(false)
  const toWords = (number) => {
    const words = ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن', 'التاسع', 'العاشر','الحادي عشر', 'الثاني عشر', 'الثالث عشر', 'الرابع عشر', 'الخامس عشر', 'السادس عشر', 'السابع عشر', 'الثامن عشر', 'التاسع عشر', 'العشرون','الحادي و عشرون', 'الثاني و عشرون', 'الثالث و عشرون', 'الرابع و عشرون', 'الخامس  و عشرون', 'السادس و عشرون', 'السابع و عشرون', 'الثامن و عشرون', 'التاسع و عشرون', 'الثلاثون', 'الحادي و الثلاثون', 'الثاني و الثلاثون', 'الثالث و الثلاثون الثلاثون', 'الرابع و الثلاثون', 'الخامس و الثلاثون', 'السادس و الثلاثون'];
    return `الدرس ${words[number - 1] || number.toString()}`
  };


  const images = ['/tl-(1).jpg', '/tl-(2).jpg', '/tl-(3).jpg',[ '/tl-(4)(1).jpg', '/tl-(4)(2).jpg'], '/tl-(5).jpg', '/tl-(6).jpg', ['/tl-(7)(1).jpg'  , '/tl-(7)(2).jpg'], '/tl-(8).jpg',['/tl-(9)(1).jpg', '/tl-(9)(2).jpg'], '/tl-(10).jpg', '/tl-(11).jpg',['/tl-(12)(1).jpg', '/tl-(12)(2).jpg'] , ['/tl-(13)(1).jpg', '/tl-(13)(2).jpg'] , ['/tl-(14)(1).jpg', '/tl-(14)(2).jpg'] , '/tl-(15).jpg' , '/tl-(16).jpg' , '/tl-(17).jpg' , ['/tl-(18)(1).jpg', '/tl-(18)(2).jpg', '/tl-(18)(3).jpg'] , '/tl-(19).jpg' , ['/tl-(20)(1).jpg', '/tl-(20)(2).jpg'] , '/tl-(21).jpg' , '/tl-(22).jpg' , ['/tl-(23)(1).jpg', '/tl-(23)(2).jpg'] , '/tl-(24).jpg' , '/tl-(25).jpg' , '/tl-(26).jpg' , ['/tl-(27)(1).jpg', '/tl-(27)(2).jpg'] , '/tl-(28).jpg' , ['/tl-(29)(1).jpg', '/tl-(29)(2).jpg'] , '/tl-(30).jpg' , '/tl-(31).jpg' , '/tl-(32).jpg' , '/tl-(33).jpg' , '/tl-(34).jpg' , ['/tl-(35)(1).jpg', '/tl-(35)(2).jpg'] , '/tl-(36).jpg' ]

  const getImage = (images) => {
    if (images[params.lessonId -1].length > 4 ) return images[params.lessonId -1]
    else{
      setIsAList(true) 
    }
  }

  

  const multipleLessons = (
    <>
    <Lesson title={toWords(params.lessonId)} id={params.lessonId-1} img={images[params.lessonId - 1][0]} />
    <Lesson id={params.lessonId-1} img={images[params.lessonId - 1][1]} />
    <Lesson id={params.lessonId-1} img={images[params.lessonId - 1][2]} />
    </>
  )

  return (
    <Box
      sx={{
        minHeight: "80vh",
        pt: 12,
        backgroundColor: "#cba346",
        color: "white",
      }}
    >
      {error && (
        <Alert severity="error" close={() => setError("")} message={error} />
      )}
      {success && (
        <Alert
          message={success}
          severity="success"
          close={() => setSuccess("")}
        />
      )}
      <Loading loading={loading} text={"جاري التحميل"} /> 
      <Container>
        { !isAList && (<Lesson title={toWords(params.lessonId)} id={params.lessonId-1} img={getImage(images)} />)}
        { isAList && 
          multipleLessons
        }
      </Container>
    </Box>
  );
}



