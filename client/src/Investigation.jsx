import React, { useState } from 'react';
import { 
  GiHealthNormal 
} from 'react-icons/gi';
import { 
  FaPlus, FaTags, FaCalendarAlt, FaCheckCircle, FaUserMd, 
  FaStethoscope, FaEdit, FaBook, FaFlask, FaClipboardList, 
  FaCommentDots, FaFilter 
} from 'react-icons/fa';
import { MdChat, MdSend, MdClose } from 'react-icons/md';

const Investigation = () => {
  // --- Estados de tu lógica original ---
  const [showAddModal, setShowAddModal] = useState(false);
  const [showTagFilter, setShowTagFilter] = useState(false);
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [showChecklistModal, setShowChecklistModal] = useState(false);
  const [selectedDoctorForChat, setSelectedDoctorForChat] = useState(null);
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [description, setDescription] = useState("Equipo médico de alta especialidad dedicado a la investigación y desarrollo de nuevas fronteras en salud.");
  
  const [specialtyFilter, setSpecialtyFilter] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');

  // Mock de datos para renderizado
  const uniqueSpecialties = ["Cardiología", "Neurología", "Pediatría"];
  const filteredDoctors = [
    { id: 1, name: "Dr. Roberto Franco", specialty: "Cardiología", experience: "15 años", certification: "Board Certified", colegiado: "MS-4521", photo: "https://via.placeholder.com/150" }
  ];
  const publications = [{ id: 1, title: "Avances en Telemedicina 2026", date: "2026", focus: "Tecnología" }];
  const activeProjects = [{ id: 1, title: "IA en Diagnóstico Precoz", date: "2025", focus: "Inteligencia Artificial" }];

  return (
    <div className="bg-slate-50 min-h-screen pb-12 font-sans text-slate-900">
      {/* Header Estilo MED 24 */}
      <header className="bg-white border-b border-slate-200 py-10 mb-8 shadow-sm text-center px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            <GiHealthNormal className="text-blue-600" /> RF5 Equipo e Investigación
          </h1>
          <p className="mt-2 text-blue-600 font-semibold tracking-wide uppercase text-sm">
            MED 24 - Calidad y credenciales médicas
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4">
        
        {/* Barra de Menú / Acciones */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {[
            { icon: <FaPlus />, label: "Añadir", onClick: () => setShowAddModal(true) },
            { icon: <FaTags />, label: "Etiquetas", onClick: () => setShowTagFilter(!showTagFilter) },
            { icon: <FaCalendarAlt />, label: "Fechas", onClick: () => setShowDateFilter(!showDateFilter) },
            { icon: <FaCheckCircle />, label: "Checklist", onClick: () => setShowChecklistModal(true) },
          ].map((btn, i) => (
            <button 
              key={i}
              onClick={btn.onClick}
              className="flex items-center gap-2 bg-white border border-slate-200 px-5 py-2.5 rounded-xl font-bold text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
            >
              {btn.icon} {btn.label}
            </button>
          ))}
        </div>

        {/* Paneles de Filtros Dinámicos */}
        {showTagFilter && (
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-lg mb-6 animate-in fade-in slide-in-from-top-4">
            <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-4"><FaFilter className="text-blue-500" /> Filtrar por especialidad:</h4>
            <div className="flex flex-wrap gap-2">
              {uniqueSpecialties.map(spec => (
                <button 
                  key={spec} 
                  onClick={() => { setSpecialtyFilter(spec); setShowTagFilter(false); }}
                  className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  {spec}
                </button>
              ))}
              {specialtyFilter && (
                <button onClick={() => setSpecialtyFilter('')} className="px-4 py-2 rounded-full bg-red-50 text-red-600 font-bold text-sm">Limpiar</button>
              )}
            </div>
          </div>
        )}

        {showDateFilter && (
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-lg mb-6 animate-in fade-in slide-in-from-top-4">
            <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-4"><FaCalendarAlt className="text-blue-500" /> Filtrar por año:</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <input type="number" placeholder="Desde" className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 w-32" value={startYear} onChange={e => setStartYear(e.target.value)} />
              <input type="number" placeholder="Hasta" className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 w-32" value={endYear} onChange={e => setEndYear(e.target.value)} />
              <button onClick={() => { setStartYear(''); setEndYear(''); }} className="text-slate-500 hover:text-red-500 font-bold text-sm">Limpiar</button>
            </div>
          </div>
        )}

        {/* Tarjeta de Descripción */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-10 group relative">
          {isEditingDesc ? (
            <div className="space-y-4">
              <textarea 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                value={description} 
                onChange={e => setDescription(e.target.value)} 
                rows="3" 
              />
              <button onClick={() => setIsEditingDesc(false)} className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">Guardar Cambios</button>
            </div>
          ) : (
            <div className="flex justify-between items-start">
              <p className="text-slate-600 leading-relaxed italic">"{description}"</p>
              <button onClick={() => setIsEditingDesc(true)} className="text-blue-600 p-2 hover:bg-blue-50 rounded-full transition-colors">
                <FaEdit />
              </button>
            </div>
          )}
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Sección Equipo Médico */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                <FaUserMd className="text-blue-600" /> Equipo Médico
              </h2>
              <select 
                value={specialtyFilter} 
                onChange={e => setSpecialtyFilter(e.target.value)}
                className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todas las áreas</option>
                {uniqueSpecialties.map(spec => <option key={spec} value={spec}>{spec}</option>)}
              </select>
            </div>

            <div className="space-y-4">
              {filteredDoctors.map(d => (
                <div key={d.id} className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 transition-all hover:shadow-xl flex flex-col sm:flex-row gap-5 group">
                  <img src={d.photo} alt={d.name} className="w-24 h-24 rounded-2xl object-cover ring-4 ring-slate-50 group-hover:ring-blue-50 transition-all shadow-md" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{d.name}</h3>
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase mb-3 tracking-wider">
                      <FaStethoscope /> {d.specialty}
                    </div>
                    <div className="grid grid-cols-2 gap-y-2 mb-4 text-sm text-slate-500">
                      <p>📆 Exp: <span className="text-slate-800 font-medium">{d.experience}</span></p>
                      <p>📜 <span className="text-slate-800 font-medium">{d.certification}</span></p>
                      <p className="col-span-2">🆔 Colegiado: <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-xs">{d.colegiado}</span></p>
                    </div>
                    <button 
                      className="flex items-center justify-center gap-2 w-full sm:w-auto bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-600 transition-colors"
                      onClick={() => setSelectedDoctorForChat(d)}
                    >
                      <FaCommentDots /> Consultar con IA
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sección Investigación */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-800 mb-6">
              <FaBook className="text-blue-600" /> Investigación
            </h2>

            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center gap-2 font-bold text-slate-700 uppercase text-xs tracking-widest">
                <FaClipboardList className="text-blue-500" /> Publicaciones Recientes
              </div>
              <ul className="p-4 space-y-3">
                {publications.map(p => (
                  <li key={p.id} className="bg-slate-50 p-4 rounded-2xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                    <strong className="text-slate-800 block mb-2">{p.title}</strong>
                    <div className="flex gap-4 text-xs font-bold text-slate-400">
                      <span className="flex items-center gap-1"><FaCalendarAlt /> {p.date}</span>
                      <span className="flex items-center gap-1 uppercase tracking-tighter"><FaFlask /> {p.focus}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center gap-2 font-bold text-slate-700 uppercase text-xs tracking-widest">
                <FaFlask className="text-blue-500" /> Proyectos Activos
              </div>
              <ul className="p-4 space-y-3">
                {activeProjects.map(p => (
                  <li key={p.id} className="bg-slate-50 p-4 rounded-2xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                    <strong className="text-slate-800 block mb-2">{p.title}</strong>
                    <div className="flex gap-4 text-xs font-bold text-slate-400">
                      <span className="flex items-center gap-1"><FaCalendarAlt /> {p.date}</span>
                      <span className="flex items-center gap-1 uppercase tracking-tighter"><FaFlask /> {p.focus}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>

      {/* --- Modales Adaptados con estilos Tailwind --- */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl animate-in zoom-in-95 duration-200 relative">
             <button onClick={() => setShowAddModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500"><MdClose size={24}/></button>
             <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><FaPlus className="text-blue-600" /> Añadir Médico</h3>
             <form className="space-y-4">
                {['name','specialty','experience','certification','colegiado'].map(field => (
                  <input 
                    key={field} 
                    placeholder={field.charAt(0).toUpperCase()+field.slice(1)} 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ))}
                <div className="flex gap-3 pt-4">
                  <button type="submit" className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Guardar</button>
                  <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 bg-slate-100 text-slate-600 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all">Cancelar</button>
                </div>
             </form>
          </div>
        </div>
      )}

      {/* Checklist Estilo Card */}
      {showChecklistModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-lg p-8 shadow-2xl relative">
            <button onClick={() => setShowChecklistModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500"><MdClose size={24}/></button>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Checklist de Calidad</h3>
            <ul className="space-y-4">
              {[
                "Equipo con nombre, especialidad, experiencia, foto",
                "Certificación y número colegiado visibles",
                "Investigación: publicaciones y proyectos",
                "Filtro funcional por especialidad",
                "Perfiles enlazan a chat IA especializado",
                "Interfaz unificada MED 24"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 border-b border-slate-50 pb-2">
                  <span className="text-emerald-500 mt-1 font-bold italic">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Chat IA Adaptado */}
      {selectedDoctorForChat && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm">
          <div className="bg-white rounded-3xl shadow-2xl border border-blue-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-10">
            <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full"><MdChat /></div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">Asistente Especialista</h4>
                  <p className="text-[10px] opacity-80 uppercase font-bold tracking-tighter">{selectedDoctorForChat.specialty}</p>
                </div>
              </div>
              <button onClick={() => setSelectedDoctorForChat(null)} className="hover:bg-white/20 p-1 rounded-lg transition-colors"><MdClose size={20}/></button>
            </div>
            <div className="p-6 h-48 overflow-y-auto bg-slate-50">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-sm text-slate-600 leading-relaxed">
                Hola, soy el asistente virtual especializado en <strong>{selectedDoctorForChat.specialty}</strong>. ¿En qué puedo orientarte hoy?
              </div>
            </div>
            <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
              <input type="text" placeholder="Escribe tu duda médica..." className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="bg-blue-600 text-white p-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md active:scale-95">
                <MdSend />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Investigation;