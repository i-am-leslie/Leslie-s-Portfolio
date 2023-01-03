import './portfolio.css'
import nf1 from '../../assets/nf.png'
import nf2 from '../../assets/williams.jpeg'
import nf3 from  '../../assets/einst.jpg'
import nf4 from  '../../assets/meli.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';





const data=[
  {
    quoter:nf1,
    name:'NF',
    quotes:'The mind is a powerful place and what you feed it can affect you in a powerful way, its preety cool right? Yeah, but it is not always safe. '
    
  },
  {
    quoter:nf2,
    name:'Phareel Williams',
    quotes:'I believe in miracles but i dont believe in waiting for em, you gotta make that shit happen make em think its magic'
    
  },
  {
    quoter:nf4,
    name:'Leslie',
    quotes:'If you want to succed then dont be afraid to fail'
    
  },
  {
    quoter:nf1,
    name:'NF',
    quotes:'Looking for the antidote to crack the code'
    
  },
  {
    quoter:nf3,
    name:'Albert Einstein',
    quotes:'We cant solve problems by using the same kind of thinking we used when we created them '
    
  },
  
]




const portfolio = () => {
   
  return (
    <section id='portfolio'>
      <h5>Words That Keep Me Going  </h5>
      <h2>Quotes</h2>
     
      <div className="container quotes__containeer">
        <Swiper
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
        
         pagination={{ clickable: true }}>
         
       {
         data.map(({quoter,name,quotes},index) => {

           return(
            <SwiperSlide key={index} className="quotes">
            <div className="quoters__avatar">
              <img src={quoter} alt={name}/>
            </div>
            <h5 className="quoters__name"> {name}</h5>
            <small className="quotes__saying">{quotes}
            </small>
          </SwiperSlide>
          )
         })
       }
       </Swiper>
      </div>
    </section>
  )
}

export default portfolio