"use client"
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-medium-image-zoom/dist/styles.css';
import styles from "@/app/styles/nav.module.css";
import React from 'react'
import Link from 'next/link';
import { useState , useRef} from 'react';
import Negocio from "@/app/components/Negocio"
import datosNegocioTorreGirasoles from "@/app/data_negocios/data_torre_girasoles_.json"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TorreGirasoles = () => {

  const categorias = [
    "🍔 Fast Food",
    "🏪 Mini-Market",
    "🖨️ Impresiones",
    "🧺 Lavanderia",
    "📦 Importaciones",
    "🪑 Alquiler de Sillas",
    "🧠 Psicologia Infantil",
    "👓 Óptica",
    "🎬 Netflix",
    "📚 Libreria",
    "🐾 Mascotas"
  ];
  const randomCategoria = categorias[Math.floor(Math.random() * categorias.length)];
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [datos_originales_estatico] = useState(datosNegocioTorreGirasoles.data_negocios);

  const [datos_negocio_torres_girasoles, setDatosNegocioPraderas] = useState(
    datos_originales_estatico.filter((dato) => dato.categoria === "")
  );
  
 const refImagenes = useRef(null);

  const filtradoCategorias = (categoria) => {
    const datosFiltradosCategorias = datos_originales_estatico.filter(
      (dato) => dato.categoria === categoria
    );
    setDatosNegocioPraderas(datosFiltradosCategorias);
    setCategoriaSeleccionada(categoria);
    
     setTimeout(() => {
    if (refImagenes.current) {
      refImagenes.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 100);
  };


  return (
    <>
      <p className='text-center font-bold p-2'> TORRE LOS GIRASOLES</p>
      <div className="block lg:hidden">
        <Image
          src="https://res.cloudinary.com/dqpijrvsq/image/upload/v1755401624/torre_girasoles_1_tds1cu.jpg"
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
 
      <p className='text-center p-4'> Encuentra los negocios de Torre Los Girasoles, como tiendas , Menú , Lavanderia, Impresiones , Mini-Markets, etc.
      </p>
           <div className="flex justify-center items-center px-4">
        <Link
          href="/torre-los-girasoles/compra-y-alquiler-departamentos"
          className={`
      max-w-md w-full py-5 px-6 rounded-xl font-bold text-white text-lg sm:text-xl
      shadow-2xl border border-white/30 
      transition-all duration-200 ease-in-out
      bg-gradient-to-r from-pink-500 to-red-600
      hover:from-pink-600 hover:to-red-700
      hover:shadow-2xl hover:brightness-110
      active:scale-95 active:shadow-inner text-center
      animate-[pulse-scale_1.5s_ease-in-out_infinite]
    `}
        >
           Alquiler y venta de departamentos 🏙️
        </Link>
      </div>
      <p className='font-semibold text-md ml-2 mt-[3px]'> Categorias:</p>

      <section className="p-2 h-auto mb-4 grid grid-cols-2 sm:grid-cols-3 gap-4 place-items-center">
        {[
          "🍔 Fast Food",
          "🏪 Mini-Market",
          "🖨️ Impresiones",
          "🧺 Lavanderia",
          "📦 Importaciones",
          "🪑 Alquiler de Sillas",
          "🧠 Psicologia Infantil",
          "👓 Óptica",
          "🎬 Netflix",
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

   <div ref={refImagenes} className={styles.negocios_container}>
      {datos_negocio_torres_girasoles.map((negocio) => (
        <Swiper
          key={negocio.id}
          modules={[Navigation]}
          navigation
          loop={true}
          allowTouchMove={false}   // ❌npbloquea swipe en móvil
          simulateTouch={false}    // ❌ bloquea drag en desktop
          spaceBetween={20}
          slidesPerView={1}
          className="w-full mb-8 rounded-xl shadow-lg"
        >
          {negocio.imagenes_negocio.map((imagen, index) => (
            <SwiperSlide key={index}>
              <div onClick={() => handleImageClick(negocio.id)}>
                <Negocio alt={negocio.alt} foto_negocio_url={imagen} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ))}

      {/* CSS extra para flechas al centro */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.4);
          padding: 10px;
          border-radius: 9999px;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </div>

    </>
  )
}

export default TorreGirasoles