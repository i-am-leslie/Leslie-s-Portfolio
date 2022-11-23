import React from 'react'
import './about.css'
import ME from '../../assets/meli.jpeg'
import {VscFolderLibrary} from 'react-icons/vsc'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>More About Me</h2>
      <h1 className='dev'>Developer & Programmer</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-Image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards" >
            <article className='about__card' >
              < VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Projects are a way of learning </small>


            </article>
          </div>
          <p>
          I am a third year software engineering Student from carleton university, I currently live in ottawa.
          I am currrently seeking experience in my field of study.I am also a member of two societies on campus <a href="https://www.cusaonline.ca" target='_blank'>CUSA</a> and <a href="https://www.scesoc.ca" target='_blank'>SCEsos</a>,
           where I partake in Projects and events to help peers as well as helping myself develop problem-solving skills along with the ability to communicate effectively with others. <br /> <br /> One of my earliest memories of when i used to be 
          a child was that i loved playing games on my laptop.However there was this day i got a game from my childhood friend and it didn't work on my laptop, I searched the internet for ways i could fix it and tinkered with the game's files and 
          got it working and thus that was how my love for programming sparked. <br /><br />
          On this site,i plan on sharing some projects i have worked on and some interesting quotes that keep me motivated in life. i am a geek and love exploring technologies because i feel technologies are intriguing. I am also always happy to meet
           new people,feel free to reach me!
          </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>

        </div>

      </div>

    </section>
  )
}

export default about