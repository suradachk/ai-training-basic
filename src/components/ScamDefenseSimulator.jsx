import React, { useState } from "react";
import {
  ShieldAlert,
  ShieldCheck,
  Copy,
  Check,
  Sparkles,
  AlertTriangle,
  HelpCircle,
  MessageSquareWarning,
  FileCheck,
} from "lucide-react";

const SCAM_CASES = [
  {
    id: "sms",
    title: "📩 Case 1: SMS / LINE แจกเงินเงินกู้ด่วน",
    suspiciousMsg: "ยินดีด้วย! คุณได้รับสิทธิ์รับเงินเยียวยาพิเศษจากรัฐบาล 15,000 บาท ด่วนมีจำนวนจำกัด คลิกยืนยันตัวตนที่ bit.ly/gov-th-aid99 ทันที",
    dangerLevel: "อันตรายสูงมาก (Phishing & ดูดเงิน)",
    dangerDesc: "มิจฉาชีพสร้างลิงก์ปลอมเลียนแบบหน่วยงานรัฐ หากกดเข้าไปจะถูกหลอกให้กรอกข้อมูลบัตรประชาชน รหัส OTP หรือติดตั้งแอปดูดเงิน",
    factCheckPrompt: `[Role] คุณคือผู้เชี่ยวชาญด้านความปลอดภัยทางไซเบอร์และการตรวจสอบข่าวปลอม
[Task] ช่วยวิเคราะห์ข้อความ SMS/LINE ด้านล่างนี้ว่ามีความเสี่ยงเป็นมิจฉาชีพหรือไม่
[Context] ข้อความที่ได้รับ: "ยินดีด้วย! คุณได้รับสิทธิ์รับเงินเยียวยาพิเศษจากรัฐบาล 15,000 บาท ด่วนมีจำนวนจำกัด คลิกยืนยันตัวตนที่ bit.ly/gov-th-aid99 ทันที"
[Format] ตอบสั้นๆ 3 ข้อ: 1) ความเสี่ยง (จริงหรือหลอก) 2) จุดสังเกตที่น่าสงสัย 3) คำแนะนำสิ่งที่ต้องทำทันทีสำหรับคนในบ้าน`,
  },
  {
    id: "health",
    title: "🌿 Case 2: ข่าวลือสุขภาพแชร์ในกลุ่มครอบครัว",
    suspiciousMsg: "ด่วนที่สุด! แพทย์แผนโบราณค้นพบว่า ต้มน้ำใบมะละกอกับมะนาว ดื่มเช้า-เย็นติดต่อกัน 3 วัน สามารถฆ่าเซลล์มะเร็งได้ 100% โรงพยาบาลปิดข่าวเพราะกลัวยาขายไม่ออก แชร์ต่อได้บุญ",
    dangerLevel: "อันตรายปานกลาง-สูง (หลงเชื่อจนละเลยการรักษาแพทย์แผนปัจจุบัน)",
    dangerDesc: "การแชร์ข้อมูลสุขภาพที่ไม่มีงานวิจัยรองรับ อาจทำให้ผู้ป่วยหยุดยาหรือปฏิเสธการรักษาที่ถูกต้อง",
    factCheckPrompt: `[Role] คุณคือแพทย์และนักวิจัยด้านวิทยาศาสตร์สุขภาพ
[Task] ช่วย Fact-check และตรวจสอบข้อเท็จจริงทางการแพทย์ของข้อความที่แชร์กันใน LINE
[Context] ข้อความ: "ต้มน้ำใบมะละกอกับมะนาว ดื่มเช้า-เย็น 3 วัน ฆ่าเซลล์มะเร็งได้ 100% โรงพยาบาลปิดข่าว"
[Format] ตอบด้วยภาษาที่สุภาพและเข้าใจง่าย: 1) ความจริงตามหลักฐานทางการแพทย์ 2) ข้อควรระวัง 3) วิธีอธิบายให้ผู้ใหญ่ในบ้านเข้าใจโดยไม่ขัดแย้ง`,
  },
  {
    id: "callcenter",
    title: "📞 Case 3: แก๊ง Call Center โทรแจ้งพัสดุตกค้าง / คดีฟอกเงิน",
    suspiciousMsg: "สวัสดีค่ะ จากศาลอาญา/บริษัทขนส่ง มีพัสดุชื่อคุณถูกอายัด พบสิ่งผิดกฎหมาย ขอให้แอดไลน์เพื่อคุยกับเจ้าหน้าที่ตำรวจและโอนเงินเข้าบัญชีกลางเพื่อตรวจสอบความบริสุทธิ์",
    dangerLevel: "อันตรายสูงสุด (หลอกโอนเงินหมดบัญชี)",
    dangerDesc: "หน่วยงานรัฐ ตำรวจ หรือขนส่งตัวจริง จะไม่มีการให้โอนเงินเพื่อตรวจสอบความบริสุทธิ์เด็ดขาด",
    factCheckPrompt: `[Role] คุณคือที่ปรึกษาป้องกันภัยมิจฉาชีพทางโทรศัพท์
[Task] ช่วยประเมินสถานการณ์ว่าสิ่งที่ได้รับจากการโทรศัพท์นี้เป็นมิจฉาชีพหรือไม่
[Context] มีสายโทรมาอ้างว่ามีพัสดุตกค้างเกี่ยวข้องกับคดีฟอกเงิน และสั่งให้แอด LINE ตำรวจเพื่อโอนเงินตรวจสอบ
[Format] สรุป 1) ยืนยันว่าใช่มิจฉาชีพหรือไม่ 2) กฎเหล็กของหน่วยงานรัฐตัวจริง 3) บทสนทนาที่ควรใช้ตัดสายทิ้งทันที`,
  },
];

export default function ScamDefenseSimulator() {
  const [activeCaseId, setActiveCaseId] = useState("sms");
  const [copiedKey, setCopiedKey] = useState(null);

  const activeCase = SCAM_CASES.find((c) => c.id === activeCaseId) || SCAM_CASES[0];

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="minimal-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-br from-[#0c1427] via-[#090f1d] to-[#04060d] space-y-6 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="space-y-1.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-semibold text-amber-300">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>เกราะคุ้มกันภัยไซเบอร์สำหรับทุกคนในบ้าน</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            🛡️ ห้องซ้อมจับมิจฉาชีพ & สแกนข่าวปลอม (Scam & Fake News Defense)
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            ฝึกใช้ AI เป็นผู้ช่วยตรวจเช็ก SMS ลิงก์แปลกปลอม และข่าวลือใน LINE ก่อนหลงเชื่อหรือกดโอนเงิน
          </p>
        </div>
      </div>

      {/* Case Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {SCAM_CASES.map((sc) => {
          const isActive = activeCaseId === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => setActiveCaseId(sc.id)}
              className={`p-4 rounded-2xl text-left border transition flex flex-col justify-between space-y-2 ${
                isActive
                  ? "bg-slate-800 border-amber-500/60 shadow-md ring-1 ring-amber-500/30"
                  : "bg-slate-900/60 hover:bg-slate-800/60 border-slate-800"
              }`}
            >
              <span className="text-xs sm:text-sm font-bold text-white">{sc.title}</span>
              <span className="text-[11px] text-amber-400/90 font-mono">{sc.dangerLevel}</span>
            </button>
          );
        })}
      </div>

      {/* Case Simulation Box */}
      <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-5 animate-fadeIn">
        {/* Suspicious Message Card */}
        <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 space-y-2">
          <div className="flex items-center space-x-2 text-rose-300 text-xs font-bold">
            <MessageSquareWarning className="w-4 h-4" />
            <span>ตัวอย่างข้อความต้องสงสัยที่ได้รับ:</span>
          </div>
          <p className="text-xs sm:text-sm text-white font-mono bg-slate-950/80 p-3 rounded-xl border border-slate-800 leading-relaxed">
            "{activeCase.suspiciousMsg}"
          </p>
          <div className="text-xs text-rose-300/90 leading-relaxed pt-1">
            <strong>⚠️ จุดอันตราย:</strong> {activeCase.dangerDesc}
          </div>
        </div>

        {/* AI Fact-check Prompt */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-sky-400 flex items-center space-x-1.5">
              <FileCheck className="w-4 h-4 text-sky-300" />
              <span>ก๊อปปี้คำสั่งนี้ไปวางถาม AI (ChatGPT / Gemini):</span>
            </span>
            <button
              onClick={() => handleCopy(activeCase.factCheckPrompt, activeCase.id)}
              className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-sm"
            >
              {copiedKey === activeCase.id ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>คัดลอกคำสั่งแล้ว!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>คัดลอก Prompt ตรวจสอบ</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed">
            {activeCase.factCheckPrompt}
          </pre>
        </div>

        {/* 4 Golden Rules */}
        <div className="pt-3 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80">
            <span className="text-amber-400 font-bold text-xs block mb-1">1. ไม่รีบ</span>
            <span className="text-[11px] text-slate-400">มิจฉาชีพชอบขู่ให้ตกใจ</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80">
            <span className="text-rose-400 font-bold text-xs block mb-1">2. ไม่กดลิงก์</span>
            <span className="text-[11px] text-slate-400">อย่ากดลิงก์แปลกใน SMS/LINE</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80">
            <span className="text-red-400 font-bold text-xs block mb-1">3. ไม่โอนเด็ดขาด</span>
            <span className="text-[11px] text-slate-400">ตำรวจจริงไม่ให้โอนเงินตรวจ</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80">
            <span className="text-emerald-400 font-bold text-xs block mb-1">4. ถาม AI ช่วยเช็ก</span>
            <span className="text-[11px] text-slate-400">ให้ AI ช่วยจับพิรุธเสมอ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
