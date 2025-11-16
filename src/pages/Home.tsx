import { Navbar } from "../components/Navbar";
import { HowItWorks } from "../components/HowItWorks";
import { MarketStats } from "../components/MarketStats";

import OG_ICONO from "../static/OG_ICONO.png";
import { Button } from "../components/ui/Button";

export default function App() {
  return (
    <div className="min-h-screen bg-black">

        <Navbar />
        <section className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-gray-900 via-black to-blue-950 circuit-pattern">




            <div className="flex items-center w-full justify-center">
                <img src={OG_ICONO} alt="OG Logo" className="w-35 m-10 mt-4"/>
            </div>
            <div className="max-w-4xl text-center mb-6 text-white md:text-5xl font-bold">
                OG Protocol: Autenticación Descentralizada para Jugadores
            </div>
            <div className="mb-12 md:text-l text-gray-300 max-w-2xl mx-auto text-center">
              Una solución innovadora basada en blockchain para autenticar jugadores no premium en servidores de juegos. 
              Seguridad, privacidad y acceso sin restricciones para todos.
            </div>
            <div className="flex justify-between w-85">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Comenzar ahora
              </Button>
              <Button className="bg-gray-100 text-black hover:bg-gray-600 hover:text-white">
                ¿Cómo funciona?
              </Button>
            </div>
            <div className="flex justify-between w-1/2 mt-10">
              <div className="text-center">
              <div className="text-blue-400 mb-2">204M+</div>
              <p className="text-gray-400">Jugadores de Minecraft</p>
            </div>
            <div className="text-center">
              <div className="text-blue-400 mb-2">4.5M+</div>
              <p className="text-gray-400">Visitas mensuales TLauncher</p>
            </div>
            <div className="text-center">
              <div className="text-blue-400 mb-2">100%</div>
              <p className="text-gray-400">Descentralizado y Seguro</p>
            </div>
            </div>
        </section>
        <HowItWorks />
        <MarketStats />
        



    </div>
  );
}