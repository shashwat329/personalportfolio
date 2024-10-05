import React from 'react'
import shashwat from '../assets/shashwat.jpeg';
import appicon from '../assets/iconapp.png'
import icondesign from '../assets/icondesign.png';
import icondev from '../assets/icondev.png'
import '../style/about.css'
export const About = () => {
  return (
    <>
      <h1>ABOUT ME</h1>
      <div className="content">
        <img src={shashwat} alt="Shashwat" />
        <div className="text">
          <p className='greet'>HELLO 👋 </p>
          <p className='description'>
          My name is <div className='myname'>Kumar Shashwat.</div> <br></br>
          I m a prefinal year Computer science student doing my
            Bachlor of Technology. I m a web and iOS app developer. I love to create apps. I have also done freelancing work.
            My responsibility involves crafting websites that are not only functional and user-friendly but also visually appealing. <br></br>I am a diligent, exceptionally creative, and reliable student committed to improving society. I thrive on fostering a positive atmosphere in my surroundings.
            </p>
        </div>
      </div>
     <div className="do">
      <h1>What I'm Doing</h1>
      <div className='ios'>
        <div className="img">
        <img src={appicon} alt="iconapp" />
        <caption>iOS app</caption>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo nam quia ducimus quibusdam aliquam eos nostrum, velit ex odit quam facilis possimus nemo! Dicta minus praesentium nesciunt facere nemo dignissimos cumque delectus dolorum, blanditiis voluptatum quibusdam laborum iusto, maiores placeat corporis reprehenderit a, commodi temporibus veniam laboriosam accusantium molestias. Repellat!
        </p>
      </div>
      <div className='web'>
      <div className="img">
        <img src={icondev} alt="iconapp" />
        <caption>web dev</caption>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo nam quia ducimus quibusdam aliquam eos nostrum, velit ex odit quam facilis possimus nemo! Dicta minus praesentium nesciunt facere nemo dignissimos cumque delectus dolorum, blanditiis voluptatum quibusdam laborum iusto, maiores placeat corporis reprehenderit a, commodi temporibus veniam laboriosam accusantium molestias. Repellat!
        </p>
      </div>
      <div className='design'>
      <div className="img">
        <img src={icondesign} alt="" />
        <caption>web design</caption>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo nam quia ducimus quibusdam aliquam eos nostrum, velit ex odit quam facilis possimus nemo! Dicta minus praesentium nesciunt facere nemo dignissimos cumque delectus dolorum, blanditiis voluptatum quibusdam laborum iusto, maiores placeat corporis reprehenderit a, commodi temporibus veniam laboriosam accusantium molestias. Repellat!
        </p>
      </div>

     </div>
    </>
  )
}
export default About;
