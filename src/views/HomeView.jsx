import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  User,
  Zap,
  Sparkles,
  ArrowRight,
  BookOpen,
  Presentation,
  Wand2,
  Rocket,
  Globe2,
  ShieldCheck,
  HeartHandshake,
  Heart,
  Smile,
  Mic,
  ShieldAlert,
  Bot,
  HelpCircle,
} from "lucide-react";
import AILevelQuiz from "../components/AILevelQuiz";
import VoiceModeGuide from "../components/VoiceModeGuide";
import FamilyAITools from "../components/FamilyAITools";
import ScamDefenseSimulator from "../components/ScamDefenseSimulator";

export default function HomeView({ fontSizes }) {
  const [activeInteractiveTab, setActiveInteractiveTab] = useState("quiz"); // 'quiz' | 'voice' | 'tools' | 'scam'

  const manifestoPoints = [
    {
      icon: Globe2,
      color: "text-sky-400 bg-sky-950/60 border-sky-500/30",
      title: "1. อีกหน่อยทุกอย่างรอบตัวจะมี AI หมดเลย",
      desc: "เหมือนตอนที่จู่ๆ ทุกคนก็ต้องหัดใช้สมาร์ตโฟน โทรคุยวิดีโอกับลูกหลาน หรือสั่งของออนไลน์... อีกไม่กี่ปี AI จะไปอยู่ในมือถือ ทีวี ตู้เย็น รถยนต์ และที่ทำงาน ถ้าเราเริ่มคุยกับมันเป็นตั้งแต่ตอนนี้ จะทำอะไรก็ง่ายไปหมด",
    },
    {
      icon: Zap,
      color: "text-amber-400 bg-amber-950/60 border-amber-500/30",
      title: "2. มี 'เด็กฝึกงานรู้ทุกเรื่อง' คอยช่วยงานเรา",
      desc: "AI ไม่ได้มาแย่งอะไรเราไป แต่มันเหมือนผู้ช่วยรู้ใจที่สั่งอะไรก็ทำ งานที่เคยนั่งหลังขดหลังแข็งทำ 5-6 ชั่วโมง (พิมพ์เอกสาร, คิดเมนู, สรุปข้อมูล) ให้ AI ช่วยทำแป๊บเดียวเสร็จ เราจะได้มีเวลาไปพักผ่อน อยู่กับคนที่เรารัก",
    },
    {
      icon: ShieldCheck,
      color: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30",
      title: "3. ปลอดภัย รู้ทัน ไม่โดนแก๊งมิจฉาชีพหลอก",
      desc: "ทุกวันนี้มีทั้งข่าวปลอมแชร์ใน LINE ลิงก์หลอกโอนเงิน และคลิปเสียงปลอมจากแก๊งคอลเซ็นเตอร์... ถ้าเราเข้าใจว่า AI ทำงานยังไง เราจะเช็กความจริงเป็น ไม่ตกใจ ไม่หลงเชื่ออะไรง่ายๆ ปลอดภัยสบายใจทั้งบ้าน",
    },
    {
      icon: HeartHandshake,
      color: "text-rose-400 bg-rose-950/60 border-rose-500/30",
      title: "4. สบายขึ้น เก่งขึ้น ไปด้วยกันทั้งบ้าน",
      desc: "ลูกๆ หลานๆ มีติวเตอร์ใจดีคอยอธิบายการบ้านให้เข้าใจง่ายๆ, คนทำงานเหนื่อยน้อยลง, คุณพ่อคุณแม่ตรวจผลสุขภาพและหาข้อมูลดูแลตัวเองได้ ทุกคนในบ้านคุยภาษาเดียวกันและก้าวทันโลกไปพร้อมกัน",
    },
  ];

  const aiLevelsSummary = [
    {
      level: "Level 1",
      name: "ถามตอบ & ใช้แทน Google",
      role: "เด็กฝึกงานที่อ่านหนังสือมาทั้งโลก",
      usagePercent: "75% ของประชากรโลก",
      superpower: "เสิร์ชและสรุปเอกสาร 20 หน้าใน 10 วินาที",
      color: "from-sky-500 to-blue-600",
      border: "border-sky-500/30",
      bg: "bg-sky-950/20",
      text: "text-sky-400",
    },
    {
      level: "Level 2",
      name: "สั่งงานด้วยสูตร R-T-C-F",
      role: "สั่งอาหารตามสั่งแบบระบุเครื่องปรุง",
      usagePercent: "18% ของประชากรโลก",
      superpower: "ได้คำตอบตรงเป้า 100% ไม่ต้องเดาใจ",
      color: "from-emerald-500 to-teal-600",
      border: "border-emerald-500/30",
      bg: "bg-emerald-950/20",
      text: "text-emerald-400",
    },
    {
      level: "Level 3",
      name: "มีเลขา AI ส่วนตัว 24 ชม.",
      role: "เลขาและที่ปรึกษาส่วนตัวตลอด 24 ชม.",
      usagePercent: "5% ของประชากรโลก",
      superpower: "ผู้ช่วยที่จำนิสัย บริบท และงานเราได้แม่นยำ",
      color: "from-purple-500 to-indigo-600",
      border: "border-purple-500/30",
      bg: "bg-purple-950/20",
      text: "text-purple-400",
    },
    {
      level: "Level 4",
      name: "รวมร่างเป็นระบบอัตโนมัติ",
      role: "หัวหน้าฝ่ายที่คุมโรงงานอัตโนมัติ",
      usagePercent: "1.5% ของประชากรโลก",
      superpower: "ประหยัดเวลาทั้งสัปดาห์ รันงานเสร็จในคลิกเดียว",
      color: "from-amber-500 to-orange-600",
      border: "border-amber-500/30",
      bg: "bg-amber-950/20",
      text: "text-amber-400",
    },
    {
      level: "Level 5",
      name: "ทีมสมองกล Multi-Agent",
      role: "CEO ผู้บัญชาการกองทัพ AI",
      usagePercent: "< 0.5% ของประชากรโลก",
      superpower: "สร้างทีมงานอัจฉริยะทำงาน 24/7 ไร้ขีดจำกัด",
      color: "from-rose-500 to-red-600",
      border: "border-rose-500/30",
      bg: "bg-rose-950/20",
      text: "text-rose-400",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-8 sm:py-12 space-y-14 animate-fadeIn">
      {/* 🌟 HERO MANIFESTO & VISION */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-slate-800 text-sky-400 border border-slate-700 shadow-sm">
          <Smile className="w-4 h-4 text-sky-300" />
          <span>คุยกันก่อนเริ่ม: ทำไมบ้านเราถึงต้องใช้ AI เป็น?</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          ทำไมพวกเราทุกคนถึงต้อง <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">
            เริ่มใช้ AI กันได้แล้ว?
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
          เพราะอีกหน่อย{" "}
          <strong className="text-white">
            "ทุกอย่างรอบตัวเราจะใช้ AI ช่วยหมดเลย"
          </strong>{" "}
          การเรียนรู้วันนี้ไม่ใช่เรื่องยาก ไม่ต้องมีความรู้คอมพิวเตอร์ลึกซึ้ง
          แค่พูดคุยภาษาไทยธรรมดา เราก็สามารถมีผู้ช่วยเก่งๆ ไว้ข้างตัว
          ช่วยให้ชีวิตง่ายขึ้นเยอะครับ!
        </p>
      </div>

      {/* 4 CORE REASONS (ภาษาคนในบ้าน) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {manifestoPoints.map((point, idx) => {
          const Icon = point.icon;
          return (
            <div
              key={idx}
              className="minimal-card rounded-2xl p-6 border border-slate-800 space-y-3.5 transition hover:border-slate-700 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${point.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {point.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 🎯 INTERACTIVE HUB: QUIZ & ESSENTIAL TOOLS */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">
              ⚡ กิจกรรมและเครื่องมือเสริมพลัง (Interactive Hub)
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              ทดสอบระดับและลองใช้เครื่องมือประจำบ้าน
            </h2>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center space-x-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 overflow-x-auto custom-scrollbar">
            <button
              onClick={() => setActiveInteractiveTab("quiz")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition whitespace-nowrap ${
                activeInteractiveTab === "quiz"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>1. แบบทดสอบวัดระดับ</span>
            </button>
            <button
              onClick={() => setActiveInteractiveTab("voice")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition whitespace-nowrap ${
                activeInteractiveTab === "voice"
                  ? "bg-rose-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>2. โหมดคุยด้วยเสียง</span>
            </button>
            <button
              onClick={() => setActiveInteractiveTab("tools")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition whitespace-nowrap ${
                activeInteractiveTab === "tools"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>3. แผนที่ AI Tools ฟรี</span>
            </button>
            <button
              onClick={() => setActiveInteractiveTab("scam")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition whitespace-nowrap ${
                activeInteractiveTab === "scam"
                  ? "bg-amber-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>4. ซ้อมจับมิจฉาชีพ</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="animate-fadeIn">
          {activeInteractiveTab === "quiz" && <AILevelQuiz />}
          {activeInteractiveTab === "voice" && <VoiceModeGuide />}
          {activeInteractiveTab === "tools" && <FamilyAITools />}
          {activeInteractiveTab === "scam" && <ScamDefenseSimulator />}
        </div>
      </div>

      {/* 🚀 5 AI LEVELS SECTION */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
            5 AI Levels Mastery
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            บันได 5 ระดับ AI & สถิติประชากรโลก
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            ยิ่งฝึกฝนจนก้าวข้ามแต่ละระดับ คุณจะยิ่งได้เปรียบคน 99% ของโลก
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4">
          {aiLevelsSummary.map((lvl, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-4 sm:p-5 border ${lvl.border} ${lvl.bg} flex flex-col justify-between space-y-3 hover:border-slate-600 transition`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold ${lvl.text}`}>
                    {lvl.level}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700 text-slate-300">
                    {lvl.usagePercent}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white leading-snug">
                  {lvl.name}
                </h4>
                <p className="text-[11px] text-slate-400 italic">
                  เปรียบเหมือน: {lvl.role}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 text-[11px] text-emerald-300/90 font-medium">
                ⚡ พลังพิเศษ: {lvl.superpower}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🧭 LEARNING MODES ENTRY CARDS */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">
            เลือกโหมดการเรียนรู้
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            พร้อมเริ่มใช้งานกันหรือยังครับ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Teacher Mode Card */}
          <Link
            to="/teacher"
            className="minimal-card rounded-3xl p-6 lg:p-7 hover:border-sky-500/70 transition flex flex-col justify-between group space-y-5">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-950/60 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider block mb-1">
                  สำหรับผู้สอน & วิทยากร
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition">
                  👨‍🏫 โหมดคนสอน (Teacher)
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  มีไทม์ไลน์ 4 ชั่วโมง สไลด์บรรยาย จุดเช็กความเข้าใจผู้เรียน และบทพูดแนะนำ
                </p>
              </div>

              <ul className="text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-4">
                <li className="flex items-center space-x-2">
                  <span className="text-sky-400 font-bold">✓</span>
                  <span>ตารางสอน 4 ชม. แบ่งช่วงพักชัดเจน</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sky-400 font-bold">✓</span>
                  <span>สไลด์นำเสนอ & โพยผู้สอน</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-sky-400 text-xs font-bold">
              <span>เปิดโหมดคนสอน</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </Link>

          {/* Student Mode Card */}
          <Link
            to="/student"
            className="minimal-card rounded-3xl p-6 lg:p-7 hover:border-emerald-500/70 transition flex flex-col justify-between group space-y-5">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition">
                <User className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider block mb-1">
                  สำหรับคนเรียน & ครอบครัว
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition">
                  🎓 โหมดคนเรียน (Student)
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  สรุปเนื้อหา 6 เสาหลัก บันได 5 ระดับ AI และคลังสูตรคำสั่ง RTCF พร้อมใช้
                </p>
              </div>

              <ul className="text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-4">
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>บันได 5 ระดับ & สร้างเลขา AI</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>เครื่องมือสร้าง Prompt & คลังคำสั่ง</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-emerald-400 text-xs font-bold">
              <span>เปิดโหมดคนเรียน</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </Link>

          {/* Antigravity Guide No-Code Card */}
          <Link
            to="/antigravity-guide"
            className="minimal-card rounded-3xl p-6 lg:p-7 hover:border-purple-500/70 transition flex flex-col justify-between group space-y-5 bg-gradient-to-br from-[#0e1222] via-[#0b0f1c] to-[#080a14]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition">
                <Rocket className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider block mb-1">
                  คู่มือสร้างเว็บฉบับ No-Code
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition">
                  🚀 สั่งทำเว็บด้วย Antigravity
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  มีทีมโปรแกรมเมอร์ส่วนตัว สั่งภาษาไทยเนรมิตเว็บร้านค้า บันทึกรายรับจ่าย
                </p>
              </div>

              <ul className="text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-4">
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>5 ไอเดียโปรเจกต์พร้อมคำสั่งสำเร็จรูป</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>โพยสั่งแก้งาน & กฎทอง 4 ข้อ</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-purple-400 text-xs font-bold">
              <span>เปิดคู่มือ Antigravity</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </Link>
        </div>

        {/* 📥 PDF & Print Handbook Banner */}
        <div className="minimal-card rounded-3xl p-6 sm:p-8 border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-sky-950/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              <span>📖 หนังสือคู่มือฉบับสมบูรณ์</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              ดาวน์โหลดคู่มือ AI ประจำบ้าน (A4 PDF)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              รวมเนื้อหา 6 เสาหลักความรู้ AI, บันได 5 ระดับ + สถิติประชากรโลก, วิธีสร้างเลขา AI ส่วนตัว 24 ชม., ตารางสูตรคำสั่ง RTCF และกฎความปลอดภัย พร้อมสั่งพิมพ์ขนาด A4 ทันที
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/AI_Mastery_Family_Handbook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm flex items-center space-x-2 shadow-lg hover:shadow-emerald-500/25 transition"
            >
              <span>📥</span>
              <span>ดาวน์โหลด PDF</span>
            </a>
            <a
              href="/AI_Mastery_Family_Handbook.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm flex items-center space-x-2 transition"
            >
              <span>🖨️</span>
              <span>เปิดเวอร์ชันสั่งพิมพ์</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
