import imgprueba from "../assets/finca1.jpg"
import "../assets/Style.css"

export const Slider = () => {
  return (
    <div id="carouselExample" className="sliderQuincho carousel slide">
        <div className="carrouselQuincho carousel-inner">
            <div className="imagesQuincho carousel-item active">
                <img src={imgprueba} className="imageQuincho " alt="..."/>
                <img src={imgprueba} className="imageQuincho " alt="..."/>
                <img src={imgprueba} className="imageQuincho " alt="..."/>
            </div>
            <div className="imagesQuincho carousel-item">
                <img src={imgprueba} className="imageQuincho" alt="..."/>
                <img src={imgprueba} className="imageQuincho " alt="..."/>
                <img src={imgprueba} className="imageQuincho " alt="..."/>
            </div>
            <div className="imagesQuincho carousel-item">
                <img src={imgprueba} className="imageQuincho" alt="..."/>
                <img src={imgprueba} className="imageQuincho " alt="..."/>
                <img src={imgprueba} className="imageQuincho " alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

