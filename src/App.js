import React from 'react'
import { Header } from './components/header/Header';
import { SectionImg } from './components/sectionimg/SectionImg';
import { SectionVideo } from './components/sectionVideo/SectionVideo';
import { CardLarge } from './components/cardLarge/CardLarge';
import Accordion from "./components/faqs/Accordion";
import data from './data/data';
  

function App() {
  return (
    <>
      <Header/>
      <SectionVideo
        title={<div dangerouslySetInnerHTML={{ __html: data.s1.title }} />}
        content={<div dangerouslySetInnerHTML={{ __html: data.s1.content}} />} 
        imgPosition={data.s1.imgPosition} 
      />    
      <SectionImg 
        img={data.s2.img}
        title={<div dangerouslySetInnerHTML={{ __html: data.s2.title}} />} 
        content={<div dangerouslySetInnerHTML={{ __html: data.s2.content}} />} 
        imgPosition={data.s2.imgPosition} 
      />
      <SectionImg 
        img={data.s3.img} 
        title={<div dangerouslySetInnerHTML={{ __html: data.s3.title}} />} 
        content={<div dangerouslySetInnerHTML={{ __html: data.s3.content}}/>} 
        imgPosition={data.s3.imgPosition} 
      />
      <h2 className="titleCenter">La etiqueta energética de la UE ahora y en el futuro </h2>
      <SectionImg 
        img={data.s4.img} 
        title={<div dangerouslySetInnerHTML={{ __html: data.s4.title}} />} 
        content={<div dangerouslySetInnerHTML={{ __html: data.s4.content}} />} 
        imgPosition={data.s4.imgPosition} 
      />
      <SectionImg 
        img={data.s5.img} 
        title={<div dangerouslySetInnerHTML={{ __html: data.s5.title}} />} 
        content={<div dangerouslySetInnerHTML={{ __html: data.s5.content}} />} 
        imgPosition={data.s5.imgPosition} 
      />
      <h2 className="titleCenter">Las nuevas etiquetas energéticas para cada clase de dispositivo en detalle </h2><br/>
      <CardLarge 
        img={data.cardL1.img}
        href={data.cardL1.href}
        title={<div dangerouslySetInnerHTML={{ __html: data.cardL1.title}} />}
      />
      <SectionImg 
        img={data.s6.img} 
        title={<div dangerouslySetInnerHTML={{ __html: data.s6.title}} />} 
        content={<div dangerouslySetInnerHTML={{ __html: data.s6.content}} />} 
        imgPosition={data.s6.imgPosition} 
      />
      <CardLarge 
        img={data.cardL2.img}
        href={ data.cardL2.href}
        title={<div dangerouslySetInnerHTML={{ __html: data.cardL2.title}} />}
      />
      <SectionImg 
        img={data.s7.img} 
        title={<div dangerouslySetInnerHTML={{ __html: data.s7.title}} />} 
        content={<div dangerouslySetInnerHTML={{ __html: data.s7.content}} />} 
        imgPosition={data.s7.imgPosition} 
      />
      <CardLarge 
        img={data.cardL3.img}
        href={ data.cardL3.href}
        title={<div dangerouslySetInnerHTML={{ __html: data.cardL3.title}} />}
      />
      <SectionImg 
        img={data.s8.img} 
        title={<div dangerouslySetInnerHTML={{ __html: data.s8.title}} />} 
        content={<div dangerouslySetInnerHTML={{ __html: data.s8.content}} />} 
        imgPosition={data.s8.imgPosition} 
      />
      <CardLarge 
        img={data.cardL4.img}
        href={ data.cardL4.href}
        title={<div dangerouslySetInnerHTML={{ __html: data.cardL4.title}} />}
      />
      <SectionImg 
        img={data.s9.img} 
        title={<div dangerouslySetInnerHTML={{ __html: data.s9.title}} />} 
        content={<div dangerouslySetInnerHTML={{ __html: data.s9.content}} />} 
        imgPosition={data.s9.imgPosition} 
      />
      <CardLarge 
        img={data.cardL5.img}
        href={ data.cardL5.href}
        title={<div dangerouslySetInnerHTML={{ __html: data.cardL5.title}} />}
      />
      <SectionImg 
        img={data.s10.img} 
        title={<div dangerouslySetInnerHTML={{ __html: data.s10.title}} />} 
        content={<div dangerouslySetInnerHTML={{ __html: data.s10.content}} />} 
        imgPosition={data.s10.imgPosition} 
      />
      <CardLarge 
        img={data.cardL6.img}
        href={ data.cardL6.href}
        title={<div dangerouslySetInnerHTML={{ __html: data.cardL6.title}} />}
      />
      <SectionImg 
        img={data.s11.img} 
        title={<div dangerouslySetInnerHTML={{ __html: data.s11.title}} />} 
        content={<div dangerouslySetInnerHTML={{ __html: data.s11.content}} />} 
        imgPosition={data.s11.imgPosition} 
      />
      <img src="https://specials.mediamarkt.es/assets-react/eficiencia-energetica/AF_LOGO_COMPROMETIDOS_MM.PNG" className="imgCenter" />
      <Accordion />
    </>
  );
}

export default App;
