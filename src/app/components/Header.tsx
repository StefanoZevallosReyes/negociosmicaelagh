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
            className="h-[45px] bg-yellow-400 border-2 border-yellow-600 text-black font-bold text-lg
               rounded-full shadow-md "
          >
            CONDOMINIOS
          </button>
        </div>
      </header>
      {isCondominiosOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white shadow-md z-50">
          {/* Botón de cierre */}
          <div className="flex justify-end p-4">
            <button
              className="text-2xl font-bold text-gray-600 hover:text-red-500"
              onClick={() => condominiosLista()}
            >
              ✕
            </button>
          </div>

          <ul className="flex flex-col ">
            <li className="hover:bg-gray-200 rounded font-bold p-2">
              <p>Comas</p>
            </li>
            <li className="hover:bg-gray-200 rounded text-blue-600 p-2" onClick={() => cerrarCondominios()}>
              <Link href="/torre-las-praderas">Condominio Las Praderas</Link>
            </li>
            <li className="hover:bg-gray-200 rounded text-blue-600 p-2" onClick={() => cerrarCondominios()}>
              <Link href="/torre-los-girasoles">Condominio Los Girasoles</Link>
            </li>
            <li className="hover:bg-gray-200 rounded text-blue-600 p-2" onClick={() => cerrarCondominios()}>
              <Link href="/torres-del-campo">Condominio Torres Del Campo</Link>
            </li>
          </ul>
        </div>
      )}


    </>


  )
}

export default Header