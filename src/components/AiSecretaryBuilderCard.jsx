import React, { useState } from 'react'
import {
  Sparkles,
  Copy,
  Check,
  Briefcase,
  Utensils,
  GraduationCap,
  ShieldAlert,
  Brain,
  MessageSquare,
  Wand2,
  ChevronRight,
  UserCheck,
  Smile,
  ArrowRight,
  Lightbulb
} from 'lucide-react'
import { AI_SECRETARY_GUIDE } from '../data/workshopData'

export default function AiSecretaryBuilderCard({ fontSizes }) {
  const [activeStep, setActiveStep] = useState(1)
  const [selectedSec, setSelectedSec] = useState('office_sec')
  const [copiedKey, setCopiedKey] = useState(null)

  // Interactive Live Secretary Generator State
  const [userName, setUserName] = useState('สมชาย')
  const [userRole, setUserRole] = useState('คนทำงานออฟฟิศ / แม่บ้าน')
  const [secType, setSecType] = useState('ผู้ช่วยจัดการงานเอกสารและสรุปประชุม')
  const [secStyle, setSecStyle] = useState('สั้นกระชับ สรุปเป็นข้อๆ สุภาพเป็นทางการ')

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const { title, subtitle, threeSteps, readyMadeSecretaries, starterScript, confidenceTips } = AI_SECRETARY_GUIDE

  const iconMap = {
    Briefcase: <Briefcase className="w-5 h-5 text-blue-400" />,
    Utensils: <Utensils className="w-5 h-5 text-amber-400" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-emerald-400" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-rose-400" />,
    Brain: <Brain className="w-5 h-5 text-purple-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-sky-400" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-emerald-400" />
  }

  const generatedCustomSecretaryPrompt = `ช่วยทำหน้าที่เป็นเลขาประจำตัวฉันหน่อยนะ
1. ฉันชื่อ: ${userName || '[ชื่อของคุณ]'} (${userRole || '[งาน/สถานะ]'})
2. หน้าที่หลักของเธอ: ${secType || '[หน้าที่]'}
3. สไตล์ที่ฉันชอบ: ${secStyle || '[สไตล์ที่ชอบ]'}

ถ้าเข้าใจแล้ว แนะนำตัวเองสั้นๆ 1 ประโยค และบอกว่าพร้อมเริ่มช่วยงานแรกอะไรได้บ้าง`

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="minimal-card rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-3 bg-gradient-to-r from-[#0b1329] via-[#0e172e] to-[#0b1329]">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-800 uppercase tracking-wider">
            🤖 Level 3 • ทำได้ทุกคน ไม่ต้องเขียนโค้ด
          </span>
          <span className="text-xs text-slate-400">สำหรับพ่อแม่ พี่น้อง และคนทำงานทั่วไป</span>
        </div>
        <h2 className={`${fontSizes.heading} font-bold text-white`}>
          {title}
        </h2>
        <p className={`${fontSizes.base} text-slate-300 leading-relaxed max-w-3xl`}>
          {subtitle}
        </p>

        {/* 30-Second Instant Test Button */}
        <div className="pt-2">
          <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="text-xs font-bold text-purple-300 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>🚀 ข้อความเปิดตัวเลขาใน 30 วินาที (ก๊อปปี้ไปส่งใน ChatGPT / Gemini ได้ทันที)</span>
              </span>
              <p className="text-xs text-slate-300 font-mono">
                "{starterScript}"
              </p>
            </div>
            <button
              onClick={() => copyToClipboard(starterScript, 'starter-script')}
              className="px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 shrink-0 transition shadow-lg shadow-purple-600/30"
            >
              {copiedKey === 'starter-script' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              <span>{copiedKey === 'starter-script' ? 'คัดลอกแล้ว!' : 'ก๊อปปี้ไปลองใช้เลย'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3 Steps Overview */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-2">
          <UserCheck className="w-4 h-4 text-emerald-400" />
          <span>3 ขั้นตอนสอน AI ให้เป็นเลขาคู่ใจ (จำง่าย ไม่ซับซ้อน)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {threeSteps.map((s, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStep(idx + 1)}
              className={`minimal-card rounded-2xl p-5 border transition cursor-pointer flex flex-col justify-between ${
                activeStep === idx + 1
                  ? 'border-purple-500 bg-purple-950/20 shadow-md shadow-purple-950/50'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-purple-900/60 text-purple-300 flex items-center justify-center font-bold text-xs border border-purple-700 font-mono">
                    {s.step}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {s.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-800/80 text-[11px] text-purple-300 bg-[#060911] p-2.5 rounded-lg border border-slate-800">
                {s.example}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Ready-Made Secretaries */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>เลือกประเภทเลขาประจำตัว (4 บทบาทพร้อมใช้ ก๊อปปี้ไปสั่งได้เลย)</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {readyMadeSecretaries.map((sec) => (
            <div
              key={sec.id}
              className="minimal-card rounded-2xl p-5 border border-slate-800 space-y-4 flex flex-col justify-between hover:border-slate-700 transition"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-xl bg-slate-800 border border-slate-700">
                      {iconMap[sec.icon]}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {sec.title}
                      </h4>
                      <span className="text-[11px] text-slate-400">
                        {sec.target}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Setup Prompt Box */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-purple-300">1) คำสั่งสร้างและล็อกบทบาทเลขา:</span>
                    <button
                      onClick={() => copyToClipboard(sec.setupPrompt, `setup-${sec.id}`)}
                      className="px-2.5 py-1 bg-purple-950 hover:bg-purple-900 text-purple-200 border border-purple-800 rounded text-[10px] font-bold flex items-center space-x-1 transition"
                    >
                      {copiedKey === `setup-${sec.id}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedKey === `setup-${sec.id}` ? 'คัดลอกแล้ว!' : 'ก๊อปปี้คำสั่งนี้'}</span>
                    </button>
                  </div>
                  <p className="text-[11px] font-mono text-slate-300 bg-[#060911] p-3 rounded-lg border border-slate-800 leading-relaxed whitespace-pre-wrap">
                    {sec.setupPrompt}
                  </p>
                </div>

                {/* Usage Example */}
                <div className="space-y-1 text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <strong className="text-slate-200 block text-[11px]">💡 ตัวอย่างเวลาสั่งใช้งานจริง:</strong>
                  <p className="text-[11px] text-slate-300 bg-slate-900/50 p-2 rounded border border-slate-800/80 italic">
                    "{sec.exampleUsage}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Custom Secretary Generator */}
      <div className="minimal-card rounded-2xl p-6 border border-slate-800 space-y-4 bg-gradient-to-br from-[#0c1222] to-[#070b14]">
        <div className="flex items-center space-x-2">
          <Wand2 className="w-5 h-5 text-purple-400" />
          <h3 className="text-base font-bold text-white">
            🛠️ สร้างเลขา AI ในแบบของคุณเอง (Interactive Secretary Generator)
          </h3>
        </div>
        <p className="text-xs text-slate-300">
          กรอกข้อมูลสั้นๆ ด้านล่าง ระบบจะประกอบคำสั่งให้คุณก๊อปปี้ไปส่งให้ AI แนะนำตัวเป็นเลขาคู่ใจทันที
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">1. ชื่อเล่นของคุณ:</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="เช่น สมชาย, แม่นง, พี่บอย"
              className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">2. สถานะ / สิ่งที่คุณทำ:</label>
            <input
              type="text"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              placeholder="เช่น ทำงานจัดซื้อ, ดูแลผู้สูงอายุที่บ้าน, ค้าขายออนไลน์"
              className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">3. อยากให้เลขาช่วยเรื่องอะไรมากที่สุด:</label>
            <input
              type="text"
              value={secType}
              onChange={(e) => setSecType(e.target.value)}
              placeholder="เช่น ช่วยสรุปประชุม, คิดเมนูอาหารคลีน, ติวเลขให้ลูก"
              className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">4. สไตล์คำตอบที่ชอบ:</label>
            <input
              type="text"
              value={secStyle}
              onChange={(e) => setSecStyle(e.target.value)}
              placeholder="เช่น สั้นกระชับ สรุปเป็นตาราง ไม่ใช้ศัพท์ยาก"
              className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Result Prompt */}
        <div className="pt-3 border-t border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-400 flex items-center space-x-1.5">
              <Check className="w-4 h-4" />
              <span>คำสั่งที่สร้างเสร็จแล้ว (พร้อมก๊อปปี้ไปส่ง):</span>
            </span>
            <button
              onClick={() => copyToClipboard(generatedCustomSecretaryPrompt, 'custom-sec')}
              className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center space-x-1.5 transition shadow-sm"
            >
              {copiedKey === 'custom-sec' ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'custom-sec' ? 'คัดลอกเรียบร้อย!' : 'ก๊อปปี้คำสั่งนี้'}</span>
            </button>
          </div>
          <pre className="text-xs font-mono text-slate-200 bg-[#060911] p-3.5 rounded-xl border border-slate-800 whitespace-pre-wrap leading-relaxed">
            {generatedCustomSecretaryPrompt}
          </pre>
        </div>
      </div>

      {/* 3 Confidence Tips */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-2">
          <Smile className="w-4 h-4 text-purple-400" />
          <span>3 ข้อคิดสร้างความมั่นใจ: ทำไมใครๆ ก็มีเลขา AI ได้</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {confidenceTips.map((tip, idx) => (
            <div key={idx} className="minimal-card rounded-2xl p-5 border border-slate-800 space-y-2 bg-[#080d1a]">
              <div className="flex items-center space-x-2">
                {iconMap[tip.icon]}
                <h4 className="text-xs sm:text-sm font-bold text-white">
                  {tip.title}
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
