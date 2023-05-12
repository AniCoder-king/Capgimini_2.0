import React from "react";
import Carousel from 'react-bootstrap/Carousel';
const Carausal = () => {


  return (

    <>
      <div>
        <Carousel>
          <Carousel.Item className=' carousel_images' style={{ height: '80vh' }}>
            <img
              style={{ objectFit: 'cover' }}
              className="d-bloc w-100 h-100"
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
              alt="First slide"
            />
            <Carousel.Caption className='about_crousel'>
              <h3>A PERFECT APPROACH TO THE RYDER CUP</h3>
              <p>As a Worldwide Partner of the Ryder Cup, we are celebrating one year until the first player tees off.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel_images' style={{ height: '80vh' }}>
            <img
              style={{ objectFit: 'cover' }}
              className="d-block w-100 h-100"
              src="https://www.capgemini.com/wp-content/uploads/2021/10/Capgemini_Services_Sustainability-net-zero_Targets.jpg?w=1440&amp;quality=90"
              alt="Second slide"
            />

            <Carousel.Caption className='about_crousel'>
              <h3>One of the world’s most ethical companies</h3>
              <p>For ten consecutive years, we have been named one of the World’s Most Ethical Companies by the Ethisphere Institute.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel_images' style={{ height: '80vh' }}>
            <img
              style={{ objectFit: 'cover' }}
              className="d-block w-100 h-100"
              src="https://www.capgemini.com/wp-content/uploads/2021/11/Capgemini_Research-institute-alt.jpg?w=1440&amp;quality=90"
              alt="Third slide"
            />

            <Carousel.Caption className='about_crousel'>
              <h3>Forward-looking thought leadership</h3>
              <p>
                Our Capgemini Research Institute was ranked number one for the sixth consecutive time for the quality of its thought leadership by independent professional services research firm Source Global Research.    </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Carausal;
