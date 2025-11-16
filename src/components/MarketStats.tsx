import { TrendingUp, Users, Server, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useTranslation } from 'react-i18next'

export function MarketStats() {
  const { t } = useTranslation()

  // Real Minecraft player data from 2016-2024
  const minecraftGrowthData = [
    { year: "2016", players: 40 },
    { year: "2017", players: 55 },
    { year: "2018", players: 75 },
    { year: "2019", players: 91 },
    { year: "2020", players: 115 },
    { year: "2021", players: 144 },
    { year: "2022", players: 170 },
    { year: "2023", players: 172 },
    { year: "2024", players: 204.33 },
  ];

  // TLauncher monthly visits data
  const tlauncherData = [
    { month: "Ene", visits: 3.8 },
    { month: "Feb", visits: 4.1 },
    { month: "Mar", visits: 4.3 },
    { month: "Abr", visits: 4.5 },
    { month: "May", visits: 4.2 },
    { month: "Jun", visits: 4.7 },
    { month: "Jul", visits: 5.1 },
    { month: "Ago", visits: 4.9 },
    { month: "Sep", visits: 4.53 },
  ];

  const stats = [
    {
      icon: Users,
      label: t('market.statPlayersLabel'),
      value: "204.3M",
      change: "+18.8% vs. 2023",
      color: "bg-blue-500",
    },
    {
      icon: TrendingUp,
      label: t('market.statVisitsLabel'),
      value: "4.53M",
      change: "Mensuales",
      color: "bg-green-500",
    },
    {
      icon: Globe,
      label: t('market.statRankLabel'),
      value: "#12,289",
      change: "En todo el mundo",
      color: "bg-purple-500",
    },
    {
      icon: Server,
      label: t('market.statPotentialLabel'),
      value: "~30%",
      change: "Jugadores no premium estimados",
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 circuit-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-white text-4xl font-bold">
              {t('market.title')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('market.description')}
            </p>
          </div>

          {/* Key Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="border-gray-800 bg-gray-900 shadow-lg hover:shadow-xl hover:shadow-blue-900/20 transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="mb-1 text-white">{stat.value}</div>
                  <p className="text-gray-300 mb-1">{stat.label}</p>
                  <p className="text-gray-500">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Minecraft Growth Chart */}
            <Card className="border-gray-800 bg-gray-900 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">{t('market.chartMinecraft.title')}</CardTitle>
                <CardDescription className="text-gray-400">
                  {t('market.chartMinecraft.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={minecraftGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="year" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1f2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.5)",
                        color: "#fff",
                      }}
                      formatter={(value) => [`${value}M jugadores`, "Jugadores Activos"]}
                    />
                    <Line
                      type="monotone"
                      dataKey="players"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      dot={{ fill: "#3b82f6", r: 5 }}
                      activeDot={{ r: 7 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* TLauncher Traffic Chart */}
            <Card className="border-gray-800 bg-gray-900 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">{t('market.chartTlauncher.title')}</CardTitle>
                <CardDescription className="text-gray-400">
                  {t('market.chartTlauncher.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={tlauncherData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1f2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.5)",
                        color: "#fff",
                      }}
                      formatter={(value) => [`${value}M visitas`, "Tráfico Mensual"]}
                    />
                    <Bar dataKey="visits" fill="#10b981" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
