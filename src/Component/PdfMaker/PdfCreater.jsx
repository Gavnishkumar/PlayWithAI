import React from 'react'
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import { useSelect } from '../../Context/AllContext';
import logo from '../../Icons/logo/logo-no-background.png'
import star from '../../Icons/star.png';
import { StyleSheet,Font  } from "@react-pdf/renderer";
function PdfCreater() {
    const {selectedChat,PdfStyleSetting} = useSelect();
    console.log(PdfStyleSetting)
   //pdf styling
Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf' },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf', fontWeight: 'normal' },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 'bold' },
  ]
});
 const styles = StyleSheet.create({
    page: {
      backgroundColor: "#FFFFFF",
      color: `${PdfStyleSetting.TextFontColor}`,
      fontSize:`${PdfStyleSetting.TextFontSize}px`,
      padding:'20px'
    },
    section: {
      margin: 10,
    color:'red',
    fontWeight: 'bold'
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
    Heading:{
      fontWeight:'bold',
      fontFamily:`${PdfStyleSetting.FontFamily}`,
      fontSize:`${PdfStyleSetting.HeadingFontSize}px`,
      marginBottom:'4px',
      marginTop:'10px',
    },
    SubHeading:{
      fontWeight:'bold',
      color:`${PdfStyleSetting.SubHeadingColor}`,
      fontFamily:`${PdfStyleSetting.FontFamily}`,
      fontSize:`${PdfStyleSetting.SubHeadingFontSize}px`,
      marginTop:'5px',
      marginBottom:'0px',
    },
    code:{
      backgroundColor:'black',
      color:'white',
      overflow:'hidden',
      paddingLeft:'10px',
      paddingTop:'10px',
      paddingBottom:'10px',
      width:'100%'
    },
    plan:{
      fontSize:`${PdfStyleSetting.TextFontSize}px`,
      fontFamily:`${PdfStyleSetting.FontFamily}`,
      color:`${PdfStyleSetting.TextFontColor}`
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      textAlign: 'center',
      fontSize: 10,
      color: '#333',
    },
    waterMark:{
      position:'absolute',
      top: 2,
      right:0,
      height:'60px',
      width:'100px',
    }
  });
    function isNumber(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    }
    const ObjectToText = (obj) => {
      if (typeof (obj) === 'string') {
        return (
          <Text>{obj[0].toUpperCase() + obj.slice(1)}</Text>
        )
      }
      return Object.entries(obj).map(([key, value]) => {
        
        return (
          <>
            {typeof(value) === 'object' ? <Text><Text style={styles.SubHeading}>{isNumber(key) ? <Image src={star}/>:<Text style={styles.SubHeading}>{key[0].toUpperCase()+key.slice(1)} : </Text> }</Text>{ObjectToText(value)}</Text> : <Text style={styles.plan}>{isNumber(key) ? <Image src={star}/>:<Text style={styles.SubHeading}>{key[0].toUpperCase()+key.slice(1)} : </Text> }<Text style={styles.plan}>{ value[0]!=='' && value[0]!==' ' && value[0].toUpperCase()+ value.slice(1)}</Text></Text>}{'\n'}
          </>
        )
      })
    }
    const Footer = () => (
      <View style={styles.footer}>
        <Text>Created@PlayWithAI</Text>
      </View>
    );
  return (
<PDFViewer width="100%" height="800px">
 
  <Document style={{padding:"20px"}}>
    <Page size="A4" style={styles.page}>
      <Image src={logo} style={styles.waterMark}/>
      <View style={{padding:'20px'}}>
      <Footer/>

          {/* { selectedChat.forEach((element,index) => { */}
          
         { selectedChat.map((element)=>{

            return(
              <>
              <Text style={styles.Heading}>{element.question[0].toUpperCase()+ element.question.slice(1)}</Text>
          {Object.entries(element.answer).map(([key, value]) => {
            // console.log(value)
            return(
              <>
              <Text  style={styles.SubHeading} >{key[0].toUpperCase() + key.slice(1)}: </Text>
              <Text key={key} style={key==='code'? styles.code: styles.plan}>
                {ObjectToText(value)}
              </Text>
              </>
            )

          })}
          </>
        )
        })
      }
  
    </View>
    </Page>
  </Document>
  </PDFViewer>
  )
}

export default PdfCreater