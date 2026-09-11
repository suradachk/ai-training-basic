import React, { useState } from 'react'
import {
  Brain,
  Sparkles,
  Rocket,
  HeartPulse,
  Briefcase,
  TrendingUp,
  ChevronRight,
  Lightbulb,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe,
  ArrowRight,
  Layers,
  Cpu
} from 'lucide-react'
import { AI_OVERVIEW_6_PILLARS } from '../data/workshopData'

const ICON_MAP = {
  Brain: Brain,
  Sparkles: Sparkles,
  Rocket: Rocket,
  HeartPulse: HeartPulse,
  Briefcase: Briefcase,
  TrendingUp: TrendingUp,
}

export default function AiOverviewSection({ fontSizes = { base: 'text-sm', heading: 'text-xl' } }) {
  const [activePillarId, setActivePillarId] = useState('all')

  const filteredPillars = activePillarId === 'all'
    ? AI_OVERVIEW_6_PILLARS
    : AI_OVERVIEW_6_PILLARS.filter(p => p.id === activePillarId)

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="minimal-card rounded-2xl p-6 lg:p-8 space-y-4 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className={`${fontSizes.heading} font-bold text-white`}>
                6 เสาหลักความรู้ AI ครบวงจร (AI 360° Overview)
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                ตั้งแต่พื้นฐาน ความสามารถ เทคโนโลยีล้ำยุค การใช้ในชีวิต-งาน จนถึงอนาคต 10 ปีข้างหน้า
              </p>
            </div>
          </div>
          <span className="text-xs font-mono bg-slate-800 border border-slate-700 px-3 py-1 rounded-md text-slate-300">
            📌 6 Pillars Knowledge
          </span>
        </div>

        {/* Quick Pillar Filter Buttons */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
          <button
            onClick={() => setActivePillarId('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              activePillarId === 'all'
                ? 'bg-sky-600 text-white font-bold shadow-sm'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700/60'
            }`}
          >
            🌟 แสดงทั้งหมด 6 ด้าน
          </button>
          {AI_OVERVIEW_6_PILLARS.map(p => {
            const Icon = ICON_MAP[p.icon] || Brain
            return (
              <button
                key={p.id}
                onClick={() => setActivePillarId(p.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition ${
                  activePillarId === p.id
                    ? 'bg-sky-600 text-white font-bold shadow-sm'
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{p.num}. {p.title}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Pillars List */}
      <div className="space-y-6">
        {filteredPillars.map((pillar) => {
          const Icon = ICON_MAP[pillar.icon] || Brain

          return (
            <div
              key={pillar.id}
              className="minimal-card rounded-2xl p-6 lg:p-7 space-y-5 border border-slate-800 transition hover:border-slate-700"
            >
              {/* Pillar Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-3">
                  <span className="w-9 h-9 rounded-xl bg-slate-800 text-sky-400 flex items-center justify-center font-bold text-sm border border-slate-700 font-mono">
                    {pillar.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                      <span>{pillar.title}</span>
                    </h3>
                    <p className="text-xs text-slate-400">{pillar.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs px-2.5 py-1 rounded bg-slate-800/80 text-sky-300 border border-slate-700">
                    {pillar.id === 'pillar1' && 'Concept & Mindset'}
                    {pillar.id === 'pillar2' && 'Multimodal Capabilities'}
                    {pillar.id === 'pillar3' && 'State-of-the-Art 2025-2026'}
                    {pillar.id === 'pillar4' && 'Daily Life & Family'}
                    {pillar.id === 'pillar5' && 'Workplace Productivity'}
                    {pillar.id === 'pillar6' && 'Future & Human Skills'}
                  </span>
                </div>
              </div>

              {/* Summary Box */}
              <div className="minimal-card-inner p-3.5 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                💡 <span className="text-slate-200">{pillar.summary}</span>
              </div>

              {/* PILLAR 1: AI คืออะไร */}
              {pillar.id === 'pillar1' && pillar.keyPoints && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {pillar.keyPoints.map((kp, idx) => (
                    <div key={idx} className="minimal-card-inner p-4 rounded-xl border border-slate-800 space-y-1.5">
                      <h4 className="font-bold text-white text-xs sm:text-sm">{kp.title}</h4>
                      <p className={`${fontSizes.base} text-slate-300 leading-relaxed whitespace-pre-line text-xs`}>
                        {kp.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* PILLAR 2: AI ทำอะไรได้บ้าง (6 มิติมัลติมีเดีย) */}
              {pillar.id === 'pillar2' && pillar.dimensions && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {pillar.dimensions.map((dim, idx) => (
                    <div key={idx} className="minimal-card-inner p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-2">
                      <div className="space-y-1.5">
                        <h4 className="font-bold text-white text-xs sm:text-sm">{dim.name}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {dim.examples}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                        🛠️ <span className="text-sky-300 font-mono">{dim.tools}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* PILLAR 3: ตอนนี้ AI ไปไกลถึงไหนแล้ว (SOTA) */}
              {pillar.id === 'pillar3' && pillar.advancements && (
                <div className="space-y-3">
                  {pillar.advancements.map((adv, idx) => (
                    <div key={idx} className="minimal-card-inner p-4 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">
                          {adv.badge}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-white">{adv.title}</h4>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {adv.desc}
                      </p>
                      <div className="p-2.5 rounded-lg bg-[#060911] border border-slate-800/80 text-[11px] text-slate-300">
                        {adv.highlight}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* PILLAR 4: AI กับชีวิตประจำวัน */}
              {pillar.id === 'pillar4' && pillar.useCases && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {pillar.useCases.map((uc, idx) => (
                    <div key={idx} className="minimal-card-inner p-4 rounded-xl border border-slate-800 space-y-1.5">
                      <h4 className="font-bold text-white text-xs sm:text-sm">{uc.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {uc.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* PILLAR 5: AI กับการทำงาน */}
              {pillar.id === 'pillar5' && pillar.workApplications && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {pillar.workApplications.map((wa, idx) => (
                    <div key={idx} className="minimal-card-inner p-4 rounded-xl border border-slate-800 space-y-1.5">
                      <h4 className="font-bold text-white text-xs sm:text-sm">{wa.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {wa.tasks}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* PILLAR 6: AI ในไม่กี่ปีข้างหน้า */}
              {pillar.id === 'pillar6' && (
                <div className="space-y-4">
                  {/* Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {pillar.roadmap.map((rd, idx) => (
                      <div key={idx} className="minimal-card-inner p-4 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700 inline-block">
                          {rd.timeline}
                        </span>
                        <h4 className="font-bold text-white text-xs">{rd.title}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">{rd.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Human Superpowers */}
                  <div className="minimal-card-inner p-4 rounded-xl border border-slate-800 space-y-3">
                    <h4 className="text-xs font-bold text-sky-300 uppercase tracking-wider flex items-center space-x-1.5">
                      <Zap className="w-4 h-4" />
                      <span>4 ทักษะสำคัญที่มนุษย์ต้องมี (Human Superpowers)</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {pillar.humanSuperpowers.map((sp, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-[#060911] border border-slate-800/80 space-y-1">
                          <h5 className="font-bold text-white text-xs">{sp.title}</h5>
                          <p className="text-[11px] text-slate-300">{sp.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Golden Quote */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-700 text-center">
                    <p className="text-xs sm:text-sm font-bold text-sky-300">
                      "{pillar.goldenQuote}"
                    </p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
