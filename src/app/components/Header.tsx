"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isCondominiosOpen, setIsCondominiosOpen] = useState(false)

  const condominiosLista = () => {
    setIsCondominiosOpen(prevState => !prevState)
  };


  return (
    <>
      <header className="bg-red-500 h-20 flex items-center justify-between w-full">

        <Link href="/" className="font-bold cursor-pointer text-white flex ">

          <div>
            <p className="ml-4">
              Negocios
            </p>
            <p className="ml-4">
              Condominios
            </p>
          </div>

          <Image
            className="ml-4 cursor-pointer inline-block"
            src="https://res.cloudinary.com/dqpijrvsq/image/upload/v1744924105/condominios/logo/eplzbcuyazcm92rbtbcz.jpg"
            alt="Descripción de la imagen"
            width={40}
            height={40}
          />

        </Link>


        <div className="" onClick={() => condominiosLista()}>
         <button
  className={`
    h-[38px] px-5 rounded-full font-semibold text-sm
    text-white shadow-md border border-white/10
    transition-all duration-200 ease-in-out
    bg-gradient-to-r from-yellow-400 to-yellow-600
    hover:from-yellow-500 hover:to-yellow-700
    hover:shadow-lg hover:brightness-110
    active:scale-95 active:shadow-inner
  `}
>
  🏢 CONDOMINIOS
</button>
        </div>
      </header>
      {isCondominiosOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white shadow-md rounded-lg z-50">
          {/* Botón X en círculo rojo */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => condominiosLista()}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white font-bold hover:bg-red-600 transition"
            >
              ✕
            </button>
          </div>

          {/* Título */}
          <p className="text-center font-bold text-lg mb-4">Lista de Condominios</p>

          {/* Lista */}
          <ul className="flex flex-col divide-y">
            <li className="p-3 font-bold hover:bg-gray-100 cursor-default">Comas</li>
            <li
              className="p-3 text-blue-600 hover:bg-gray-100"
              onClick={() => condominiosLista()}
            >
              <Link href="/torre-las-praderas">Condominio Las Praderas</Link>
            </li>
            <li
              className="p-3 text-blue-600 hover:bg-gray-100"
              onClick={() => condominiosLista()}
            >
              <Link href="/torre-los-girasoles">Condominio Los Girasoles</Link>
            </li>
            <li
              className="p-3 text-blue-600 hover:bg-gray-100"
              onClick={() => condominiosLista()}
            >
              <Link href="/torres-del-campo">Condominio Torres Del Campo</Link>
            </li>
          </ul>
        </div>
      )}


    </>


  )
}

export default Header