import React, { useState } from 'react'
import {
  HeartPulse,
  ShieldAlert,
  Home,
  GraduationCap,
  Coins,
  Smile,
  Copy,
  Check,
  Sparkles,
  Search,
  ShieldCheck,
  Lightbulb,
  AlertTriangle,
  ArrowUpRight,
  Filter
} from 'lucide-react'
import { FAMILY_DAILY_AI_KNOWLEDGE } from '../data/workshopData'

export default function FamilyAiKnowledgeCard({ fontSizes }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedKey, setCopiedKey] = useState(null)

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'health_elderly':
        return <HeartPulse className="w-4 h-4" />
      case 'anti_scam':
        return <ShieldAlert className="w-4 h-4" />
      case 'family_life':
        return <Home className="w-4 h-4" />
      case 'kids_study':
        return <GraduationCap className="w-4 h-4" />
      case 'smart_finance':
        return <Coins className="w-4 h-4" />
      case 'relationship':
        return <Smile className="w-4 h-4" />
      default:
        return <Sparkles className="w-4 h-4" />
    }
  }

  // Filter topics
  const allTopics = FAMILY_DAILY_AI_KNOWLEDGE.categories.flatMap(cat =>
    cat.topics.map(t => ({ ...t, categoryId: cat.id, categoryName: cat.name }))
  )

  const filteredTopics = allTopics.filter(topic => {
    const matchesCategory = selectedCategory === 'all' || topic.categoryId === selectedCategory
    const matchesSearch =
      searchQuery.trim() === '' ||
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.scenario.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.howAiHelps.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-[#131b2e] p-6 rounded-2xl border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold rounded-full mb-3">
              <HeartPulse className="w-3.5 h-3.5" />
              <span>ใช้จริงในบ้าน & ชีวิตประจำวัน</span>
            </div>
            <h2 className={`${fontSizes?.heading || 'text-2xl'} font-bold text-slate-100`}>
              {FAMILY_DAILY_AI_KNOWLEDGE.title}
            </h2>
            <p className={`${fontSizes?.text || 'text-sm'} text-slate-400 mt-1 max-w-2xl`}>
              {FAMILY_DAILY_AI_KNOWLEDGE.subtitle}
            </p>
          </div>
          <div className="bg-[#090d16] px-4 py-3 rounded-xl border border-slate-800 text-xs text-slate-300">
            <span className="font-semibold text-rose-400 block mb-1">💡 เคล็ดลับการสอนคนในบ้าน:</span>
            <span>เริ่มจากปัญหาจริงที่เขาเจอ แล้วเปิดแชท AI ทำให้ดูสดๆ ทันที</span>
          </div>
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="bg-[#131b2e] p-4 rounded-2xl border border-slate-800 space-y-3">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหา เช่น ยา, เบาหวาน, LINE ปลอม, การบ้าน, เที่ยวครอบครัว, ล้างคราบ..."
              className="w-full pl-10 pr-4 py-2 bg-[#090d16] border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-rose-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                ล้าง
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 custom-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition flex items-center space-x-1.5 ${
              selectedCategory === 'all'
                ? 'bg-rose-600 text-white font-bold shadow-sm'
                : 'bg-[#090d16] text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <span>🌟 ทั้งหมด ({allTopics.length})</span>
          </button>

          {FAMILY_DAILY_AI_KNOWLEDGE.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition flex items-center space-x-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-rose-600 text-white font-bold shadow-sm'
                  : 'bg-[#090d16] text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.name} ({cat.topics.length})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filteredTopics.map((topic, idx) => {
          const promptKey = `family-${topic.categoryId}-${idx}`
          return (
            <div
              key={idx}
              className="bg-[#131b2e] p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition"
            >
              <div className="space-y-3">
                {/* Topic Header */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-semibold text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20 inline-block mb-1.5">
                      {topic.categoryName}
                    </span>
                    <h3 className={`${fontSizes?.subheading || 'text-base'} font-bold text-slate-100 leading-snug`}>
                      {topic.title}
                    </h3>
                  </div>
                </div>

                {/* Scenario / Pain Point */}
                <div className="p-3 bg-[#090d16] rounded-xl border border-slate-800/80 text-xs text-slate-300">
                  <span className="font-semibold text-amber-400 block mb-1">
                    📌 สถานการณ์จริงในบ้าน:
                  </span>
                  <span>{topic.scenario}</span>
                </div>

                {/* How AI Helps */}
                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-sky-400 block mb-0.5">
                    🤖 AI ช่วยอย่างไร:
                  </span>
                  <span>{topic.howAiHelps}</span>
                </div>

                {/* Prompt Box */}
                <div className="p-3 bg-[#090d16] rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                      <span>Prompt พร้อมใช้ (ก๊อปปี้ไปวางได้เลย):</span>
                    </span>
                    <button
                      onClick={() => copyToClipboard(topic.prompt, promptKey)}
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center space-x-1 transition ${
                        copiedKey === promptKey
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                      }`}
                    >
                      {copiedKey === promptKey ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>คัดลอกแล้ว!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>ก๊อปปี้ Prompt</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="text-xs font-mono text-slate-300 bg-[#060911] p-3 rounded-lg border border-slate-800/80 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto custom-scrollbar">
                    {topic.prompt}
                  </pre>
                </div>

                {/* Tip */}
                {topic.tip && (
                  <div className="p-2.5 bg-sky-950/20 rounded-lg border border-sky-500/20 text-xs text-sky-300 flex items-start space-x-2">
                    <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>คำแนะนำ:</strong> {topic.tip}</span>
                  </div>
                )}
              </div>

              {/* Tags Footer */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {topic.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 bg-slate-800/80 rounded-md text-slate-400 border border-slate-700/60">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {filteredTopics.length === 0 && (
        <div className="bg-[#131b2e] p-8 rounded-2xl border border-slate-800 text-center text-slate-400">
          <Search className="w-8 h-8 mx-auto mb-2 text-slate-500" />
          <p className="text-sm font-semibold text-slate-300">ไม่พบหัวข้อที่ตรงกับคำค้นหา "{searchQuery}"</p>
          <p className="text-xs mt-1">ลองค้นหาด้วยคำอื่น หรือกดปุ่ม "ทั้งหมด" ด้านบน</p>
        </div>
      )}

      {/* Golden Rules for Family AI Safety */}
      <div className="bg-[#131b2e] p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center space-x-2 text-amber-400">
          <ShieldCheck className="w-5 h-5" />
          <h3 className={`${fontSizes?.subheading || 'text-lg'} font-bold text-white`}>
            🛡️ 4 กฎเหล็กใช้ AI ในบ้านอย่างปลอดภัย (Safety First)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          แนะนำให้ย้ำเตือนกับคนในครอบครัวทุกครั้งก่อนเริ่มใช้งาน เพื่อความปลอดภัยสูงสุด
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
          {FAMILY_DAILY_AI_KNOWLEDGE.goldenRules.map((ruleItem, rIdx) => (
            <div key={rIdx} className="bg-[#090d16] p-4 rounded-xl border border-slate-800 space-y-1.5">
              <h4 className="font-bold text-slate-200 text-xs sm:text-sm text-amber-300">
                {ruleItem.rule}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {ruleItem.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
