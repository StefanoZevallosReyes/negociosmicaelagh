"use client"
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-medium-image-zoom/dist/styles.css';
import styles from "@/app/styles/nav.module.css";
import React from 'react'
import { useState } from 'react';
import Negocio from "@/app/components/Negocio"
import datosNegocioTorreGirasoles from "@/app/data_negocios/data_torres_del_campo.json"

const TorresDelCampo = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Comida");
  const [datos_originales_estatico] = useState(datosNegocioTorreGirasoles.data_negocios);

  const [datos_negocio_torres_girasoles, setDatosNegocioPraderas] = useState(datos_originales_estatico.filter((dato) => dato.categoria === "Comida"))

  const filtradoCategorias = (categoria) => {
    const datosFiltradosCategorias = datos_originales_estatico.filter((dato) => dato.categoria === categoria);
    setDatosNegocioPraderas(datosFiltradosCategorias)
    setCategoriaSeleccionada(categoria);

  };

  return (
    <>
      <p className='text-center font-bold p-2'> TORRES DEL CAMPO </p>
     <div className="block lg:hidden">
          <Image
            src="https://res.cloudinary.com/dqpijrvsq/image/upload/v1755397853/torresdelcampo_F_rkvbms.jpg"
            alt="Condominio"
            width={550}
            height={550}
            className="rounded-lg p-2 w-full h-auto"
          />
        </div>

        {/* Solo en pantallas grandes (PC) */}
        <div className="hidden lg:flex flex-row">

          <Image
            src="https://res.cloudinary.com/dqpijrvsq/image/upload/v1749325560/condominios/Torre%20Las%20Praderas/fgyjq52wd7mgoeiqdfku.jpg"
            alt="Condominio 1"
            width={550}
            height={550}
            className="rounded-lg p-2 w-full h-auto"
          />


          <Image
            src="https://res.cloudinary.com/dqpijrvsq/image/upload/v1753628005/condominio_reemplzo_txnsec.jpg"
            alt="Condominio 2"
            width={550}
            height={550}
            className="rounded-lg p-2 w-full h-auto"
          />


          <Image
            src="https://res.cloudinary.com/dqpijrvsq/image/upload/v1749325450/condominios/Torre Las Praderas/n69dtvgqfybcqgqf7yk1.png"
            alt="Condominio 3"
            width={550}
            height={550}
            className="rounded-lg p-2 w-full h-auto"
          />
         

        </div>
     <p className='text-center p-4'> Encuentra los negocios de Torre Las Praderas, como tiendas , Menú , Lavanderia, Impresiones , Mini-Markets, etc.
      </p>
      {/* <section className='ml-2 h-auto mb-2 grid grid-cols-3 gap-2 sm:flex sm:items-center sm:overflow-x-auto sm:space-x-2'>
        <button
          className={` h-10 rounded-full text-center  ${categoriaSeleccionada === "Comida" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Comida")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Comida </p>
        </button> 
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Mini-Market" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Mini-Market")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Mini-Market </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Impresiones" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Impresiones")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Impresiones </p>
        </button>
        <button
          className={` h-10 rounded-full text-center  ${categoriaSeleccionada === "Mascotas" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Mascotas")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Mascotas </p>
        </button> 
      </section> */}
 <section className="ml-2 h-auto mb-4 grid grid-cols-2 sm:grid-cols-3 gap-4 place-items-center">
        {[
          "🍔 Fast Food",
           "🍔 Menú",
          "🏪 Mini-Market",
          "Dental",
          "🖨️ Impresiones",
          "Psicologia",
          "🪑 Alquiler de Sillas",
          
         
         
          "📚 Libreria",
          "🐾 Mascotas"
        ].map((cat, i) => (
          <button
            key={i}
            className={`
        w-full py-3 px-4 rounded-xl font-semibold text-white text-sm sm:text-base 
        shadow-lg border border-white/20 
        transition-all duration-200 ease-in-out
        ${categoriaSeleccionada === cat
                ? 'bg-gradient-to-r from-orange-500 to-orange-700 scale-105 shadow-orange-500/50'
                : 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800'}
        hover:shadow-xl hover:brightness-110
        active:scale-95 active:shadow-inner
      `}
            onClick={() => filtradoCategorias(cat)}
          >
            {cat}
          </button>
        ))}
      </section>
      <div className={styles.negocios_container}>
        {datos_negocio_torres_girasoles.map((negocio) => (
          <Slider key={negocio.id} {...settings} className='w-[100%] mb-8 flex justify-center items-center'>
            {negocio.imagenes_negocio.map((imagen, index) => (
              <div key={index} onClick={() => handleImageClick(negocio.id)}>
                <Negocio key={index} alt={negocio.alt} foto_negocio_url={imagen} />
              </div>
            ))}
          </Slider>
        ))}
      </div>

    </>
  )
}

export default TorresDelCampo