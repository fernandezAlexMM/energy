import React from 'react'
import { Header } from './components/header/Header';
import { SectionImg } from './components/sectionimg/SectionImg';
import { CardLarge } from './components/cardLarge/CardLarge';
import data from './data/data'

console.log(data)
  

function App() {
  return (
    <React.Fragment>
      <Header/>
      <SectionImg 
        img={data.s1.img} 
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
      <CardLarge />
    </React.Fragment>
  );
}

export default App;
