import React from 'react'
import AccordionItem from './AccordionItem'
import faqs from '../../data/faqs';

const Accordion = () => {

  return (
    <div className="wrapper__faqs">
      <div className="main__container">
        <div className="faqs--title">
          <h1>Respondemos las preguntas más importantes sobre la nueva etiqueta energética de la UE</h1>
        </div>
        {
          faqs.map((faq, i) => {
          return (
            <AccordionItem title={<div dangerouslySetInnerHTML={{ __html: faq.question }} />} key={i}>
            {<div dangerouslySetInnerHTML={{ __html: faq.reply }} />}
            </AccordionItem>
            )
          } )
        }
      </div>  
    </div>
  )
}

export default Accordion;