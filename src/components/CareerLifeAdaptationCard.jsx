import React, { useState } from 'react'
import {
  GraduationCap,
  Briefcase,
  Coins,
  ShieldCheck,
  Sparkles,
  Copy,
  Check,
  ArrowRight,
  Lightbulb,
  DollarSign,
  TrendingUp,
  Brain,
  Wrench,
  Compass
} from 'lucide-react'
import { AI_CAREER_LIFE_ADAPTATION } from '../data/workshopData'

export default function CareerLifeAdaptationCard({ fontSizes }) {
  const [activeTab, setActiveTab] = useState('monetization') // 'students' | 'professionals' | 'monetization' | 'mindset'
  const [copiedKey, setCopiedKey] = useState(null)

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const { targetGroups, monetizationWays, adaptationMindset } = AI_CAREER_LIFE_ADAPTATION

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="minimal-card rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 uppercase tracking-wider">
            💡 ใช้งานจริง & ต่อยอด
          </span>
          <span className="text-xs text-slate-400">สำหรับนักเรียน นักศึกษา คนทำงาน และสายสร้างรายได้</span>
        </div>
        <h2 className={`${fontSizes.heading} font-bold text-white`}>
          {AI_CAREER_LIFE_ADAPTATION.title}
        </h2>
        <p className={`${fontSizes.base} text-slate-300 leading-relaxed max-w-3xl`}>
          {AI_CAREER_LIFE_ADAPTATION.subtitle}
        </p>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800">
          <button
            onClick={() => setActiveTab('students')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition ${
              activeTab === 'students'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-sky-300" />
            <span>🎓 นักเรียน & นักศึกษา</span>
          </button>

          <button
            onClick={() => setActiveTab('professionals')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition ${
              activeTab === 'professionals'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Briefcase className="w-4 h-4 text-emerald-300" />
            <span>💼 คนทำงาน & มืออาชีพ</span>
          </button>

          <button
            onClick={() => setActiveTab('monetization')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition ${
              activeTab === 'monetization'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Coins className="w-4 h-4 text-amber-300" />
            <span>💰 6 ช่องทางหาเงินด้วย AI</span>
          </button>

          <button
            onClick={() => setActiveTab('mindset')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition ${
              activeTab === 'mindset'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Compass className="w-4 h-4 text-purple-300" />
            <span>🛡️ วิธีปรับตัว & ทักษะสำคัญ</span>
          </button>
        </div>
      </div>

      {/* TAB 1: STUDENTS */}
      {activeTab === 'students' && (
        <div className="space-y-6 animate-fadeIn">
          {targetGroups.filter(g => g.id === 'students').map((group) => (
            <div key={group.id} className="space-y-4">
              <div className="minimal-card-inner p-4 rounded-xl border border-sky-500/30 text-sky-200 text-xs sm:text-sm flex items-center space-x-3 bg-sky-950/40">
                <Lightbulb className="w-5 h-5 text-sky-400 shrink-0" />
                <span>{group.quote}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.useCases.map((uc, idx) => (
                  <div key={idx} className="minimal-card rounded-2xl p-5 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                        <span>{uc.title}</span>
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {uc.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span className="font-semibold text-sky-300">ตัวอย่าง Prompt พร้อมใช้:</span>
                        <button
                          onClick={() => copyToClipboard(uc.promptExample, `stu-${idx}`)}
                          className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded text-[10px] font-bold flex items-center space-x-1"
                        >
                          {copiedKey === `stu-${idx}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedKey === `stu-${idx}` ? 'คัดลอกแล้ว!' : 'ก๊อปปี้'}</span>
                        </button>
                      </div>
                      <p className="text-[11px] font-mono text-slate-300 bg-[#060911] p-3 rounded-lg border border-slate-800 leading-relaxed whitespace-pre-wrap">
                        {uc.promptExample}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: PROFESSIONALS */}
      {activeTab === 'professionals' && (
        <div className="space-y-6 animate-fadeIn">
          {targetGroups.filter(g => g.id === 'professionals').map((group) => (
            <div key={group.id} className="space-y-4">
              <div className="minimal-card-inner p-4 rounded-xl border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm flex items-center space-x-3 bg-emerald-950/40">
                <Lightbulb className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{group.quote}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.useCases.map((uc, idx) => (
                  <div key={idx} className="minimal-card rounded-2xl p-5 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                        <span>{uc.title}</span>
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {uc.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span className="font-semibold text-emerald-300">ตัวอย่าง Prompt พร้อมใช้:</span>
                        <button
                          onClick={() => copyToClipboard(uc.promptExample, `pro-${idx}`)}
                          className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded text-[10px] font-bold flex items-center space-x-1"
                        >
                          {copiedKey === `pro-${idx}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedKey === `pro-${idx}` ? 'คัดลอกแล้ว!' : 'ก๊อปปี้'}</span>
                        </button>
                      </div>
                      <p className="text-[11px] font-mono text-slate-300 bg-[#060911] p-3 rounded-lg border border-slate-800 leading-relaxed whitespace-pre-wrap">
                        {uc.promptExample}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: MONETIZATION & BUSINESS */}
      {activeTab === 'monetization' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {monetizationWays.map((way) => (
              <div key={way.id} className="minimal-card rounded-2xl p-5 border border-slate-800 space-y-3.5 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-amber-950 text-amber-400 flex items-center justify-center font-bold text-xs border border-amber-800/80 font-mono">
                      {way.number}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
                      {way.tag}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white leading-snug">
                    {way.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {way.desc}
                  </p>

                  <div className="p-3 rounded-xl bg-[#060911] border border-slate-800 space-y-1.5 text-xs">
                    <div className="text-slate-400">
                      <strong className="text-white block mb-0.5">💼 วิธีหาเงินจริง:</strong>
                      {way.howToEarn}
                    </div>
                    <div className="text-slate-400 pt-1 border-t border-slate-800/80">
                      <span className="text-sky-400 font-semibold">🛠️ เครื่องมือ:</span> {way.tools}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">รายได้โดยประมาณ:</span>
                  <span className="font-bold text-emerald-400 font-mono bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800/60">
                    {way.incomeRange}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: ADAPTATION MINDSET */}
      {activeTab === 'mindset' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {adaptationMindset.map((item, idx) => (
              <div key={idx} className="minimal-card rounded-2xl p-6 border border-slate-800 space-y-3">
                <h3 className="text-base font-bold text-white flex items-center space-x-2">
                  <span className="text-purple-400">★</span>
                  <span>{item.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="minimal-card-inner rounded-2xl p-6 border border-slate-800 text-center space-y-2 bg-[#060911]/80">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block font-bold">
              💡 ข้อคิดสำคัญสำหรับการเติบโต
            </span>
            <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
              "ในยุคนี้ คนที่เก่งที่สุดไม่ใช่คนที่รู้ทุกอย่าง แต่คือคนที่ <span className="text-purple-300 underline underline-offset-4 decoration-purple-500/60">'ตั้งคำถามเป็น และกล้าให้ AI ช่วยทำงาน'</span>"
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
