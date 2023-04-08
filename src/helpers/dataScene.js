import insideOne from '../images/PanoramaInterior.png'
import insideTwo from '../images/PanoramaInterior2.png'


const Scene= {  //Este objeto va a contener todas las escenas 
    insideOne:{  // el interior 1 
        title :'interior uno',
        image : insideOne,
        pitch : -11,
        yaw : -3,
        hotSpots : {
            floweVAse:{ // para el punto del florero 
                type: 'custom',
                pitch: -14.050603061577409,
                yaw: -2.240010832895287,
                cssClass: 'hotSpotElement' // para llamar la clase con CSS y darle formatos
            },
            plane : { // para el plato
                type: 'custom',
                pitch: -35.300774485196655,
                yaw: -16.947032891308854,
                cssClass: 'hotSpotElement' // para llamar la clase con CSS y darle formatos                

            },
            chair : {
                type: 'custom',
                pitch: -31.805067225552893,
                yaw: -70.44808502099312,
                cssClass: 'hotSpotElement' // para llamar la clase con CSS y darle formatos

            },
            nextScene : {
                type: 'custom',
                pitch: -3.388527230557327,
                yaw: 122.41418495922085,
                cssClass: 'moveScene',
                scene: 'insideTwo' // para llamar la clase con CSS y darle formatos

            }

        }
    },
    insideTwo:{  // el interior 2
        title  :'interior 2',
        image : insideTwo,
        pitch : -11,
        yaw : 138,
        hotSpot:{
            chair2 : {
                type: 'custom',
                pitch: -81.805067225552893,
                yaw: -100.44808502099312,
                cssClass: 'hotSpotElement' // para llamar la clase con CSS y darle formatos

            }
        }
    }
}

export default Scene;