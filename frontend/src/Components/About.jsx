import React from 'react';
import {Link} from 'react-router-dom';
// import {Link} from 'react-scroll';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className='heading'>ABOUT US</h1>
                    <p>The only thing we're serious about is FOOD!</p>
                </div>
                <p className='mid'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ducimus dolorem. 
                    Laudantium cum possimus fugit excepturi labore quas odit dolores voluptates, soluta quia, in iure, modi est ab minus natus repellat sed. Totam, illum, 
                      fuga perferendis deserunt adipisci nesciunt magnam quidem pariatur reiciendis, maxime excepturi eveniet atque nulla culpa? Commodi.
                </p>
                <Link to={"/"}>
                  Explore Menu 
                  <span>
                    <HiOutlineArrowNarrowRight/>
                  </span>
                </Link>
            </div>
            <div className="banner">
              <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About