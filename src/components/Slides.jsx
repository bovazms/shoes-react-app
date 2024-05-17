
export default function Slides(){

    return(
        <div>

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/12962889-796a-4231-a522-76a7842c34f0/dunk-low-shoes-KB89bk.png" alt="First slide"></img>
          </div>
      
          <div class="carousel-item">
            <img class="d-block w-100" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/12962889-796a-4231-a522-76a7842c34f0/dunk-low-shoes-KB89bk.png" alt="Second slide"></img>
          </div>
      
          <div class="carousel-item">
        <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg" alt="Third slide"></img>
        <div class="carousel-caption d-none d-md-block">
        </div>
      </div>
      
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      </div>

    )
      }
      

    
