import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { motion, AnimatePresence } from "framer-motion"; import { useState } from "react"; import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const sections = [ { title: "Resumen Ejecutivo", content: "Entre 2025 y 2035, la inteligencia artificial de frontera evolucionará de forma acelerada. Esta transformación estará impulsada por avances exponenciales en cómputo, algoritmos, hardware y datos.", chart: [ { name: "IA en Trabajo", value: 65 }, { name: "IA en Ciencia", value: 50 }, { name: "IA Personal", value: 75 }, { name: "Impacto Global", value: 90 } ] }, { title: "Impulsores de la Aceleración", content: "Presupuestos de cómputo crecen 4-5x por año. La eficiencia algorítmica mejora cada 8-9 meses. El hardware se duplica por generación. Los datos sintéticos reemplazan progresivamente a los humanos.", chart: [ { name: "Cómputo", value: 5 }, { name: "Algoritmos", value: 2 }, { name: "Hardware", value: 2.5 }, { name: "Datos", value: 3 } ] }, { title: "2025–2027: Auge de la Adopción", content: "Sistemas como GPT-5 dominan el mercado. La IA se integra masivamente en oficinas y comercio. Surgen agentes autónomos. Robots funcionales aparecen en logística.", chart: [ { name: "Adopción Empresarial", value: 60 }, { name: "Asistentes IA", value: 45 }, { name: "Robots Logísticos", value: 30 } ] }, { title: "2028–2030: Emergencia de AGI Práctica", content: "Modelos Frontier-X resuelven problemas científicos. Asistentes personales de IA son accesibles. Robots alcanzan rentabilidad. Se inicia gobernanza global.", chart: [ { name: "Acceso Global IA", value: 80 }, { name: "Rendimiento AGI", value: 85 }, { name: "Gobernanza", value: 60 } ] }, { title: "2031–2032: Consolidación Cognitiva", content: "El crecimiento se frena por límites energéticos. Nuevos métodos como el descenso auto-reflexivo emergen. Aparecen sistemas colectivos. Mejora la alineación ética.", chart: [ { name: "Colaboración IA", value: 70 }, { name: "Optimización Energética", value: 50 }, { name: "Seguridad Ética", value: 65 } ] }, { title: "2033–2035: Superinteligencia Humana Débil", content: "Sistemas superan a humanos en casi todas las tareas. IA se integra en hogares. Se desarrolla memoria conversacional. Aumenta la desigualdad.", chart: [ { name: "Capacidades", value: 95 }, { name: "Interacción IA-Humano", value: 85 }, { name: "Desigualdad", value: 70 } ] }, { title: "Oportunidades Estratégicas", content: "La educación debe adaptarse. Las industrias que adopten IA ganarán ventaja. Los gobiernos pueden liderar la gobernanza. La ciencia se acelera.", chart: [ { name: "Educación", value: 80 }, { name: "Industria", value: 90 }, { name: "Gobierno", value: 70 }, { name: "Ciencia", value: 95 } ] }, { title: "Riesgos Clave", content: "Poder concentrado, desempleo, colapso epistémico y uso malicioso de IA representan amenazas estratégicas.", chart: [ { name: "Concentración", value: 85 }, { name: "Desempleo", value: 75 }, { name: "Epistemología", value: 65 }, { name: "Seguridad", value: 80 } ] }, { title: "Recomendaciones", content: "Infraestructura soberana, ética desde el diseño, IA abierta, políticas laborales nuevas y análisis estratégico anticipado son fundamentales.", chart: [ { name: "Infraestructura", value: 85 }, { name: "Ética", value: 90 }, { name: "IA Abierta", value: 70 }, { name: "Capacitación", value: 80 } ] } ];

export default function InteractiveIA2035() { const [index, setIndex] = useState(0); const current = sections[index];

const nextSection = () => setIndex((prev) => (prev + 1) % sections.length); const prevSection = () => setIndex((prev) => (prev - 1 + sections.length) % sections.length);

return ( <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-6 bg-gradient-to-br from-slate-50 to-slate-200"> <motion.h1 className="text-4xl font-bold text-center text-slate-800" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} > IA de Frontera 2025–2035 </motion.h1>

<Card className="max-w-3xl w-full shadow-xl bg-white">
    <CardContent className="p-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.title}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-slate-700">{current.title}</h2>
          <p className="mb-6 text-slate-600 text-base leading-relaxed">{current.content}</p>

          {current.chart && (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={current.chart}>
                  <XAxis dataKey="name" tick={{ fill: '#334155' }} />
                  <YAxis tick={{ fill: '#334155' }} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </CardContent>
  </Card>

  <div className="flex space-x-4">
    <Button onClick={prevSection}>Anterior</Button>
    <Button onClick={nextSection}>Siguiente</Button>
  </div>
</div>

); }
