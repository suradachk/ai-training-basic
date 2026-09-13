import React, { useState } from "react";
import {
  HelpCircle,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Trophy,
  ArrowRight,
  Share2,
  Check,
  Zap,
} from "lucide-react";

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "1. ปกติแล้ว เวลาที่คุณต้องการหาข้อมูลหรือแก้ปัญหา คุณทำอย่างไร?",
    options: [
      { text: "พิมพ์ค้นหาใน Google ทีละคำ แล้วเปิดอ่านทีละเว็บเอง", points: 1 },
      { text: "พิมพ์ถาม AI (เช่น ChatGPT / Gemini) ให้ช่วยสรุปคำตอบให้ตรงประเด็น", points: 2 },
      { text: "สั่ง AI โดยระบุว่าให้สวมบทบาทเป็นผู้เชี่ยวชาญ และส่งตัวอย่างคำตอบที่ต้องการไปด้วย", points: 3 },
      { text: "เชื่อมต่อ AI เข้ากับเอกสาร โน้ตส่วนตัว หรือระบบทำงานอัตโนมัติ", points: 4 },
    ],
  },
  {
    id: 2,
    question: "2. เวลาสั่งงาน AI ข้อไหนตรงกับสิ่งที่คุณทำบ่อยที่สุด?",
    options: [
      { text: "พิมพ์สั้นๆ ห้วนๆ เช่น 'ช่วยเขียนเรียงความ' หรือ 'แปลไทย'", points: 1 },
      { text: "ใช้สูตรสั่งงานชัดเจน (กำหนด Role, Task, Context, Format) และแนบตัวอย่าง", points: 2 },
      { text: "สร้างผู้ช่วยส่วนตัว (Custom GPT / Gem) ที่จำประวัติและนิสัยการทำงานของเราไว้ล่วงหน้า", points: 3 },
      { text: "ให้ AI ทำงานร่วมกันหลายตัว แบ่งหน้าที่ค้นหา วิเคราะห์ และเขียนสรุปเป็นกระบวนการ", points: 5 },
    ],
  },
  {
    id: 3,
    question: "3. ในชีวิตประจำวัน คุณนำ AI มาช่วยเรื่องอะไรบ้าง?",
    options: [
      { text: "ยังไม่ค่อยได้ใช้ หรือใช้แค่ถามเล่นสนุกๆ คลายเหงา", points: 1 },
      { text: "ใช้ช่วยร่างอีเมล, สรุปข่าว, ติวการบ้าน หรือแปลภาษาต่างประเทศ", points: 2 },
      { text: "ใช้เป็นเลขาคู่คิด 24 ชม. เช่น โค้ชสุขภาพ, ติวเตอร์ประจำบ้าน, วางแผนตารางชีวิต", points: 3 },
      { text: "สร้างผลงานที่ลดเวลาทำงานประจำจาก 5 ชั่วโมงเหลือไม่กี่นาทีอย่างต่อเนื่อง", points: 4 },
    ],
  },
  {
    id: 4,
    question: "4. เมื่อ AI ตอบข้อมูลกลับมา คุณมีวิธีรับมืออย่างไร?",
    options: [
      { text: "เชื่อข้อมูลทันทีและก๊อปปี้ไปส่งต่อเลย", points: 1 },
      { text: "อ่านตรวจทานก่อน และเอะใจตรวจสอบความจริง (Fact-check) เสมอเพราะรู้ว่า AI มีโอกาสแต่งเรื่อง (Hallucination)", points: 2 },
      { text: "สั่งให้ AI ระบุแหล่งอ้างอิง และปรับจูนคำสั่ง (Refine Prompt) ให้คมชัดขึ้นจนกว่าจะได้ผลลัพธ์ที่สมบูรณ์แบบ", points: 3 },
      { text: "ตั้งระบบให้ AI ตรวจสอบความถูกต้องของคำตอบตัวเองอัตโนมัติ (Self-reflection / Verification)", points: 5 },
    ],
  },
  {
    id: 5,
    question: "5. ถ้ามีงานยาวๆ หรืองานซ้ำซ้อน คุณจัดการอย่างไร?",
    options: [
      { text: "นั่งทำเองทีละขั้นตอนเหมือนเดิม", points: 1 },
      { text: "ทยอยก๊อปปี้ข้อความทีละส่วนมาให้ AI ช่วยสรุปทีละหน้า", points: 2 },
      { text: "อัปโหลดเอกสารทั้งเล่ม (PDF / สเปรดชีต) ให้ AI เช่น NotebookLM สรุปและสร้างเป็นคู่มือทันที", points: 3 },
      { text: "ใช้เครื่องมืออัตโนมัติ (เช่น Make / Zapier / AI Agents) ให้ระบบจัดการแทนตั้งแต่ต้นจนจบ", points: 5 },
    ],
  },
];

const LEVEL_PROFILES = {
  1: {
    level: "Level 1: ผู้เริ่มต้นค้นหา (AI Explorer)",
    badge: "Level 1 • 75% ของประชากรโลก",
    color: "from-sky-500 to-blue-600",
    border: "border-sky-500/40",
    bg: "bg-sky-950/40",
    text: "text-sky-300",
    desc: "คุณเริ่มรู้จักและใช้ AI ถามตอบแทน Google ได้คล่องแคล่ว ช่วยประหยัดเวลาอ่านได้เยอะมาก!",
    strengths: ["ค้นหาข้อมูลไวขึ้น", "เปิดใจลองใช้เทคโนโลยีใหม่", "อ่านสรุปเบื้องต้นได้สบาย"],
    nextStep: "ลองก้าวสู่ Level 2 โดยใช้สูตรสั่งงาน R-T-C-F (ระบุบทบาท + งาน + บริบท + รูปแบบ) จะได้คำตอบที่คมชัดขึ้น 300%",
  },
  2: {
    level: "Level 2: นักสั่งการมือฉมัง (Prompt Master)",
    badge: "Level 2 • 18% ของประชากรโลก",
    color: "from-emerald-500 to-teal-600",
    border: "border-emerald-500/40",
    bg: "bg-emerald-950/40",
    text: "text-emerald-300",
    desc: "คุณเข้าใจการสื่อสารกับ AI อย่างเป็นระบบ! สั่งงานคม มีตัวอย่าง และตรวจทานความถูกต้องเสมอ",
    strengths: ["สั่งงานด้วยสูตร RTCF ได้แม่นยำ", "มีทักษะ Fact-checking", "ลดเวลาทำงานเอกสารได้หลายเท่า"],
    nextStep: "ลองก้าวสู่ Level 3 โดยการสร้าง 'เลขา AI ประจำตัว' (Custom Instructions / Gems) ที่จำบริบทของคุณไว้ตลอด 24 ชม.",
  },
  3: {
    level: "Level 3: ผู้มีเลขาและที่ปรึกษา 24 ชม. (AI Copilot Leader)",
    badge: "Level 3 • 5% ของประชากรโลก (Top Tier)",
    color: "from-purple-500 to-indigo-600",
    border: "border-purple-500/40",
    bg: "bg-purple-950/40",
    text: "text-purple-300",
    desc: "สุดยอดมาก! คุณอยู่ในกลุ่ม Top 5% ของโลกที่มีผู้ช่วย AI ส่วนตัวคอยทำงานและให้คำปรึกษาตลอด 24 ชม.",
    strengths: ["มีเลขา/โค้ชส่วนตัวเฉพาะทาง", "ใช้ AI จัดการเอกสารและงานซับซ้อน", "ชีวิตสบายขึ้นอย่างเห็นได้ชัด"],
    nextStep: "ลองก้าวสู่ Level 4 โดยนำ AI ไปต่อเข้ากับเวิร์กโฟลว์อัตโนมัติ หรือใช้เครื่องมือ AI CLI จัดการงานคอมพิวเตอร์",
  },
  4: {
    level: "Level 4: ผู้สร้างระบบอัตโนมัติ (Workflow Architect)",
    badge: "Level 4 • 1.5% ของประชากรโลก (Super Elite)",
    color: "from-amber-500 to-orange-600",
    border: "border-amber-500/40",
    bg: "bg-amber-950/40",
    text: "text-amber-300",
    desc: "คุณคือผู้นำยุค AI อย่างแท้จริง! เปลี่ยนงานที่กินเวลาทั้งวันให้เสร็จในไม่กี่วินาทีด้วยระบบอัตโนมัติ",
    strengths: ["สร้างเวิร์กโฟลว์ AI เชื่อมต่อข้อมูล", "ควบคุม AI ทำงานหลายขั้นตอน", "ประสิทธิภาพการทำงานสูงกว่าคนทั่วไป 10 เท่า"],
    nextStep: "ก้าวสู่ Level 5 ด้วยการจัดตั้ง Autonomous Multi-Agent Teams ที่ทำงานประสานกันเป็นองค์กรสมองกล",
  },
  5: {
    level: "Level 5: จอมทัพสมองกล (Multi-Agent Grandmaster)",
    badge: "Level 5 • < 0.5% ของประชากรโลก (Grandmaster)",
    color: "from-rose-500 to-red-600",
    border: "border-rose-500/40",
    bg: "bg-rose-950/40",
    text: "text-rose-300",
    desc: "ระดับตำนาน! คุณสามารถสั่งการทีม Agent ให้เขียนโปรแกรม ออกแบบ วิเคราะห์ และขับเคลื่อนโครงการได้ด้วยตัวเอง",
    strengths: ["ออกแบบโครงข่าย Multi-Agent", "สร้างระบบ AI อัจฉริยะแบบไร้ขีดจำกัด", "สร้างมูลค่าและนวัตกรรมใหม่"],
    nextStep: "ถ่ายทอดความรู้ ส่งต่อแรงบันดาลใจ และช่วยทุกคนในครอบครัวและชุมชนให้ก้าวทัน AI อย่างปลอดภัย!",
  },
};

export default function AILevelQuiz() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSelectOption = (points) => {
    const newAnswers = { ...answers, [currentQuestionIdx]: points };
    setAnswers(newAnswers);

    if (currentQuestionIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const calculateResultLevel = () => {
    const totalPoints = Object.values(answers).reduce((a, b) => a + b, 0);
    const avgScore = totalPoints / QUIZ_QUESTIONS.length;

    if (avgScore <= 1.4) return 1;
    if (avgScore <= 2.4) return 2;
    if (avgScore <= 3.4) return 3;
    if (avgScore <= 4.4) return 4;
    return 5;
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestionIdx(0);
    setIsFinished(false);
  };

  const currentQ = QUIZ_QUESTIONS[currentQuestionIdx];
  const resultLevel = isFinished ? calculateResultLevel() : null;
  const profile = resultLevel ? LEVEL_PROFILES[resultLevel] : null;

  const handleShare = () => {
    const text = `🎯 ฉันทำแบบทดสอบวัดระดับ AI แล้ว ได้ผลลัพธ์เป็น "${profile.level}" (${profile.badge})! ลองมาทดสอบระดับ AI ของคุณได้ที่นี่เลย!`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="minimal-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-br from-[#0c1427] via-[#080d19] to-[#04060d] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="space-y-1.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>แบบทดสอบประเมินตนเอง (5 ข้อสั้นๆ)</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
            <span>🎯 แบบทดสอบวัดระดับทักษะ AI ประจำบ้าน</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            ค้นหาว่าคุณและคนในบ้านใช้งาน AI อยู่ที่ Level ไหน และทำอย่างไรถึงจะอัปเลเวลได้
          </p>
        </div>

        {!isFinished && (
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3.5 py-1.5 rounded-xl border border-slate-800 self-start sm:self-auto">
            <span>คำถามที่ {currentQuestionIdx + 1} / {QUIZ_QUESTIONS.length}</span>
          </div>
        )}
      </div>

      {/* QUIZ BODY */}
      {!isFinished ? (
        <div className="pt-6 space-y-6 animate-fadeIn">
          {/* Progress Bar */}
          <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-sky-500 to-emerald-400 h-full transition-all duration-300 rounded-full"
              style={{ width: `${((currentQuestionIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="space-y-3">
            <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
              {currentQ.question}
            </h4>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt.points)}
                className="text-left p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-sky-500/50 transition duration-150 flex items-start space-x-3 group"
              >
                <span className="w-7 h-7 rounded-xl bg-slate-800 group-hover:bg-sky-600 border border-slate-700 group-hover:border-sky-500 text-xs font-bold text-slate-300 group-hover:text-white flex items-center justify-center shrink-0 transition">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-xs sm:text-sm text-slate-200 group-hover:text-white leading-relaxed pt-0.5">
                  {opt.text}
                </span>
              </button>
            ))}
          </div>

          {currentQuestionIdx > 0 && (
            <div className="flex justify-between pt-2">
              <button
                onClick={() => setCurrentQuestionIdx((prev) => prev - 1)}
                className="text-xs text-slate-400 hover:text-white transition"
              >
                ← ย้อนกลับไปข้อก่อนหน้า
              </button>
            </div>
          )}
        </div>
      ) : (
        /* RESULT VIEW */
        <div className="pt-6 space-y-6 animate-fadeIn">
          <div className={`rounded-3xl p-6 sm:p-8 border ${profile.border} ${profile.bg} space-y-5 text-center sm:text-left relative overflow-hidden`}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-2">
                <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950/60 border ${profile.border} ${profile.text}`}>
                  <Trophy className="w-3.5 h-3.5" />
                  <span>{profile.badge}</span>
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {profile.level}
                </h4>
                <p className="text-sm text-slate-200 max-w-xl leading-relaxed">
                  {profile.desc}
                </p>
              </div>

              <div className="shrink-0 w-24 h-24 rounded-2xl bg-slate-950/80 border border-slate-700/60 flex flex-col items-center justify-center p-3 shadow-inner">
                <span className="text-xs text-slate-400 font-mono">ระดับของคุณ</span>
                <span className={`text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${profile.color}`}>
                  L{resultLevel}
                </span>
              </div>
            </div>

            {/* Strengths & Superpowers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 text-left">
              <div className="space-y-2 bg-slate-950/40 p-4 rounded-2xl border border-slate-800/60">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>จุดเด่นที่คุณทำได้ยอดเยี่ยม:</span>
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {profile.strengths.map((st, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{st}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 bg-slate-950/40 p-4 rounded-2xl border border-slate-800/60">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block flex items-center space-x-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>คำแนะนำเพื่อก้าวสู่ระดับถัดไป (Pro Tip):</span>
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {profile.nextStep}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              onClick={handleReset}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-2 transition border border-slate-700"
            >
              <RotateCcw className="w-4 h-4" />
              <span>ทำแบบทดสอบใหม่อีกครั้ง</span>
            </button>

            <button
              onClick={handleShare}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center space-x-2 transition shadow-lg"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? "คัดลอกผลลัพธ์แล้ว!" : "แชร์ผลลัพธ์ระดับ AI ของฉัน"}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
