import React, { useState, useEffect } from 'react'
import {
  Mic,
  Presentation,
  BookOpen,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  Check,
  Copy,
  Code,
  Zap,
  TrendingUp,
  Cpu,
  Clock,
  Layers
} from 'lucide-react'
import { TOPICS_DETAIL, AI_FUTURE_SUMMARY } from '../data/workshopData'
import AiHierarchyCard from '../components/AiHierarchyCard'

export default function TeacherView({ fontSizes }) {
  const [currentTab, setCurrentTab] = useState('slides') // 'slides', 'hierarchy', 'future', 'intro', 'curriculum', 'tutor'
  const [currentTopicId, setCurrentTopicId] = useState(1)
  const [copiedKey, setCopiedKey] = useState(null)

  // Keyboard navigation for slides
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentTab === 'slides') {
        if (e.key === 'ArrowRight' || e.key === ' ') {
          setCurrentTopicId(prev => Math.min(TOPICS_DETAIL.length, prev + 1))
        } else if (e.key === 'ArrowLeft') {
          setCurrentTopicId(prev => Math.max(1, prev - 1))
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentTab])

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const currentTopic = TOPICS_DETAIL.find(t => t.id === currentTopicId) || TOPICS_DETAIL[0]

  return (
    <div className="space-y-6">
      {/* Teacher Control Sub-Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center space-x-1 bg-[#131b2e] p-1 rounded-xl border border-slate-800 text-xs sm:text-sm font-medium overflow-x-auto custom-scrollbar">
          <button
            onClick={() => setCurrentTab('slides')}
            className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition ${
              currentTab === 'slides'
                ? 'bg-sky-600 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Presentation className="w-4 h-4" />
            <span>1. สไลด์สอนสด (Slide Mode)</span>
          </button>

          <button
            onClick={() => setCurrentTab('hierarchy')}
            className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition ${
              currentTab === 'hierarchy'
                ? 'bg-sky-600 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>2. AI vs ML vs DL vs GenAI</span>
          </button>

          <button
            onClick={() => setCurrentTab('future')}
            className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition ${
              currentTab === 'future'
                ? 'bg-sky-600 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>3. AI ทำอะไรได้ & อนาคต</span>
          </button>

          <button
            onClick={() => setCurrentTab('intro')}
            className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition ${
              currentTab === 'intro'
                ? 'bg-slate-700 text-white font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Mic className="w-4 h-4" />
            <span>4. บทพูดเปิดคลาส (3 นาที)</span>
          </button>

          <button
            onClick={() => setCurrentTab('curriculum')}
            className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition ${
              currentTab === 'curriculum'
                ? 'bg-slate-700 text-white font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>5. แผนการสอน 5 หัวข้อ</span>
          </button>

          <button
            onClick={() => setCurrentTab('tutor')}
            className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition ${
              currentTab === 'tutor'
                ? 'bg-slate-700 text-white font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>6. คู่มือคนติว & Checklist</span>
          </button>
        </div>

        <div className="text-xs text-slate-400">
          💡 สลับสไลด์: ใช้ปุ่ม <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-200">ลูกศรซ้าย/ขวา</kbd> หรือ <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-200">Spacebar</kbd>
        </div>
      </div>

      {/* TAB 1: SLIDE PRESENTATION MODE */}
      {currentTab === 'slides' && (
        <div className="space-y-5">
          {/* Topic Selector Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 custom-scrollbar">
            {TOPICS_DETAIL.map((t) => (
              <button
                key={t.id}
                onClick={() => setCurrentTopicId(t.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                  currentTopicId === t.id
                    ? 'bg-sky-600 text-white font-bold shadow-sm'
                    : 'minimal-card text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>หัวข้อ {t.id}</span>
              </button>
            ))}
          </div>

          {/* Slide Presentation Canvas */}
          <div className="minimal-card rounded-2xl p-6 lg:p-8 relative min-h-[520px] flex flex-col justify-between space-y-6">
            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-5">
                <div className="flex items-center space-x-3">
                  <span className="w-9 h-9 rounded-lg bg-slate-800 text-sky-400 flex items-center justify-center font-bold text-sm border border-slate-700">
                    0{currentTopic.id}
                  </span>
                  <div>
                    <h2 className={`${fontSizes.heading} font-bold text-white`}>
                      {currentTopic.title}
                    </h2>
                    <p className="text-xs text-slate-400">{currentTopic.tagline}</p>
                  </div>
                </div>
                <span className="text-xs font-mono bg-slate-800 border border-slate-700 px-3 py-1 rounded-md text-slate-300">
                  ⏱️ {currentTopic.time}
                </span>
              </div>

              {/* Analogy Box */}
              <div className="minimal-card-inner p-4 rounded-xl border border-slate-800 mb-5">
                <p className={`${fontSizes.base} text-slate-200 leading-relaxed font-medium`}>
                  {currentTopic.analogy.text}
                </p>
              </div>

              {/* 3 Subtopics */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-5">
                {currentTopic.subtopics.map((sub, i) => (
                  <div
                    key={i}
                    className="minimal-card-inner p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-5 h-5 rounded bg-slate-800 text-slate-300 font-mono text-xs flex items-center justify-center font-bold border border-slate-700">
                          {i + 1}
                        </span>
                        <h3 className="font-bold text-white text-sm">
                          {sub.title}
                        </h3>
                      </div>
                      <p className={`${fontSizes.base} text-slate-300 leading-relaxed whitespace-pre-line`}>
                        {sub.desc}
                      </p>
                      {sub.example && (
                        <div className="p-2.5 rounded-lg bg-[#060911] border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-0.5">
                          <span className="font-semibold text-sky-300 block">💡 ตัวอย่าง:</span>
                          <span>{sub.example}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
                      🔑 <span className="text-slate-300">{sub.keyTakeaway}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Interactive Prompt for Topic 1: View Deep Hierarchy */}
              {currentTopic.id === 1 && (
                <div className="mb-5 p-3.5 bg-sky-950/30 border border-sky-500/30 rounded-xl flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center space-x-2 text-xs text-sky-200">
                    <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>ต้องการเจาะลึก <strong>AI vs ML vs DL vs GenAI</strong> พร้อมแผนภาพตุ๊กตาแม่ลูกดกและตารางเปรียบเทียบ?</span>
                  </div>
                  <button
                    onClick={() => setCurrentTab('hierarchy')}
                    className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-bold transition flex items-center space-x-1.5 shadow-sm"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>เปิดโหมดเปรียบเทียบละเอียด</span>
                  </button>
                </div>
              )}

              {/* Activity */}
              <div className="minimal-card-inner p-3.5 rounded-xl border border-slate-800 flex items-start space-x-3">
                <div className="p-1.5 rounded-md bg-slate-800 text-sky-400 shrink-0">
                  <Gamepad2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    {currentTopic.liveActivity.title}
                  </h4>
                  <p className={`${fontSizes.base} text-slate-300 mt-0.5`}>
                    {currentTopic.liveActivity.instruction}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Footer */}
            <div className="flex items-center justify-between border-t border-slate-800 pt-4">
              <button
                onClick={() => setCurrentTopicId(prev => Math.max(1, prev - 1))}
                disabled={currentTopicId === 1}
                className={`px-4 py-2 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition ${
                  currentTopicId === 1
                    ? 'opacity-30 cursor-not-allowed text-slate-600'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>หัวข้อก่อนหน้า (ลูกศรซ้าย)</span>
              </button>

              <div className="text-xs font-mono text-slate-400">
                สไลด์ {currentTopicId} / {TOPICS_DETAIL.length}
              </div>

              <button
                onClick={() => setCurrentTopicId(prev => Math.min(TOPICS_DETAIL.length, prev + 1))}
                disabled={currentTopicId === TOPICS_DETAIL.length}
                className={`px-4 py-2 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition ${
                  currentTopicId === TOPICS_DETAIL.length
                    ? 'opacity-30 cursor-not-allowed text-slate-600'
                    : 'bg-sky-600 hover:bg-sky-500 text-white font-bold shadow-sm'
                }`}
              >
                <span>หัวข้อถัดไป (ลูกศรขวา / Space)</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: AI vs ML vs DL vs GenAI HIERARCHY */}
      {currentTab === 'hierarchy' && (
        <div className="animate-fadeIn">
          <AiHierarchyCard fontSizes={fontSizes} />
        </div>
      )}

      {/* TAB 3: AI CAPABILITIES & FUTURE OUTLOOK */}
      {currentTab === 'future' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Section 1: What AI Can Do */}
          <div className="minimal-card rounded-2xl p-6 lg:p-7 space-y-4">
            <div className="flex items-center space-x-2 text-sky-400">
              <Sparkles className="w-5 h-5" />
              <h3 className="text-lg font-bold text-white">1. ปัจจุบัน AI ทำอะไรได้บ้าง?</h3>
            </div>
            <p className="text-xs text-slate-400">สรุปความสามารถหลัก 3 ด้านที่เข้ามาเปลี่ยนโลกการเรียน การทำงาน และการสร้างสรรค์</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              {AI_FUTURE_SUMMARY.whatAiCanDo.map((cat, idx) => (
                <div key={idx} className="minimal-card-inner p-4 rounded-xl space-y-2.5">
                  <h4 className="font-bold text-white text-sm">{cat.category}</h4>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                    {cat.items.map((item, iIdx) => (
                      <li key={iIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: How AI Helps Us */}
          <div className="minimal-card rounded-2xl p-6 lg:p-7 space-y-4">
            <div className="flex items-center space-x-2 text-emerald-400">
              <Zap className="w-5 h-5" />
              <h3 className="text-lg font-bold text-white">2. AI ช่วยอะไรเราได้บ้างในชีวิตจริง?</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {AI_FUTURE_SUMMARY.howItHelpsUs.map((benefit, idx) => (
                <div key={idx} className="minimal-card-inner p-4 rounded-xl space-y-1.5">
                  <h4 className="font-bold text-white text-sm">{benefit.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Future Roadmap (3 - 5 - 10 Years) */}
          <div className="minimal-card rounded-2xl p-6 lg:p-7 space-y-5">
            <div className="flex items-center space-x-2 text-sky-400">
              <TrendingUp className="w-5 h-5" />
              <h3 className="text-lg font-bold text-white">3. อนาคตอีก 3 - 5 - 10 ปีข้างหน้า AI จะเป็นอย่างไร?</h3>
            </div>
            <p className="text-xs text-slate-400">ทิศทางวิวัฒนาการของเทคโนโลยี AI และสิ่งที่คนทั่วไปต้องเตรียมตัวรับมือ</p>

            <div className="space-y-4">
              {AI_FUTURE_SUMMARY.futureRoadmap.map((road, idx) => (
                <div key={idx} className="minimal-card-inner p-5 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">
                      {road.timeline}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white">{road.title}</h4>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed pt-1">
                    {road.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Key Quote Box */}
            <div className="p-4 rounded-xl bg-[#060911] border border-slate-700 text-center">
              <p className="text-sm sm:text-base font-bold text-sky-300">
                "{AI_FUTURE_SUMMARY.keyQuote}"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: INTRO SPEECH */}
      {currentTab === 'intro' && (
        <div className="minimal-card rounded-2xl p-6 lg:p-8 space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">🎤 บทพูดเปิดคลาสฉบับสั้น (3 นาที)</h3>
            <p className="text-xs text-slate-400">สำหรับผู้สอนใช้พูดเปิดใจชวนคุยสร้างบรรยากาศสนุกสนาน</p>
          </div>

          <div className="minimal-card-inner p-4 rounded-xl space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">1. ทักทาย & ปลดล็อกความเครียด (1 นาที)</span>
            <p className="text-base font-semibold text-white">
              "สวัสดีทุกคนครับ! วันนี้เรามาเรียน AI แบบสบายๆ สไตล์ครอบครัว ไม่มีสอบ ไม่มีเกรด ไม่ต้องเครียดเลยครับ"
            </p>
            <p className="text-sm text-slate-300">
              "วันนี้ใครอยากจิบน้ำ กินขนม หรือลุกขยับตัว ทำตัวตามสบายได้เต็มที่เหมือนนั่งเล่นอยู่ในบ้านเลยครับ"
            </p>
          </div>

          <div className="minimal-card-inner p-5 rounded-xl text-center space-y-2 border border-slate-700">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">2. ชวนคุยคำถามเปิดใจ (1 นาที)</span>
            <h4 className="text-2xl font-bold text-sky-300">
              "ไหน... 'AI คืออะไร' ในความคิดของพวกเรา ใครตอบได้บ้าง?"
            </h4>
            <p className="text-xs text-slate-400">(หุ่นยนต์? สิริในมือถือ? แชทบอท? → ถูกทุกข้อเลยครับ!)</p>
          </div>

          <div className="minimal-card-inner p-4 rounded-xl space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">3. สรุปให้เห็นภาพ (1 นาที)</span>
            <div className="p-3 bg-slate-900 rounded-lg text-sky-200 text-sm">
              💡 "เปรียบง่ายๆ AI วันนี้เหมือน <strong>'เด็กฝึกงานอัจฉริยะ'</strong> ที่อ่านหนังสือมาทั้งโลก รู้แทบทุกเรื่อง ทั้งสูตรอาหาร การบ้าน และการเขียนโค้ด... เพียงแต่เขาต้องการ <strong>'พวกเรา'</strong> เป็นหัวหน้าคอยสั่งงาน"
            </div>
            <p className="text-sm text-slate-300">
              "ไม่ต้องเขียนโค้ดเป็น พิมพ์ภาษาไทยคุยกับมันเหมือนคุย LINE กับเพื่อน วันนี้ใน 2 ชั่วโมง ทุกคนจะมีเว็บของตัวเองคนละ 1 เว็บแน่นอนครับ!"
            </p>
          </div>
        </div>
      )}

      {/* TAB 4: CURRICULUM */}
      {currentTab === 'curriculum' && (
        <div className="space-y-6">
          {TOPICS_DETAIL.map((topic) => (
            <div key={topic.id} className="minimal-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h4 className="text-lg font-bold text-white">หัวข้อ {topic.id}: {topic.title}</h4>
                <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded">⏱️ {topic.time}</span>
              </div>
              <p className="text-sm text-slate-300">{topic.tagline}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                {topic.subtopics.map((sub, idx) => (
                  <div key={idx} className="minimal-card-inner p-3.5 rounded-xl space-y-1.5">
                    <h5 className="font-bold text-white text-xs">{idx + 1}. {sub.title}</h5>
                    <p className="text-xs text-slate-300 whitespace-pre-line">{sub.desc}</p>
                    {sub.example && (
                      <p className="text-[11px] text-sky-300 pt-1">💡 {sub.example}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 5: TUTOR GUIDE */}
      {currentTab === 'tutor' && (
        <div className="minimal-card rounded-2xl p-6 space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">👨‍🏫 คู่มือคนติว & เทคนิคการสอน</h3>
            <p className="text-xs text-slate-400">ควบคุมเวลา 2 ชั่วโมงให้อยู่ในแผน พร้อมแนวทางแก้ปัญหาเฉพาะหน้า</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="minimal-card-inner p-4 rounded-xl space-y-2">
              <h4 className="text-sm font-bold text-white">1. คุมเวลา 2 ชั่วโมงให้เป๊ะ</h4>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                <li>20 นาทีแรก: ปูพื้นฐาน AI & Fact check</li>
                <li>25 นาทีต่อมา: สอนสูตร R-T-C-F และลองถาม 1 ข้อ</li>
                <li>25 นาทีที่ 3: พาทำเว็บแรกด้วย AI (Single-file)</li>
                <li>25 นาทีที่ 4: สาธิต Antigravity CLI</li>
                <li>25 นาทีสุดท้าย: Mini Project & โชว์ผลงาน</li>
              </ul>
            </div>

            <div className="minimal-card-inner p-4 rounded-xl space-y-2">
              <h4 className="text-sm font-bold text-white">2. วิธีแก้น้องติด Error</h4>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                <li>สอนกด F12 &gt; Console &gt; ก๊อปสีแดงส่ง AI</li>
                <li>บันทึกไฟล์เป็น `index.html` เท่านั้น ระวัง `.txt`</li>
                <li>สั่ง AI: "รวมทุกอย่างใน index.html ไฟล์เดียว"</li>
              </ul>
            </div>
          </div>

          <div className="minimal-card-inner p-4 rounded-xl space-y-2 border border-slate-700">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Checklist ก่อนเริ่มสอน 3 นาที</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-sky-500 bg-slate-800 border-slate-700" defaultChecked />
                <span className="text-slate-300">ต่อ Wi-Fi และเปิดเบราว์เซอร์พร้อม</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-sky-500 bg-slate-800 border-slate-700" defaultChecked />
                <span className="text-slate-300">เปิดหน้าเว็บสไลด์ฉายขึ้นจอ</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
