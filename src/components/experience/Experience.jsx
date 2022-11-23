import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='Experience' className='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <h1 className='will'>Willing To Learn And Gain More experience</h1>
        <div className="programming__languages">
          <h3>Programming languages</h3>
          <div className="experience__content">
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Mid-Level</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Mid-Level</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>C (Programming-Language)</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Entry-Level</small>
              </div>
            </article>
            

          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience