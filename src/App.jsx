import styled from '@emotion/styled';
import ImagenCrypto from './img/imagen-criptos.png';
import Formulario from './components/Formulario';
import { useEffect, useState } from 'react';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Heading=styled.h1`
  font-family:'lato', sans-serif;
  color:#fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const Contenedor = styled.div`
  max-width:900px;
  margin:0 auto;
  width:90%;
  @media (min-width:992px){
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    column-gap:2rem;
  }
`;

const Imagen=styled.img`
  max-width:400px;
  width:80%;
  margin:100px auto 0 auto;
  display:block;
`;

function App() {
  const [monedas,setMonedas]=useState({});
  const [loading,setLoading]=useState(true);
  const [resultado,setResultado]=useState({});

  useEffect(()=>{
   if(Object.keys(monedas).length>0){
      setResultado({});
      const obtenerCotizacion = async () =>{
        setLoading(true);
        const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.criptoMoneda}&tsyms=${monedas.moneda}`;
        const respuesta= await fetch(url);
        const data = await respuesta.json();
        setResultado(data.DISPLAY[monedas.criptoMoneda][monedas.moneda]);
        setLoading(false);
      };
      obtenerCotizacion();
    }
  },[monedas]);

  return (
    <Contenedor>
      <Imagen src={ImagenCrypto} alt="Imagenes criptomonedas"/>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario setMonedas={setMonedas}/>
        {resultado.PRICE && <Resultado resultado={resultado}/>}
        {loading && <Spinner/>}
      </div>
    </Contenedor>
  )
}

export default App
