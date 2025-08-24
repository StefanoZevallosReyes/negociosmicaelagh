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
import datosNegocioTorreGirasoles from "@/app/data_negocios/data_torre_praderas_.json"

const TorrePraderas = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Comida Rápida");
  const [datos_originales_estatico] = useState(datosNegocioTorreGirasoles.data_negocios);

  const [datos_negocio_torres_girasoles, setDatosNegocioPraderas] = useState(datos_originales_estatico.filter((dato) => dato.categoria === "Comida"))

  const filtradoCategorias = (categoria) => {
    const datosFiltradosCategorias = datos_originales_estatico.filter((dato) => dato.categoria === categoria);
    setDatosNegocioPraderas(datosFiltradosCategorias)
    setCategoriaSeleccionada(categoria);
  };

  return (
    <>
      <p className='text-center font-bold p-2'> TORRE LAS PRADERAS</p>
      <div className="block lg:hidden">
        <Image
          src="https://res.cloudinary.com/dqpijrvsq/image/upload/v1725126953/condominios/wizlcolopbq0p2zvhhlx.jpg"
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
      <p className='text-center p-4'>Encuentra los negocios de Torre Las Praderas, como tiendas , servicios del hogar , restaurantes , Licores, etc.
      </p>
      <div className="flex justify-center items-center">
        <button
          className={`h-14 px-6 rounded-full text-center text-white font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse 
      ${categoriaSeleccionada === "Departamentos"
              ? 'bg-gradient-to-r from-orange-500 to-red-500'
              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
            }`}
          onClick={() => filtradoCategorias("Departamentos")}
        >
          Alquiler y venta de departamentos
        </button>
      </div>
      <p className='font-semibold text-md ml-2 mt-[3px]'> Categorias:</p>
      <section className='ml-2 h-auto mb-2 flex flex-wrap gap-2'>
        <button
          className={` h-10 rounded-full text-center  ${categoriaSeleccionada === "Comida Rápida" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Comida Rápida")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Comida Rápida </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Mini-Market" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Mini-Market")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Mini-Market </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Servicios" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Servicios")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Servicios </p>
        </button>

        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Farmacia" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Farmacia")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Farmacia </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Mascotas" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Mascotas")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Mascotas </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Costura" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Costura")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Costura </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Impresiones" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Impresiones")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Impresiones </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Lavanderia" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Lavanderia")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Lavanderia </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Ropa" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Ropa")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Ropa </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Importaciones" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Importaciones")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Importaciones </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Racks" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Racks")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Racks </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Informatica" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Informatica")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Informatica </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Menú" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Menú")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Menú </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Educación" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Educación")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Educación </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Fresadas" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Fresadas")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Fresadas </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Netflix" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Netflix")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Netflix </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Pasteleria" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Pasteleria")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Pasteleria </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Terapia Física" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Terapia Física")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Terapia Física </p>
        </button>
         <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Vehiculos" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Vehiculos")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Vehiculos </p>
        </button>
         <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Mascotas" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Mascotas")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Mascotas </p>
        </button>
         <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Deportes" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Deportes")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Deportes </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Podologia" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Podologia")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Podologia </p>
        </button>
        

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

export default TorrePraderas