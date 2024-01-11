import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {  ArrowRightAlt, CancelPresentation, ExitToApp, KeyboardBackspace } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Modal from '@mui/material/Modal';
import Image from 'next/image'
import Skeleton from '@mui/material/Skeleton'
const LessonPage = ({title , id, img, lessonTitle}) => {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

    const lessonTitels = ['سورة الفاتحة','آداب تلاوة القرآن الكريم','مقدمة في علم التجويد','الاستعاذة و البسملة','أحكام النون الساكنة و التجويد','الإظهار الحلقي','الإدغام','الإقلاب','الإخفاء الحقيقي','الميم و النون المشددتين','الميم الساكنة','القلقلة','حكم اللامات السواكن','مقدمة المدود','المد الفرعي بسبب الهمز','المد الفرعي بسبب السكون','المد في الحروف الهجائية في أوائل السور','تتمة المدود','همزة الوصل و همزة القطع','أحكام تتعلق بهمزة الوصل','هاء التأنيث','المقطوع و الموصول','الوقف و الإبتداء(الفرق بين الوقف و القطع و السكت)','أقسام الوقف','مخارج الحروف','صفات الحروف','صفات الحروف التي لها ضد','صفات الحروف التي ليس لها ضد','تقسيم الحروف و الصفات حسب القوة و الضعف','المثلان','المتقاربان','المتجانسان و المتباعدان','التفخيم و الترقيق','أحكام حرف الراء','الرّوْم و الإشمام','فوائد مهمة يجب مراعاتها']

//   const images = ['/tl-(1).jpg', '/tl-(2).jpg', '/tl-(3).jpg',[ '/tl-(4).jpg', '/tl-(5).jpg'], '/tl-(6).jpg', '/tl-(7).jpg', ['/tl-(8).jpg'  , '/tl-(9).jpg'], '/tl-(10).jpg',['/tl-(11).jpg', '/tl-(12).jpg'], '/tl-(13).jpg', '/tl-(14).jpg',['/tl-(15).jpg', '/tl-(16).jpg']]  
  const pageTitle = title;
//   const lessonTitle = "Learning";
  const imageUrl = img;
//   const lessonUrl = "https://example.com/lessons/123";

    const handleOpenImageModal = () => {
    setIsImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
  };


  return (
    <Container maxWidth="sm" sx={{ pb:'0px', position:'relative' }}>
      <Typography variant="h3" component="h1" align="center" mb={8} gutterBottom>
        {pageTitle}
      </Typography>
      <Typography variant="h4" component="h1" align="center" gutterBottom color={'black'}>
            {lessonTitle}
          </Typography>
          
      <Card sx={{backgroundColor:'inherit'}}>

        <CardMedia
          component="img"
          alt={title}
          height="100"
          image={imageUrl}
          sx={{ objectFit: 'cover', cursor:'pointer' }}
          onClick={handleOpenImageModal}
          
        />
        
            
        {/* <CardContent>

          <Typography variant="body1" paragraph>
            Welcome to the lesson on React! This is an exciting opportunity to enhance your skills.
          </Typography>
          <Link href={lessonUrl} target="_blank" rel="noopener noreferrer" color="primary">
            View Lesson
          </Link>
        </CardContent> */}
        {/* <div sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <IconButton onClick={goToPreviousLesson} disabled={currentLessonIndex === 0}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton onClick={goToNextLesson} disabled={currentLessonIndex === lessonUrls.length - 1}>
              <ArrowForwardIcon />
            </IconButton>
          </div> */}
      </Card>
      {/* <KeyboardBackspace /><ArrowRightAlt /> */}
      <Modal
          open={isImageModalOpen}
          onClose={handleCloseImageModal}
          aria-labelledby="image-modal"
          aria-describedby="full-screen-image"
          sx={{display:'flex',alignItems:'center',justifyContent:'center'}}
        ><>
            
            
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'
        //   ,position:'relative'
          }}>

              <IconButton sx={{  
                color:'#fff',
                position:'absolute',
                top: "-45%",
                left: "45%",
                width: '100vw', 
                height: '100vh',
                cursor:'pointer'}}
                onClick={handleCloseImageModal}>
                 <CancelPresentation fontSize="large"  color='red'/>
              </IconButton>

            <img src={imageUrl} alt={lessonTitle} style={{ width: '100vw', height: '100vh', objectFit: 'contain' }} />
          </div></>
        </Modal> 
    </Container>
  );
};
{/*  */}
export default LessonPage;