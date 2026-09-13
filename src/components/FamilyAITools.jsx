import React from "react";
import {
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Check,
  Zap,
  Globe2,
  FileText,
  Palette,
  Music,
  Bot,
} from "lucide-react";

const AI_TOOLS = [
  {
    name: "ChatGPT (Free)",
    creator: "OpenAI",
    icon: Bot,
    color: "from-emerald-500 to-teal-600",
    border: "border-emerald-500/30",
    bg: "bg-emerald-950/20",
    tag: "ฉลาดรอบด้าน • คุยสนุก",
    bestFor: "👨‍👩‍👧 ทุกคนในบ้าน (เขียนอีเมล, คิดเมนู, ช่วยคิดงาน, ปรึกษาสุขภาพ)",
    highlights: [
      "คุยภาษาไทยได้เป็นธรรมชาติมาก",
      "มี Voice Mode คุยด้วยเสียงแบบไม่ต้องพิมพ์",
      "ฟรี ไม่ต้องจ่ายเงินสำหรับใช้งานทั่วไป",
    ],
    url: "https://chatgpt.com",
  },
  {
    name: "Google Gemini (Free)",
    creator: "Google",
    icon: Globe2,
    color: "from-sky-500 to-blue-600",
    border: "border-sky-500/30",
    bg: "bg-sky-950/20",
    tag: "ต่อเน็ตสด • เช็กข้อมูลไว",
    bestFor: "🔎 คนชอบค้นหา (สรุปคลิป YouTube, เช็กสถานที่เที่ยว, ค้นข้อมูลสด)",
    highlights: [
      "ดึงข้อมูลเว็บและข่าวสารปัจจุบันได้แม่นยำ",
      "ส่งลิงก์ YouTube ให้ช่วยสรุปเนื้อหาได้ทันที",
      "เชื่อมต่อกับ Gmail และ Google Docs ได้สะดวก",
    ],
    url: "https://gemini.google.com",
  },
  {
    name: "NotebookLM (Free)",
    creator: "Google Labs",
    icon: FileText,
    color: "from-purple-500 to-indigo-600",
    border: "border-purple-500/30",
    bg: "bg-purple-950/20",
    tag: "อ่านเอกสารยาว • แปลงเป็นพอดแคสต์",
    bestFor: "🎓 นักเรียน & คนทำงาน (สรุปเอกสาร 50 หน้า, ตำราเรียน, รายงาน)",
    highlights: [
      "อัปโหลด PDF, สไลด์, หรือโน้ต แล้วถามเจาะจงเฉพาะในไฟล์ได้ 100%",
      "ไม่ตอบมั่ว (อ้างอิงจากเอกสารที่เราอัปโหลดเท่านั้น)",
      "สร้าง Audio Overview (เสียงคุยสรุป) ให้ฟังได้",
    ],
    url: "https://notebooklm.google.com",
  },
  {
    name: "Canva Magic Studio",
    creator: "Canva",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    border: "border-pink-500/30",
    bg: "bg-pink-950/20",
    tag: "ออกแบบภาพ • ทำการ์ดครอบครัว",
    bestFor: "🎨 ทำการ์ดอวยพร, โปสเตอร์, ตกแต่งรูปภาพครอบครัว",
    highlights: [
      "พิมพ์ข้อความแล้วสร้างภาพประกอบทันที",
      "ลบพื้นหลังรูปภาพ และตัดต่อรูปอัตโนมัติ",
      "มีเทมเพลตสำเร็จรูปภาษาไทยนับหมื่นแบบ",
    ],
    url: "https://www.canva.com",
  },
  {
    name: "Suno AI",
    creator: "Suno",
    icon: Music,
    color: "from-amber-500 to-orange-600",
    border: "border-amber-500/30",
    bg: "bg-amber-950/20",
    tag: "แต่งเพลงวันเกิด • เพลงครอบครัว",
    bestFor: "🎵 แต่งเพลงเซอร์ไพรส์วันเกิดพ่อแม่ หรือเพลงฮาๆ ประจำบ้าน",
    highlights: [
      "ใส่แค่ชื่อคนและเรื่องราว AI แต่งเพลงพร้อมเสียงร้องเพราะๆ ให้ใน 30 วิ",
      "เลือกแนวเพลงได้หลากหลาย (ป๊อป, ลูกทุ่ง, อะคูสติก)",
      "เปิดฟังและส่งแชร์ใน LINE ได้ทันที",
    ],
    url: "https://suno.com",
  },
];

export default function FamilyAITools() {
  return (
    <div className="minimal-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-br from-[#0c1427] via-[#080d19] to-[#04060d] space-y-6 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="space-y-1.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
            <Zap className="w-3.5 h-3.5" />
            <span>คัดเฉพาะเครื่องมือฟรี & ปลอดภัย</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            🗺️ แผนที่เครื่องมือ AI ฟรีประจำบ้าน (Family AI Tools Radar)
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            5 เครื่องมือยอดนิยมระดับโลกที่ใช้งานง่าย ปลอดภัย และมีเวอร์ชันฟรีให้ทุกคนในบ้านเริ่มต้นได้ทันที
          </p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {AI_TOOLS.map((tool, idx) => {
          const Icon = tool.icon;
          return (
            <div
              key={idx}
              className={`rounded-2xl p-5 border ${tool.border} ${tool.bg} flex flex-col justify-between space-y-4 hover:border-slate-600 transition group`}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition">
                        {tool.name}
                      </h4>
                      <span className="text-[11px] text-slate-400">{tool.creator}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700 text-slate-300">
                    {tool.tag}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-200 leading-relaxed">
                  <strong className="text-sky-400 block mb-0.5">เหมาะสำหรับ:</strong>
                  <span>{tool.bestFor}</span>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-300">
                  {tool.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center space-x-2 transition border border-slate-700 hover:border-slate-600"
              >
                <span>เปิดใช้งานเว็บ {tool.name.split(' ')[0]}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
