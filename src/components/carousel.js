import React from 'react'
import Carousel from 'nuka-carousel'

import Img1 from '../images/carousel/1-min.jpg'
import Img2 from '../images/carousel/2-min.jpg'
import Img3 from '../images/carousel/3-min.jpg'

export default class extends React.Component {
  render() {
    return (
      <div className="container__slider">
        <Carousel
          defaultControlsConfig={{
            pagingDotsStyle: {
              fill: 'white',
            },
          }}
          renderCenterLeftControls={({ previousSlide }) => null}
          renderCenterRightControls={({ nextSlide }) => null}
        >
          <img src={Img1} alt="Yummy 1" />
          <img src={Img2} alt="Yummy 2" />
          <img src={Img3} alt="Yummy 3" />
        </Carousel>
      </div>
    )
  }
}
