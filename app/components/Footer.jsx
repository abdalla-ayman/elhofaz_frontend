import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { Box, Container, IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    // <footer className=" text- py-6">
    //   <div className="container mx-auto text-center">
    //     <Typography variant='h6'>&copy; مَقَارِئُ الحُفّاظِ</Typography>
    //     <p className="text-sm mt-2">Made with ❤️ and Tailwind CSS</p>
    //   </div>
    // </footer>
      
    <Box
    bgcolor="#53421f"
    py={3}
    bottom="0"
    width="100%"
    color="white"
    textAlign="left"
  >
    <Container>
      <Container></Container>
      <Box py={2}>
        <Typography variant="h4">برنامج السفرة</Typography>
        <Typography variant="body6" sx={{fontSize: '17px'}}>
هو فرع من فروع برنامج مقارئ الحفاظ يهتم بتعليم القرآن الكريم وعلومه ويعتمد على منهج مجرب تدريسه يقوم على آلية معينة للحفظ  
</Typography>
        <Typography variant='h6' mt={2}>مواقع التواصل الاجتماعي</Typography>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          
          <IconButton color="inherit" component="a" href="https://www.facebook.com/profile.php?id=100094450418374&mibextid=ZbWKwL" target='_blank'>
            <Facebook htmlColor='' sx={{fontSize: '36px'}}/>
          </IconButton>
          <IconButton color="inherit" component="a" href="https://twitter.com/maqaresafarah?t=3ld9XzJMs-TqhwYNHTFMQQ&s=09" target='_blank'>
            <Twitter sx={{fontSize: '36px'}}/>
          </IconButton>
          <IconButton color="inherit" component="a" href="https://instagram.com/maqaresafarah?igshid=MzNlNGNkZWQ4Mg==" target='_blank'>
            <Instagram sx={{fontSize: '36px'}}/>
          </IconButton>
          <IconButton color="inherit" component="a" href="https://www.youtube.com/@maqaresafarah" target='_blank'>
            <YouTube sx={{fontSize: '36px'}}/>
          </IconButton>
          
        </Box>
      </Box>
      {/* <Box py={2}>
        <Typography variant="h6">Quick Links</Typography>
        Add your quick links here
        <Typography variant="body2"><Link>Link 1</Link></Typography>
        <Typography variant="body2"><Link>Link 1</Link></Typography>
        <Typography variant="body2"><Link>Link 1</Link></Typography>
      </Box> */}
    </Container>
    <Box
      bgcolor="#53421f"
      py={1}
      color="white"
      textAlign="center"
    >
      <Typography variant="body">&copy; 2023 مَقَارِئُ الحُفّاظِ</Typography>
    </Box>
  </Box>
    )
}
