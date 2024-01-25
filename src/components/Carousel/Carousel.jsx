import "../Carousel/carousel.css";

const Carousel = ()=>{
    return(
        <div id="carouselExampleInterval" class="carousel slide " data-bs-ride="carousel " >
  <div class="carousel-inner ">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="../src/images/rice.jpg" class="d-block  w-75 mx-auto" alt="..."/>
    </div>

    <div class="carousel-item" data-bs-interval="2000">
      <img src="../src/images/snacks.jpg" class="d-block  w-75 mx-auto" alt=""/>
    </div>

    <div class="carousel-item">
      <img src="../src/images/drinks.jpg" class="d-block  w-75 mx-auto" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="../src/images/eating.jpg" class="d-block  w-75 mx-auto" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="../src/images/delivery.jpg" class="d-block  w-75 mx-auto" alt="..."/>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next  " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        





        


    )
}

export default Carousel;