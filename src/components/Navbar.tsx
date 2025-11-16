import { ChevronDown } from "lucide-react";
import { Button } from "./ui/Button"

import OG_ICONO from "../static/OG_ICONO.png";
import { useTranslation } from 'react-i18next'

const bgColorStyle = {backgroundColor: '#101828'};

export function Navbar() {
  const { t } = useTranslation()
  return (
        <nav style={bgColorStyle} className="p-1 text-white border-b border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                <a className="flex items-center gap-2" href="/">
                    <img src={OG_ICONO} alt="OG" className="w-10 m-2" />
                    <span className="text-white font-bold">Protocol</span>
                </a>

          <div className=" md:flex items-center gap-8">
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
              {t('nav.home')}
              </a>
                    
            

            <a href="/#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">
              {t('nav.how')}
            </a>
            
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              {t('nav.contact')}
            </a>
            
            {/* <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              FAQ
            </a> */}
          </div>

            {/* CTA Button */}
          <div className="md:block">
            <Button className="bg-blue-600 hover:bg-blue-700 " onClick={() => window.open('https://github.com/JaimeH-Q/OGProtocol-Minecraft/releases', '_blank')}>
              {t('nav.download')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
        </nav>
    
        



    );


 }
