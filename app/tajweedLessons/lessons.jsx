import React from 'react'
import Container from '@mui/material/Container';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Link from "next/link";

  
export default function lessons() {

  const lessonTitels = ['سورة الفاتحة','آداب تلاوة القرآن الكريم','مقدمة في علم التجويد','الاستعاذة و البسملة','أحكام النون الساكنة و التجويد','الإظهار الحلقي','الإدغام','الإقلاب','الإخفاء الحقيقي','الميم و النون المشددتين','الميم الساكنة','القلقلة','حكم اللامات السواكن','مقدمة المدود','المد الفرعي بسبب الهمز','المد الفرعي بسبب السكون','المد في الحروف الهجائية ','تتمة المدود','همزة الوصل و همزة القطع','أحكام تتعلق بهمزة الوصل','هاء التأنيث','المقطوع و الموصول','الوقف و الإبتداء','أقسام الوقف','مخارج الحروف','صفات الحروف','صفات الحروف التي لها ضد','صفات الحروف التي ليس لها ضد','الحروف والصفات حسب القوة والضعف','المثلان','المتقاربان','المتجانسان و المتباعدان','التفخيم و الترقيق','أحكام حرف الراء','الرّوْم و الإشمام','فوائد مهمة يجب مراعاتها']

  const numberOfRows = 12;
  const numberOfColumns = 3;

  const generateLessonName = (rowIndex, colIndex) => {
    const lessonNumber = rowIndex * numberOfColumns + colIndex + 1;
    return `الدرس ${toWords(lessonNumber)}
            
            (${lessonTitels[lessonNumber-1]})
                      `;
  };

  const generateId = (rowIndex, colIndex) => rowIndex * numberOfColumns + colIndex + 1

  // Convert number to words (e.g., 1 to "First", 2 to "Second", etc.)
  const toWords = (number) => {
    const words = ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن', 'التاسع', 'العاشر','الحادي عشر', 'الثاني عشر', 'الثالث عشر', 'الرابع عشر', 'الخامس عشر', 'السادس عشر', 'السابع عشر', 'الثامن عشر', 'التاسع عشر', 'العشرون','الحادي و عشرون', 'الثاني و عشرون', 'الثالث و عشرون', 'الرابع و عشرون', 'الخامس  و عشرون', 'السادس و عشرون', 'السابع و عشرون', 'الثامن و عشرون', 'التاسع و عشرون', 'الثلاثون', 'الحادي و الثلاثون', 'الثاني و الثلاثون', 'الثالث و الثلاثون', 'الرابع و الثلاثون', 'الخامس و الثلاثون', 'السادس و الثلاثون'];
    return words[number - 1] || number.toString();
  };



  return (
    <Container maxWidth="md" sx={{ py: 8  }}>
    <TableContainer sx={{}}>
      <Table sx={{backgroundColor:'#907235', display: { xs: "none", sm: "block" } }}>
        {/* Table Body */}
        <TableBody>
          {[...Array(numberOfRows)].map((_, rowIndex) => (
            <TableRow key={rowIndex} sx={{borderStyle: 'none', }}>
              {[...Array(numberOfColumns)].map((_, colIndex) => (
                <TableCell key={colIndex} sx={{
                    // paddingY:'20px',
                    // margin:'40px',
                    width: '33%',
                    // height:'0',
                    whiteSpace: "pre-line",
                    borderRadius: '35px',
                    border: 'solid 10px #907235',
                    textAlign: 'center',
                    // backgroundColor: '#7B612E',
                    backgroundColor: '#432818',
                    color: 'white',
                    cursor: 'pointer',
                    ":hover": {
                      // backgroundColor: '#574116'
                      backgroundColor: '#bb9457'
                    }
                }}><Link style={{width:'100%',height:'100%'}} href={`tajweedLessons/${generateId(rowIndex,colIndex)}`} >
                    {/* #7B612E */}
                  {generateLessonName(rowIndex, colIndex)}</Link>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Table sx={{backgroundColor:'#907235', display: { xs: "block", sm: "none" } }}>
        {/* Table Body */}
        <TableBody>
          {[...Array(numberOfRows)].map((_, rowIndex) => (
            <TableRow key={rowIndex} sx={{borderStyle: 'none' }}>
              {[...Array(numberOfColumns)].map((_, colIndex) => (
                <TableCell key={colIndex} sx={{
                    // paddingY:'20px',
                    // margin:'40px',
                    // flex:'1',
                    width: '33%',
                    // height:'0',
                    whiteSpace: "pre-line",
                    borderRadius: '35px',
                    border: 'solid 10px #907235',
                    textAlign: 'center',
                    // backgroundColor: '#7B612E',
                    backgroundColor: '#432818',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize:'12px',
                    fontStyle:'italic',

                    ":hover": {
                      // backgroundColor: '#574116'
                      backgroundColor: '#bb9457'
                    }
                }}><Link style={{width:'100%',height:'100%'}} href={`tajweedLessons/${generateId(rowIndex,colIndex)}`} >
                    {/* #7B612E */}
                  {generateLessonName(rowIndex, colIndex)}</Link>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>  )
}
