import { Clock, ArrowRight, Heart, Shield, Sparkles, Phone, Headphones, MessageCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "Profesionales Certificados",
      description: "Equipo médico altamente calificado con años de experiencia",
    },
    {
      icon: Heart,
      title: "Asistencia Inteligente",
      description: "Cualquier necesidad que tengas la puedes resolver con nuestra IA en chat utilizando el repositorio que disponemos para ti",
    },
    {
      icon: Sparkles,
      title: "Chat IA Médico",
      description: "Asistente virtual disponible 24/7 para responder tus consultas",
    },
    {
      icon: Clock,
      title: "Disponible Sin Conexión",
      description: "La página estará habilitada en todo momento incluso sin conexión",
    },
  ];

  const urgencyServices = [
    { 
      icon: Phone, 
      title: "Línea de Urgencias", 
      description: "Atención telefónica inmediata",
      contact: "+34 900 123 457"
    },
    { 
      icon: MessageCircle, 
      title: "Chat IA 24/7", 
      description: "Consultas virtuales instantáneas",
      contact: "Disponible ahora"
    },
    { 
      icon: Headphones, 
      title: "Soporte Continuo", 
      description: "La página estará habilitada en todo momento incluso sin conexión",
      contact: "24 horas al día"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Con tecnología de IA</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Tu salud en las mejores manos
              </h1>
              
              <p className="text-xl text-blue-100 mb-8">
                Atención médica integral con profesionales certificados y tecnología de vanguardia
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/chat"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <span>Consulta con IA</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span>Ver servicios</span>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Attention Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16 border-b-4 border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold">DISPONIBLE AHORA</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Atención Médica 24/7
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Estamos disponibles todos los días del año para atender tus emergencias
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {urgencyServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-red-100 text-sm mb-3">{service.description}</p>
                  <div className="text-white font-semibold text-sm bg-white/20 px-3 py-2 rounded-lg inline-block">
                    {service.contact}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/chat"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-red-50 transition-colors font-bold text-lg shadow-xl"
            >
              <AlertCircle className="w-6 h-6" />
              <span>Chat de Emergencia IA</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ofrecemos atención médica de calidad con las últimas innovaciones tecnológicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas orientación médica?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Consulta con nuestro asistente de IA para obtener información básica sobre tu salud
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/chat"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span>Hablar con IA</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/guias"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              <span>Ver guías médicas</span>
            </Link>
          </div>

          <div className="mt-12 pt-12 border-t border-blue-400/30">
            <div className="bg-blue-500/30 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3">
                Lleva un control de tu salud
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Inicia sesión para acceder a la vigilancia médica y registrar tus signos vitales
              </p>
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                <span>Acceder a Vigilancia Médica</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}