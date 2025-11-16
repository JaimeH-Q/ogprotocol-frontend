import { Shield, Link, CheckCircle, Users } from "lucide-react";
import { useTranslation } from 'react-i18next'

export function HowItWorks() {
  const { t } = useTranslation()

  const steps = [
    {
      icon: Users,
      title: t('how.step1.title'),
      description: t('how.step1.description'),
    },
    {
      icon: Link,
      title: t('how.step2.title'),
      description: t('how.step2.description'),
    },
    {
      icon: Shield,
      title: t('how.step3.title'),
      description: t('how.step3.description'),
    },
    {
      icon: CheckCircle,
      title: t('how.step4.title'),
      description: t('how.step4.description'),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black circuit-pattern mt-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-white">{t('how.title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t('how.description')}</p>
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
              <h3 className="mb-4 text-white">{t('how.techTitle')}</h3>
              <p className="text-gray-400 mb-6">{t('how.techDesc')}</p>

              <div className="space-y-4">
                {/* Feature 1 */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white">{t('how.feature1.title')}</p>
                    <p className="text-gray-400">{t('how.feature1.desc')}</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white">{t('how.feature2.title')}</p>
                    <p className="text-gray-400">{t('how.feature2.desc')}</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white">{t('how.feature3.title')}</p>
                    <p className="text-gray-400">{t('how.feature3.desc')}</p>
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
