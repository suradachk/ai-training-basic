import React, { useState } from "react";
import {
  Mic,
  Volume2,
  Sparkles,
  Headphones,
  Copy,
  Check,
  HeartHandshake,
  Car,
  GraduationCap,
  MessageCircle,
} from "lucide-react";

const VOICE_SCENARIOS = [
  {
    id: "elderly",
    role: "👵 สำหรับผู้ใหญ่ / ผู้สูงอายุ",
    subtitle: "ไม่ต้องพิมพ์ เล่าอาการหรือถามเรื่องที่สงสัยเหมือนคุยกับลูกหลาน",
    icon: HeartHandshake,
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    setupTip: "เปิดแอป ChatGPT หรือ Gemini ในมือถือ แล้วกดที่ไอคอน 'รูปหูฟัง' หรือ 'รูปไมโครโฟน' ที่มุมขวาล่าง",
    exampleDialogues: [
      {
        speaker: "คุณแม่พูดว่า:",
        text: "เมื่อเช้าตื่นมาปวดข้อเข่าข้างขวามาก เวลาลุกยืนจะมีเสียงกร็อบแกรบ ควรกินอะไรช่วย หรือมีท่ายืดเหยียดง่ายๆ แนะนำไหมจ๊ะ?",
      },
      {
        speaker: "AI จะตอบกลับเป็นเสียงพูดทันที:",
        text: "สวัสดีครับคุณแม่ สำหรับอาการปวดเข่าเบื้องต้น แนะนำให้ประคบเย็นหากมีอาการบวม และลองทำท่ายกขาทีละข้างขณะนั่งเก้าอี้ครับ... (AI จะอธิบายสุภาพและเข้าใจง่าย)",
      },
    ],
    starterScript: "ช่วยเป็นหมอใจดี คุยภาษาไทยสุภาพ ฟังฉันเล่าอาการสุขภาพแล้วให้คำแนะนำเบื้องต้นที่เข้าใจง่ายๆ นะ",
  },
  {
    id: "worker",
    role: "🚗 สำหรับคนทำงาน & คนขับรถ",
    subtitle: "ใช้เสียงสั่งงานระหว่างเดินทาง สรุปข่าว และบันทึกไอเดีย",
    icon: Car,
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    setupTip: "ใส่หูฟังบลูทูธตอนขับรถ แล้วสั่งงาน AI โดยไม่ต้องละสายตาจากถนน",
    exampleDialogues: [
      {
        speaker: "เราพูดว่า:",
        text: "สรุปข่าวเศรษฐกิจและเทคโนโลยีประจำวันนี้ให้ฟังสั้นๆ 3 ข่าว ขอแบบไม่เกิน 2 นาทีนะ",
      },
      {
        speaker: "AI ตอบกลับ:",
        text: "ได้เลยครับ ข่าวที่ 1 ตลาดหุ้นวันนี้... ข่าวที่ 2 การเปิดตัวโมเดล AI ใหม่... และข่าวที่ 3 ทิศทางราคาน้ำมันครับ...",
      },
    ],
    starterScript: "ฉันกำลังขับรถอยู่ ช่วยสรุปข่าววันนี้ให้ฟังสั้นๆ กระชับ และคอยถามฉันว่าอยากเจาะลึกข่าวไหนเพิ่มไหม",
  },
  {
    id: "student",
    role: "👦 สำหรับลูกหลาน & นักเรียน",
    subtitle: "ซ้อมพูดภาษาอังกฤษสำเนียง Native Speaker แบบไม่ต้องอายใคร",
    icon: GraduationCap,
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    setupTip: "ให้ AI สวมบทบาทเป็นชาวต่างชาติ หรืออาจารย์สอนภาษาอังกฤษ แล้วโต้ตอบด้วยเสียงสดๆ",
    exampleDialogues: [
      {
        speaker: "นักเรียนพูดว่า:",
        text: "Hi, can you practice a job interview with me in English? Please correct my grammar gently.",
      },
      {
        speaker: "AI ตอบกลับ:",
        text: "Of course! Let's start. Tell me about yourself and why you're interested in this role?",
      },
    ],
    starterScript: "Please act as a friendly native English teacher. Let's have a casual conversation about hobbies, and please correct my mistakes politely.",
  },
];

export default function VoiceModeGuide() {
  const [activeScenario, setActiveScenario] = useState("elderly");
  const [copiedKey, setCopiedKey] = useState(null);

  const scenario = VOICE_SCENARIOS.find((s) => s.id === activeScenario) || VOICE_SCENARIOS[0];

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="minimal-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-br from-[#0c1427] via-[#090f1d] to-[#05070e] space-y-6 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="space-y-1.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-xs font-semibold text-rose-300">
            <Mic className="w-3.5 h-3.5" />
            <span>ฟีเจอร์เปลี่ยนชีวิต: คุยด้วยเสียง (Voice Mode)</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            🎙️ คุยกับ AI ด้วยเสียง – หมัดเด็ดสำหรับคนไม่ชอบพิมพ์
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            ไม่ต้องจ้องจอ ไม่ต้องพิมพ์แป้นเล็กๆ แค่กดรูปไมโครโฟนแล้วพูดคุยภาษาไทยได้ทันที
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-slate-900 px-3.5 py-2 rounded-2xl border border-slate-800 text-xs text-sky-300">
          <Headphones className="w-4 h-4" />
          <span>รองรับทั้ง ChatGPT & Gemini</span>
        </div>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {VOICE_SCENARIOS.map((sc) => {
          const Icon = sc.icon;
          const isActive = activeScenario === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => setActiveScenario(sc.id)}
              className={`p-4 rounded-2xl text-left border transition flex flex-col justify-between space-y-2 ${
                isActive
                  ? "bg-slate-800 border-sky-500/60 shadow-md ring-1 ring-sky-500/30"
                  : "bg-slate-900/60 hover:bg-slate-800/60 border-slate-800"
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center border ${sc.badgeColor}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white">{sc.role}</span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">{sc.subtitle}</p>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Details */}
      <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-5 animate-fadeIn">
        {/* Setup Tip */}
        <div className="flex items-start space-x-3 bg-sky-950/40 border border-sky-500/30 p-4 rounded-xl text-xs sm:text-sm text-sky-200">
          <Sparkles className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold text-white block mb-0.5">วิธีเปิดใช้งานในมือถือ:</strong>
            <span>{scenario.setupTip}</span>
          </div>
        </div>

        {/* Dialogues Example */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            ตัวอย่างบทสนทนาจริงผ่านเสียง:
          </span>
          <div className="space-y-3">
            {scenario.exampleDialogues.map((dlg, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
                  idx === 0
                    ? "bg-slate-950/80 border-slate-800 text-slate-200"
                    : "bg-emerald-950/30 border-emerald-500/30 text-emerald-200"
                }`}
              >
                <span className="text-[11px] font-bold text-slate-400 block mb-1">
                  {dlg.speaker}
                </span>
                <p className="italic">"{dlg.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Starter Script */}
        <div className="pt-2 border-t border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-300">
              ⚡ คำพูดเปิดบทสนทนาเริ่มต้น (Starter Prompt):
            </span>
            <button
              onClick={() => handleCopy(scenario.starterScript, scenario.id)}
              className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center space-x-1.5 transition border border-slate-700"
            >
              {copiedKey === scenario.id ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-semibold">คัดลอกแล้ว</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>คัดลอกข้อความ</span>
                </>
              )}
            </button>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">
            "{scenario.starterScript}"
          </div>
        </div>
      </div>
    </div>
  );
}
