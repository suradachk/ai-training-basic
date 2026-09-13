import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Rocket,
  Sparkles,
  Bot,
  Zap,
  CheckCircle2,
  Copy,
  Check,
  Code2,
  Monitor,
  Wand2,
  FolderOpen,
  MessageSquare,
  Eye,
  Sliders,
  Palette,
  Bug,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Lightbulb,
  HeartHandshake,
  Layers,
  FileCode,
} from "lucide-react";

const NOCODE_PROJECT_TEMPLATES = [
  {
    id: "shop",
    title: "🛍️ 1. เว็บร้านค้า / เมนูอาหารของครอบครัว",
    tag: "ยอดนิยมอันดับ 1",
    desc: "สร้างเว็บโชว์สินค้าหรือเมนูอาหารประจำบ้าน มีรูปภาพ ราคา และปุ่มกดสั่งซื้อทัก LINE ได้ทันที",
    prompt: `ช่วยสร้างหน้าเว็บ "ร้านอาหารตามสั่ง & ขนมหวานครอบครัว" ให้หน่อยครับ
- ออกแบบโทนสีส้ม-ขาว อบอุ่น สะอาดตา ตัวหนังสือขนาดใหญ่อ่านง่าย
- มีหมวดหมู่: 1) อาหารจานเดียว 2) เครื่องดื่ม 3) ขนมหวาน
- แต่ละเมนูให้มี: ชื่ออาหาร, คำอธิบายสั้นๆ, รูปภาพประกอบ, ราคา
- มีระบบตะกร้าสินค้าอย่างง่าย (กดเพิ่มจำนวนได้) และคำนวณราคารวมให้อัตโนมัติ
- มีปุ่ม "กดสั่งซื้อผ่าน LINE" ที่กดแล้วจะสรุปรายการอาหารที่เลือกไปเปิดแอป LINE ทันที
- ทำระบบให้รองรับทั้งเปิดในมือถือและคอมพิวเตอร์`,
  },
  {
    id: "budget",
    title: "💰 2. สมุดบันทึกรายรับ-รายจ่ายในบ้าน",
    tag: "มีประโยชน์ทุกวัน",
    desc: "หน้าเว็บกรอกตัวเลขรายรับรายจ่ายง่ายๆ มีปุ่มกดเร็ว (ค่าอาหาร, ค่าน้ำไฟ) พร้อมกราฟสรุปยอดประจำเดือน",
    prompt: `ช่วยสร้างเว็บ "บันทึกรายรับ-รายจ่ายประจำบ้าน" สำหรับคุณพ่อคุณแม่ใช้งานง่ายๆ
- มีฟอร์มกรอกตัวเลข: วันที่, รายการ, หมวดหมู่ (อาหาร, ค่าน้ำไฟ, ช้อปปิ้ง, เดินทาง), จำนวนเงิน, ประเภท (รายรับ/รายจ่าย)
- มีปุ่มทางลัดกดเร็วสำหรับรายการที่จ่ายบ่อย (เช่น "กาแฟ 50 บ.", "อาหารกลางวัน 60 บ.")
- มีการ์ดสรุปยอด: 1) รายรับรวมเดือนนี้ 2) รายจ่ายรวม 3) เงินคงเหลือสุทธิ
- มีแผนภูมิวงกลม (Pie Chart) หรือแถบสีแสดงสัดส่วนว่าเราหมดเงินไปกับหมวดไหนมากที่สุด
- ข้อมูลบันทึกเก็บไว้ในเบราว์เซอร์ (Local Storage) เปิดใหม่แล้วข้อมูลไม่หาย`,
  },
  {
    id: "wheel",
    title: "🎲 3. วงล้อสุ่มของกิน & สุ่มจับสลากปีใหม่",
    tag: "สนุกสนานในบ้าน",
    desc: "เว็บวงล้อหมุนสุ่ม สำหรับแก้ปัญหา 'วันนี้กินอะไรดี?' หรือใช้จับของขวัญปีใหม่ของคนในครอบครัว",
    prompt: `ช่วยสร้างเว็บ "วงล้อสุ่มเมนูอาหาร & จับสลากครอบครัว"
- มีวงล้อหมุนสีสันสดใส มีเสียงเอฟเฟกต์และพลุกระดาษเวลาหยุดหมุน
- ให้ผู้ใช้สามารถพิมพ์เพิ่ม/ลบรายชื่อของกินหรือของขวัญในวงล้อได้เอง
- มีปุ่ม "หมุนวงล้อ" ขนาดใหญ่ กดแล้วจะค่อยๆ หมุนและชะลอจนหยุดที่ผู้โชคดี
- แสดงข้อความยินดีขนาดใหญ่บนหน้าจอเมื่อหมุนเสร็จ`,
  },
  {
    id: "memory",
    title: "📸 4. อัลบั้มความทรงจำ & แกลเลอรีครอบครัว",
    tag: "อบอุ่นใจ",
    desc: "เว็บรวมภาพถ่ายทริปท่องเที่ยวและเรื่องราวประทับใจ จัดเรียงสวยงามสำหรับแชร์ให้ญาติๆ ดู",
    prompt: `ช่วยสร้างเว็บ "อัลบั้มบันทึกความทรงจำทริปเที่ยวของครอบครัว"
- ดีไซน์สไตล์มินิมอล พื้นหลังสีครีม-เอิร์ธโทน สวยงามสบายตา
- มีไทม์ไลน์เล่าเรื่อง (Timeline): วันที่ 1, วันที่ 2, วันที่ 3 พร้อมใส่รูปภาพและคำบรรยายความรู้สึกสั้นๆ
- มีระบบกดดูรูปขนาดใหญ่ (Lightbox Zoom) และสไลด์โชว์รูปภาพอัตโนมัติ
- มีช่องสำหรับให้สมาชิกในบ้านพิมพ์ความรู้สึกหรือข้อความฝากไว้ใต้ภาพได้`,
  },
  {
    id: "document",
    title: "📂 5. ศูนย์รวมคู่มือ & เอกสารสำคัญประจำบ้าน",
    tag: "คนในบ้านค้นหาง่าย",
    desc: "เว็บรวบรวมเบอร์โทรฉุกเฉิน กรมธรรม์ประกัน ตารางนัดหมอ และคู่มือการใช้อุปกรณ์ในบ้าน",
    prompt: `ช่วยสร้างเว็บ "คู่มือข้อมูลสำคัญและเบอร์ฉุกเฉินประจำบ้าน"
- มีปุ่มโทรด่วนขนาดใหญ่ (เช่น 191, รถพยาบาล 1669, ดับเพลิง, เบอร์คุณหมอประจำตัว) กดจากมือถือแล้วโทรออกได้เลย
- มีหมวดหมู่จัดเก็บข้อมูล: 1) กรมธรรม์ประกันและโรงพยาบาล 2) รหัส Wi-Fi และคู่มือเครื่องใช้ไฟฟ้า 3) ตารางนัดหมายสำคัญ
- มีช่องค้นหา (Search Bar) พิมพ์ค้นหาคำ เช่น "ประกัน" หรือ "Wi-Fi" แล้วผลลัพธ์จะขึ้นทันที
- ดีไซน์ตัวหนังสือใหญ่ ชัดเจน อ่านง่ายสำหรับผู้ใหญ่`,
  },
];

const PROMPT_FIX_CHEATSHEET = [
  {
    category: "🎨 สั่งแก้สี & ปรับขนาดตัวหนังสือ",
    icon: Palette,
    color: "text-pink-400 bg-pink-950/40 border-pink-500/30",
    examples: [
      {
        need: "ตัวหนังสือเล็กไป ผู้ใหญ่อ่านยาก",
        prompt: "ช่วยขยายขนาดตัวหนังสือทั้งหมดให้ใหญ่ขึ้น 20% และเลือกใช้ฟอนต์ภาษาไทยแบบไม่มีหัว (เช่น Kanit หรือ Prompt) ให้อ่านง่าย สบายตา",
      },
      {
        need: "อยากเปลี่ยนโทนสีเว็บ",
        prompt: "เปลี่ยนธีมสีของเว็บจากสีมืด (Dark Mode) เป็นสีขาว-ครีม มินิมอล อบอุ่น และให้ปุ่มกดหลักเป็นสีเขียวมรกต",
      },
    ],
  },
  {
    category: "⚡ สั่งเพิ่มปุ่ม & ฟังก์ชันการทำงาน",
    icon: Wand2,
    color: "text-amber-400 bg-amber-950/40 border-amber-500/30",
    examples: [
      {
        need: "อยากให้มีปุ่มค้นหาข้อมูล",
        prompt: "เพิ่มช่องค้นหา (Search Box) ด้านบนสุด ให้ผู้ใช้พิมพ์ค้นหาชื่อรายการได้แบบเรียลไทม์",
      },
      {
        need: "อยากให้ดาวน์โหลดหรือแชร์ได้",
        prompt: "เพิ่มปุ่ม 'ดาวน์โหลดเป็น PDF' และปุ่ม 'แชร์หน้าเว็บนี้' ให้ผู้ใช้กดส่งต่อได้ง่ายๆ",
      },
    ],
  },
  {
    category: "🔧 สั่งแก้ปัญหาเมื่อเว็บแสดงผลผิด",
    icon: Bug,
    color: "text-sky-400 bg-sky-950/40 border-sky-500/30",
    examples: [
      {
        need: "เปิดหน้าเว็บแล้วหน้าจอดำ หรือปุ่มกดไม่ติด",
        prompt: "หน้าเว็บเปิดแล้วไม่แสดงผลข้อความ ช่วยตรวจดูว่ามีโค้ดตรงไหนผิดพลาด ตรวจสอบ Console Error แล้วแก้ไขให้กลับมาทำงานปกติทันทีครับ",
      },
      {
        need: "ในมือถือเปิดแล้วหน้าจอล้น",
        prompt: "หน้าจอบนมือถือแสดงผลแล้วตัวหนังสือตกขอบ ช่วยจัดให้เป็น Responsive Layout พอดีกับหน้าจอมือถือทุกรุ่น",
      },
    ],
  },
];

export default function AntigravityGuideView({ fontSizes }) {
  const [activeTab, setActiveTab] = useState("start"); // 'start' | 'templates' | 'builder' | 'cheatsheet' | 'mindset'
  const [copiedKey, setCopiedKey] = useState(null);

  // Custom Antigravity Prompt Builder State
  const [customType, setCustomType] = useState("ร้านค้าออนไลน์ & แคตตาล็อกเมนู");
  const [customTheme, setCustomTheme] = useState("อบอุ่น มินิมอล สีส้ม-ขาว อ่านง่าย");
  const [customAudience, setCustomAudience] = useState("คนในครอบครัว และลูกค้าทั่วไป");
  const [customFeature, setCustomFeature] = useState("มีปุ่มกดสั่งซื้อผ่าน LINE, มีระบบตะกร้าสินค้า และค้นหาได้");

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const customGeneratedPrompt = `[Role] คุณคือทีมพัฒนาเว็บและดีไซเนอร์มืออาชีพ
[Task] ช่วยสร้างหน้าเว็บ "${customType}" ให้เสร็จสมบูรณ์พร้อมใช้งาน
[Context]
- กลุ่มผู้ใช้งานหลัก: ${customAudience}
- ธีมและดีไซน์: ${customTheme}
- ฟังก์ชันสำคัญที่ต้องมี: ${customFeature}
[Format]
- เขียนโค้ดแบบครบวงจร แยกโครงสร้างสวยงาม
- มีคำอธิบายวิธีเปิดใช้งานหน้าเว็บเป็นภาษาไทยแบบเข้าใจง่ายสำหรับคนไม่เขียนโค้ด`;

  return (
    <div className="max-w-5xl mx-auto py-8 sm:py-12 space-y-12 animate-fadeIn">
      {/* 🌟 HERO BANNER */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500/20 to-purple-500/20 text-sky-300 border border-sky-500/30 shadow-sm">
          <Rocket className="w-4 h-4 text-purple-400 animate-pulse" />
          <span>Antigravity for Non-Programmers • ฉบับคนไม่เขียนโค้ด</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          สั่งสร้างเว็บ & แอปรอบตัวได้ดั่งใจ <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-300 to-emerald-400">
            โดยไม่ต้องเขียนโค้ดแม้แต่บรรทัดเดียว!
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
          เปลี่ยนบทบาทของคุณเป็น <strong className="text-white">"ผู้กำกับ / เจ้านาย"</strong> และให้{" "}
          <strong className="text-sky-300">Google Antigravity</strong> เป็น{" "}
          <strong className="text-emerald-300">"ทีมโปรแกรมเมอร์และดีไซเนอร์ส่วนตัว"</strong>{" "}
          แค่พิมพ์บอกความต้องการเป็นภาษาไทย ก็เนรมิตผลงานจริงได้ในไม่กี่นาที
        </p>
      </div>

      {/* 🧭 NAVIGATION SUB-TABS */}
      <div className="flex items-center space-x-1.5 bg-[#0f172a] p-1.5 rounded-2xl border border-slate-800 overflow-x-auto custom-scrollbar shadow-lg">
        <button
          onClick={() => setActiveTab("start")}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition whitespace-nowrap ${
            activeTab === "start"
              ? "bg-sky-600 text-white shadow-md"
              : "text-slate-400 hover:text-white hover:bg-slate-800/60"
          }`}
        >
          <Zap className="w-4 h-4 text-amber-300" />
          <span>1. Antigravity คืออะไร & 3 สเต็ปเริ่ม</span>
        </button>

        <button
          onClick={() => setActiveTab("templates")}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition whitespace-nowrap ${
            activeTab === "templates"
              ? "bg-purple-600 text-white shadow-md"
              : "text-slate-400 hover:text-white hover:bg-slate-800/60"
          }`}
        >
          <Sparkles className="w-4 h-4 text-purple-300" />
          <span>2. 5 ไอเดียโปรเจกต์พร้อมคำสั่ง</span>
        </button>

        <button
          onClick={() => setActiveTab("builder")}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition whitespace-nowrap ${
            activeTab === "builder"
              ? "bg-emerald-600 text-white shadow-md"
              : "text-slate-400 hover:text-white hover:bg-slate-800/60"
          }`}
        >
          <Wand2 className="w-4 h-4 text-emerald-300" />
          <span>3. เครื่องมือสร้างคำสั่งสั่งทำเว็บ</span>
        </button>

        <button
          onClick={() => setActiveTab("cheatsheet")}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition whitespace-nowrap ${
            activeTab === "cheatsheet"
              ? "bg-rose-600 text-white shadow-md"
              : "text-slate-400 hover:text-white hover:bg-slate-800/60"
          }`}
        >
          <Sliders className="w-4 h-4 text-rose-300" />
          <span>4. โพยสั่งแก้งานภาษาคน</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: WHAT IS ANTIGRAVITY & 3 STEPS TO START                            */}
      {/* ========================================================================= */}
      {activeTab === "start" && (
        <div className="space-y-8 animate-fadeIn">
          {/* Comparison Card: ChatGPT vs Antigravity */}
          <div className="minimal-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-br from-[#0c1427] via-[#080d19] to-[#04060d] space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">
                บทที่ 1 • เข้าใจพลังที่แท้จริง
              </span>
              <h2 className="text-2xl font-bold text-white">
                ChatGPT ต่างจาก Antigravity อย่างไร? (เข้าใจใน 1 นาที)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* ChatGPT Side */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center space-x-2.5 text-slate-300 font-bold text-base">
                  <Bot className="w-5 h-5 text-slate-400" />
                  <span>AI แชททั่วไป (เช่น ChatGPT / Gemini)</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  เหมือน **"ที่ปรึกษาที่นั่งคุยในห้อง"** เวลาเราถาม มันจะตอบเป็นข้อความหรือโค้ดยาวๆ แต่เราต้องก๊อปปี้ไปสร้างไฟล์ เปิดโปรแกรม และกดรันเองทั้งหมด ถ้าไม่รู้เรื่องคอมพิวเตอร์ก็ไปต่อไม่ถูก
                </p>
                <div className="text-xs text-amber-300/90 font-medium pt-2 border-t border-slate-800">
                  ⚠️ ต้องทำต่อเอง ต้องมีความรู้ติดตั้งโปรแกรม
                </div>
              </div>

              {/* Antigravity Side */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-950/50 to-purple-950/50 border border-sky-500/40 space-y-3">
                <div className="flex items-center space-x-2.5 text-sky-300 font-bold text-base">
                  <Rocket className="w-5 h-5 text-sky-400" />
                  <span>Google Antigravity (AI Agentic Coding)</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  เหมือน **"ทีมโปรแกรมเมอร์ส่วนตัวที่นั่งข้างโต๊ะคุณ"** เราแค่พูดภาษาไทยบอกสิ่งที่อยากได้ Antigravity จะเปิดโฟลเดอร์ เขียนโค้ด สร้างไฟล์ ออกแบบปุ่ม และเปิดหน้าเว็บให้ดูจริงทันที!
                </p>
                <div className="text-xs text-emerald-300 font-bold pt-2 border-t border-sky-500/30 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>✨ ลงมือทำให้ครบวงจร คนไม่รู้โค้ดก็มีผลงานได้</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 STEPS TO START */}
          <div className="minimal-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                บทที่ 2 • วิธีเริ่มต้นใช้งาน
              </span>
              <h2 className="text-2xl font-bold text-white">
                3 ขั้นตอนง่ายๆ สั่ง Antigravity เนรมิตผลงานใน 5 นาที
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Step 1 */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 relative overflow-hidden">
                <div className="w-8 h-8 rounded-xl bg-sky-600 text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                  1
                </div>
                <h3 className="text-base font-bold text-white">เปิดห้องทำงาน</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  สร้างโฟลเดอร์เปล่าในคอมพิวเตอร์ 1 โฟลเดอร์ (เช่น ตั้งชื่อว่า <code className="text-sky-300">my-shop</code>) แล้วเปิด Antigravity ขึ้นมา
                </p>
                <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800 flex items-center space-x-1">
                  <FolderOpen className="w-3.5 h-3.5 text-sky-400" />
                  <span>เปรียบเหมือน: เตรียมโต๊ะทำงานให้ทีมงาน</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 relative overflow-hidden">
                <div className="w-8 h-8 rounded-xl bg-purple-600 text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                  2
                </div>
                <h3 className="text-base font-bold text-white">สั่งงานเป็นภาษาไทย</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  พิมพ์บอกในช่องแชทว่าอยากได้เว็บแบบไหน สีอะไร มีปุ่มอะไรบ้าง เหมือนคุยกับคนทำเว็บทั่วไป
                </p>
                <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800 flex items-center space-x-1">
                  <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
                  <span>เปรียบเหมือน: สั่งอาหารตามสั่งแบบระบุเครื่องปรุง</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 relative overflow-hidden">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                  3
                </div>
                <h3 className="text-base font-bold text-white">ตรวจรับงาน & สั่งปรับแก้</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  ดูหน้าเว็บจริงที่ Antigravity สร้างขึ้น ถ้าอยากเปลี่ยนสี ปรับตัวหนังสือ หรือเพิ่มปุ่ม ก็แค่พิมพ์สั่งต่อได้ทันที!
                </p>
                <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800 flex items-center space-x-1">
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  <span>เปรียบเหมือน: เดินตรวจงานแล้วสั่งช่างเก็บรายละเอียด</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: 5 NO-CODE PROJECT TEMPLATES                                       */}
      {/* ========================================================================= */}
      {activeTab === "templates" && (
        <div className="space-y-6 animate-fadeIn">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider block">
              บทที่ 3 • ไอเดียผลงานจริง
            </span>
            <h2 className="text-2xl font-bold text-white">
              5 ไอเดียโปรเจกต์ที่คนในบ้านสั่งทำได้ทันที (พร้อมคำสั่งก๊อปปี้)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              เลือกโปรเจกต์ที่ต้องการ กดปุ่ม "คัดลอกคำสั่ง" แล้วนำไปวางใน Antigravity เพื่อเริ่มสร้างได้เลยครับ
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {NOCODE_PROJECT_TEMPLATES.map((item) => (
              <div
                key={item.id}
                className="minimal-card rounded-3xl p-6 sm:p-7 border border-slate-800 space-y-4 bg-gradient-to-br from-[#0b1222] to-[#060a14] hover:border-slate-700 transition shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">{item.desc}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold self-start sm:self-auto">
                    {item.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-400 flex items-center space-x-1.5">
                      <FileCode className="w-3.5 h-3.5" />
                      <span>คำสั่งภาษาไทยพร้อมใช้ (Prompt):</span>
                    </span>
                    <button
                      onClick={() => handleCopy(item.prompt, item.id)}
                      className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-sm"
                    >
                      {copiedKey === item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>คัดลอกแล้ว!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>คัดลอกคำสั่ง</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed">
                    {item.prompt}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: CUSTOM PROMPT BUILDER FOR ANTIGRAVITY                             */}
      {/* ========================================================================= */}
      {activeTab === "builder" && (
        <div className="minimal-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-br from-[#0c1427] via-[#080d19] to-[#04060d] space-y-6 shadow-2xl animate-fadeIn">
          <div className="space-y-2 border-b border-slate-800 pb-4">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
              เครื่องมือช่วยประกอบคำสั่ง
            </span>
            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
              <Wand2 className="w-6 h-6 text-emerald-400" />
              <span>เครื่องมือสร้างคำสั่งสั่ง Antigravity (Prompt Generator)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              เลือกสิ่งที่คุณต้องการ ระบบจะประกอบคำสั่งที่ชัดเจนแบบมืออาชีพให้คุณนำไปสั่ง Antigravity ได้ทันที
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Input 1 */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                1. ประเภทเว็บหรือเครื่องมือที่อยากสร้าง:
              </label>
              <input
                type="text"
                value={customType}
                onChange={(e) => setCustomType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
                placeholder="เช่น เว็บร้านกาแฟ, สมุดบันทึกความดัน"
              />
            </div>

            {/* Input 2 */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                2. ธีมและโทนสีที่ชอบ:
              </label>
              <input
                type="text"
                value={customTheme}
                onChange={(e) => setCustomTheme(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
                placeholder="เช่น โทนสีเขียวพาสเทล, มินิมอลขาวดำ"
              />
            </div>

            {/* Input 3 */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                3. ผู้ใช้งานหลักคือใคร:
              </label>
              <input
                type="text"
                value={customAudience}
                onChange={(e) => setCustomAudience(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
                placeholder="เช่น คุณแม่วัยเกษียณ, นักเรียน ม.ปลาย"
              />
            </div>

            {/* Input 4 */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                4. ฟังก์ชันสำคัญที่ต้องมี:
              </label>
              <input
                type="text"
                value={customFeature}
                onChange={(e) => setCustomFeature(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
                placeholder="เช่น ปุ่มกดแชร์, ตารางคำนวณอัตโนมัติ"
              />
            </div>
          </div>

          {/* Generated Result */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400">
                ✨ คำสั่งที่สร้างเสร็จแล้ว (นำไปวางใน Antigravity ได้เลย):
              </span>
              <button
                onClick={() => handleCopy(customGeneratedPrompt, "custom")}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-md"
              >
                {copiedKey === "custom" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>คัดลอกสำเร็จ!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>คัดลอกคำสั่งนี้</span>
                  </>
                )}
              </button>
            </div>

            <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed">
              {customGeneratedPrompt}
            </pre>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: PROMPT CHEAT SHEET FOR FIXING & REFINING                          */}
      {/* ========================================================================= */}
      {activeTab === "cheatsheet" && (
        <div className="space-y-6 animate-fadeIn">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider block">
              บทที่ 4 • โพยสั่งแก้งาน
            </span>
            <h2 className="text-2xl font-bold text-white">
              คลังประโยคสั่งแก้งานแบบภาษาคน (Prompt Cheat Sheet)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              เวลาตรวจงานแล้วอยากให้ปรับแก้ตรงไหน เลือกใช้ประโยคเหล่านี้สั่งต่อได้ทันทีครับ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PROMPT_FIX_CHEATSHEET.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="minimal-card rounded-3xl p-5 border border-slate-800 space-y-4 bg-slate-900/90 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2.5">
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${cat.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-white">{cat.category}</h3>
                    </div>

                    <div className="space-y-3 pt-2 border-t border-slate-800">
                      {cat.examples.map((ex, i) => (
                        <div key={i} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                          <span className="text-[11px] font-bold text-slate-300 block">
                            🎯 {ex.need}:
                          </span>
                          <p className="text-xs text-sky-200 font-mono italic leading-relaxed">
                            "{ex.prompt}"
                          </p>
                          <button
                            onClick={() => handleCopy(ex.prompt, `fix-${idx}-${i}`)}
                            className="text-[11px] text-slate-400 hover:text-white flex items-center space-x-1 transition pt-1"
                          >
                            {copiedKey === `fix-${idx}-${i}` ? (
                              <span className="text-emerald-400 font-bold">✓ คัดลอกแล้ว</span>
                            ) : (
                              <span>📋 คัดลอกประโยคนี้</span>
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4 Golden Rules */}
          <div className="minimal-card rounded-3xl p-6 sm:p-7 border border-emerald-500/30 bg-emerald-950/20 space-y-3">
            <h3 className="text-base font-bold text-emerald-300 flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5" />
              <span>4 กฎทองคำสั่งงาน Antigravity ให้ราบรื่นไม่มีสะดุด</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-2">
              <div className="flex items-start space-x-2">
                <span className="text-emerald-400 font-bold">1.</span>
                <span><strong>สั่งทีละส่วน (Step-by-Step)</strong>: เริ่มจากโครงร่างหลักก่อน แล้วค่อยสั่งตกแต่งสีและเพิ่มปุ่มทีละขั้น</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-emerald-400 font-bold">2.</span>
                <span><strong>มีตัวอย่างให้ดู (Few-shot)</strong>: ถ้านึกภาพไม่ออก บอกชื่อเว็บที่ชอบ เช่น "ขอหน้าตาเรียบง่ายเหมือน Apple"</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-emerald-400 font-bold">3.</span>
                <span><strong>ระบุคนใช้งานชัดเจน</strong>: บอกว่าคนใช้เป็นใคร (เช่น คุณยาย, เด็กประถม) เพื่อให้ AI เลือกขนาดตัวหนังสือที่เหมาะสม</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-emerald-400 font-bold">4.</span>
                <span><strong>ไม่ต้องกลัวพัง</strong>: ถ้าผลลัพธ์ไม่ถูกใจ แค่พิมพ์บอกว่า "ยกเลิกการเปลี่ยนแปลงเมื่อกี้ แล้วทำแบบ..." ได้ตลอดเวลา</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🚀 BOTTOM NAVIGATION LINKS */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
        <Link
          to="/student"
          className="text-xs sm:text-sm text-slate-400 hover:text-white flex items-center space-x-1.5 transition"
        >
          <span>← กลับไปโหมดคนเรียน (Student Mode)</span>
        </Link>

        <Link
          to="/"
          className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-bold flex items-center space-x-2 transition border border-slate-700"
        >
          <span>กลับหน้าหลัก</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
