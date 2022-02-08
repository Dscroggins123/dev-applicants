import React, { useEffect,useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";

const Features = () => {
    const [content, setContent] = useState(false)


  useEffect(() => {
    axios
    .get("https://mocki.io/v1/b9c63035-97c5-40a0-b45c-2abdf5261bdf")
    .then(function (response) {
      let featureContent = response.data.slice(0, 6)
      setContent(featureContent)
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);
  



  return (
    <div className="features">
      <h1>Experience The Cardo</h1>
      <GridRow wrap='wrap' justify="center" >
       {content ? content.map((el)=>   
      <GridColumn p={'s'}  width={[12,12,4]} >
          <Card
          title={el.title}
          description={el.description}
          buttonText={el.button.text}
          link={el.button.link}
          />
       </GridColumn>
       ):""} </GridRow>
    </div>
  );
};

export default Features;
