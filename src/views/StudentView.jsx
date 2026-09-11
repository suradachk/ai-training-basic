import React, { useState } from 'react'
import {
  BookOpen,
  Wand2,
  MessageSquare,
  Rocket,
  Dice5,
  Bug,
  Sparkles,
  TrendingUp,
  Zap,
  Check,
  Copy,
  HeartPulse,
  Layers
} from 'lucide-react'
import { TOPICS_DETAIL, PROMPT_TEMPLATES, PROJECT_IDEAS } from '../data/workshopData'
import FamilyAiKnowledgeCard from '../components/FamilyAiKnowledgeCard'
import AiOverviewSection from '../components/AiOverviewSection'

export default function StudentView({ fontSizes }) {
  // Top-level Session Switcher: 'session1' | 'session2' | 'family'
  const [activeSession, setActiveSession] = useState('session1')

  // Sub-tab under Session 2
  const [session2Tab, setSession2Tab] = useState('notes') // 'notes', 'builder', 'prompts', 'projects', 'debug'
  const [copiedKey, setCopiedKey] = useState(null)

  // Interactive Prompt Builder
  const [promptRole, setPromptRole] = useState('ติวเตอร์ฟิสิกส์สายฮา')
  const [promptTask, setPromptTask] = useState('อธิบายกฎแรงดึงดูดของนิวตัน')
  const [promptContext, setPromptContext] = useState('สำหรับเด็ก ม.ต้น ที่ชอบเล่นเกม Minecraft')
  const [promptFormat, setPromptFormat] = useState('ตารางสรุป 3 แถว พร้อมมุกสั้นๆ')

  // Demo Box
  const [demoFoodResult, setDemoFoodResult] = useState(null)
  const [isFoodSpinning, setIsFoodSpinning] = useState(false)

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const spinFood = () => {
    setIsFoodSpinning(true)
    setDemoFoodResult('กำลังหมุนวงล้อ...')
    setTimeout(() => {
      const foods = [
        'กะเพราหมูกรอบไข่ดาว 🍳',
        'ส้มตำไก่ย่างข้าวเหนียว 🍗',
        'ข้าวมันไก่ตอนพิเศษ 🍚',
        'ชาบูหม้อไฟชีส 🍲',
        'ก๋วยเตี๋ยวต้มยำน้ำข้น 🍜',
        'ข้าวผัดปูจานยักษ์ 🦀'
      ]
      const pick = foods[Math.floor(Math.random() * foods.length)]
      setDemoFoodResult(pick)
      setIsFoodSpinning(false)
    }, 600)
  }

  const generatedPrompt = `[Role] คุณคือ ${promptRole}\n[Task] ช่วย ${promptTask}\n[Context] ${promptContext}\n[Format] แสดงผลลัพธ์เป็น ${promptFormat}`

  return (
    <div className="space-y-6">
      {/* 🧭 Top-Level Session Navigation */}
      <div className="minimal-card rounded-2xl p-3 sm:p-4 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider hidden md:inline">
            เลือก Session การเรียน:
          </span>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto custom-scrollbar w-full sm:w-auto">
          <button
            onClick={() => setActiveSession('session1')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition shadow-sm whitespace-nowrap ${
              activeSession === 'session1'
                ? 'bg-sky-600 text-white shadow-sky-600/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4 text-sky-300" />
            <span>Session 1: 6 เสาหลัก AI (เรียนรู้ก่อนลงมือ)</span>
          </button>

          <button
            onClick={() => setActiveSession('session2')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition shadow-sm whitespace-nowrap ${
              activeSession === 'session2'
                ? 'bg-sky-600 text-white shadow-sky-600/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Rocket className="w-4 h-4 text-emerald-400" />
            <span>Session 2: เวิร์กช็อปสร้างเว็บ 2 ชม. (Hands-on)</span>
          </button>

          <button
            onClick={() => setActiveSession('family')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition shadow-sm whitespace-nowrap ${
              activeSession === 'family'
                ? 'bg-rose-600 text-white shadow-rose-600/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <HeartPulse className="w-4 h-4 text-rose-300" />
            <span>คลังความรู้ AI ในครอบครัว 🏠</span>
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 🌟 SESSION 1: 6 CORE PILLARS OVERVIEW                    */}
      {/* ======================================================== */}
      {activeSession === 'session1' && (
        <div className="space-y-6 animate-fadeIn">
          <AiOverviewSection fontSizes={fontSizes} initialMode="slides" />
        </div>
      )}

      {/* ======================================================== */}
      {/* 🚀 SESSION 2: 2-HOUR HANDS-ON WORKSHOP                   */}
      {/* ======================================================== */}
      {activeSession === 'session2' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Sub-Tab Navigation for Session 2 */}
          <div className="flex items-center space-x-1 bg-[#131b2e] p-1 rounded-xl border border-slate-800 text-xs sm:text-sm font-medium overflow-x-auto custom-scrollbar">
            <button
              onClick={() => setSession2Tab('notes')}
              className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                session2Tab === 'notes'
                  ? 'bg-sky-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>1. สรุปบทเรียน 5 หัวข้อ</span>
            </button>

            <button
              onClick={() => setSession2Tab('builder')}
              className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                session2Tab === 'builder'
                  ? 'bg-sky-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Wand2 className="w-4 h-4" />
              <span>2. เครื่องมือสร้าง Prompt (RTCF)</span>
            </button>

            <button
              onClick={() => setSession2Tab('prompts')}
              className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                session2Tab === 'prompts'
                  ? 'bg-sky-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>3. คลัง Prompt พร้อมใช้</span>
            </button>

            <button
              onClick={() => setSession2Tab('projects')}
              className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                session2Tab === 'projects'
                  ? 'bg-sky-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Rocket className="w-4 h-4" />
              <span>4. โจทย์ Mini Project 15 นาที</span>
            </button>

            <button
              onClick={() => setSession2Tab('debug')}
              className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                session2Tab === 'debug'
                  ? 'bg-sky-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Bug className="w-4 h-4" />
              <span>5. วิธีแก้ Error (F12)</span>
            </button>
          </div>

          {/* TAB 1: WORKSHOP NOTES */}
          {session2Tab === 'notes' && (
            <div className="space-y-6">
              <div className="minimal-card rounded-2xl p-6 space-y-2">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                  สรุปเนื้อหาบทเรียนสำหรับผู้เรียน
                </span>
                <h2 className={`${fontSizes.heading} font-bold text-white tracking-tight`}>
                  ทบทวน 5 หัวข้อหลัก (อ่านง่าย มีตัวอย่างจริง)
                </h2>
                <p className={`${fontSizes.base} text-slate-300 leading-relaxed`}>
                  อ่านสรุปเนื้อหา ดูตัวอย่างจริง และทำความเข้าใจหลักการทำงานของ AI และ Antigravity CLI
                </p>
              </div>

              <div className="space-y-6">
                {TOPICS_DETAIL.map((topic) => (
                  <div key={topic.id} className="minimal-card rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center space-x-2.5">
                        <span className="w-7 h-7 rounded bg-slate-800 text-emerald-400 flex items-center justify-center font-bold text-xs border border-slate-700">
                          0{topic.id}
                        </span>
                        <h3 className={`${fontSizes.title} font-bold text-white`}>{topic.title}</h3>
                      </div>
                      <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded">⏱️ {topic.time}</span>
                    </div>

                    <div className="minimal-card-inner p-3.5 rounded-xl text-slate-200 text-sm leading-relaxed">
                      💡 <strong>เปรียบเทียบ:</strong> {topic.analogy.text}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
                      {topic.subtopics.map((sub, sIdx) => (
                        <div key={sIdx} className="minimal-card-inner p-4 rounded-xl space-y-2 flex flex-col justify-between">
                          <div className="space-y-1.5">
                            <h4 className="font-bold text-white text-xs sm:text-sm">{sIdx + 1}. {sub.title}</h4>
                            <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed">{sub.desc}</p>
                            {sub.example && (
                              <div className="p-2.5 rounded bg-[#060911] border border-slate-800 text-[11px] text-slate-300">
                                <span className="font-semibold text-sky-300 block mb-0.5">💡 ตัวอย่าง:</span>
                                {sub.example}
                              </div>
                            )}
                          </div>
                          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                            🔑 {sub.keyTakeaway}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: PROMPT BUILDER */}
          {session2Tab === 'builder' && (
            <div className="space-y-5">
              <div className="minimal-card rounded-2xl p-6 space-y-2">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                  เครื่องมือช่วยฝึกเขียน Prompt
                </span>
                <h2 className={`${fontSizes.heading} font-bold text-white tracking-tight`}>
                  ทดลองสร้าง Prompt ตามสูตร R-T-C-F
                </h2>
                <p className={`${fontSizes.base} text-slate-300 leading-relaxed`}>
                  ลองพิมพ์กรอกข้อมูล 4 ช่อง แล้วกดก๊อปปี้ไปวางใน ChatGPT, Gemini หรือ Antigravity ได้ทันที
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="minimal-card rounded-2xl p-6 space-y-3.5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    กรอกข้อมูล 4 ช่อง
                  </span>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-300 font-medium flex items-center space-x-1.5">
                      <span className="w-4 h-4 rounded bg-slate-800 text-slate-300 text-[10px] flex items-center justify-center font-bold border border-slate-700">R</span>
                      <span>Role (บทบาท):</span>
                    </label>
                    <input
                      type="text"
                      value={promptRole}
                      onChange={(e) => setPromptRole(e.target.value)}
                      className="w-full bg-[#060911] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-300 font-medium flex items-center space-x-1.5">
                      <span className="w-4 h-4 rounded bg-slate-800 text-slate-300 text-[10px] flex items-center justify-center font-bold border border-slate-700">T</span>
                      <span>Task (งานที่สั่ง):</span>
                    </label>
                    <input
                      type="text"
                      value={promptTask}
                      onChange={(e) => setPromptTask(e.target.value)}
                      className="w-full bg-[#060911] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-300 font-medium flex items-center space-x-1.5">
                      <span className="w-4 h-4 rounded bg-slate-800 text-slate-300 text-[10px] flex items-center justify-center font-bold border border-slate-700">C</span>
                      <span>Context (บริบท/เงื่อนไข):</span>
                    </label>
                    <input
                      type="text"
                      value={promptContext}
                      onChange={(e) => setPromptContext(e.target.value)}
                      className="w-full bg-[#060911] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-300 font-medium flex items-center space-x-1.5">
                      <span className="w-4 h-4 rounded bg-slate-800 text-slate-300 text-[10px] flex items-center justify-center font-bold border border-slate-700">F</span>
                      <span>Format (รูปแบบผลลัพธ์):</span>
                    </label>
                    <input
                      type="text"
                      value={promptFormat}
                      onChange={(e) => setPromptFormat(e.target.value)}
                      className="w-full bg-[#060911] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="minimal-card rounded-2xl p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      ผลลัพธ์ Prompt สำเร็จรูป
                    </span>
                    <div className="p-4 rounded-xl bg-[#060911] border border-slate-800 text-xs font-mono text-slate-200 leading-relaxed whitespace-pre-line min-h-[160px] select-all">
                      {generatedPrompt}
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(generatedPrompt, 'student-builder')}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center space-x-2 transition shadow-sm"
                  >
                    {copiedKey === 'student-builder' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'student-builder' ? 'ก๊อปปี้เรียบร้อยแล้ว!' : 'ก๊อปปี้ไปส่ง AI'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROMPT TEMPLATES */}
          {session2Tab === 'prompts' && (
            <div className="space-y-5">
              <div className="minimal-card rounded-2xl p-6 space-y-2">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                  คลังคำสั่งพร้อมใช้
                </span>
                <h2 className={`${fontSizes.heading} font-bold text-white tracking-tight`}>
                  Prompt สำเร็จรูป (ก๊อปปี้ 1 คลิก)
                </h2>
                <p className={`${fontSizes.base} text-slate-300 leading-relaxed`}>
                  กดก๊อปปี้คำสั่ง แล้วนำไปเปลี่ยนข้อความในวงเล็บ [ ] เพื่อสั่ง AI ทำงานได้ทันที
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROMPT_TEMPLATES.map((tmpl, idx) => (
                  <div key={idx} className="minimal-card rounded-2xl p-5 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {tmpl.category}
                        </span>
                        <span className="text-xs font-mono text-slate-500">#{idx + 1}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white">{tmpl.title}</h4>
                      <div className="p-3 rounded-lg bg-[#060911] border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed whitespace-pre-line select-all">
                        {tmpl.prompt}
                      </div>
                    </div>

                    <div className="pt-1 flex justify-end">
                      <button
                        onClick={() => copyToClipboard(tmpl.prompt, `tmpl-${idx}`)}
                        className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center space-x-1.5 transition border border-slate-700"
                      >
                        {copiedKey === `tmpl-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedKey === `tmpl-${idx}` ? 'ก๊อปปี้แล้ว' : 'ก๊อปปี้ Prompt'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: MINI PROJECTS */}
          {session2Tab === 'projects' && (
            <div className="space-y-5">
              <div className="minimal-card rounded-2xl p-6 space-y-2">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                  สร้างผลงานจริงในคลาส
                </span>
                <h2 className={`${fontSizes.heading} font-bold text-white tracking-tight`}>
                  โจทย์ Mini Project 15 นาที
                </h2>
                <p className={`${fontSizes.base} text-slate-300 leading-relaxed`}>
                  เลือก 1 โจทย์ที่ชอบ แล้วกดก๊อปปี้ Prompt เริ่มต้นไปสั่ง AI สร้างเว็บได้ทันที
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROJECT_IDEAS.map((proj, idx) => (
                  <div key={idx} className="minimal-card rounded-2xl p-5 flex flex-col justify-between space-y-3.5">
                    <div className="space-y-2.5">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 inline-block">
                        {proj.level}
                      </span>
                      <h3 className="text-base font-bold text-white">{proj.title}</h3>
                      <p className={`${fontSizes.base} text-slate-300 leading-relaxed`}>{proj.desc}</p>

                      <div className="flex flex-wrap gap-1">
                        {proj.features.map((feat, fIdx) => (
                          <span key={fIdx} className="text-xs px-2 py-0.5 rounded bg-[#060911] border border-slate-800 text-slate-300">
                            ✓ {feat}
                          </span>
                        ))}
                      </div>

                      <div className="p-3 rounded-lg bg-[#060911] border border-slate-800">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-0.5">Prompt เริ่มต้น:</span>
                        <p className="text-xs font-mono text-sky-300 select-all">{proj.promptStarter}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => copyToClipboard(proj.promptStarter, `proj-${idx}`)}
                      className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center space-x-1.5 transition shadow-sm"
                    >
                      {copiedKey === `proj-${idx}` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedKey === `proj-${idx}` ? 'ก๊อปปี้คำสั่งแล้ว' : 'ก๊อปปี้คำสั่งเริ่มต้น'}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: DEBUG CHEAT SHEET */}
          {session2Tab === 'debug' && (
            <div className="minimal-card rounded-2xl p-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                  วิธีแก้ปัญหาเฉพาะหน้า
                </span>
                <h2 className={`${fontSizes.heading} font-bold text-white tracking-tight`}>
                  สูตรแก้ Error ภายใน 10 วินาที 🐞
                </h2>
                <p className={`${fontSizes.base} text-slate-300 leading-relaxed`}>
                  เมื่อเปิดหน้าเว็บแล้วปุ่มกดไม่ทำงาน หรือหน้าจอว่างเปล่า ให้ทำตาม 3 สเต็ปนี้:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="minimal-card-inner p-4 rounded-xl space-y-2">
                  <span className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-sky-400 flex items-center justify-center text-xs font-bold">1</span>
                  <h4 className="text-sm font-bold text-white">กดปุ่ม F12 บนคีย์บอร์ด</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    หรือคลิกขวาที่หน้าเว็บ &gt; เลือก <strong>Inspect (ตรวจสอบ)</strong> &gt; คลิกไปที่แท็บ <strong>Console</strong>
                  </p>
                </div>

                <div className="minimal-card-inner p-4 rounded-xl space-y-2">
                  <span className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-sky-400 flex items-center justify-center text-xs font-bold">2</span>
                  <h4 className="text-sm font-bold text-white">ก๊อปปี้ตัวหนังสือสีแดง</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    ลากเมาส์คลุมข้อความ Error สีแดงใน Console แล้วกด `Ctrl + C` (หรือ `Cmd + C`)
                  </p>
                </div>

                <div className="minimal-card-inner p-4 rounded-xl space-y-2">
                  <span className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-sky-400 flex items-center justify-center text-xs font-bold">3</span>
                  <h4 className="text-sm font-bold text-white">ส่งให้ AI ช่วยซ่อม</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    พิมพ์ส่ง AI: <em>"ฉันเปิด index.html แล้วมี Error ใน Console ว่า [วางข้อความสีแดง] ช่วยแก้โค้ดให้ถูกต้องหน่อย"</em>
                  </p>
                </div>
              </div>

              {/* Interactive food widget for student demo */}
              <div className="minimal-card-inner p-5 rounded-xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white">🍲 ตัวอย่างเว็บสุ่มอาหารที่สมบูรณ์</h4>
                  <p className="text-xs text-slate-400">ลองกดปุ่มดูการทำงานของ JavaScript ปุ่มกด</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1.5 bg-[#060911] border border-slate-800 rounded-lg text-xs font-bold text-sky-300">
                    {demoFoodResult || 'พร้อมแล้วกดสุ่ม'}
                  </span>
                  <button
                    onClick={spinFood}
                    disabled={isFoodSpinning}
                    className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center space-x-1"
                  >
                    <Dice5 className="w-3.5 h-3.5" />
                    <span>{isFoodSpinning ? 'สุ่ม...' : 'สุ่มอาหาร'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* 🏠 FAMILY & DAILY LIFE AI KNOWLEDGE BASE                 */}
      {/* ======================================================== */}
      {activeSession === 'family' && (
        <div className="animate-fadeIn">
          <FamilyAiKnowledgeCard fontSizes={fontSizes} />
        </div>
      )}
    </div>
  )
}
