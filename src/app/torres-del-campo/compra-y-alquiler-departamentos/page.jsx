"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const Page = () => {
  const [modo, setModo] = useState("compra") // empieza en compra por defecto

  return (
    <>
      <p className='text-center font-bold p-2'> TORRES DEL CAMPO</p>
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
  <button
    onClick={() => setModo("compra")}
    className={`px-6 py-3 rounded-xl font-bold text-white shadow-md transition-all duration-300
    ${modo === "compra" 
      ? "bg-green-600 scale-105" 
      : "bg-gray-600 hover:bg-gray-700"}`
    }
  >
    🏠 Compra
  </button>

  <button
    onClick={() => setModo("venta")}
    className={`px-6 py-3 rounded-xl font-bold text-white shadow-md transition-all duration-300
    ${modo === "venta" 
      ? "bg-green-600 scale-105" 
      : "bg-gray-600 hover:bg-gray-700"}`
    }
  >
    🏢 Alquiler
  </button>
</div>
      </div>
      <div className="mb-6">
        {modo === "compra" && (
          <Image
            src="https://res.cloudinary.com/dqpijrvsq/image/upload/v1756176505/TorresDelCampo/ventadepartamento2_ciehvr.jpg"
            alt="Compra de condominios"
            width={400}
            height={250}
            className="rounded-xl shadow-lg"
          />
        )}
        {modo === "venta" && (
          <Image
            src="https://res.cloudinary.com/dqpijrvsq/image/upload/v1756176405/TorresDelCampo/ventadepartamento_irwmw3.jpg"
            alt="Venta de condominios"
            width={400}
            height={250}
            className="rounded-xl shadow-lg"
          />
        )}
      </div>
    </>
  )
}

export default Page