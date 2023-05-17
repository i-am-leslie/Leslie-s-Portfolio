import React from 'react';
import './projects.css';
import P1 from '../../assets/P1.jpeg';


const data = [
  {
    Picture: P1,
    name: 'Scrabble game',
    Description: 'This is a Gui based game which was developed on java and in the image above leslie is a player and the second player is an AI which leslie is playing against it clearly states the turn of who should play next and gives a score to both players'
  },
 
];

const Projects = () => {
  return (
    <section>
      <h5>This are some projects i have worked on</h5>
      
      <h2>Projects</h2>

      <div >
        {
          data.map(({ Picture, name, Description }, index) => {
            return (
              <div key={index}>
                <div className='image' >
                  <img src={Picture} alt={name} />
                </div>
                <h5 className='name'>{name}</h5>
                <small className='description'>{Description}</small>
              </div>
            );
          })
        }
      </div>
    </section>
    
  );
};

export default Projects;