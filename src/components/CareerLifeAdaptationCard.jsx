import React, { useState } from 'react'
import {
  Home,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Sparkles,
  Copy,
  Check,
  Lightbulb,
  Compass,
  HeartPulse,
  Utensils,
  ChevronRight,
  ShieldAlert
} from 'lucide-react'
import { AI_CAREER_LIFE_ADAPTATION } from '../data/workshopData'

export default function CareerLifeAdaptationCard({ fontSizes }) {
  const [activeTab, setActiveTab] = useState('daily_home') // 'daily_home' | 'students_study' | 'work_office' | 'health_safety' | 'mindset'
  const [copiedKey, setCopiedKey] = useState(null)

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const { title, subtitle, lifePillars, adaptationMindset } = AI_CAREER_LIFE_ADAPTATION

  const tabIcons = {
    daily_home: <Utensils className="w-4 h-4 text-amber-400" />,
    students_study: <GraduationCap className="w-4 h-4 text-sky-400" />,
    work_office: <Briefcase className="w-4 h-4 text-emerald-400" />,
    health_safety: <ShieldAlert className="w-4 h-4 text-rose-400" />,
    mindset: <Compass className="w-4 h-4 text-purple-400" />
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="minimal-card rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 uppercase tracking-wider">
            💡 ใช้งานจริงในชีวิตประจำวัน
          </span>
          <span className="text-xs text-slate-400">เห็นภาพชัดเจนว่าทำไมคนธรรมดาถึงต้องเริ่มใช้ AI</span>
        </div>
        <h2 className={`${fontSizes.heading} font-bold text-white`}>
          {title}
        </h2>
        <p className={`${fontSizes.base} text-slate-300 leading-relaxed max-w-3xl`}>
          {subtitle}
        </p>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800">
          {lifePillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(pillar.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition ${
                activeTab === pillar.id
                  ? 'bg-slate-800 text-white border border-slate-600 shadow-sm'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800/80'
              }`}
            >
              {tabIcons[pillar.id]}
              <span>{pillar.title.split(' ')[1]} {pillar.title.split(' ')[2]}</span>
            </button>
          ))}

          <button
            onClick={() => setActiveTab('mindset')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition ${
              activeTab === 'mindset'
                ? 'bg-purple-900/60 text-purple-200 border border-purple-500 shadow-sm'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800/80'
            }`}
          >
            {tabIcons.mindset}
            <span>🧭 วิธีปรับตัว & ทักษะสำคัญ</span>
          </button>
        </div>
      </div>

      {/* LIFE PILLAR TABS */}
      {lifePillars.map((pillar) => (
        activeTab === pillar.id && (
          <div key={pillar.id} className="space-y-6 animate-fadeIn">
            {/* Pillar Header Card */}
            <div className="minimal-card rounded-2xl p-5 border border-slate-800 bg-gradient-to-r from-slate-900 via-[#0d1322] to-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <span>{pillar.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {pillar.quote}
                </p>
              </div>
            </div>

            {/* Cases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pillar.cases.map((c, idx) => (
                <div
                  key={idx}
                  className="minimal-card rounded-2xl p-5 border border-slate-800 space-y-3 flex flex-col justify-between hover:border-slate-700 transition"
                >
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                      <span className="text-emerald-400">●</span>
                      <span>{c.title}</span>
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-semibold text-emerald-400">ตัวอย่างคำสั่ง (Prompt):</span>
                      <button
                        onClick={() => copyToClipboard(c.prompt, `${pillar.id}-${idx}`)}
                        className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded text-[10px] font-bold flex items-center space-x-1"
                      >
                        {copiedKey === `${pillar.id}-${idx}` ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        <span>{copiedKey === `${pillar.id}-${idx}` ? 'คัดลอกแล้ว!' : 'ก๊อปปี้'}</span>
                      </button>
                    </div>
                    <p className="text-[11px] font-mono text-slate-300 bg-[#060911] p-3 rounded-lg border border-slate-800 leading-relaxed whitespace-pre-wrap">
                      {c.prompt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ))}

      {/* ADAPTATION MINDSET TAB */}
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

          <div className="minimal-card-inner rounded-2xl p-6 border border-purple-900/50 text-center space-y-2 bg-[#060911]/90">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block font-bold">
              💡 ข้อคิดสำคัญสำหรับทุกคน
            </span>
            <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
              "AI ไม่ได้มาแทนคนเราหรอกครับ... แต่ <span className="text-purple-300 underline underline-offset-4 decoration-purple-500/60">'คนที่ใช้ AI เป็น'</span> จะมีชีวิตที่สบายขึ้น เหนื่อยน้อยลง และดูแลครอบครัวได้ดียิ่งขึ้น"
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
