import React,{useEffect} from "react";
import Navbar from "../components/Navbar";
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";
import CardoGraphic from "../assets/Graphic.png";
import Flowers from "../assets/Flowers";
import Stars from "../assets/Stars";
import Arrow from "../assets/Arrow";
import MiniArrow from "../assets/MiniArrow";
import CardoCard from "../assets/cardo_card.png";
import Card from "../assets/cardo_card.svg"

const Hero = () => {
    
    useEffect(() => {
      console.log(window.innerWidth)
    }, []);
    

  return (
    <div className="hero">
      <section className="hero__content">
          <Navbar/>
        <div className="hero__content-top">
            <Flowers />
          <div className="hero__content-top-stars">
            <Stars />
          </div>
        </div>

        <GridRow className="hero__content-header"><p> All the <span>experience</span> in the new credit card</p></GridRow>
        <GridRow className="hero__content-arrow"> <Arrow/></GridRow>
        <GridRow>
          {" "}
          Simple transfers, payments for utilities, functional statemement, card
          settings, for which you used to have to go too the brach
          online-banking
        </GridRow>
        <GridRow className="hero__content-links">
          <GridColumn>
            <button>Order a Card</button>
          </GridColumn>
          <GridColumn> <a>How it works</a><MiniArrow/></GridColumn>
        </GridRow>
        <GridRow className="hero__content-info">
          <GridColumn className="hero__content-info-col">
            <GridRow className="hero__content-info-label" >Active Users</GridRow>
            <GridRow className="hero__content-info-num" >5000+</GridRow>
          </GridColumn>
          <GridColumn className="hero__content-info-col">
            {" "}
            <GridRow className="hero__content-info-label">Download</GridRow>
            <GridRow className="hero__content-info-num">30.3k</GridRow>
          </GridColumn>
          <GridColumn>
            {" "}
            <GridRow className="hero__content-info-label">Reviews</GridRow>
            <GridRow className="hero__content-info-num">1200+</GridRow>
          </GridColumn>
        </GridRow>
        <GridRow className="hero__content-image">
           <img src={Card}/>
        </GridRow>
      </section>
      <section className="hero__image">
        <img src={CardoGraphic} />
      </section>
    </div>
  );
};

export default Hero;
