"use client"
import React from 'react'
import Slider from "react-slick";
import styles from "@/app/styles/nav.module.css";
import Negocio from "@/app/components/Negocio"
import datosNegocio from "@/app/data_negocios/data_negocios_.json"
import Zoom from 'react-medium-image-zoom';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-medium-image-zoom/dist/styles.css';
import Image from 'next/image';

export default function Home() {

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Comida");
  const [subCategoriaSeleccionada, setSubCategoriaSeleccionada] = useState("Todos")
  const [datos_originales_estatico] = useState(datosNegocio.data_negocios);
  const datos_negocios_home = datos_originales_estatico.filter((dato) => dato.categoria === "Comida")
  const [datos_negocio, setDatosNegocio] = useState(datos_negocios_home)
  const [datos_negocioPopUp, setDatosNegocioPopUp] = useState(datos_negocios_home)
  const [showModal, setShowModal] = useState(false);
  const [subCategoria, setSubCategoria] = useState(true)



  const subcategoria = {
    Comida: [
      "Alitas", "Pollo a la Brasa", "Hamburguesas", "Snacks", "Marino"]
    ,
    Hogar: [
      "Servicios Generales", "Decoracion del Hogar", "Seguridad", "Mudanza"]
  }

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'; // Deshabilita el scroll
    } else {
      document.body.style.overflow = 'auto'; // Habilita el scroll
    }
    return () => {
      document.body.style.overflow = 'auto'; // Asegúrate de restaurar el estado al desmontar
    };
  }, [showModal]);

  const funcionFiltrado = (categoria: string) => {
    const datosFiltrados = datos_originales_estatico.filter((dato) => dato.categoria === categoria);
    setDatosNegocio(datosFiltrados)
    setCategoriaSeleccionada(categoria);
  };

  const handleImageClick = (index: any) => {
    const datosFiltradosPopUp = datos_originales_estatico.filter((dato) => dato.id === index);
    setDatosNegocioPopUp(datosFiltradosPopUp);
    setShowModal(true);
  };

  const clickSubcategoria = (subcategoria: any) => {
    if (subcategoria === "Todos") {
      const datosFiltrados = datos_originales_estatico.filter((dato) => dato.categoria === categoriaSeleccionada);
      setDatosNegocio(datosFiltrados)
    } else {
      const datosSubcategoria = datos_originales_estatico.filter((dato) => dato.subcategoria === subcategoria);
      setDatosNegocio(datosSubcategoria);
    }
    setSubCategoriaSeleccionada(subcategoria);
  }

  const closeModal = () => {
    setShowModal(false);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <>
      <article className={styles.nav_container}>

        <p className="text-center font-bold p-2 ">
          Reunimos todos los negocios de tu Condominio.
          Como Delivery de comida, tiendas, servicios personales, alquileres, etc.
        </p>
        <div className="flex  justify-center">
          <button className="bg-yellow-500 border rounded">
            <p>IR A CONDOMINIOS</p>
          </button>
        </div> 
        <div className="flex flex-col gap-4 p-2 lg:flex-row ">
           <Image
              src="https://res.cloudinary.com/dqpijrvsq/image/upload/v1749325560/condominios/Torre%20Las%20Praderas/fgyjq52wd7mgoeiqdfku.jpg" // Reemplaza con la ruta correcta si usas imágenes locales en /public
              alt="Condominio"
              width={550}
              height={550}
              className="rounded-lg shadow-md"
            /> 
          <Image
            src="https://res.cloudinary.com/dqpijrvsq/image/upload/v1749325450/condominios/Torre%20Las%20Praderas/n69dtvgqfybcqgqf7yk1.png"
            alt="Condominio"
            width={550}
            height={550}
            className="rounded-lg shadow-md"
          />
          <Image
            src="https://res.cloudinary.com/dqpijrvsq/image/upload/v1749325450/condominios/Torre%20Las%20Praderas/njunw8jpcj0j4ojm0lou.avif"
            alt="Condominio"
            width={550}
            height={650}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="flex  justify-center">
          <button className="bg-yellow-500 border rounded">
            <p>IR A CONDOMINIOS</p>
          </button>
        </div> 
        <article className="flex flex-col gap-4 p-4 justify-center ">
        <div className="flex-1 bg-cyan-100 p-6 rounded-xl text-center">
          Rapido y Sencillo 😁
        </div>
        <div className="flex-1 bg-orange-100 p-6 rounded-xl text-center">
          Económico y Accesible 😁
        </div>
        <div className="flex-1 bg-green-100 p-6 rounded-xl text-center">
          Bonito y Agradable 😁
        </div>

        <div className="flex  justify-center">
          <button className="bg-yellow-500 border rounded">
            <p>IR A CONDOMINIOS</p>
          </button>
        </div> 
      </article> 

      </article>
      

    </>
  )
}