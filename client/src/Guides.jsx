import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  AlertTriangle, 
  Heart, 
  Activity, 
  Shield,
  ChevronRight,
  Star,
  Clock,
  Phone,
  Filter,
  X
} from 'lucide-react';

const MedicalGuides = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedUrgency, setSelectedUrgency] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const medicalGuides = [
    {
      id: 1,
      title: "Dolor de Cabeza Tensional",
      category: "symptoms",
      urgency: "low",
      description: "Guía completa sobre el manejo del dolor de cabeza tensional, causas comunes y cuándo preocuparse.",
      content: {
        symptoms: ["Dolor sordo y constante", "Presión en la frente o laterales", "Sensibilidad en cuero cabelludo"],
        homeCare: [
          "Descansar en un ambiente oscuro y silencioso",
          "Aplicar compresas frías o calientes en la frente",
          "Masajear suavemente la zona del cuello y hombros",
          "Mantenerse hidratado, beber agua regularmente"
        ],
        whenToSeeDoctor: [
          "Dolor de cabeza severo que aparece repentinamente",
          "Acompañado de fiebre alta o rigidez en el cuello",
          "Después de una lesión en la cabeza",
          "Que empeora progresivamente o no responde a medicamentos"
        ],
        prevention: [
          "Mantener horarios regulares de sueño",
          "Practicar técnicas de relajación como respiración profunda",
          "Corregir la postura al trabajar frente a computadoras",
          "Realizar pausas activas cada hora"
        ]
      },
      author: "Dra. María García",
      date: "Enero 2026",
      readTime: "5 min",
      verified: true
    },
    {
      id: 2,
      title: "Fiebre en Adultos",
      category: "symptoms",
      urgency: "medium",
      description: "Aprende a manejar la fiebre, cuándo tratarla en casa y cuándo buscar atención médica urgente.",
      content: {
        symptoms: ["Temperatura > 38°C", "Escalofríos", "Sudoración", "Debilidad general"],
        homeCare: [
          "Reposo absoluto en cama",
          "Hidratación abundante (agua, caldos, sueros)",
          "Paños tibios en frente y axilas",
          "Paracetamol según indicación médica"
        ],
        whenToSeeDoctor: [
          "Fiebre superior a 40°C",
          "Duración mayor a 3 días",
          "En niños menores de 3 meses",
          "Acompañada de dificultad respiratoria"
        ],
        prevention: [
          "Lavado frecuente de manos",
          "Vacunación anual contra influenza",
          "Evitar contacto con personas enfermas"
        ]
      },
      author: "Dr. Carlos Martínez",
      date: "Diciembre 2025",
      readTime: "7 min",
      verified: true
    },
    {
      id: 3,
      title: "Quemaduras Leves",
      category: "first-aid",
      urgency: "medium",
      description: "Protocolo de primeros auxilios para quemaduras de primer grado y segundo grado superficial.",
      content: {
        symptoms: ["Enrojecimiento", "Dolor localizado", "Ampollas pequeñas", "Hinchazón leve"],
        homeCare: [
          "Enfriar bajo agua corriente fría (no helada) por 15-20 minutos",
          "Cubrir con gasa estéril o paño limpio",
          "Aplicar crema hidratante o aloe vera",
          "No romper ampollas"
        ],
        whenToSeeDoctor: [
          "Quemaduras en cara, manos, pies o genitales",
          "Quemaduras eléctricas o químicas",
          "Ampollas grandes o piel carbonizada",
          "Signos de infección: pus, fiebre"
        ],
        prevention: [
          "Usar guantes al cocinar",
          "Proteger a niños de enchufes y líquidos calientes",
          "Revisar temperatura del agua del baño"
        ]
      },
      author: "Dr. Pedro Sánchez",
      date: "Noviembre 2025",
      readTime: "6 min",
      verified: true
    },
    {
      id: 4,
      title: "Hipertensión Arterial",
      category: "chronic-conditions",
      urgency: "high",
      description: "Manejo de la presión arterial alta, cambios en el estilo de vida y cuándo es una emergencia.",
      content: {
        symptoms: [
          "Usualmente asintomático",
          "Dolor de cabeza intenso",
          "Visión borrosa",
          "Palpitaciones"
        ],
        homeCare: [
          "Monitoreo regular de presión arterial",
          "Dieta baja en sodio (menos de 2g al día)",
          "Ejercicio moderado 30 minutos al día",
          "Evitar alcohol y tabaco"
        ],
        whenToSeeDoctor: [
          "Presión > 180/120 mmHg",
          "Dolor de cabeza severo repentino",
          "Falta de aire o dolor en el pecho",
          "Entumecimiento de un lado del cuerpo"
        ],
        prevention: [
          "Mantener peso saludable",
          "Reducir estrés con meditación o yoga",
          "Limitar cafeína",
          "Chequeos médicos regulares"
        ]
      },
      author: "Dr. Carlos Martínez",
      date: "Octubre 2025",
      readTime: "8 min",
      verified: true
    },
    {
      id: 5,
      title: "RCP Básico",
      category: "first-aid",
      urgency: "high",
      description: "Instrucciones paso a paso para realizar Reanimación Cardiopulmonar en adultos.",
      content: {
        symptoms: ["Inconsciencia", "No respira", "No tiene pulso", "Piel pálida o azulada"],
        homeCare: [
          "Verificar seguridad de la escena",
          "Llamar a emergencias (900 123 457)",
          "Colocar a la persona boca arriba en superficie firme",
          "Iniciar compresiones torácicas (100-120 por minuto)"
        ],
        whenToSeeDoctor: [
          "Siempre es una emergencia médica",
          "Requiere atención hospitalaria inmediata después del evento"
        ],
        prevention: [
          "Tomar curso certificado de RCP",
          "Conocer ubicación de DEA (Desfibriladores)",
          "Tener lista de contactos de emergencia"
        ]
      },
      author: "Dr. José Rodríguez",
      date: "Septiembre 2025",
      readTime: "10 min",
      verified: true
    },
    {
      id: 6,
      title: "Ansiedad y Ataques de Pánico",
      category: "symptoms",
      urgency: "medium",
      description: "Estrategias para manejar la ansiedad aguda y reconocer un ataque de pánico.",
      content: {
        symptoms: [
          "Palpitaciones aceleradas",
          "Sensación de ahogo",
          "Miedo intenso sin causa aparente",
          "Temblores o sudoración"
        ],
        homeCare: [
          "Respiración diafragmática (4-7-8: inhalar 4s, retener 7s, exhalar 8s)",
          "Técnica de grounding: 5-4-3-2-1 (cosas que ves, tocas, oyes, hueles, saboreas)",
          "Alejarse del estímulo estresante temporalmente",
          "Hablar con alguien de confianza"
        ],
        whenToSeeDoctor: [
          "Ataques frecuentes que afectan calidad de vida",
          "Pensamientos de autolesión",
          "Incapacidad para realizar actividades diarias",
          "Dolor en el pecho acompañado de dificultad respiratoria"
        ],
        prevention: [
          "Terapia cognitivo-conductual",
          "Ejercicio regular (mínimo 30 min/día)",
          "Meditación mindfulness diaria",
          "Reducción de cafeína y alcohol"
        ]
      },
      author: "Dra. Laura Fernández",
      date: "Agosto 2025",
      readTime: "9 min",
      verified: true
    }
  ];

  // Obtener categorías únicas
  const categories = [
    { id: 'all', name: 'Todas', icon: BookOpen },
    { id: 'symptoms', name: 'Síntomas', icon: Activity },
    { id: 'chronic-conditions', name: 'Condiciones Crónicas', icon: Heart },
    { id: 'first-aid', name: 'Primeros Auxilios', icon: Shield }
  ];

  // Filtrar guías
  const filteredGuides = medicalGuides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    const matchesUrgency = selectedUrgency === 'all' || guide.urgency === selectedUrgency;
    return matchesSearch && matchesCategory && matchesUrgency;
  });

  // Toggle favoritos
  const toggleFavorite = (guideId) => {
    if (!isLoggedIn) {
      alert('Inicia sesión para guardar guías en favoritos');
      return;
    }
    if (favorites.includes(guideId)) {
      setFavorites(favorites.filter(id => id !== guideId));
    } else {
      setFavorites([...favorites, guideId]);
    }
  };

  // Obtener color de urgencia
  const getUrgencyColor = (urgency) => {
    switch(urgency) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyText = (urgency) => {
    switch(urgency) {
      case 'low': return 'Baja - Atención en casa';
      case 'medium': return 'Media - Consultar pronto';
      case 'high': return 'Alta - Urgencia médica';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8" />
              <h1 className="text-3xl font-bold">Guías Médicas</h1>
            </div>
            {!isLoggedIn && (
              <div className="bg-blue-500 bg-opacity-30 rounded-lg px-4 py-2 text-sm">
                🔓 Modo invitado - Inicia sesión para guardar favoritos
              </div>
            )}
          </div>
          <p className="text-blue-100 text-lg max-w-3xl">
            Accede a guías médicas basadas en evidencia científica, organizadas por condición y urgencia.
            Aprende sobre cuidados en casa y cuándo acudir a urgencias.
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Barra de búsqueda y filtros */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar guías por título o descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
              <div className="relative">
                <select
                  value={selectedUrgency}
                  onChange={(e) => setSelectedUrgency(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="all">Todas las urgencias</option>
                  <option value="low">Baja urgencia</option>
                  <option value="medium">Media urgencia</option>
                  <option value="high">Alta urgencia</option>
                </select>
                <AlertTriangle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Grid de guías */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => (
            <div key={guide.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Cabecera de la tarjeta */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 border-b">
                <div className="flex justify-between items-start mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getUrgencyColor(guide.urgency)}`}>
                    {getUrgencyText(guide.urgency)}
                  </span>
                  <button
                    onClick={() => toggleFavorite(guide.id)}
                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    <Star className={`w-5 h-5 ${favorites.includes(guide.id) ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                  </button>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{guide.title}</h3>
                <p className="text-gray-600 text-sm">{guide.description}</p>
              </div>

              {/* Información de la guía */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{guide.readTime} de lectura</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {guide.verified && (
                      <>
                        <Shield className="w-4 h-4 text-green-600" />
                        <span className="text-green-600 text-xs">Verificado</span>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    {categories.find(c => c.id === guide.category)?.name}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedGuide(guide)}
                  className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Leer guía completa</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Si no hay resultados */}
        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No se encontraron guías</h3>
            <p className="text-gray-500">Intenta con otros términos de búsqueda o filtros</p>
          </div>
        )}

     
      </div>

      {/* Modal para ver guía completa */}
      {selectedGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">{selectedGuide.title}</h2>
              <button
                onClick={() => setSelectedGuide(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Metadatos */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 pb-4 border-b">
                <span>👨‍⚕️ {selectedGuide.author}</span>
                <span>📅 {selectedGuide.date}</span>
                <span>⏱️ {selectedGuide.readTime} de lectura</span>
                <span className={`px-2 py-1 rounded ${getUrgencyColor(selectedGuide.urgency)}`}>
                  {getUrgencyText(selectedGuide.urgency)}
                </span>
              </div>

              {/* Síntomas */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-blue-600" />
                  Síntomas comunes
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  {selectedGuide.content.symptoms.map((symptom, idx) => (
                    <li key={idx}>{symptom}</li>
                  ))}
                </ul>
              </div>

              {/* Cuidados en casa */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center">
                  🏠 Cuidados en casa
                </h3>
                <ul className="list-disc list-inside space-y-1 text-green-700 ml-4">
                  {selectedGuide.content.homeCare.map((care, idx) => (
                    <li key={idx}>{care}</li>
                  ))}
                </ul>
              </div>

              {/* Cuándo ver al médico */}
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3 flex items-center">
                  ⚠️ Cuándo acudir al médico / urgencias
                </h3>
                <ul className="list-disc list-inside space-y-1 text-yellow-700 ml-4">
                  {selectedGuide.content.whenToSeeDoctor.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Prevención */}
              {selectedGuide.content.prevention && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
                    🛡️ Prevención
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-blue-700 ml-4">
                    {selectedGuide.content.prevention.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Aviso importante */}
              <div className="bg-gray-100 p-4 rounded-lg text-center text-sm text-gray-600">
                ⚕️ Esta guía es solo para fines informativos y no reemplaza una consulta médica profesional.
                Siempre consulta con un médico certificado para diagnóstico y tratamiento adecuados.
              </div>

              {/* Botones de acción */}
              <div className="flex gap-3 pt-4">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Compartir con mi médico
                </button>
                <button 
                  onClick={() => toggleFavorite(selectedGuide.id)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center space-x-2"
                >
                  <Star className={`w-4 h-4 ${favorites.includes(selectedGuide.id) ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                  <span>Favorito</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalGuides;