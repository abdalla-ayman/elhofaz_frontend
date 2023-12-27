import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';

const LessonPage = ({title , id, img}) => {

  const images = ['/tl-(1).jpg', '/tl-(2).jpg', '/tl-(3).jpg',[ '/tl-(4).jpg', '/tl-(5).jpg'], '/tl-(6).jpg', '/tl-(7).jpg', ['/tl-(8).jpg'  , '/tl-(9).jpg'], '/tl-(10).jpg',['/tl-(11).jpg', '/tl-(12).jpg'], '/tl-(13).jpg', '/tl-(14).jpg',['/tl-(15).jpg', '/tl-(16).jpg']]  
  const pageTitle = title;
//   const lessonTitle = "Learning";
  const imageUrl = img;
//   const lessonUrl = "https://example.com/lessons/123";

  return (
    <Container maxWidth="md" sx={{ pt: 8, pb: 8 }}>
      <Typography variant="h3" component="h1" align="center" mb={8} gutterBottom>
        {pageTitle}
      </Typography>
      <Card>
        <CardMedia
          component="img"
          alt={title}
          height="100"
          image={imageUrl}
          sx={{ objectFit: 'cover' }}
        />
        {/* <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            {lessonTitle}
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to the lesson on React! This is an exciting opportunity to enhance your skills.
          </Typography>
          <Link href={lessonUrl} target="_blank" rel="noopener noreferrer" color="primary">
            View Lesson
          </Link>
        </CardContent> */}
      </Card>
    </Container>
  );
};

export default LessonPage;