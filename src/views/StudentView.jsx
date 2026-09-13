import React, { useState } from "react";
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
  Layers,
  Coins,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import {
  TOPICS_DETAIL,
  AI_LEVELS_PYRAMID,
  PROMPT_TEMPLATES,
  PROJECT_IDEAS,
} from "../data/workshopData";
import FamilyAiKnowledgeCard from "../components/FamilyAiKnowledgeCard";
import AiOverviewSection from "../components/AiOverviewSection";
import CareerLifeAdaptationCard from "../components/CareerLifeAdaptationCard";
import AiSecretaryBuilderCard from "../components/AiSecretaryBuilderCard";
import AILevelQuiz from "../components/AILevelQuiz";
import VoiceModeGuide from "../components/VoiceModeGuide";
import FamilyAITools from "../components/FamilyAITools";
import ScamDefenseSimulator from "../components/ScamDefenseSimulator";
import { Mic, ShieldAlert, Bot } from "lucide-react";


export default function StudentView({ fontSizes }) {
  // Top-level Module Switcher: 'session1' | 'session2' | 'adaptation' | 'family'
  const [activeSession, setActiveSession] = useState("session1");

  // Sub-tab under Session 2 (5 AI Levels)
  const [session2Tab, setSession2Tab] = useState("notes"); // 'notes', 'builder', 'secretary', 'prompts', 'projects', 'debug'
  const [copiedKey, setCopiedKey] = useState(null);

  // Interactive Prompt Builder
  const [promptRole, setPromptRole] = useState("ติวเตอร์ฟิสิกส์สายฮา");
  const [promptTask, setPromptTask] = useState("อธิบายกฎแรงดึงดูดของนิวตัน");
  const [promptContext, setPromptContext] = useState(
    "สำหรับเด็ก ม.ต้น ที่ชอบเล่นเกม Minecraft",
  );
  const [promptFormat, setPromptFormat] = useState(
    "ตารางสรุป 3 แถว พร้อมมุกสั้นๆ",
  );

  // Demo Box
  const [demoFoodResult, setDemoFoodResult] = useState(null);
  const [isFoodSpinning, setIsFoodSpinning] = useState(false);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const spinFood = () => {
    setIsFoodSpinning(true);
    setDemoFoodResult("กำลังหมุนวงล้อ...");
    setTimeout(() => {
      const foods = [
        "กะเพราหมูกรอบไข่ดาว 🍳",
        "ส้มตำไก่ย่างข้าวเหนียว 🍗",
        "ข้าวมันไก่ตอนพิเศษ 🍚",
        "ชาบูหม้อไฟชีส 🍲",
        "ก๋วยเตี๋ยวต้มยำน้ำข้น 🍜",
        "ข้าวผัดปูจานยักษ์ 🦀",
      ];
      const pick = foods[Math.floor(Math.random() * foods.length)];
      setDemoFoodResult(pick);
      setIsFoodSpinning(false);
    }, 600);
  };

  const generatedPrompt = `[Role] คุณคือ ${promptRole}\n[Task] ช่วย ${promptTask}\n[Context] ${promptContext}\n[Format] แสดงผลลัพธ์เป็น ${promptFormat}`;

  return (
    <div className="space-y-6">
      {/* 🧭 Top-Level Module Navigation */}
      <div className="minimal-card rounded-2xl p-3 sm:p-4 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider hidden md:inline">
            เลือกหมวดการเรียน:
          </span>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto custom-scrollbar w-full sm:w-auto">
          <button
            onClick={() => setActiveSession("session1")}
            className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition shadow-sm whitespace-nowrap ${
              activeSession === "session1"
                ? "bg-sky-600 text-white shadow-sky-600/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}>
            <Sparkles className="w-4 h-4 text-sky-300" />
            <span>1. 6 เสาหลักความรู้ AI</span>
          </button>

          <button
            onClick={() => setActiveSession("session2")}
            className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition shadow-sm whitespace-nowrap ${
              activeSession === "session2"
                ? "bg-sky-600 text-white shadow-sky-600/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}>
            <Rocket className="w-4 h-4 text-emerald-400" />
            <span>2. บันได 5 ระดับ AI (Levels)</span>
          </button>

          <button
            onClick={() => setActiveSession("adaptation")}
            className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition shadow-sm whitespace-nowrap ${
              activeSession === "adaptation"
                ? "bg-amber-600 text-white shadow-amber-600/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}>
            <Coins className="w-4 h-4 text-amber-300" />
            <span>3. ปรับใช้จริง</span>
          </button>

          <button
            onClick={() => setActiveSession("family")}
            className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition shadow-sm whitespace-nowrap ${
              activeSession === "family"
                ? "bg-rose-600 text-white shadow-rose-600/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}>
            <HeartPulse className="w-4 h-4 text-rose-300" />
            <span>4. คลังความรู้ในครอบครัว 🏠</span>
          </button>

          <button
            onClick={() => setActiveSession("interactive")}
            className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition shadow-sm whitespace-nowrap ${
              activeSession === "interactive"
                ? "bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow-lg"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}>
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>5. แบบทดสอบ & เครื่องมือ 🎯</span>
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 🌟 MODULE 1: 6 CORE PILLARS OVERVIEW                     */}
      {/* ======================================================== */}
      {activeSession === "session1" && (
        <div className="space-y-6 animate-fadeIn">
          <AiOverviewSection fontSizes={fontSizes} initialMode="slides" />
        </div>
      )}

      {/* ======================================================== */}
      {/* 🚀 MODULE 2: 5 AI LEVELS MASTERY                         */}
      {/* ======================================================== */}
      {activeSession === "session2" && (
        <div className="space-y-6 animate-fadeIn">
          {/* Sub-Tab Navigation for 5 Levels */}
          <div className="flex items-center space-x-1 bg-[#131b2e] p-1 rounded-xl border border-slate-800 text-xs sm:text-sm font-medium overflow-x-auto custom-scrollbar">
            <button
              onClick={() => setSession2Tab("notes")}
              className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                session2Tab === "notes"
                  ? "bg-sky-600 text-white font-bold shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`}>
              <BookOpen className="w-4 h-4" />
              <span>1. สรุปบันได 5 ระดับ AI</span>
            </button>

            <button
              onClick={() => setSession2Tab("builder")}
              className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                session2Tab === "builder"
                  ? "bg-sky-600 text-white font-bold shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`}>
              <Wand2 className="w-4 h-4" />
              <span>2. ฝึกสั่งงาน RTCF</span>
            </button>

            <button
              onClick={() => setSession2Tab("secretary")}
              className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                session2Tab === "secretary"
                  ? "bg-purple-600 text-white font-bold shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`}>
              <Sparkles className="w-4 h-4 text-purple-300" />
              <span>3. ทำเลขา AI 24 ชม. 🤖</span>
            </button>

            <button
              onClick={() => setSession2Tab("prompts")}
              className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                session2Tab === "prompts"
                  ? "bg-sky-600 text-white font-bold shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`}>
              <MessageSquare className="w-4 h-4" />
              <span>4. คลัง Prompt พร้อมใช้</span>
            </button>

            <button
              onClick={() => setSession2Tab("projects")}
              className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                session2Tab === "projects"
                  ? "bg-sky-600 text-white font-bold shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`}>
              <Rocket className="w-4 h-4" />
              <span>5. โจทย์ Mini Projects</span>
            </button>

            <button
              onClick={() => setSession2Tab("debug")}
              className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                session2Tab === "debug"
                  ? "bg-sky-600 text-white font-bold shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`}>
              <Bug className="w-4 h-4" />
              <span>6. วิธีแก้ Error (F12)</span>
            </button>
          </div>

          {/* TAB 1: 5 LEVELS NOTES */}
          {session2Tab === "notes" && (
            <div className="space-y-6">
              {/* Header */}
              <div className="minimal-card rounded-2xl p-6 space-y-2">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                  บันได 5 ขั้น สู่การเป็นเจ้านาย AI
                </span>
                <h2
                  className={`${fontSizes.heading} font-bold text-white tracking-tight`}>
                  ไต่ระดับทักษะ AI จากผู้เริ่มต้น สู่การสร้างระบบอัตโนมัติ
                </h2>
                <p
                  className={`${fontSizes.base} text-slate-300 leading-relaxed`}>
                  รู้ก่อนได้เปรียบ: มาดูกันว่าคนทั้งโลกใช้ AI อยู่ในระดับไหน และเมื่อคุณก้าวข้ามแต่ละระดับ จะปลดล็อกพลังพิเศษ (Superpower) อะไรบ้าง
                </p>
              </div>

              {/* 📊 GLOBAL ADOPTION PYRAMID CARD */}
              <div className="minimal-card rounded-2xl p-6 border border-slate-800 space-y-5 bg-gradient-to-br from-[#0c1427] via-[#090f1d] to-[#060911]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                      🌍 สถิติผู้ใช้งาน AI ทั่วโลก (AI Adoption Pyramid)
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      คนทั้งโลกใช้ AI เป็นกี่เปอร์เซ็นต์? และคุณอยู่จุดไหน?
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400">
                    ยิ่งไต่ระดับสูง ยิ่งได้เปรียบคน 99% ของโลก
                  </span>
                </div>

                <div className="space-y-3">
                  {AI_LEVELS_PYRAMID.map((tier) => (
                    <div
                      key={tier.level}
                      className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2 hover:border-slate-700 transition"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center space-x-2.5">
                          <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold border ${tier.badgeColor}`}>
                            {tier.percent}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-white">
                            {tier.title}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          {tier.tier}
                        </span>
                      </div>

                      {/* Progress Bar Representation */}
                      <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${tier.barColor} ${tier.barWidth}`}
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] pt-1">
                        <span className="text-slate-400">
                          🎯 {tier.summary}
                        </span>
                        <span className="text-emerald-300 font-semibold">
                          ✨ ได้เปรียบ: {tier.advantage}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5 TOPICS DETAIL CARDS */}
              <div className="space-y-6">
                {TOPICS_DETAIL.map((topic) => (
                  <div
                    key={topic.id}
                    className="minimal-card rounded-2xl p-6 space-y-5">
                    {/* Level Header with Global Stats Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
                      <div className="flex items-center space-x-3">
                        <span className="w-8 h-8 rounded-lg bg-slate-800 text-emerald-400 flex items-center justify-center font-bold text-sm border border-slate-700 font-mono">
                          L{topic.level}
                        </span>
                        <div>
                          <h3
                            className={`${fontSizes.title} font-bold text-white`}>
                            {topic.title}
                          </h3>
                          <p className="text-xs text-slate-400">
                            {topic.tagline}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono text-emerald-300 bg-emerald-950/80 border border-emerald-800 px-2.5 py-1 rounded font-bold">
                          🌍 คนทั้งโลกใช้เป็น {topic.globalPercent}
                        </span>
                        <span className="text-xs font-mono text-sky-400 bg-sky-950 border border-sky-800 px-2.5 py-1 rounded font-bold hidden sm:inline">
                          {topic.levelBadge}
                        </span>
                      </div>
                    </div>

                    {/* Analogy Box */}
                    <div className="minimal-card-inner p-3.5 rounded-xl text-slate-200 text-sm leading-relaxed">
                      💡 <strong>เปรียบเทียบให้เห็นภาพ:</strong> {topic.analogy.text}
                    </div>

                    {/* 🌟 USER ADVANTAGE & SUPERPOWER HIGHLIGHT BOX */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#0d1f18] to-slate-900 border border-emerald-800/60 space-y-3.5">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center space-x-1.5 font-mono">
                          <span>🌟 ประโยชน์ & ความได้เปรียบเมื่อคุณทำระดับนี้เป็น:</span>
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-900/70 text-emerald-200 border border-emerald-700/80">
                          ⚡ {topic.userAdvantage.timeSaved}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {topic.userAdvantage.benefits.map((b, bIdx) => (
                          <div
                            key={bIdx}
                            className="p-3 rounded-xl bg-[#060911]/80 border border-emerald-900/40 space-y-1"
                          >
                            <h5 className="text-xs font-bold text-white">
                              {b.title}
                            </h5>
                            <p className="text-[11px] text-slate-300 leading-relaxed">
                              {b.desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      <p className="text-xs text-emerald-200/90 font-medium italic pt-1 border-t border-emerald-900/50">
                        "{topic.userAdvantage.unlockQuote}"
                      </p>
                    </div>

                    {/* Quick Link for Level 3 */}
                    {topic.level === 3 && (
                      <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <span className="text-purple-200 font-medium">
                          ✨ อยากมีเลขา AI ประจำตัวที่รู้ใจ 24 ชม. โดยไม่ต้องเขียนโค้ด?
                        </span>
                        <button
                          onClick={() => setSession2Tab("secretary")}
                          className="px-3.5 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-bold flex items-center space-x-1 shrink-0 transition"
                        >
                          <span>เปิดคู่มือทำเลขา AI 🤖</span>
                        </button>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
                      {topic.subtopics.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="minimal-card-inner p-4 rounded-xl space-y-2 flex flex-col justify-between">
                          <div className="space-y-1.5">
                            <h4 className="font-bold text-white text-xs sm:text-sm">
                              {sIdx + 1}. {sub.title}
                            </h4>
                            <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed">
                              {sub.desc}
                            </p>
                            {sub.example && (
                              <div className="p-2.5 rounded bg-[#060911] border border-slate-800 text-[11px] text-slate-300">
                                <span className="font-semibold text-sky-300 block mb-0.5">
                                  💡 ตัวอย่าง:
                                </span>
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
          {session2Tab === "builder" && (
            <div className="space-y-5">
              <div className="minimal-card rounded-2xl p-6 space-y-2">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                  เครื่องมือช่วยฝึกเขียน Prompt (Level 2)
                </span>
                <h2
                  className={`${fontSizes.heading} font-bold text-white tracking-tight`}>
                  ทดลองสร้าง Prompt ตามสูตร R-T-C-F
                </h2>
                <p
                  className={`${fontSizes.base} text-slate-300 leading-relaxed`}>
                  ลองพิมพ์กรอกข้อมูล 4 ช่อง แล้วกดก๊อปปี้ไปวางใน ChatGPT, Gemini
                  หรือ Antigravity ได้ทันที
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="minimal-card rounded-2xl p-6 space-y-3.5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    กรอกข้อมูล 4 ช่อง
                  </span>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-300 font-medium flex items-center space-x-1.5">
                      <span className="w-4 h-4 rounded bg-slate-800 text-slate-300 text-[10px] flex items-center justify-center font-bold border border-slate-700">
                        R
                      </span>
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
                      <span className="w-4 h-4 rounded bg-slate-800 text-slate-300 text-[10px] flex items-center justify-center font-bold border border-slate-700">
                        T
                      </span>
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
                      <span className="w-4 h-4 rounded bg-slate-800 text-slate-300 text-[10px] flex items-center justify-center font-bold border border-slate-700">
                        C
                      </span>
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
                      <span className="w-4 h-4 rounded bg-slate-800 text-slate-300 text-[10px] flex items-center justify-center font-bold border border-slate-700">
                        F
                      </span>
                      <span>Format (รูปแบบคำตอบ):</span>
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
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Prompt ที่ประกอบเสร็จแล้ว
                      </span>
                      <button
                        onClick={() =>
                          copyToClipboard(generatedPrompt, "builder")
                        }
                        className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center space-x-1 transition">
                        {copiedKey === "builder" ? (
                          <Check className="w-3.5 h-3.5 text-white" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span>
                          {copiedKey === "builder"
                            ? "คัดลอกแล้ว!"
                            : "ก๊อปปี้ไปส่ง AI"}
                        </span>
                      </button>
                    </div>

                    <div className="p-4 bg-[#060911] rounded-xl border border-slate-800 text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed">
                      {generatedPrompt}
                    </div>
                  </div>

                  <div className="minimal-card-inner p-3 rounded-lg text-xs text-slate-300">
                    💡 <strong>เคล็ดลับ:</strong> นำข้อความที่ก๊อปปี้
                    ไปวางในช่องแชท ChatGPT, Claude หรือ Gemini
                    แล้วกดส่งได้เลยครับ
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: AI SECRETARY BUILDER (NEW!) */}
          {session2Tab === "secretary" && (
            <div className="space-y-6">
              <AiSecretaryBuilderCard fontSizes={fontSizes} />
            </div>
          )}

          {/* TAB 3: PROMPT TEMPLATES */}
          {session2Tab === "prompts" && (
            <div className="space-y-6">
              <div className="minimal-card rounded-2xl p-6 space-y-2">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                  คลังคำสั่งสำเร็จรูป
                </span>
                <h2
                  className={`${fontSizes.heading} font-bold text-white tracking-tight`}>
                  รวม Prompt ยอดนิยมพร้อมใช้งาน
                </h2>
                <p
                  className={`${fontSizes.base} text-slate-300 leading-relaxed`}>
                  กดปุ่ม "ก๊อปปี้" แล้วนำไปปรับใช้ในงานของคุณได้ทันที
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROMPT_TEMPLATES.map((tmpl, idx) => (
                  <div
                    key={idx}
                    className="minimal-card rounded-2xl p-5 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                          {tmpl.category}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white">
                        {tmpl.title}
                      </h4>
                      <p className="text-xs text-slate-300 font-mono bg-[#060911] p-3 rounded-lg border border-slate-800 whitespace-pre-wrap leading-relaxed">
                        {tmpl.prompt}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        copyToClipboard(tmpl.prompt, `tmpl-${idx}`)
                      }
                      className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg border border-slate-700 flex items-center justify-center space-x-1 transition">
                      {copiedKey === `tmpl-${idx}` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>
                        {copiedKey === `tmpl-${idx}`
                          ? "คัดลอกเรียบร้อย!"
                          : "ก๊อปปี้ Prompt"}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: MINI PROJECTS */}
          {session2Tab === "projects" && (
            <div className="space-y-6">
              <div className="minimal-card rounded-2xl p-6 space-y-2">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                  โจทย์ลงมือทำจริง (Level 4)
                </span>
                <h2
                  className={`${fontSizes.heading} font-bold text-white tracking-tight`}>
                  เลือก 1 โปรเจกต์ สร้างหน้าเว็บของตัวเอง
                </h2>
                <p
                  className={`${fontSizes.base} text-slate-300 leading-relaxed`}>
                  เลือกโจทย์ที่สนใจ แล้วก๊อปปี้คำสั่งเริ่มต้นไปสั่ง AI สร้างไฟล์
                  `index.html` บนเครื่อง
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROJECT_IDEAS.map((proj, idx) => (
                  <div
                    key={idx}
                    className="minimal-card rounded-2xl p-5 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-white">
                          {proj.title}
                        </h4>
                        <span className="text-[10px] font-mono text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/80">
                          {proj.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300">{proj.desc}</p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {proj.features.map((f, fIdx) => (
                          <span
                            key={fIdx}
                            className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                            ✓ {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>คำสั่งตั้งต้น (Prompt Starter):</span>
                        <button
                          onClick={() =>
                            copyToClipboard(proj.promptStarter, `proj-${idx}`)
                          }
                          className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded text-[10px] font-bold flex items-center space-x-1">
                          {copiedKey === `proj-${idx}` ? (
                            <Check className="w-3 h-3 text-emerald-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                          <span>
                            {copiedKey === `proj-${idx}`
                              ? "คัดลอกแล้ว"
                              : "ก๊อปปี้"}
                          </span>
                        </button>
                      </div>
                      <p className="text-[11px] font-mono text-slate-300 bg-[#060911] p-2.5 rounded-lg border border-slate-800 leading-relaxed">
                        {proj.promptStarter}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: DEBUG F12 */}
          {session2Tab === "debug" && (
            <div className="minimal-card rounded-2xl p-6 lg:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                  คู่มือแก้ปัญหาเบื้องต้น
                </span>
                <h2
                  className={`${fontSizes.heading} font-bold text-white tracking-tight`}>
                  สูตรแก้ Error ภายใน 10 วินาที 🐞
                </h2>
                <p
                  className={`${fontSizes.base} text-slate-300 leading-relaxed`}>
                  เมื่อเปิดหน้าเว็บแล้วปุ่มกดไม่ทำงาน หรือหน้าจอว่างเปล่า
                  ให้ทำตาม 3 สเต็ปนี้:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="minimal-card-inner p-4 rounded-xl space-y-2">
                  <span className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-sky-400 flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    กดปุ่ม F12 บนคีย์บอร์ด
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    หรือคลิกขวาที่หน้าเว็บ &gt; เลือก{" "}
                    <strong>Inspect (ตรวจสอบ)</strong> &gt; คลิกไปที่แท็บ{" "}
                    <strong>Console</strong>
                  </p>
                </div>

                <div className="minimal-card-inner p-4 rounded-xl space-y-2">
                  <span className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-sky-400 flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    ก๊อปปี้ตัวหนังสือสีแดง
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    ลากเมาส์คลุมข้อความ Error สีแดงใน Console แล้วกด `Ctrl + C`
                    (หรือ `Cmd + C`)
                  </p>
                </div>

                <div className="minimal-card-inner p-4 rounded-xl space-y-2">
                  <span className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-sky-400 flex items-center justify-center text-xs font-bold">
                    3
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    ส่งให้ AI ช่วยซ่อม
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    พิมพ์ส่ง AI:{" "}
                    <em>
                      "ฉันเปิด index.html แล้วมี Error ใน Console ว่า
                      [วางข้อความสีแดง] ช่วยแก้โค้ดให้ถูกต้องหน่อย"
                    </em>
                  </p>
                </div>
              </div>

              {/* Interactive food widget for student demo */}
              <div className="minimal-card-inner p-5 rounded-xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    🍲 ตัวอย่างเว็บสุ่มอาหารที่สมบูรณ์
                  </h4>
                  <p className="text-xs text-slate-400">
                    ลองกดปุ่มดูการทำงานของ JavaScript ปุ่มกด
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1.5 bg-[#060911] border border-slate-800 rounded-lg text-xs font-bold text-sky-300">
                    {demoFoodResult || "พร้อมแล้วกดสุ่ม"}
                  </span>
                  <button
                    onClick={spinFood}
                    disabled={isFoodSpinning}
                    className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center space-x-1">
                    <Dice5 className="w-3.5 h-3.5" />
                    <span>{isFoodSpinning ? "สุ่ม..." : "สุ่มอาหาร"}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* 💼 MODULE 3: CAREER, LIFE ADAPTATION & MONETIZATION      */}
      {/* ======================================================== */}
      {activeSession === "adaptation" && (
        <div className="animate-fadeIn">
          <CareerLifeAdaptationCard fontSizes={fontSizes} />
        </div>
      )}

      {/* ======================================================== */}
      {/* 🏠 MODULE 4: FAMILY & DAILY LIFE AI KNOWLEDGE BASE       */}
      {/* ======================================================== */}
      {activeSession === "family" && (
        <div className="animate-fadeIn">
          <FamilyAiKnowledgeCard fontSizes={fontSizes} />
        </div>
      )}
    </div>
  );
}
