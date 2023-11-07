import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import { Button, Grid, Icon, IconButton, Paper, colors } from '@mui/material';
import { Adjust, AssignmentInd, PersonAddAlt1, Timeline } from '@mui/icons-material';

const Section = ({ icon, title, content, backgroundcolor, textcolor }) => (
  <Box py={4} sx={{
    backgroundColor: backgroundcolor,
    color: textcolor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
    }}>
    <Container sx={{
        

    }}>
      <Box mb={'30px'} display="flex" alignItems="center" justifyContent="center" flexDirection= 'row' >
        {icon}
        
        <Typography variant="h4" fontSize={30} sx={{ marginLeft: 1}}>{title}</Typography>
      </Box>
      <Paper>
        <Container sx={{
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid #e0e0e0'
              }}>
            <Box mt={2}>
                <Typography variant='' sx={{whiteSpace: 'pre-line', fontSize: '18px'}}>{content}</Typography>
            </Box>
        </Container>
      </Paper>
    </Container>
  </Box>
);

const Track = ({title, content}) => (
    <Grid item xs={12} md={6}>
              <Container sx={{
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid #e0e0e0'
              }}>
                <Typography variant="subtitle1" sx={{
                    backgroundColor: '#53421f',
                    color: 'white',
                    padding: '8px',
                    marginY: '8px',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    letterSpacing: '1px'
                }}>
                    {title}
                </Typography>
                <Typography variant="body1" sx={{
                    fontSize: '18px'
                }}>
                    {content}
</Typography>
              </Container>
            </Grid>
)



export default function Sections() {
  return (
<div>
      <Section
        icon={<InfoIcon fontSize="large" color="primary"  sx={{margin: '0 0 10px 0'}}/>}
        title="نبذة"
        content={`* بدأ هذا المشروع بفكرة بسيطة جدّاً ، مكنونها تحويل هذه الأسافير ووسائط التواصل الإجتماعي إلى منبر لنشر كتاب الله و تحفيظه (خلوة إلكترونية).
        
        * استعنّا بالله وبدأنا هذا المشروع القرآني ولم نظن مجرد الظنّ أنه سيجد كل هذا الإحتفاف والإقبال عليه من كل حدب وصوب، وبعدها إنطلق كما النار في الهشيم.`}
        backgroundcolor='#C29F59'

      />
      <Section
        icon={<Adjust fontSize="large" color="primary" sx={{margin: '0 0 10px 0'}}/>}
        title="أهداف البرنامج"    
        backgroundcolor="#907235"
        content={`١- إعانة الطالب على حفظ القرآن الكريم كاملاً وإتقانه وفق خطط معينة ومدروسة 
    
        ٢- توفير الوقت والجهد والمال من خلال التواصل عبر المنصة الإلكترونية الموحدة او المجموعات الخاصة (واتساب)
        
        ٣-  مواكبة العلم وتغيير نظام التدريس التقليدي إلى نظام متطور يعتمد على التقنية الحديثة وربطه بها 
        
        ٤- استثمار أوقات المشتركين واستغلال أوقات الفراغ (فإذا فرغت فانصب) 
        
        ٥- تنوير المجتمع بدور المقاريء في التعليم عن بعد ومدى نجاحه 
        `}
/>
      {/* <Section
        icon={<PersonAddAlt1 fontSize="large" color="primary" />}
        title="الاشتراك في البرنامج"
        content={`١/ متاح للبالغين  (للذكور حاليا) 
        
        ٢/ يكون الإشتراك في البرنامج متاحا على فترتين خلال السنة يتم الإعلان عنها عبر مواقع التواصل الاجتماعي. 
        
        ٣/ يتم فتح الإشتراك في فترات غير الفترات الرئيسية في السنة لتدعيم  المجموعات الناقصة 
        
        ٤/ الإشتراك متاح مجاناً  لكل مشترك وما زلنا على هذا العهد ماضون وسنمضي على هذا النهج إن شاء اللهُ تعالى
        `}
        backgroundcolor='#EFF1F1'
        // textcolor= 'white'
      />
       */}
      <Box py={4} sx={{ backgroundColor: '#C29F59' }}>
      <Container maxWidth="lg" sx={{
        textAlign: 'center'
      }}>
        <Box mb={'30px'} sx={{display:'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            <AssignmentInd fontSize='large' color='primary' sx={{margin: '0 0 10px 0'}}/>
            <Typography variant="h4"  marginLeft={2} fontSize={30} >
            مسارات البرنامج
            </Typography>
        </Box>
        <Paper>
          <Grid container>
            <Track 
                title= 'المسارالتأهيلي'
                // content  = {`هو مخصص للطلاب المبتدئين في القراءة والغرض منه تعريف الطالب بالأحكام العامة للتجويد حيث يتم تدريبهم وتأهيلهم لقراءة القرآن الكريم مجوداً  وشرح دروس التجويد  مع حفظ  مقدار أسبوعي وجهين في الأسبوع يتم قبول الطلاب مباشرة في هذا المسار تتراوح مدته من أربعة إلى خمسة أشهر.`}
            />
            <Track 
                title= 'مسار الحافظ الجديد'
                // content= {`           
                //         هو مخصص للطلاب الذين يرغبون في حفظ كتاب الله كاملاً
                //         يخضع جميع طلاب هذا المسار لإختبار تمهيدي يتم من خلاله التأكد من جودة القراءة والمخارج الصحيحة وإذا اجتاز الطالب هذا الاختبار يحق له الدخول في المسار مباشرة وإذا لم يجتاز الاختبار يتم تحويله إلى مسار التأهيل
                //         يسمح لهم بمقدار يومي من الحفظ (نصف وجه، وجه، وجهين)
                // `}
            />
            <Track 
                title= 'مسار الخاتم'
                // content= {`                  
                //         هو مخصص للطلاب الحافظين للقرآن كاملاً  ويرغبون بتجويد حفظهم واتقانه أو الطلاب الذين تفلت منهم القرآن لضعف التعاهد او الانشغال عن المراجعة المنتظمة الصحيحة
                //         يتم قبول الطلاب مباشرة في المسار بعد التأكد من صحة البيانات 
                //         يسمح لهم بمقدار يومي من الحفظ (وجه، وجهين، ثلاثة أوجه، أربعة أوجه)
                // `}
            />
            <Track 
                title= 'مسار الخمسة أجزاء '
                // content= {`سيكون متاحا ان شاء الله لاحقاً ليساعد الطالب على حفظ أجزاء  معينة من القرآن

                // `}
            />
            <Track 
                title= 'مسار السور'
//                 content= {`
                    
// سيكون متاحا ان شاء الله لاحقاً ليساعد الطالب على حفظ سور محددة كالبقرة وآل عمران والرحمن وغيرهم

//                 `}
            />
            
          </Grid>
        </Paper>
      </Container>
    </Box>
      {/* <Section
        icon={<Timeline fontSize="large" color="white" />}
        title="مسارات البرنامج"    
        backgroundcolor='#53421f'
        textcolor= 'white'
        content={`
        
         ${  "المسارالتأهيلي" }
 هو مخصص للطلاب المبتدئين في القراءة والغرض منه تعريف الطالب بالأحكام العامة للتجويد حيث يتم تدريبهم وتأهيلهم لقراءة القرآن الكريم مجوداً مع شرح دروس التجويد
 يتم قبول الطلاب مباشرة في هذا المسار 
 تتراوح مدته من ثلاثة إلى أربعة أشهر

 مسار الحافظ الجديد
 هو مخصص للطلاب الذين يرغبون في حفظ كتاب الله كاملاً
 يخضع جميع طلاب هذا المسار لإختبار تمهيدي يتم من خلاله التأكد من جودة القراءة والمخارج الصحيحة وإذا اجتاز الطالب هذا الاختبار يحق له الدخول في المسار مباشرة وإذا لم يجتاز الاختبار يتم تحويله إلى مسار التأهيل
 يسمح لهم بمقدار يومي من الحفظ (نصف وجه، وجه، وجهين)
 
 مسار الخاتم
 هو مخصص للطلاب الحافظين للقرآن كاملاً  ويرغبون بتجويد حفظهم واتقانه أو الطلاب الذين تفلت منهم القرآن لضعف التعاهد او الانشغال عن المراجعة المنتظمة الصحيحة
 يتم قبول الطلاب مباشرة في المسار بعد التأكد من صحة البيانات 
 يسمح لهم بمقدار يومي من الحفظ (وجه، وجهين، ثلاثة أوجه، أربعة أوجه)

 مسار الخمسة أجزاء 
سيكون متاحا ان شاء الله لاحقاً ليساعد الطالب على حفظ أجزاء  معينة من القرآن

 مسار السور
سيكون متاحا ان شاء الله لاحقاً ليساعد الطالب على حفظ سور محددة كالبقرة وآل عمران والرحمن وغيرهم

        `}
/> */}


      {/* Add more sections as needed */}
    </div>  )
}
