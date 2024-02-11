import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

export default function RecitingCorrection( {teachers, sessions} ) {
  const teachersData = [
    { name: 'شيخ هاشم محمد', date: '2023-12-11 الاثنين', hour: '4:30 عصراً', subject: 'تلاوة سورة الفاتحة', lessonLink: '/lessons/123', lessonText:'عرض الحلقة'  },
    { name: 'شيخ علي عمر', date: '2023-12-26 الثلاثاء', hour: '2:00 ظهراً', subject: 'تلاوة سورة الفاتحة', lessonLink: '/lessons/123', lessonLink: '/lessons/456', lessonText:'غير متوفر' },
    { name: 'شيخ علي عمر', date: '2023-12-26 الثلاثاء', hour: '2:00 ظهراً', subject: 'تلاوة سورة الفاتحة', lessonLink: '/lessons/123',lessonLink: '/lessons/456', lessonText:'غير متوفر' },
    { name: 'شيخ علي عمر', date: '2023-12-26 الثلاثاء', hour: '2:00 ظهراً', subject: 'تلاوة سورة الفاتحة', lessonLink: '/lessons/123',lessonLink: '/lessons/456', lessonText:'غير متوفر' },
    { name: 'شيخ علي عمر', date: '2023-12-26 الثلاثاء', hour: '2:00 ظهراً', subject: 'تلاوة سورة الفاتحة', lessonLink: '/lessons/123',lessonLink: '/lessons/456', lessonText:'غير متوفر' },
    { name: 'شيخ علي عمر', date: '2023-12-26 الثلاثاء', hour: '2:00 ظهراً', subject: 'تلاوة سورة الفاتحة', lessonLink: '/lessons/123',lessonLink: '/lessons/456', lessonText:'غير متوفر' },
    // Add more teacher data as needed
  ];

  const getTeacherName = (teacher, id) => {

      if(teacher.id == id-1) {
        // console.log(teacher.id)
        // console.log(id)
        // console.log(teacher.name)
        return `${teacher.name}`
      }
      else {

        return null
      }

    
  }

  return (
    <Container maxWidth="sm" sx={{ 
      py: 4,
      display: "flex",
        flexDirection: "column",
        justifyContent:'center',
        alignItems: 'center',
        width: "100%",
        minHeight: "100vh", }}>
      <Typography variant="h4" gutterBottom mb={4} textAlign={'center'}>
      تصحيح التلاوة
      </Typography>
      <Typography variant="body4" paragraph>
        هو برنامج مفتوح للعامة لتصحيح التلاوة. سيتم توفير رابط الحلقة عن طريق (google meet) او (Zoom).
      </Typography>
      { sessions.length ? ( 
      <TableContainer component={Paper} sx={{}}>
        
        <Table sx={{ fontSize:'10px'}}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign:'center',}}>المعلمين</TableCell>
              
              <TableCell sx={{ textAlign:'center',}}>تاريخ الحلقة</TableCell>
              <TableCell sx={{ textAlign:'center', }}>توقيت الحلقة</TableCell>
              <TableCell sx={{ textAlign:'center',}}>رابط الحلقة</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sessions.map((session, index) => (
              teachers.map(teacher => (
              <TableRow key={index}>

                <TableCell sx={{ textAlign:'center', }}>
                  1. {getTeacherName(teacher, session.teacher_id) || `----` }   
                  <br></br><br></br>          
                  2. {getTeacherName(teacher,session.teacher2_id) || `----`}
                </TableCell>

                <TableCell sx={{ textAlign:'center', }}>{session.date}</TableCell>
                <TableCell sx={{ textAlign:'center', }}>{session.time}</TableCell>
                
                <TableCell sx={{ textAlign:'center', }}>
                  <Link href={session.link} target="_blank" rel="noopener noreferrer">
                  {session.title}
                  </Link>
                </TableCell>
              </TableRow>
              ))
            ))} 
          </TableBody>
        </Table>
        
      </TableContainer>) : <></>}
      {!sessions.length && 
              (<Typography variant="body4" paragraph p={8}>
                لا توجد دروس الآن
              </Typography>)
        }
    </Container>
  )
}
