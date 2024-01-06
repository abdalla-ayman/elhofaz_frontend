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

export default function RecitingCorrection() {
  const teachersData = [
    { name: 'شيخ هاشم محمد', date: '2023-12-11', lessonLink: '/lessons/123', lessonText:'عرض الحلقة'  },
    { name: 'شيخ علي عمر', date: '2023-12-26', lessonLink: '/lessons/456', lessonText:'غير متوفر' },
    { name: 'شيخ علي عمر', date: '2023-12-26', lessonLink: '/lessons/456', lessonText:'غير متوفر' },
    { name: 'شيخ علي عمر', date: '2023-12-26', lessonLink: '/lessons/456', lessonText:'غير متوفر' },
    { name: 'شيخ علي عمر', date: '2023-12-26', lessonLink: '/lessons/456', lessonText:'غير متوفر' },
    { name: 'شيخ علي عمر', date: '2023-12-26', lessonLink: '/lessons/456', lessonText:'غير متوفر' },
    // Add more teacher data as needed
  ];

  return (
    <Container maxWidth="lg" sx={{ 
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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>اسم المعلم</TableCell>
              <TableCell>تاريخ الحلقة</TableCell>
              <TableCell>رابط الحلقة</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachersData.map((teacher, index) => (
              <TableRow key={index}>
                <TableCell>{teacher.name}</TableCell>
                <TableCell>{teacher.date}</TableCell>
                <TableCell>
                  <Link href={teacher.lessonLink} target="_blank" rel="noopener noreferrer">
                    {teacher.lessonText}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
