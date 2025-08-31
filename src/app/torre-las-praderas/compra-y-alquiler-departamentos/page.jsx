"use client"
import React from "react"
import Link from "next/link"
import styles from "@/app/styles/nav.module.css";
import Image from "next/image"
import { useState, useRef } from "react"
import datosCondominiosTorrePraderas from "@/app/data_negocios/data_torre_praderas_.json"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Negocio from "@/app/components/Negocio"

const Page = () => {

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Compra")

  const [datos_originales_estatico] = useState(datosCondominiosTorrePraderas.data_negocios);

  const [datos_negocio_torres_praderas, setDatosNegocioPraderas] = useState(
    datos_originales_estatico.filter((dato) => dato.categoria === "")
  );

  const refImagenes = useRef(null);

  const filtradoCondominios = (categoria) => {
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
    }, 100)
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

      <p className='text-center p-4'>
        Descubre las mejores opciones de <span className="font-semibold">alquiler y venta de departamentos</span> Aquí.
        Encuentra el hogar ideal para ti o una oportunidad de inversión en un condominio seguro,
        moderno y con todos los servicios que necesitas. 🏠
      </p>
      <div className="p-4 flex flex-col items-center">
        <div className="flex gap-6">
          <section className="p-2 h-auto mb-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
               "Venta", "Alquiler"
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
                onClick={() => filtradoCondominios(cat)}
              >
                {cat}
              </button>
            ))}
          </section>
        </div>
      </div>

      <div ref={refImagenes} className={styles.negocios_container}>
        {datos_negocio_torres_praderas.map((negocio) => (
          <Swiper
            key={negocio.id}
            modules={[Navigation]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            allowTouchMove={false}   // ❌npbloquea swipe en móvil
            simulateTouch={false}    // ❌ bloquea drag en desktop
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

export default Page