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

  const numberOfRows = 12;
  const numberOfColumns = 3;

  const generateLessonName = (rowIndex, colIndex) => {
    const lessonNumber = rowIndex * numberOfColumns + colIndex + 1;
    return `الدرس ${toWords(lessonNumber)}`;
  };

  const generateId = (rowIndex, colIndex) => rowIndex * numberOfColumns + colIndex + 1

  // Convert number to words (e.g., 1 to "First", 2 to "Second", etc.)
  const toWords = (number) => {
    const words = ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن', 'التاسع', 'العاشر','الحادي عشر', 'الثاني عشر', 'الثالث عشر', 'الرابع عشر', 'الخامس عشر', 'السادس عشر', 'السابع عشر', 'الثامن عشر', 'التاسع عشر', 'العشرون','الحادي و عشرون', 'الثاني و عشرون', 'الثالث و عشرون', 'الرابع و عشرون', 'الخامس  و عشرون', 'السادس و عشرون', 'السابع و عشرون', 'الثامن و عشرون', 'التاسع و عشرون', 'الثلاثون', 'الحادي و الثلاثون', 'الثاني و الثلاثون', 'الثالث و الثلاثون الثلاثون', 'الرابع و الثلاثون', 'الخامس و الثلاثون', 'السادس و الثلاثون'];
    return words[number - 1] || number.toString();
  };



  return (
    <Container maxWidth="md" sx={{ py: 8 , minWidth: '75vw' }}>
    <TableContainer component={Paper} sx={{width: '100%'}}>
      <Table>
        {/* Table Body */}
        <TableBody>
          {[...Array(numberOfRows)].map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {[...Array(numberOfColumns)].map((_, colIndex) => (
                <TableCell key={colIndex} sx={{
                    border: 'solid 1px white',
                    textAlign: 'center',
                    // backgroundColor: '#7B612E',
                    backgroundColor: '#432818',
                    color: 'white',
                    cursor: 'pointer',
                    ":hover": {
                      // backgroundColor: '#574116'
                      backgroundColor: '#bb9457'
                    }
                }}><Link href={`tajweedLessons/${generateId(rowIndex,colIndex)}`} >
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
