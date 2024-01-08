"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Lesson from './lesson'

import Loading from "@/app/components/Loading";
import Alert from "@/app/components/Alert";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";
import { NavigateBefore, NavigateNext, TurnLeft, TurnRight } from "@mui/icons-material";



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

  const lessonTitels = ['سورة الفاتحة','آداب تلاوة القرآن الكريم','مقدمة في علم التجويد','الاستعاذة و البسملة','أحكام النون الساكنة و التجويد','الإظهار الحلقي','الإدغام','الإقلاب','الإخفاء الحقيقي','الميم و النون المشددتين','الميم الساكنة','القلقلة','حكم اللامات السواكن','مقدمة المدود','المد الفرعي بسبب الهمز','المد الفرعي بسبب السكون','المد في الحروف الهجائية في أوائل السور','تتمة المدود','همزة الوصل و همزة القطع','أحكام تتعلق بهمزة الوصل','هاء التأنيث','المقطوع و الموصول','الوقف و الإبتداء(الفرق بين الوقف و القطع و السكت)','أقسام الوقف','مخارج الحروف','صفات الحروف','صفات الحروف التي لها ضد','صفات الحروف التي ليس لها ضد','تقسيم الحروف و الصفات حسب القوة و الضعف','المثلان','المتقاربان','المتجانسان و المتباعدان','التفخيم و الترقيق','أحكام حرف الراء','الرّوْم و الإشمام','فوائد مهمة يجب مراعاتها']

  const getImage = (images) => {
    if (images[params.lessonId -1].length > 4 ) return images[params.lessonId -1]
    else{
      setIsAList(true) 
    }
  }



  

  const multipleLessons = (
    <>
    <Lesson title={toWords(params.lessonId)} id={params.lessonId-1} img={images[params.lessonId - 1][0]} lessonTitle={lessonTitels[params.lessonId -1]}/>
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
      <div style={{ display: 'flex', justifyContent: 'left',
      alignItems:'center', marginBottom: 2, color:'black' }}>       
        <Link href={`/tajweedLessons`}>
          <IconButton sx={{display:'flex', justifyContent:'start',alignItems:'start' , color:'#222', borderRadius:'0px', ":hover": {
                      // backgroundColor: '#574116'
                      backgroundColor: '#6d4e1c'
                    }}}>
              <ArrowBackIcon fontSize="large"  />
          </IconButton>
        </Link>
      </div>
      <Container>
        { !isAList && (<Lesson title={toWords(params.lessonId)} id={params.lessonId-1} img={getImage(images)} lessonTitle={lessonTitels[params.lessonId -1]} />)}
        { isAList && 
          multipleLessons
        }
      </Container>
      <div style={{ display: 'flex', justifyContent: 'space-between',
      alignItems:'center', marginTop: 2 }}>
      <div style={{ display: 'flex', justifyContent: 'right',
      alignItems:'center', marginBottom: 2 }}>     
          {Number(params.lessonId) < 36 &&       
            <Link href={`/tajweedLessons/${Number(params.lessonId)+1}`}>
              <IconButton sx={{paddingX:'5vw', color:'#222', borderRadius:'0px', ":hover": {
                      // backgroundColor: '#574116'
                      backgroundColor: '#6d4e1c'
                    }}}>
                  
                <NavigateNext fontSize="large" />الدرس التالي
              </IconButton>
            </Link>}
            </div>
            <div style={{ display: 'flex', justifyContent: 'left',
      alignItems:'center', marginBottom: 2 }}>
            { Number(params.lessonId) > 1 &&
            <Link href={`/tajweedLessons/${params.lessonId -1}`}>
              <IconButton sx={{paddingX:'5vw',display:'flex', justifyContent:'start',alignItems:'start', color:'#222', borderRadius:'0px', ":hover": {
                      // backgroundColor: '#574116'
                      backgroundColor: '#6d4e1c'
                    }}}>
                الدرس السابق<NavigateBefore fontSize="large" />
              </IconButton>
            </Link>}
          </div>
          </div>

        
    </Box>
  );
}



