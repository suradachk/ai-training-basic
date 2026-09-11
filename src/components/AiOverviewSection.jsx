import React, { useState, useEffect } from 'react'
import {
  Brain,
  Sparkles,
  Rocket,
  HeartPulse,
  Briefcase,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe,
  ArrowRight,
  Layers,
  Cpu,
  Presentation,
  LayoutGrid
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

export default function AiOverviewSection({ fontSizes = { base: 'text-sm', heading: 'text-xl' }, initialMode = 'slides' }) {
  const [viewMode, setViewMode] = useState(initialMode) // 'slides' | 'grid'
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [activePillarFilter, setActivePillarFilter] = useState('all')

  // Keyboard navigation for Session 1 slide mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (viewMode === 'slides') {
        if (e.key === 'ArrowRight' || e.key === ' ') {
          setCurrentSlideIndex(prev => Math.min(AI_OVERVIEW_6_PILLARS.length - 1, prev + 1))
        } else if (e.key === 'ArrowLeft') {
          setCurrentSlideIndex(prev => Math.max(0, prev - 1))
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [viewMode])

  const currentPillar = AI_OVERVIEW_6_PILLARS[currentSlideIndex]
  const CurrentIcon = ICON_MAP[currentPillar.icon] || Brain

  const filteredPillars = activePillarFilter === 'all'
    ? AI_OVERVIEW_6_PILLARS
    : AI_OVERVIEW_6_PILLARS.filter(p => p.id === activePillarFilter)

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Session 1 Header & View Mode Switcher */}
      <div className="minimal-card rounded-2xl p-6 lg:p-7 space-y-4 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800/80 uppercase tracking-wider">
                  ส่วนที่ 1 • ปูพื้นฐาน AI
                </span>
                <span className="text-xs text-slate-400">ภาพรวมความรู้ AI สำหรับทุกคน</span>
              </div>
              <h2 className={`${fontSizes.heading} font-bold text-white mt-1`}>
                6 เสาหลักความรู้ AI ครบวงจร (AI 360° Overview)
              </h2>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-[#060911] p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setViewMode('slides')}
              className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition font-medium ${
                viewMode === 'slides'
                  ? 'bg-sky-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>โหมดสไลด์สอนสด (6 สไลด์)</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition font-medium ${
                viewMode === 'grid'
                  ? 'bg-sky-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>โหมดการ์ดสรุปทั้งหมด</span>
            </button>
          </div>
        </div>

        {/* Pillar Quick Selection Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-800">
          <span className="text-xs text-slate-400 mr-1 hidden sm:inline">เลือกหัวข้อ:</span>
          {AI_OVERVIEW_6_PILLARS.map((p, idx) => {
            const Icon = ICON_MAP[p.icon] || Brain
            const isSelected = viewMode === 'slides' ? currentSlideIndex === idx : activePillarFilter === p.id
            return (
              <button
                key={p.id}
                onClick={() => {
                  if (viewMode === 'slides') {
                    setCurrentSlideIndex(idx)
                  } else {
                    setActivePillarFilter(p.id)
                  }
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition ${
                  isSelected
                    ? 'bg-sky-600 text-white font-bold shadow-sm'
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{p.num}. {p.title}</span>
              </button>
            )
          })}
          {viewMode === 'grid' && (
            <button
              onClick={() => setActivePillarFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                activePillarFilter === 'all'
                  ? 'bg-emerald-600 text-white font-bold shadow-sm'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700/60'
              }`}
            >
              🌟 ดูทั้งหมด
            </button>
          )}
        </div>
      </div>

      {/* VIEW MODE 1: SLIDE PRESENTATION CANVAS */}
      {viewMode === 'slides' && (
        <div className="minimal-card rounded-2xl p-6 lg:p-8 relative min-h-[540px] flex flex-col justify-between space-y-6 border border-slate-800">
          <div>
            {/* Slide Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
              <div className="flex items-center space-x-3">
                <span className="w-10 h-10 rounded-xl bg-slate-800 text-sky-400 flex items-center justify-center font-bold text-base border border-slate-700 font-mono">
                  {currentPillar.num}
                </span>
                <div>
                  <h2 className={`${fontSizes.heading} font-bold text-white flex items-center space-x-2`}>
                    <span>{currentPillar.title}</span>
                  </h2>
                  <p className="text-xs text-slate-400">{currentPillar.tagline}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono bg-slate-800 border border-slate-700 px-3 py-1 rounded-md text-slate-300">
                  สไลด์ {currentSlideIndex + 1} / {AI_OVERVIEW_6_PILLARS.length}
                </span>
              </div>
            </div>

            {/* Core Summary Callout */}
            <div className="minimal-card-inner p-4 rounded-xl border border-slate-800 mb-5">
              <p className={`${fontSizes.base} text-slate-200 leading-relaxed font-medium`}>
                💡 <strong>ใจความสำคัญ:</strong> {currentPillar.summary}
              </p>
            </div>

            {/* Content Body for each Pillar */}
            {/* PILLAR 1: AI คืออะไร */}
            {currentPillar.id === 'pillar1' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentPillar.keyPoints.map((kp, idx) => (
                  <div key={idx} className="minimal-card-inner p-4 rounded-xl border border-slate-800 space-y-1.5">
                    <h4 className="font-bold text-white text-sm">{kp.title}</h4>
                    <p className={`${fontSizes.base} text-slate-300 leading-relaxed whitespace-pre-line text-xs`}>
                      {kp.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* PILLAR 2: AI ทำอะไรได้บ้าง */}
            {currentPillar.id === 'pillar2' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {currentPillar.dimensions.map((dim, idx) => (
                  <div key={idx} className="minimal-card-inner p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-2">
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-white text-xs sm:text-sm">{dim.name}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{dim.examples}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                      🛠️ เครื่องมือ: <span className="text-sky-300 font-mono">{dim.tools}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* PILLAR 3: ตอนนี้ AI ไปไกลถึงไหนแล้ว */}
            {currentPillar.id === 'pillar3' && (
              <div className="space-y-3">
                {currentPillar.advancements.map((adv, idx) => (
                  <div key={idx} className="minimal-card-inner p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">
                        {adv.badge}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{adv.title}</h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{adv.desc}</p>
                    <div className="p-2.5 rounded-lg bg-[#060911] border border-slate-800/80 text-[11px] text-sky-200">
                      {adv.highlight}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* PILLAR 4: AI กับชีวิตประจำวัน */}
            {currentPillar.id === 'pillar4' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {currentPillar.useCases.map((uc, idx) => (
                  <div key={idx} className="minimal-card-inner p-4 rounded-xl border border-slate-800 space-y-1.5">
                    <h4 className="font-bold text-white text-xs sm:text-sm">{uc.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{uc.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* PILLAR 5: AI กับการทำงาน */}
            {currentPillar.id === 'pillar5' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {currentPillar.workApplications.map((wa, idx) => (
                  <div key={idx} className="minimal-card-inner p-4 rounded-xl border border-slate-800 space-y-1.5">
                    <h4 className="font-bold text-white text-xs sm:text-sm">{wa.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{wa.tasks}</p>
                  </div>
                ))}
              </div>
            )}

            {/* PILLAR 6: AI ในไม่กี่ปีข้างหน้า */}
            {currentPillar.id === 'pillar6' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {currentPillar.roadmap.map((rd, idx) => (
                    <div key={idx} className="minimal-card-inner p-4 rounded-xl border border-slate-800 space-y-1.5">
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700 inline-block">
                        {rd.timeline}
                      </span>
                      <h4 className="font-bold text-white text-xs">{rd.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{rd.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="minimal-card-inner p-4 rounded-xl border border-slate-800 space-y-2.5">
                  <h4 className="text-xs font-bold text-sky-300 uppercase tracking-wider flex items-center space-x-1.5">
                    <Zap className="w-4 h-4" />
                    <span>4 ทักษะสำคัญที่มนุษย์ต้องมี (Human Superpowers)</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {currentPillar.humanSuperpowers.map((sp, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-[#060911] border border-slate-800/80 space-y-0.5">
                        <h5 className="font-bold text-white text-xs">{sp.title}</h5>
                        <p className="text-[11px] text-slate-300">{sp.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-700 text-center">
                  <p className="text-xs sm:text-sm font-bold text-sky-300">
                    "{currentPillar.goldenQuote}"
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Slide Navigation Footer */}
          <div className="flex items-center justify-between border-t border-slate-800 pt-4 mt-6">
            <button
              onClick={() => setCurrentSlideIndex(prev => Math.max(0, prev - 1))}
              disabled={currentSlideIndex === 0}
              className={`px-4 py-2 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition ${
                currentSlideIndex === 0
                  ? 'opacity-30 cursor-not-allowed text-slate-600'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>เสาหลักก่อนหน้า (ลูกศรซ้าย)</span>
            </button>

            <div className="text-xs text-slate-400 hidden sm:block">
              💡 กดปุ่ม <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-200">ลูกศรซ้าย/ขวา</kbd> หรือ <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-200">Spacebar</kbd> เพื่อเปลี่ยนสไลด์
            </div>

            <button
              onClick={() => setCurrentSlideIndex(prev => Math.min(AI_OVERVIEW_6_PILLARS.length - 1, prev + 1))}
              disabled={currentSlideIndex === AI_OVERVIEW_6_PILLARS.length - 1}
              className={`px-4 py-2 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition ${
                currentSlideIndex === AI_OVERVIEW_6_PILLARS.length - 1
                  ? 'opacity-30 cursor-not-allowed text-slate-600'
                  : 'bg-sky-600 hover:bg-sky-500 text-white font-bold shadow-sm'
              }`}
            >
              <span>เสาหลักถัดไป (ลูกศรขวา / Space)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: FULL GRID / CARDS */}
      {viewMode === 'grid' && (
        <div className="space-y-6">
          {filteredPillars.map((pillar) => {
            const Icon = ICON_MAP[pillar.icon] || Brain

            return (
              <div
                key={pillar.id}
                className="minimal-card rounded-2xl p-6 lg:p-7 space-y-5 border border-slate-800"
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
                </div>

                {/* Summary Box */}
                <div className="minimal-card-inner p-3.5 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  💡 <span className="text-slate-200">{pillar.summary}</span>
                </div>

                {/* PILLAR 1 */}
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

                {/* PILLAR 2 */}
                {pillar.id === 'pillar2' && pillar.dimensions && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {pillar.dimensions.map((dim, idx) => (
                      <div key={idx} className="minimal-card-inner p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-2">
                        <div className="space-y-1.5">
                          <h4 className="font-bold text-white text-xs sm:text-sm">{dim.name}</h4>
                          <p className="text-xs text-slate-300 leading-relaxed">{dim.examples}</p>
                        </div>
                        <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                          🛠️ <span className="text-sky-300 font-mono">{dim.tools}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* PILLAR 3 */}
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
                        <p className="text-xs text-slate-300 leading-relaxed">{adv.desc}</p>
                        <div className="p-2.5 rounded-lg bg-[#060911] border border-slate-800/80 text-[11px] text-slate-300">
                          {adv.highlight}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* PILLAR 4 */}
                {pillar.id === 'pillar4' && pillar.useCases && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {pillar.useCases.map((uc, idx) => (
                      <div key={idx} className="minimal-card-inner p-4 rounded-xl border border-slate-800 space-y-1.5">
                        <h4 className="font-bold text-white text-xs sm:text-sm">{uc.title}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">{uc.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* PILLAR 5 */}
                {pillar.id === 'pillar5' && pillar.workApplications && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {pillar.workApplications.map((wa, idx) => (
                      <div key={idx} className="minimal-card-inner p-4 rounded-xl border border-slate-800 space-y-1.5">
                        <h4 className="font-bold text-white text-xs sm:text-sm">{wa.title}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">{wa.tasks}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* PILLAR 6 */}
                {pillar.id === 'pillar6' && (
                  <div className="space-y-4">
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
      )}
    </div>
  )
}
