// PhotographyPortfolio.js
import { React, useState } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark
}
  from '@fortawesome/free-solid-svg-icons'

const Gallery = styled.div`
    display: flex; 
    flex-wrap: wrap;
    gap: 10px;
    align-items: center; 
    justify-content: center; 
    max-width: 90%;
    margin: 0 auto;
`;

const SingleImage = styled.div`
    width: 400px;
    cursor: pointer;
`;

const FullScreenImageContainer = styled.div`
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Slider = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const FullScreenImage = styled.img`
    flex: 1;
    max-width: 80%;
    max-height: 80%;
    pointer-events: none;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */  
`;

const Image = styled.img`
    max-width: 100%;

    &:hover {
      transform: scale(1.02); /* Change color on hover */
    }
`;

const SliderBtn = styled(FontAwesomeIcon)`
    cursor: pointer;

    &:hover {
      color: white;
    }
`;

const SliderBtnPrev = styled(SliderBtn)`
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
`;

const SliderBtnNext = styled(SliderBtn)`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
`;

const SliderBtnClose = styled(SliderBtn)`
    position: absolute;
    top: 20px;
    right: 20px;
`;

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../assets/photography', false, /\.(png|jpe?g|svg)$/));

const PhotographyPortfolio = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const prevSlide = () => {
    slideNumber === 0 ? setSlideNumber(images.length - 1) : setSlideNumber(slideNumber - 1)
  }

  const nextSlide = () => {
    slideNumber === images.length - 1 ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px'
    }}>
      <h1>Photography Portfolio</h1>
      {
        openModal &&
        <Slider>
          <SliderBtnClose icon={faCircleXmark} className='SliderBtnClose' onClick={handleCloseModal} />
          <SliderBtnPrev icon={faCircleChevronLeft} className='SliderBtnPrev' onClick={prevSlide} />
          <SliderBtnNext icon={faCircleChevronRight} className='SliderBtnNext' onClick={nextSlide} />
          <FullScreenImageContainer >
            <FullScreenImage src={images[slideNumber]} alt='' />
          </FullScreenImageContainer>
        </Slider>
      }

      <Gallery>
        {
          images.map(
            (image, index) => {
              return (
                <SingleImage key={index} onClick={() => handleOpenModal(index)}>
                  <Image src={image} alt="info"></Image>
                </SingleImage>
              )
            }
          )
        }
      </Gallery>
    </div>
  );
}



export default PhotographyPortfolio;
