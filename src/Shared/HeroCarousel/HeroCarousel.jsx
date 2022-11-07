import "./HeroCarousel.css";

const HeroCarousel = () => {
  // $('.owl-carousel').owlCarousel({
  //     loop:true,
  //     margin:10,
  //     dots:false,
  //     nav:true,
  //     mouseDrag:false,
  //     autoplay:true,
  //     animateOut: 'slideOutUp',
  //     responsive:{
  //         0:{
  //             items:1
  //         },
  //         600:{
  //             items:1
  //         },
  //         1000:{
  //             items:1
  //         }
  //     }
  // });

  return (
    <>
      {/* <header>
        <div class="owl-carousel owl-theme">
          <div class="item">
            <img
              src="https://cdn.pixabay.com/photo/2017/10/24/10/30/business-2884023_960_720.jpg"
              alt="images not found"
            />
            <div class="cover">
              <div class="container">
                <div class="header-content">
                  <div class="line"></div>
                  <h2>Teimagine Digital Experience with</h2>
                  <h1>Start-ups and solutions</h1>
                  <h4>
                    We help entrepreneurs, start-ups and enterprises shape their
                    ideas into products
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg"
              alt="images not found"
            />
            <div class="cover">
              <div class="container">
                <div class="header-content">
                  <div class="line animated bounceInLeft"></div>
                  <h2>Reimagine Digital Experience with</h2>
                  <h1>Intelligent solutions</h1>
                  <h4>
                    We help entrepreneurs, start-ups and enterprises shape their
                    ideas into products
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <img
              src="https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_960_720.jpg"
              alt="images not found"
            />
            <div class="cover">
              <div class="container">
                <div class="header-content">
                  <div class="line animated bounceInLeft"></div>
                  <h2>Peimagine Digital Experience with</h2>
                  <h1>Intelligent Solutions</h1>
                  <h4>
                    We help entrepreneurs, start-ups and enterprises shape their
                    ideas into products
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </>
  );
};

export default HeroCarousel;
