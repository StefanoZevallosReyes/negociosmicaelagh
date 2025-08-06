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
        <p className='font-bold p-2 text-center text-xl'> Negocios Condominios</p>
        <p className="p-2 text-bg font-semibold hidden lg:block">Nosotros :</p>

        {/* <p className='font-bold p-2'> Imagenes : </p> */}
        <div className="block lg:hidden">
          <Image
            src="https://res.cloudinary.com/dqpijrvsq/image/upload/v1749325560/condominios/Torre%20Las%20Praderas/fgyjq52wd7mgoeiqdfku.jpg"
            alt="Condominio"
            width={550}
            height={550}
            className="rounded-lg p-2 w-full h-auto"
          />
        </div>

        {/* Solo en pantallas grandes (PC) */}
        <p className='p-2 text-center text-bg  hidden lg:block'>
          Reunimos los negocios dentro de tu condominio , te damos acceso a hacer compras rapidas , seguras , cercanas para tu hogar.
          Somos una plataforma que conecta a los vecinos con los negocios dentro de su propio condominio.
          Queremos darte un buen servicio para que disfrutes de hacer compras desde la comodidad de tu casa.
        </p>
         <p className="text-center p-2 lg:hidden">
          Reunimos todos los negocios de tu Condominio.
          Como Delivery de comida, tiendas, servicios personales, alquileres, etc.
        </p>
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
          <Image
            src="https://res.cloudinary.com/dqpijrvsq/image/upload/v1754485482/condominio_k78rqy.jpg"
            alt="Condominio 4"
            width={550}
            height={550}
            className="rounded-lg p-2 w-full h-auto"
          />


        </div>
        <p className=" p-2 text-center text-bg hidden lg:block">
          En nuestra plataforma podrás encontrar tiendas Mini-Market, Comida ,Servicios de impresión, Licoreria,
          reparaciones del hogar y mucho más. Damos un servicio Rápido , Online , Diverso , Confiable. Siempre estamos a tu dispocision
          para darte el mejor servicio que te mereces.
        </p>
        <div className="flex flex-col gap-4 p-2 ">


          <p className='font-bold'> Beneficios : </p>

          <div className="flex-1 bg-red-100 p-6 rounded-xl text-center font-bold">
            1 .- Diverso 🛍️
          </div>
          <p className="text-center p-2">
            Diferentes negocios para las necesidades que tengas en cualquier momento
          </p>

          <div className="flex-1 bg-blue-100 p-6 rounded-xl text-center font-bold">
            2 .- Rápido 🕒
          </div>
          <p className="text-center p-2">
            Todo lo que necesitas, lo vas a tener en segundos. 
          </p>
          <div className="flex-1 bg-yellow-100 p-6 rounded-xl text-center font-bold">
            3 .- Confiable ✨
          </div>
          <p className="text-center p-2">
            Todos los negocios de tu confianza a tu dispocision. 
          </p>
          {/* <div className="flex-1 bg-green-100 p-6 rounded-xl text-center font-bold">
            4 .- Seguro 🔒
          </div> */}
          {/* <p className="text-center p-2">
            Trato confiable entre vecinos y con garantía. 🛡️
          </p> */}

        </div>

        <p className='p-2 font-bold'> Encuentra tu condominio dándole click al siguiente boton : </p>
        <div className="flex justify-center">

          <button
            className="bg-yellow-400 border-2 border-yellow-600 text-black px-8 py-2 font-bold text-lg
               rounded-full shadow-md "
          >
            ENCUENTRA TU CONDOMINIO 
          </button>
        </div>

        <article className="flex flex-col gap-4 p-4 justify-center ">
          {/* <div className="flex-1 bg-cyan-100 p-6 rounded-xl text-center">
          Rapido y Sencillo 😁
        </div>
        <div className="flex-1 bg-orange-100 p-6 rounded-xl text-center">
          Económico y Accesible 😁
        </div>
        <div className="flex-1 bg-green-100 p-6 rounded-xl text-center">
          Bonito y Agradable 😁
        </div> */}

          {/* <div className="flex  justify-center">
          <button className="bg-yellow-500 border rounded">
            <p>IR A CONDOMINIOS</p>
          </button>
        </div>  */}
        </article>

      </article>


    </>
  )
}