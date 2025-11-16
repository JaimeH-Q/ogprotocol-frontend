import { Shield, Link, CheckCircle, Users } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Users,
      title: "Registro del Usuario",
      description:
        "Los jugadores no premium crean una identidad única en la blockchain sin necesidad de cuentas oficiales.",
    },
    {
      icon: Link,
      title: "Generación de Credenciales",
      description:
        "Se generan credenciales criptográficas únicas que se almacenan de forma descentralizada en la blockchain.",
    },
    {
      icon: Shield,
      title: "Verificación Segura",
      description:
        "Los servidores verifican la autenticidad del jugador consultando la blockchain sin exponer datos sensibles.",
    },
    {
      icon: CheckCircle,
      title: "Acceso Garantizado",
      description:
        "Una vez verificado, el jugador obtiene acceso seguro al servidor con su identidad protegida.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black circuit-pattern mt-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-white">¿Cómo Funciona?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nuestra solución utiliza tecnología blockchain para crear un sistema
              de autenticación transparente, seguro y accesible para todos los
              jugadores.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center z-10 shadow-lg">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-gray-900 p-6 rounded-xl h-full pt-8 border border-gray-800 hover:shadow-lg hover:shadow-blue-900/20 transition-shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-900 z-0"></div>
                )}
              </div>
            ))}
          </div>

          {/* Visual Explanation */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="mb-4 text-white">Tecnología Blockchain</h3>
              <p className="text-gray-400 mb-6">
                La blockchain proporciona un registro inmutable y descentralizado
                de todas las identidades de jugadores. Esto significa que no hay
                un punto único de fallo y los datos están protegidos contra
                manipulación.
              </p>

              <div className="space-y-4">
                {/* Feature 1 */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white">Descentralización Total</p>
                    <p className="text-gray-400">
                      No dependes de un servidor central que pueda caer o ser
                      hackeado.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white">Privacidad Garantizada</p>
                    <p className="text-gray-400">
                      Tus datos personales nunca se almacenan en la blockchain.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white">Verificación Instantánea</p>
                    <p className="text-gray-400">
                      La autenticación se realiza en segundos sin necesidad de
                      servidores externos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder Image */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl border border-gray-800">
                <img
                  src="https://via.placeholder.com/500x300"
                  alt="Placeholder"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
