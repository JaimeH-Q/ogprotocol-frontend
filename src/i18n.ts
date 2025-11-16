import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    common: {
      "home.title": "OG Protocol: Decentralized Authentication for Players",
      "home.description": "An innovative blockchain-based solution to authenticate non-premium players on game servers. Security, privacy and open access for everyone.",
      "home.ctaStart": "Get started ↗",
      "home.ctaHow": "How it works",
      "home.statPlayers": "Minecraft players",
      "home.statVisits": "Monthly TLauncher visits",
      "home.statSecure": "Decentralized & Secure",

      "nav.home": "Home",
      "nav.how": "How it works",
      "nav.contact": "Contact",
      "nav.download": "Download ↗",

      "market.title": "Market Statistics",
      "market.description": "Minecraft is one of the most popular games in the world with more than 200 million players. A large portion of this base uses unofficial versions, representing a big opportunity for our authentication system.",
      "market.chartMinecraft.title": "Minecraft Player Growth",
      "market.chartMinecraft.desc": "Active player base 2016-2024 (in millions)",
      "market.chartTlauncher.title": "TLauncher Traffic",
      "market.chartTlauncher.desc": "Monthly visits in 2025 (in millions)",
      "market.statPlayersLabel": "Minecraft players (2024)",
      "market.statVisitsLabel": "TLauncher visits (Sep 2025)",
      "market.statRankLabel": "TLauncher global rank",
      "market.statPotentialLabel": "Potential market",

      "how.title": "How It Works",
      "how.description": "Our solution uses blockchain technology to create a transparent, secure and accessible authentication system for all players.",
      "how.step1.title": "User Registration",
      "how.step1.description": "Non-premium players create a unique identity on the blockchain without needing official accounts.",
      "how.step2.title": "Credential Generation",
      "how.step2.description": "Cryptographic credentials are generated and stored in a decentralized manner on the blockchain.",
      "how.step3.title": "Secure Verification",
      "how.step3.description": "Servers verify player authenticity by consulting the blockchain without exposing sensitive data.",
      "how.step4.title": "Guaranteed Access",
      "how.step4.description": "Once verified, the player gains secure access to the server with their identity protected.",
      "how.techTitle": "Blockchain Technology",
      "how.techDesc": "Blockchain provides an immutable, decentralized record of player identities, removing single points of failure.",
      "how.feature1.title": "Total Decentralization",
      "how.feature1.desc": "You don't depend on a central server that can fall or be hacked.",
      "how.feature2.title": "Guaranteed Privacy",
      "how.feature2.desc": "Your personal data is never stored on the blockchain.",
      "how.feature3.title": "Instant Verification",
      "how.feature3.desc": "Authentication happens in seconds without external servers.",

      "login.title": "Login with your wallet",
      "login.connect": "Connect",
      "login.connecting": "Connecting...",
      "login.missingToken": "Missing token parameter in URL",
      "login.missingUsername": "Missing username parameter in URL",
      "login.missingIP": "Missing IP parameter in URL",
      "login.noWallet": "No wallet extension detected or access was denied",
      "login.noAccounts": "No accounts found in wallet",
      "login.noSigner": "Your wallet does not support raw signing",
      "login.networkError": "Network error when contacting login server",
      "login.failed": "Login failed",

      "success.title": "Successfully logged in! ✅",
      "success.subtitle": "Go back to the game"
    }
  },
  es: {
    common: {
      "home.title": "OG Protocol: Autenticación Descentralizada para Jugadores",
      "home.description": "Una solución innovadora basada en blockchain para autenticar jugadores no premium en servidores de juegos. Seguridad, privacidad y acceso sin restricciones para todos.",
      "home.ctaStart": "Comenzar ahora ↗",
      "home.ctaHow": "¿Cómo funciona?",
      "home.statPlayers": "Jugadores de Minecraft",
      "home.statVisits": "Visitas mensuales TLauncher",
      "home.statSecure": "Descentralizado y Seguro",

      "nav.home": "Inicio",
      "nav.how": "¿Cómo funciona?",
      "nav.contact": "Contacto",
      "nav.download": "Descargar ↗",

      "market.title": "Estadísticas del Mercado",
      "market.description": "Minecraft es uno de los juegos más populares del mundo con más de 200 millones de jugadores. Una parte significativa de esta base utiliza versiones no oficiales, representando una oportunidad enorme para nuestro sistema de autenticación.",
      "market.chartMinecraft.title": "Crecimiento de Jugadores de Minecraft",
      "market.chartMinecraft.desc": "Base de jugadores activos 2016-2024 (en millones)",
      "market.chartTlauncher.title": "Tráfico de TLauncher",
      "market.chartTlauncher.desc": "Visitas mensuales en 2025 (en millones)",
      "market.statPlayersLabel": "Jugadores Minecraft (2024)",
      "market.statVisitsLabel": "Visitas TLauncher (Sep 2025)",
      "market.statRankLabel": "Rank Global TLauncher",
      "market.statPotentialLabel": "Mercado Potencial",

      "how.title": "¿Cómo Funciona?",
      "how.description": "Nuestra solución utiliza tecnología blockchain para crear un sistema de autenticación transparente, seguro y accesible para todos los jugadores.",
      "how.step1.title": "Registro del Usuario",
      "how.step1.description": "Los jugadores no premium crean una identidad única en la blockchain sin necesidad de cuentas oficiales.",
      "how.step2.title": "Generación de Credenciales",
      "how.step2.description": "Se generan credenciales criptográficas únicas que se almacenan de forma descentralizada en la blockchain.",
      "how.step3.title": "Verificación Segura",
      "how.step3.description": "Los servidores verifican la autenticidad del jugador consultando la blockchain sin exponer datos sensibles.",
      "how.step4.title": "Acceso Garantizado",
      "how.step4.description": "Una vez verificado, el jugador obtiene acceso seguro al servidor con su identidad protegida.",
      "how.techTitle": "Tecnología Blockchain",
      "how.techDesc": "La blockchain proporciona un registro inmutable y descentralizado de todas las identidades de jugadores. Esto significa que no hay un punto único de fallo y los datos están protegidos contra manipulación.",
      "how.feature1.title": "Descentralización Total",
      "how.feature1.desc": "No dependes de un servidor central que pueda caer o ser hackeado.",
      "how.feature2.title": "Privacidad Garantizada",
      "how.feature2.desc": "Tus datos personales nunca se almacenan en la blockchain.",
      "how.feature3.title": "Verificación Instantánea",
      "how.feature3.desc": "La autenticación se realiza en segundos sin necesidad de servidores externos.",

      "login.title": "Inicia sesión con tu wallet",
      "login.connect": "Conectar",
      "login.connecting": "Conectando...",
      "login.missingToken": "Falta el parámetro token en la URL",
      "login.missingUsername": "Falta el parámetro username en la URL",
      "login.missingIP": "Falta el parámetro ip en la URL",
      "login.noWallet": "No se detectó extensión de wallet o el acceso fue denegado",
      "login.noAccounts": "No hay cuentas en la wallet",
      "login.noSigner": "Tu wallet no soporta firmar en bruto",
      "login.networkError": "Error de red al contactar al servidor de login",
      "login.failed": "Error en el login",

      "success.title": "¡Has iniciado sesión correctamente! ✅",
      "success.subtitle": "Vuelve al juego"
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: (localStorage.getItem('lang') as string) || 'en',
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  interpolation: { escapeValue: false }
})

export default i18n
