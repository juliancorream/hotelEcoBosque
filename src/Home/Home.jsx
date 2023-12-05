import { Formulario } from '../Formulario/Formulario';
import './Home.css';

import { useEffect, useState } from 'react';
import { consultarHabitaciones } from '../services/servicioHabitacion.js';




export function Home(){

    const [carga, setCarga] = useState(true);
    const [habitaciones, setHabitaciones] = useState(null);

    useEffect(function(){
        consultarHabitaciones()
        .then(function(respuesta){
            console.log(respuesta)
            setCarga(false)
            setHabitaciones(respuesta.Datos)
        })
    },[])

    if(carga){
        return(
            <>
            <h3>Cargando...</h3>
            </>
        )
    }else{

        return(
            <>
                <div className='banner text-white fw-bold'>
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <h3>Reserva con Nosotros</h3>
                                <p>Desde 699.9999 COP</p>
                                <hr />
                                <Formulario/>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div>
                    <div className="container my-5">
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <h3>HOTEL ECOBOSQUE </h3>
                                <p>Bienvenido a Hotel EcoBosque, tu refugio sereno en medio de la naturaleza. Sumérgete en la experiencia única de nuestro ecohotel, donde la comodidad se fusiona con el entorno natural. Rodeado por exuberantes bosques y aire puro, Hotel EcoBosque ofrece cabañas acogedoras que te brindarán una estancia relajante y rejuvenecedora.</p>
                                <p>
                                Nuestro compromiso con la sostenibilidad se refleja en cada rincón, desde el diseño ecológico de nuestras cabañas hasta las prácticas respetuosas con el medio ambiente. Despiértate con el canto de los pájaros y disfruta de desayunos con ingredientes locales en nuestro restaurante, donde la frescura y la calidad son primordiales.
                                </p>
    
                                <p>
                                Explora los senderos naturales que serpentean a través del bosque, descubre miradores con vistas panorámicas y sumérgete en la tranquilidad de nuestro entorno. Hotel EcoBosque es más que un lugar para alojarse; es una invitación a reconectar con la naturaleza y revitalizar el espíritu.
                                </p>
    
                            <p>
                            En Hotel EcoBosque, cada visita es una experiencia única, una paleta de colores naturales y sonidos relajantes que te envuelven desde el momento en que llegas. Ven y descubre la armonía perfecta entre el confort moderno y la belleza natural en Hotel EcoBosque, donde la hospitalidad se encuentra con la sostenibilidad.
                            </p>
    
    
                            </div>
                        </div>

                        <div className="row row-cols-1 row-cols-md-5">
                            {
                                habitaciones.map(function(habitacion){
                                    return(
                                        <div className="col" key={habitacion._id}>
                                            <div className="card">
                                                <h4>{habitacion.nombre}</h4>
                                                <img src={habitacion.foto[0]} alt="" className='img-fluid'/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
    
    
            </>
        )

    }

    
}