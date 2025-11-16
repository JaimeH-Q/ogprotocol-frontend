import { useTranslation } from 'react-i18next'

import { NavbarLogin } from "../components/NavbarLogin";

import OG_ICONO from "../static/OG_ICONO.png";
import { LanguageSwitcher } from '../components/LanguageSwitcher';


export default function Success() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-black">
      <NavbarLogin />
        <section className="flex flex-col items-center min-h-screen bg-linear-to-br from-gray-900 via-black to-blue-950 circuit-pattern">
                            <LanguageSwitcher />
                  <div className="flex items-center w-full justify-center">
                      <img src={OG_ICONO} alt="OG Logo" className="w-35 m-10 mt-30"/>
                  </div>


            <div className="max-w-4xl text-center mb-6 text-white md:text-5xl font-bold">
              {t('success.title')}
            </div>
            <div className="text-center mb-6 text-gray-400 md:text-2xl font-bold">
              {t('success.subtitle')}
            </div>
        </section>

      
    </div>
  )
}
