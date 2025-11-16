import React from 'react'
import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const setLang = (lng: string) => {
    i18n.changeLanguage(lng)
    try { localStorage.setItem('lang', lng) } catch (e) { /* ignore */ }
  }

return (
    <div className="language-switcher inline-flex gap-2 bg-blue-700 text-white fixed top-14/16 right-4 p-2 rounded-md z-50 shadow-lg">
        <button onClick={() => setLang('en')} className="px-2 py-1 rounded-md hover:underline cursor-pointer" aria-label="Switch to English">EN</button>
        <button onClick={() => setLang('es')} className="px-2 py-1 rounded-md hover:underline cursor-pointer" aria-label="Switch to Spanish">ES</button>
    </div>
)
}

export default LanguageSwitcher
