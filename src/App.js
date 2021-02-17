import React from 'react'
import { Header } from './components/header/Header';
import { SectionImg } from './components/sectionimg/SectionImg';
import { SectionVideo } from './components/sectionVideo/SectionVideo';
import { CardLarge } from './components/cardLarge/CardLarge';
import Accordion from "./components/faqs/Accordion";

import data from './data/data'

console.log(data)
  

function App() {
  return (
    <React.Fragment>
      <Header/>
      <SectionVideo
        title={data.s1.title} 
        content={data.s1.content} 
        imgPosition={data.s1.imgPosition} 
      />        
      <SectionImg 
        img={data.s2.img} 
        title={data.s2.title} 
        content={data.s2.content} 
        imgPosition={data.s2.imgPosition} 
      />
      <SectionImg 
        img={data.s3.img} 
        title={data.s3.title} 
        content={data.s3.content} 
        imgPosition={data.s3.imgPosition} 
      />
      <SectionImg 
        img={data.s4.img} 
        title={data.s4.title} 
        content={data.s4.content} 
        imgPosition={data.s4.imgPosition} 
      />
      <SectionImg 
        img={data.s5.img} 
        title={data.s5.title} 
        content={data.s5.content} 
        imgPosition={data.s5.imgPosition} 
      />
      <CardLarge 
        img={data.cardL1.img}
        href={data.cardL1.href}
        title={data.cardL1.title}
      />
      <SectionImg 
        img={data.s6.img} 
        title={data.s6.title} 
        content={data.s6.content} 
        imgPosition={data.s6.imgPosition} 
      />
      <CardLarge 
        img={data.cardL2.img}
        href={data.cardL2.href}
        title={data.cardL2.title}
      />
      <SectionImg 
        img={data.s7.img} 
        title={data.s7.title} 
        content={data.s7.content} 
        imgPosition={data.s7.imgPosition} 
      />
      <CardLarge 
        img={data.cardL3.img}
        href={data.cardL3.href}
        title={data.cardL3.title}
      />
      <SectionImg 
        img={data.s8.img} 
        title={data.s8.title} 
        content={data.s8.content} 
        imgPosition={data.s8.imgPosition} 
      />
      <CardLarge 
        img={data.cardL4.img}
        href={data.cardL4.href}
        title={data.cardL4.title}
      />
      <SectionImg 
        img={data.s9.img} 
        title={data.s9.title} 
        content={data.s9.content} 
        imgPosition={data.s9.imgPosition} 
      />
      <CardLarge 
        img={data.cardL5.img}
        href={data.cardL5.href}
        title={data.cardL5.title}
      />
      <SectionImg 
        img={data.s10.img} 
        title={data.s10.title} 
        content={data.s10.content} 
        imgPosition={data.s10.imgPosition} 
      />
      <CardLarge 
        img={data.cardL6.img}
        href={data.cardL6.href}
        title={data.cardL6.title}
      />
      <SectionImg 
        img={data.s11.img} 
        title={data.s11.title} 
        content={data.s11.content} 
        imgPosition={data.s11.imgPosition} 
      />
      <Accordion />
    </React.Fragment>
  );
}

export default App;
