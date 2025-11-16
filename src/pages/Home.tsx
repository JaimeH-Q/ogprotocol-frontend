import { Navbar } from "../components/Navbar";
import { HowItWorks } from "../components/HowItWorks";
import { MarketStats } from "../components/MarketStats";

import OG_ICONO from "../static/OG_ICONO.png";
import { Button } from "../components/ui/Button";

import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { useTranslation } from 'react-i18next'

export default function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-black">

        <Navbar />
        <section className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-gray-900 via-black to-blue-950 circuit-pattern">
          <LanguageSwitcher />

            <div className="flex items-center w-full justify-center">
                <img src={OG_ICONO} alt="OG Logo" className="w-35 m-10 mt-4"/>
            </div>
            <div className="max-w-4xl text-center mb-6 text-white md:text-5xl font-bold">
                {t('home.title')}
            </div>
            <div className="mb-12 md:text-l text-gray-300 max-w-2xl mx-auto text-center">
              {t('home.description')}
            </div>
            <div className="flex justify-between w-100">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 min-w-45 " onClick={() => window.open('https://github.com/JaimeH-Q/OGProtocol-Minecraft/releases', '_blank')}>
                {t('home.ctaStart')}
              </Button>
              <Button className="bg-gray-100 text-black hover:bg-gray-600 min-w-45  hover:text-white" onClick={() => window.location.href = '/#how-it-works'}>
                {t('home.ctaHow')}
              </Button>
            </div>
            <div className="flex justify-between w-1/2 mt-10">
              <div className="text-center min-w-1/4">
              <div className="text-blue-400 mb-2">204M+</div>
              <p className="text-gray-400">{t('home.statPlayers')}</p>
            </div>
            <div className="text-center min-w-1/4">
              <div className="text-blue-400 mb-2">4.5M+</div>
              <p className="text-gray-400">{t('home.statVisits')}</p>
            </div>
            <div className="text-center min-w-1/4">
              <div className="text-blue-400 mb-2">100%</div>
              <p className="text-gray-400">{t('home.statSecure')}</p>
            </div>
            </div>
        </section>
        <HowItWorks />
        <MarketStats />
        



    </div>
  );
}