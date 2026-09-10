import React, { useState } from 'react'
import {
  Cpu,
  BarChart3,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Car,
  Rocket,
  ShieldCheck,
  Zap
} from 'lucide-react'
import { AI_HIERARCHY_COMPARISON } from '../data/workshopData'

export default function AiHierarchyCard({ fontSizes }) {
  const [selectedId, setSelectedId] = useState('genai')

  const getIcon = (id) => {
    switch (id) {
      case 'ai':
        return <Cpu className="w-5 h-5" />
      case 'ml':
        return <BarChart3 className="w-5 h-5" />
      case 'dl':
        return <Layers className="w-5 h-5" />
      case 'genai':
        return <Sparkles className="w-5 h-5" />
      default:
        return <Cpu className="w-5 h-5" />
    }
  }

  const selectedItem = AI_HIERARCHY_COMPARISON.items.find(item => item.id === selectedId) || AI_HIERARCHY_COMPARISON.items[3]

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-[#131b2e] p-6 rounded-2xl border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Concept พื้นฐานที่ต้องรู้</span>
            </div>
            <h2 className={`${fontSizes?.heading || 'text-2xl'} font-bold text-slate-100 flex items-center gap-2`}>
              <span>{AI_HIERARCHY_COMPARISON.title}</span>
            </h2>
            <p className={`${fontSizes?.text || 'text-sm'} text-slate-400 mt-1`}>
              {AI_HIERARCHY_COMPARISON.subtitle}
            </p>
          </div>
          <div className="bg-[#090d16] px-4 py-3 rounded-xl border border-slate-800 text-xs text-slate-300 max-w-sm">
            <span className="font-semibold text-sky-400 block mb-1">💡 ภาพรวมแบบตุ๊กตาแม่ลูกดก:</span>
            <span>AI (นอกสุด) ➔ ML ➔ DL ➔ GenAI (ในสุดสร้างของใหม่)</span>
          </div>
        </div>
      </div>

      {/* Visual Nested Diagram & Interactive Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Visual Nested Layers Selector */}
        <div className="lg:col-span-5 bg-[#131b2e] p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`${fontSizes?.subheading || 'text-base'} font-bold text-slate-200 flex items-center gap-2`}>
                <span>🪆 ลำดับชั้นความสัมพันธ์</span>
              </h3>
              <span className="text-xs text-slate-400">คลิกเพื่อดูรายละเอียด</span>
            </div>

            {/* Nested Stack Cards */}
            <div className="space-y-2.5">
              {AI_HIERARCHY_COMPARISON.items.map((item, idx) => {
                const isSelected = selectedId === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-start justify-between ${
                      isSelected
                        ? 'bg-sky-950/40 border-sky-500/50 shadow-md shadow-sky-950/20'
                        : 'bg-[#090d16] border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
                    }`}
                    style={{
                      marginLeft: `${idx * 8}px`,
                      width: `calc(100% - ${idx * 8}px)`
                    }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg mt-0.5 ${
                        isSelected
                          ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {getIcon(item.id)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`font-bold ${fontSizes?.text || 'text-sm'} ${
                            isSelected ? 'text-sky-300' : 'text-slate-200'
                          }`}>
                            {item.name}
                          </span>
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                            {item.thName}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                          {item.scope}
                        </p>
                      </div>
                    </div>
                    {isSelected && (
                      <span className="text-xs px-2 py-0.5 bg-sky-500/20 text-sky-300 rounded font-semibold border border-sky-500/30 whitespace-nowrap">
                        กำลังดู
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Bottom Analogy Hint */}
          <div className="mt-5 p-3 bg-[#090d16] rounded-xl border border-slate-800/80 text-xs text-slate-400 flex items-center gap-2.5">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <span>GenAI ไม่ได้มาแทนที่ AI เดิม แต่เป็น <strong>กิ่งก้านที่ล้ำที่สุด</strong> ของสาย Deep Learning</span>
          </div>
        </div>

        {/* Right Column: Deep Dive into Selected Level */}
        <div className="lg:col-span-7 bg-[#131b2e] p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Title & Level Badge */}
            <div className="flex items-start justify-between flex-wrap gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-semibold text-sky-400 tracking-wide uppercase block">
                  {selectedItem.level}
                </span>
                <h3 className={`${fontSizes?.heading || 'text-xl'} font-bold text-slate-100 mt-0.5 flex items-center gap-2`}>
                  <span>{selectedItem.name}</span>
                  <span className="text-sm font-normal text-slate-400">({selectedItem.thName})</span>
                </h3>
              </div>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 rounded-full">
                {selectedItem.badge}
              </span>
            </div>

            {/* Vehicle Analogy Card */}
            <div className="bg-[#090d16] p-4 rounded-xl border border-slate-800">
              <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 mb-1.5">
                <Car className="w-3.5 h-3.5" />
                <span>เปรียบเทียบกับยานพาหนะ (เข้าใจทันที):</span>
              </div>
              <p className={`${fontSizes?.text || 'text-sm'} text-slate-300`}>
                {selectedItem.analogy}
              </p>
            </div>

            {/* Simple Definition */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                📌 นิยามภาษาคนเข้าใจง่าย
              </h4>
              <p className={`${fontSizes?.text || 'text-sm'} text-slate-200 leading-relaxed`}>
                {selectedItem.simpleDef}
              </p>
            </div>

            {/* How it works */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                ⚙️ กลไกการทำงาน
              </h4>
              <p className={`${fontSizes?.text || 'text-sm'} text-slate-300 leading-relaxed bg-[#090d16] p-3 rounded-lg border border-slate-800/80`}>
                {selectedItem.howItWorks}
              </p>
            </div>

            {/* Real World Examples */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                🌟 ตัวอย่างการใช้งานจริงในชีวิตประจำวัน
              </h4>
              <div className="space-y-1.5">
                {selectedItem.examples.map((ex, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Takeaway */}
          <div className="mt-5 pt-3 border-t border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-slate-300">🎯 สรุปใจความสำคัญ:</span>
              <span className="text-sky-400 font-medium">{selectedItem.keyTakeaway}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Table */}
      <div className="bg-[#131b2e] p-6 rounded-2xl border border-slate-800">
        <h3 className={`${fontSizes?.subheading || 'text-lg'} font-bold text-slate-200 mb-3 flex items-center gap-2`}>
          <span>📊 ตารางเปรียบเทียบความแตกต่าง 4 ระดับ</span>
        </h3>
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400 bg-[#090d16]">
                <th className="p-3 font-semibold rounded-tl-lg">คำย่อ / ชื่อเต็ม</th>
                <th className="p-3 font-semibold">ความหมาย</th>
                <th className="p-3 font-semibold">หน้าที่หลัก</th>
                <th className="p-3 font-semibold">วิธีการทำงาน</th>
                <th className="p-3 font-semibold rounded-tr-lg">ตัวอย่างจริง</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {AI_HIERARCHY_COMPARISON.quickTable.map((row, idx) => (
                <tr
                  key={idx}
                  onClick={() => setSelectedId(row.name.toLowerCase())}
                  className={`hover:bg-slate-800/40 cursor-pointer transition ${
                    selectedId === row.name.toLowerCase() ? 'bg-sky-950/20' : ''
                  }`}
                >
                  <td className="p-3 font-bold text-sky-300 whitespace-nowrap">
                    <div>{row.name}</div>
                    <div className="text-[11px] font-normal text-slate-400">{row.fullName}</div>
                  </td>
                  <td className="p-3 text-slate-300">{row.meaning}</td>
                  <td className="p-3 text-slate-300">{row.role}</td>
                  <td className="p-3 text-slate-400">{row.action}</td>
                  <td className="p-3 text-slate-300">{row.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Punchline Card */}
      <div className="p-4 bg-sky-950/30 border border-sky-500/30 rounded-2xl flex items-center space-x-3">
        <Sparkles className="w-5 h-5 text-sky-400 shrink-0" />
        <p className={`${fontSizes?.text || 'text-sm'} text-sky-200 font-medium leading-relaxed`}>
          {AI_HIERARCHY_COMPARISON.summaryPunchline}
        </p>
      </div>
    </div>
  )
}
