import React, { useState } from "react";
import { Pannellum } from "pannellum-react";
// import image from '../images/PanoramaInterior.png'
import dataScene from "../helpers/dataScene";

export default function Scene() {
//   debugger;
    console.log('entro 1 ')
  const [scene, setScene] = useState(dataScene['insideOne']); // esto es para el manejo de estados  // el primer parámetro es el objeto que traigo
  const hotSpots = (element, i) => {    
        if (element.cssClass === "hotSpotElement")
            return (
                <Pannellum.Hotspot
                    key={i}
                    type={element.type}
                    yaw={element.yaw}
                    pisClass={element.cssClass}
                    hatch={element.pitch}
                    csndleClick={() => alert("Click")}
                />
            );
        else if (element.cssClass === "moveScene")
            return (
                console.log('entro 2'),
                <Pannellum.Hotspot
                    key={i}
                    type={element.type}
                    yaw={element.yaw}
                    pitch={element.pitch}
                    handleClick={() => { setScene(dataScene[element.scene]);}}
                    cssClass={element.cssClass}
                />
             );
  };

  return (
    <div>
        <Pannellum
            // width = '100%' // ancho
            // height = '100vh' // alto
            // image = {image}
            // pitch={10}
            // yaw={180}
            // hfov={110}
            // title = 'escena 1'
            // autoLoad //Boolean	false	Load and dsplay the image automatically if true
            // hotspotDebug = {true}	//Boolean	false	For debug pupose (finding correct point for hotspot)

            width="100%" // ancho
            height="100vh" // alto
            title={scene.title}
            image={scene.image}
            // pitch={-16.28}
            // yaw={-1.66}
        
            pitch={scene.pitch}
            yaw={scene.yaw}
            hfov={130}
            // hfov={110}
            autoLoad //Boolean	false	Load and dsplay the image automatically if true
            hotspotDebug={true} //Boolean	false	For debug pupose (finding correct point for hotspot)
        
        
        >
                {Object.values(scene.hotSpots).map((element, i) =>
                hotSpots(element, i)
                )}
                {/* <Pannellum.Hotspot type = 'custom' pitch = {31} yaw = {150} handleClick = {()=>console.log('Diste un click en el hotspot')}/> 
                        <Pannellum.Hotspot type = 'custom' pitch = {-14.050603061577409} yaw = {-2.240010832895287} handleClick = {()=>console.log('Diste un click en el florero')}/>   */}

                {/* {Object.values(scene.hotSpots).map((Element,i)=><Pannellum.Hotspot key={i} type={Element.type} yaw={Element.yaw} pitch={Element.pitch} cssClass={Element.cssClass} handleClick = {()=>alert('Click')}/>)}  */}


            </Pannellum>
    </div>
  );
}
