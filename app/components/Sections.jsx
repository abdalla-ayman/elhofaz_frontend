import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import { Icon, IconButton, colors } from '@mui/material';
import { Adjust, PersonAddAlt1, Timeline } from '@mui/icons-material';

const Section = ({ icon, title, content, backgroundcolor, textcolor }) => (
  <Box py={8} sx={{backgroundColor: backgroundcolor, color: textcolor, borderBottom: '1px solid darkGray'}}>
    <Container >
      <Box display="flex" alignItems="center" justifyContent="center"
      >
        {icon}
        
        <Typography variant="h4" sx={{ marginLeft: 1 }}>{title}</Typography>
      </Box>
      <Box mt={2}>
        <Typography variant='' sx={{whiteSpace: 'pre-line', fontSize: '18px'}}>{content}</Typography>
      </Box>
    </Container>
  </Box>
);

export default function Sections() {
  return (
<div>
      <Section
        icon={<HomeIcon fontSize="large" color="primary" />}
        title="مشروعنا"
        content="حقيقةً بدأ هذا المشروع بفكرة بسيطة جدّاً، مكنونها تحويل هذه الأسافير و وسائط التواصل الإجتماعي إلى منبر لنشر كتاب الله و تحفيظه (خلوة إلكترونية)، استعنّا بالله و بدأنا هذا المشروع بغير تخطيط مؤسس و لم نظُن مجرد الظن أن هذا المشروع القرآني سيجد كل هذا الإحتفاف و الإقبال عليه من كل حدبٍ و صوب، لا نجد في الذاكرة تاريخ معين لبداية المشروع، و لكن يمكن القول بأن الإنطلاقة الحقيقية لهذه التجارة الرابحة كانت في عهد (الكورونا) ومنها انطلق بصورة لا يمكن وصفها كما النار في الهشيم.. "
        backgroundcolor='#EFF1F1'

      />
      <Section
        icon={<Adjust fontSize="large" color="primary" />}
        title="أهداف_البرنامج"    
        backgroundcolor="#fff"
        
        content={`١- إعانة الطالب على حفظ القرآن الكريم كاملاً وإتقانه وفق خطط معينة ومدروسة 
    
        ٢- توفير الوقت والجهد والمال من خلال التواصل عبر المنصة الإلكترونية الموحدة او المجموعات الخاصة (واتساب)
        
        ٣-  مواكبة العلم وتغيير نظام التدريس التقليدي إلى نظام متطور يعتمد على التقنية الحديثة وربطه بها 
        
        ٤- استثمار أوقات المشتركين واستغلال أوقات الفراغ (فإذا فرغت فانصب) 
        
        ٥- تنوير المجتمع بدور المقاريء في التعليم عن بعد ومدى نجاحه 
        `}
/>
      <Section
        icon={<PersonAddAlt1 fontSize="large" color="primary" />}
        title="الاشتراك في البرنامج"
        content={`١/ متاح للبالغين  (للذكور حاليا) 
        
        ٢/ يكون الإشتراك في البرنامج متاحا على فترتين خلال السنة يتم الإعلان عنها عبر مواقع التواصل الاجتماعي. 
        
        ٣/ يتم فتح الإشتراك في فترات غير الفترات الرئيسية في السنة لتدعيم  المجموعات الناقصة 
        
        ٤/ الإشتراك متاح مجاناً  لكل مشترك وما زلنا على هذا العهد ماضون وسنمضي على هذا النهج إن شاء اللهُ تعالى
        `}
        backgroundcolor='#EFF1F1'
      />
      
      <Section
        icon={<Timeline fontSize="large" color="primary" />}
        title="مسارات البرنامج"    
        backgroundcolor="#fff"
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
>

    </Section>

      {/* Add more sections as needed */}
    </div>  )
}
