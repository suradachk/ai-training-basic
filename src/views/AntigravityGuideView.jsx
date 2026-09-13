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
  Download,
  Terminal,
  Play,
  Square,
  BookOpen,
  Cpu,
  Settings,
  Flame,
  FileText,
  MousePointerClick,
  Laptop,
  Globe,
  Server,
  Network,
  Cloud,
  HardDrive,
  Share2,
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

const SKILL_EXAMPLES = [
  {
    id: "designer",
    name: "thai-family-ui",
    title: "🎨 สกิลดีไซเนอร์ประจำบ้าน (Family UI Designer)",
    desc: "สอนให้ AI ทุกครั้งที่สร้างเว็บ ต้องใช้ฟอนต์ Kanit ตัวหนังสือใหญ่ สีอบอุ่นสบายตา เหมาะกับผู้ใหญ่",
    folderPath: ".agents/skills/thai-family-ui/SKILL.md",
    skillContent: `---
name: thai-family-ui
description: สกิลควบคุมการออกแบบหน้าเว็บให้สวยงาม ตัวหนังสือขนาดใหญ่อ่านง่าย เหมาะสำหรับทุกคนในครอบครัว
---

# Family UI Design Guidelines
ทุกครั้งที่คุณสร้างหรือแก้ไขหน้าเว็บ ให้ยึดหลักเกณฑ์ต่อไปนี้เสมอ:
1. **Typography**: นำเข้าและใช้ฟอนต์ภาษาไทย 'Kanit' หรือ 'Prompt' เสมอ
2. **Font Size**: ตัวหนังสือเนื้อหาหลักต้องไม่เล็กกว่า 16px (text-base) และหัวข้อต้องเด่นชัด
3. **Color Palette**: ใช้สีโทนสบายตา (Soft Warm / Modern Minimal) ไม่แสบตา
4. **Button & Touch**: ปุ่มกดต้องมีขนาดใหญ่ (อย่างน้อย py-3 px-5) กดง่ายบนหน้าจอมือถือ
5. **Language**: ใช้ภาษาไทยที่สุภาพ อบอุ่น เป็นมิตร เข้าใจง่าย ไม่ใช้ศัพท์เทคนิคซับซ้อน`,
  },
  {
    id: "discuss",
    name: "discuss",
    title: "🧠 สกิลคู่คิดวิเคราะห์ & ที่ปรึกษาครอบครัว (Discussion Partner)",
    desc: "สอนให้ AI วิเคราะห์อย่างรอบคอบ เปรียบเทียบข้อดีข้อเสีย และแปลงเรื่องยากให้เป็นภาษาครอบครัว",
    folderPath: ".agents/skills/discuss/SKILL.md",
    skillContent: `---
name: discuss
description: คู่คิดและที่ปรึกษาเชิงวิเคราะห์ ช่วยคิด เปรียบเทียบ ตกผลึกประเด็น และออกแบบแนวทางให้ทุกคนในครอบครัวเข้าใจ
---

# Analytical & Discussion Guidelines
เมื่อผู้ใช้ชวนคุยหรือปรึกษา ให้ดำเนินการดังนี้:
1. **Multi-Generation Perspective**: มองผ่านแว่นของสมาชิกทุกวัยในบ้าน (ผู้สูงอายุ, คนทำงาน, นักเรียน)
2. **Value vs Risk**: ชี้ให้เห็นทั้งคุณค่าความคุ้มค่า และข้อควรระวังด้านความปลอดภัย
3. **Analogy-Driven**: เปรียบเปรยเรื่องยากให้เป็นภาพจำง่ายๆ ในชีวิตประจำวัน
4. **Actionable Outputs**: ทุกคำแนะนำต้องสรุปเป็นสิ่งที่ลงมือทำได้จริง หรือเป็น Prompt พร้อมใช้`,
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
  const [activeTab, setActiveTab] = useState("install"); // 'install' | 'run' | 'skills' | 'templates' | 'builder' | 'cheatsheet'
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
        <div className="inline-flex items-center space-x-2 text-xs font-semibold px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500/20 via-purple-500/20 to-emerald-500/20 text-sky-300 border border-sky-500/30 shadow-sm">
          <Rocket className="w-4 h-4 text-purple-400 animate-pulse" />
          <span>Antigravity Master Guide • คู่มือฉบับสมบูรณ์สำหรับคนไม่เขียนโค้ด</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          ตั้งแต่ติดตั้งโปรแกรม สั่งรันโค้ด <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-300 to-emerald-400">
            จนถึงสร้างแอป & ระบบ Skills ส่วนตัว!
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
          คู่มือแบบ Step-by-Step ที่พาคุณเริ่มต้นจาก 0: ติดตั้ง VS Code + Antigravity, เปิดโปรเจกต์, 
          รันไฟล์ HTML / React / TSX, และสร้าง Custom Skills ให้ AI จดจำสไตล์การทำงานของคุณตลอดไป
        </p>
      </div>

      {/* 🧭 NAVIGATION SUB-TABS (6 CHAPTERS) */}
      <div className="flex items-center space-x-1.5 bg-[#0f172a] p-1.5 rounded-2xl border border-slate-800 overflow-x-auto custom-scrollbar shadow-lg">
        <button
          onClick={() => setActiveTab("install")}
          className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-1.5 transition whitespace-nowrap ${
            activeTab === "install"
              ? "bg-sky-600 text-white shadow-md"
              : "text-slate-400 hover:text-white hover:bg-slate-800/60"
          }`}
        >
          <Download className="w-4 h-4 text-sky-300" />
          <span>1. ติดตั้ง VS Code & Antigravity</span>
        </button>

        <button
          onClick={() => setActiveTab("run")}
          className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-1.5 transition whitespace-nowrap ${
            activeTab === "run"
              ? "bg-emerald-600 text-white shadow-md"
              : "text-slate-400 hover:text-white hover:bg-slate-800/60"
          }`}
        >
          <Play className="w-4 h-4 text-emerald-300" />
          <span>2. สร้างโปรเจกต์ & วิธีรันโค้ด</span>
        </button>

        <button
          onClick={() => setActiveTab("skills")}
          className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-1.5 transition whitespace-nowrap ${
            activeTab === "skills"
              ? "bg-indigo-600 text-white shadow-md"
              : "text-slate-400 hover:text-white hover:bg-slate-800/60"
          }`}
        >
          <Cpu className="w-4 h-4 text-indigo-300" />
          <span>3. สร้าง Skills ประจำตัว 🧠</span>
        </button>

        <button
          onClick={() => setActiveTab("templates")}
          className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-1.5 transition whitespace-nowrap ${
            activeTab === "templates"
              ? "bg-purple-600 text-white shadow-md"
              : "text-slate-400 hover:text-white hover:bg-slate-800/60"
          }`}
        >
          <Sparkles className="w-4 h-4 text-purple-300" />
          <span>4. 5 ไอเดียโปรเจกต์พร้อมคำสั่ง</span>
        </button>

        <button
          onClick={() => setActiveTab("builder")}
          className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-1.5 transition whitespace-nowrap ${
            activeTab === "builder"
              ? "bg-teal-600 text-white shadow-md"
              : "text-slate-400 hover:text-white hover:bg-slate-800/60"
          }`}
        >
          <Wand2 className="w-4 h-4 text-teal-300" />
          <span>5. เครื่องมือสร้างคำสั่ง</span>
        </button>

        <button
          onClick={() => setActiveTab("cheatsheet")}
          className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-1.5 transition whitespace-nowrap ${
            activeTab === "cheatsheet"
              ? "bg-rose-600 text-white shadow-md"
              : "text-slate-400 hover:text-white hover:bg-slate-800/60"
          }`}
        >
          <Sliders className="w-4 h-4 text-rose-300" />
          <span>6. โพยสั่งแก้งาน</span>
        </button>

        <button
          onClick={() => setActiveTab("deploy")}
          className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-1.5 transition whitespace-nowrap ${
            activeTab === "deploy"
              ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md font-extrabold"
              : "text-amber-300 hover:text-white hover:bg-amber-950/50"
          }`}
        >
          <Globe className="w-4 h-4 text-amber-300" />
          <span>7. นำเว็บขึ้นออนไลน์ (GitHub & Vercel) 🌐</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* CHAPTER 1: INSTALLATION (VS CODE + ANTIGRAVITY + NODE.JS)                */}
      {/* ========================================================================= */}
      {activeTab === "install" && (
        <div className="space-y-8 animate-fadeIn">
          {/* Header */}
          <div className="minimal-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-br from-[#0c1427] via-[#080d19] to-[#04060d] space-y-4">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">
              บทที่ 1 • เตรียมอุปกรณ์ให้พร้อม (Setup 0 to 100)
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              ติดตั้ง VS Code และ Antigravity ใน 3 ขั้นตอนง่ายๆ
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              ไม่ต้องกังวลเรื่องเทคนิคยากๆ ครับ เราแค่ต้องดาวน์โหลด 3 สิ่งนี้มาไว้ในเครื่องคอมพิวเตอร์ ทำครั้งเดียวใช้ได้ตลอดไป!
            </p>
          </div>

          {/* 3 Installation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Step 1: VS Code */}
            <div className="minimal-card rounded-3xl p-6 border border-slate-800 space-y-4 flex flex-col justify-between bg-slate-900/90">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400 font-extrabold text-base">
                    1
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-sky-300">
                    ฟรี 100%
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  ดาวน์โหลด VS Code (โต๊ะทำงาน)
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  เปรียบเหมือน **"โต๊ะเขียนแบบอเนกประสงค์"** ที่เอาไว้เปิดดูไฟล์และหน้าต่างคุยกับ AI
                </p>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 space-y-1">
                  <strong>วิธีทำ:</strong>
                  <ol className="list-decimal list-inside space-y-1 text-slate-400 text-[11px]">
                    <li>เข้าเว็บ <a href="https://code.visualstudio.com" target="_blank" rel="noreferrer" className="text-sky-400 underline">code.visualstudio.com</a></li>
                    <li>กดปุ่มสีฟ้า "Download for Windows/Mac"</li>
                    <li>เปิดไฟล์ที่โหลดมาแล้วกด "Next" จนเสร็จ</li>
                  </ol>
                </div>
              </div>
              <a
                href="https://code.visualstudio.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center justify-center space-x-2 transition"
              >
                <span>เปิดเว็บโหลด VS Code</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Step 2: Node.js */}
            <div className="minimal-card rounded-3xl p-6 border border-slate-800 space-y-4 flex flex-col justify-between bg-slate-900/90">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-extrabold text-base">
                    2
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-emerald-300">
                    เครื่องยนต์รันเว็บ
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  ดาวน์โหลด Node.js (LTS)
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  เปรียบเหมือน **"เครื่องยนต์"** ที่ช่วยให้คอมพิวเตอร์ของเรารันหน้าเว็บ React / TSX ได้แบบลื่นไหล
                </p>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 space-y-1">
                  <strong>วิธีทำ:</strong>
                  <ol className="list-decimal list-inside space-y-1 text-slate-400 text-[11px]">
                    <li>เข้าเว็บ <a href="https://nodejs.org" target="_blank" rel="noreferrer" className="text-emerald-400 underline">nodejs.org</a></li>
                    <li>กดเลือกปุ่มเวอร์ชัน <strong>"LTS (Recommended)"</strong></li>
                    <li>กดติดตั้งตามขั้นตอนปกติ (Next ตลอด)</li>
                  </ol>
                </div>
              </div>
              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center space-x-2 transition"
              >
                <span>เปิดเว็บโหลด Node.js</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Step 3: Antigravity Extension / CLI */}
            <div className="minimal-card rounded-3xl p-6 border border-purple-500/30 space-y-4 flex flex-col justify-between bg-purple-950/20">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-extrabold text-base">
                    3
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-purple-900/60 text-purple-300 border border-purple-500/30">
                    หัวใจสำคัญ 🚀
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  เปิดใช้งาน Antigravity
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  เปรียบเหมือน **"จ้างทีมโปรแกรมเมอร์ AI มานั่งข้างคุณ"** เพื่อรับคำสั่งภาษาไทยแล้วลงมือเขียนเว็บให้
                </p>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 space-y-1">
                  <strong>วิธีเปิดใช้งานใน VS Code:</strong>
                  <ol className="list-decimal list-inside space-y-1 text-slate-400 text-[11px]">
                    <li>เปิด VS Code ขึ้นมา</li>
                    <li>กดไอคอน <strong>Extensions</strong> (รูปสี่เหลี่ยม 4 ชิ้น ด้านซ้าย)</li>
                    <li>พิมพ์ค้นหา <code>Antigravity</code> แล้วกด Install</li>
                    <li>กดปุ่มลัด <code>Ctrl + L</code> เพื่อเปิดช่องแชทสั่งงาน!</li>
                  </ol>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-purple-950/50 border border-purple-500/40 text-[11px] text-purple-200 text-center font-bold">
                ✨ พร้อมเริ่มสร้างเว็บแรกได้ทันที!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* CHAPTER 2: PROJECT CREATION & RUNNING CODE (HTML vs REACT / TSX)          */}
      {/* ========================================================================= */}
      {activeTab === "run" && (
        <div className="space-y-8 animate-fadeIn">
          {/* Header */}
          <div className="minimal-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-br from-[#0c1427] via-[#080d19] to-[#04060d] space-y-4">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
              บทที่ 2 • วิธีเปิดไฟล์และรันดูหน้าเว็บจริง
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              สร้างโฟลเดอร์โปรเจกต์ & วิธีรันดูหน้าเว็บ (HTML เพียวๆ vs React/TSX)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              เมื่อ Antigravity เขียนโค้ดให้เราเสร็จแล้ว เราจะเปิดดูผลงานบนหน้าจอได้อย่างไร? มาดู 2 วิธีที่ง่ายที่สุดกันครับ
            </p>
          </div>

          {/* Workflow Step 0: Open Folder */}
          <div className="minimal-card rounded-3xl p-6 border border-slate-800 bg-slate-900/90 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <FolderOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                สเต็ปที่ 0: วิธีสร้างโฟลเดอร์และเปิดใน VS Code
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 pt-1">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-bold text-sky-400 block mb-1">1. สร้างโฟลเดอร์เปล่า</span>
                <span>สร้างโฟลเดอร์ใหม่บนหน้า Desktop เช่น <code>my-first-web</code></span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-bold text-sky-400 block mb-1">2. เปิดใน VS Code</span>
                <span>เปิด VS Code แล้วกดเมนู <code>File &gt; Open Folder...</code> แล้วเลือกโฟลเดอร์ที่เพิ่งสร้าง</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-bold text-sky-400 block mb-1">3. เรียก Antigravity</span>
                <span>กดปุ่ม <code>Ctrl + L</code> เพื่อเปิดช่องแชท แล้วเริ่มพิมพ์สั่งงานภาษาไทยได้เลย!</span>
              </div>
            </div>
          </div>

          {/* 2 Ways Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Way 1: Pure HTML/CSS */}
            <div className="minimal-card rounded-3xl p-6 border border-sky-500/30 bg-sky-950/20 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-600/30 border border-sky-500/40 flex items-center justify-center text-sky-400">
                    <FileCode className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">แบบที่ 1: ไฟล์ HTML/CSS เพียวๆ</h3>
                    <span className="text-[11px] text-sky-300">ง่ายที่สุด • ดับเบิ้ลคลิกเปิดดูได้เลย</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  เหมาะสำหรับเว็บหน้าเดียวง่ายๆ เช่น เมนูอาหาร หรือการ์ดอวยพร ที่ไม่ต้องติดตั้งโปรแกรมเสริมใดๆ
                </p>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                  <strong className="text-sky-300 block">วิธีเปิดดูหน้าเว็บจริง:</strong>
                  <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[11px]">
                    <li>Antigravity จะสร้างไฟล์ชื่อ <code>index.html</code> ในโฟลเดอร์</li>
                    <li>ในแถบซ้ายของ VS Code: คลิกขวาที่ไฟล์ <code>index.html</code></li>
                    <li>เลือก <strong>"Reveal in File Explorer"</strong> (เปิดในโฟลเดอร์เครื่อง)</li>
                    <li>ดับเบิ้ลคลิกที่ไฟล์ <code>index.html</code> หน้าเว็บจะเปิดขึ้นมาใน Chrome หรือ Edge ทันที!</li>
                  </ol>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                💡 <strong>เคล็ดลับ:</strong> ถ้าอยากให้หน้าเว็บอัปเดตอัตโนมัติเวลาแก้โค้ด ให้ติดตั้ง Extension ชื่อ <code>Live Server</code> ใน VS Code แล้วกดคลิก "Go Live" ที่มุมขวาล่าง
              </div>
            </div>

            {/* Way 2: React / TSX / Vite */}
            <div className="minimal-card rounded-3xl p-6 border border-emerald-500/30 bg-emerald-950/20 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">แบบที่ 2: เว็บ React / TSX (Vite)</h3>
                    <span className="text-[11px] text-emerald-300">สวยงาม ทันสมัย • มีระบบแอปสมบูรณ์</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  เหมาะสำหรับเว็บที่มีการคำนวณ เช่น บันทึกรายรับจ่าย วงล้อหมุนสุ่ม หรือระบบที่มีหลายหน้า
                </p>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                  <strong className="text-emerald-300 block">วิธีสั่งรันดูเว็บ (พิมพ์คำสั่งสั้นๆ):</strong>
                  <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[11px]">
                    <li>กดปุ่ม <code>Ctrl + `</code> (ปุ่มตัวหนอน) เพื่อเปิดหน้าต่าง Terminal ด้านล่าง</li>
                    <li>พิมพ์คำสั่ง: <code className="text-emerald-400 font-bold bg-slate-900 px-1.5 py-0.5 rounded">npm run dev</code> แล้วกด Enter</li>
                    <li>จะเห็นลิงก์สีเขียว เช่น <code>http://localhost:5173</code> ให้กด <strong>Ctrl + คลิก</strong> ที่ลิงก์นั้น</li>
                    <li>หน้าเว็บจริงจะเปิดขึ้นมาในเบราว์เซอร์ทันที!</li>
                  </ol>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                🛑 <strong>วิธีปิดการรัน:</strong> กดปุ่ม <code>Ctrl + C</code> ในหน้าต่าง Terminal ด้านล่าง เพื่อหยุดรันเว็บ
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* CHAPTER 3: CREATING CUSTOM SKILLS (SOP / SECRET MANUAL)                   */}
      {/* ========================================================================= */}
      {activeTab === "skills" && (
        <div className="space-y-8 animate-fadeIn">
          {/* Header */}
          <div className="minimal-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-br from-[#0c1427] via-[#080d19] to-[#04060d] space-y-4">
            <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider block">
              บทที่ 3 • ติดปีกความฉลาดให้ AI
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              สร้าง "Skills" ประจำตัว: สอนให้ AI จดจำสไตล์และกฎเกณฑ์ของเรา
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              เบื่อไหมที่ต้องพิมพ์บอก AI ซ้ำๆ ทุกครั้งว่า *"ขอฟอนต์ Kanit นะ, ขอตัวหนังสือใหญ่นะ, ขอภาษาไทยสุภาพนะ"*? 
              ฟีเจอร์ <strong>Skills</strong> คือการสร้าง **"สมุดจดสูตรลับประจำบ้าน"** ให้ AI อ่านและทำตามมาตรฐานนี้อัตโนมัติทุกครั้ง!
            </p>
          </div>

          {/* How Skills Work Infographic */}
          <div className="minimal-card rounded-3xl p-6 border border-slate-800 bg-slate-900/90 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              <span>Skills ทำงานอย่างไรใน Antigravity?</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="text-indigo-400 font-bold">1. สร้างโฟลเดอร์เก็บ Skill</div>
                <p className="text-slate-400 text-[11px]">
                  สร้างไฟล์ไว้ที่: <br />
                  <code className="text-indigo-300">.agents/skills/ชื่อสกิล/SKILL.md</code>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="text-indigo-400 font-bold">2. เขียนกฎที่เราต้องการ</div>
                <p className="text-slate-400 text-[11px]">
                  เขียนภาษาไทยบอกสเปก เช่น ฟอนต์ สี สไตล์การตอบ หรือขั้นตอนการทำงาน
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="text-indigo-400 font-bold">3. เรียกใช้ได้ทันที</div>
                <p className="text-slate-400 text-[11px]">
                  พิมพ์ <code className="text-indigo-300">/ชื่อสกิล</code> หรือสั่งงานตามปกติ AI จะดึงกฎมาใช้อัตโนมัติ!
                </p>
              </div>
            </div>
          </div>

          {/* 2 Ready-to-use Skill Templates */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              ตัวอย่าง 2 Skills พร้อมใช้ (ก๊อปปี้ไปสร้างไฟล์ได้เลย):
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {SKILL_EXAMPLES.map((sk) => (
                <div
                  key={sk.id}
                  className="minimal-card rounded-3xl p-6 border border-indigo-500/30 bg-indigo-950/20 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-white">{sk.title}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-indigo-900/60 text-indigo-300 border border-indigo-500/30">
                        /{sk.name}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">{sk.desc}</p>

                    <div className="space-y-2 pt-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-indigo-300">
                          📁 {sk.folderPath}
                        </span>
                        <button
                          onClick={() => handleCopy(sk.skillContent, sk.id)}
                          className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-sm"
                        >
                          {copiedKey === sk.id ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>คัดลอกโค้ด Skill แล้ว!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>คัดลอกเนื้อหา Skill</span>
                            </>
                          )}
                        </button>
                      </div>

                      <pre className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-[11px] text-slate-300 font-mono whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto custom-scrollbar">
                        {sk.skillContent}
                      </pre>
                    </div>
                  </div>

                  <div className="text-[11px] text-indigo-200/90 pt-2 border-t border-indigo-500/20">
                    💡 <strong>วิธีสั่ง Antigravity สร้างให้:</strong> พิมพ์บอกว่า *"ช่วยสร้าง skill ชื่อ {sk.name} ตามเนื้อหานี้ให้หน่อย"* Antigravity จะสร้างโฟลเดอร์และไฟล์ให้เสร็จสรรพใน 2 วินาที!
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* CHAPTER 4: 5 NO-CODE PROJECT TEMPLATES                                    */}
      {/* ========================================================================= */}
      {activeTab === "templates" && (
        <div className="space-y-6 animate-fadeIn">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider block">
              บทที่ 4 • ไอเดียผลงานจริง
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
      {/* CHAPTER 5: CUSTOM PROMPT BUILDER FOR ANTIGRAVITY                          */}
      {/* ========================================================================= */}
      {activeTab === "builder" && (
        <div className="minimal-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-br from-[#0c1427] via-[#080d19] to-[#04060d] space-y-6 shadow-2xl animate-fadeIn">
          <div className="space-y-2 border-b border-slate-800 pb-4">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider block">
              บทที่ 5 • เครื่องมือช่วยประกอบคำสั่ง
            </span>
            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
              <Wand2 className="w-6 h-6 text-teal-400" />
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
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-500"
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
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-500"
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
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-500"
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
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-500"
                placeholder="เช่น ปุ่มกดแชร์, ตารางคำนวณอัตโนมัติ"
              />
            </div>
          </div>

          {/* Generated Result */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-teal-400">
                ✨ คำสั่งที่สร้างเสร็จแล้ว (นำไปวางใน Antigravity ได้เลย):
              </span>
              <button
                onClick={() => handleCopy(customGeneratedPrompt, "custom")}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-md"
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
      {/* CHAPTER 6: PROMPT CHEAT SHEET FOR FIXING & REFINING                       */}
      {/* ========================================================================= */}
      {activeTab === "cheatsheet" && (
        <div className="space-y-6 animate-fadeIn">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider block">
              บทที่ 6 • โพยสั่งแก้งาน
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

      {/* ========================================================================= */}
      {/* CHAPTER 7: DEPLOYING TO THE WORLD (GITHUB, VERCEL, DOMAIN, SERVER)        */}
      {/* ========================================================================= */}
      {activeTab === "deploy" && (
        <div className="space-y-8 animate-fadeIn">
          {/* Header */}
          <div className="minimal-card rounded-3xl p-6 sm:p-8 border border-amber-500/30 bg-gradient-to-br from-[#181104] via-[#0f0c05] to-[#060502] space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-semibold text-amber-300">
              <Globe className="w-3.5 h-3.5" />
              <span>บทที่ 7 • ส่งผลงานออกสู่สายตาชาวโลก (Deployment)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              ขั้นตอนต่อไป: นำเว็บขึ้นอินเทอร์เน็ตจริง ให้คนทั้งโลกเข้าชมได้ 24 ชม.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              สร้างเว็บในเครื่องตัวเองเสร็จแล้ว ทำอย่างไรให้พ่อแม่ ญาติพี่น้อง หรือลูกค้าเปิดดูจากมือถือได้ทุกที่ทุกเวลา? 
              มาทำความเข้าใจ <strong>Server, Domain, Network, GitHub และ Vercel</strong> ฉบับภาษาคนในบ้านกันครับ!
            </p>
          </div>

          {/* 5 Core Terms Explained with Analogies */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              💡 5 คำศัพท์อินเทอร์เน็ต เข้าใจง่ายใน 1 นาที (เปรียบเทียบกับชีวิตจริง):
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* 1. Server */}
              <div className="minimal-card rounded-3xl p-5 border border-slate-800 space-y-3 bg-slate-900/90 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-sky-950/60 border border-sky-500/30 flex items-center justify-center text-sky-400">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">1. Server (เซิร์ฟเวอร์)</h4>
                      <span className="text-[11px] text-sky-300">อาคารที่เปิดไฟ 24 ชม.</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    เปรียบเหมือน **"อาคารหรือบ้านที่เปิดไฟและเปิดประตูตลอด 24 ชั่วโมง"** มีหน้าที่เก็บไฟล์เว็บของเราไว้ เพื่อให้ใครก็ตามที่อยากดู สามารถแวะเข้ามาชมได้ตลอดเวลา โดยที่เราไม่ต้องเปิดคอมพิวเตอร์ตัวเองทิ้งไว้
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                  🏠 <em>ถ้าไม่มี Server คนอื่นจะเข้าดูเว็บเราไม่ได้ตอนเราปิดคอม</em>
                </div>
              </div>

              {/* 2. Domain Name */}
              <div className="minimal-card rounded-3xl p-5 border border-slate-800 space-y-3 bg-slate-900/90 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">2. Domain (ชื่อโดเมน)</h4>
                      <span className="text-[11px] text-emerald-300">ป้ายชื่อบ้าน / ทะเบียนบ้าน</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    เปรียบเหมือน **"ป้ายชื่อร้านหรือที่อยู่บ้าน"** เช่น <code className="text-emerald-400">google.com</code> หรือ <code className="text-emerald-400">myshop.vercel.app</code> เพื่อให้คนจำง่ายและพิมพ์มาหาถูก แทนที่จะต้องจำเลขรหัส IP ตัวเลขยาวๆ (เช่น 192.168.1.1)
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                  🏷️ <em>เปรียบเหมือน: จำชื่อ "ร้านป้าสมศรี" ง่ายกว่าจำพิกัดละติจูด</em>
                </div>
              </div>

              {/* 3. Network / Internet */}
              <div className="minimal-card rounded-3xl p-5 border border-slate-800 space-y-3 bg-slate-900/90 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <Network className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">3. Network (เครือข่าย)</h4>
                      <span className="text-[11px] text-purple-300">ถนนหนทางเชื่อมต่อโลก</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    เปรียบเหมือน **"ระบบถนน ไฮเวย์ และสายส่งสัญญาณ"** ที่เชื่อมโยงมือถือของทุกคน เข้ากับ Server ทั่วโลก ทำให้ข้อมูลและรูปภาพในเว็บวิ่งไปปรากฏบนหน้าจอมือถือของคนดูได้ในเสี้ยววินาที
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                  🛣️ <em>เปรียบเหมือน: ถนนที่รถส่งของวิ่งนำหน้าเว็บไปส่งที่มือถือ</em>
                </div>
              </div>

              {/* 4. GitHub */}
              <div className="minimal-card rounded-3xl p-5 border border-slate-800 space-y-3 bg-slate-900/90 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">4. GitHub (กิตฮับ)</h4>
                      <span className="text-[11px] text-slate-300">ตู้เซฟเก็บโค้ด & ไทม์แมชชีน</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    เปรียบเหมือน **"ตู้เซฟฝากไฟล์บนก้อนเมฆ (Cloud)"** เก็บโค้ดทุกหน้าของเว็บเราไว้อย่างปลอดภัย ไม่ต้องกลัวคอมฯ พัง แถมจำประวัติการแก้ไขได้ทุกเวอร์ชัน ย้อนเวลากลับไปดูโค้ดเก่าได้เสมอ
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                  📦 <em>ฟรี ปลอดภัย เป็นมาตรฐานที่โปรแกรมเมอร์ทั่วโลกใช้</em>
                </div>
              </div>

              {/* 5. Vercel */}
              <div className="minimal-card rounded-3xl p-5 border border-amber-500/40 space-y-3 bg-amber-950/20 flex flex-col justify-between col-span-1 md:col-span-2 lg:col-span-2">
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-amber-600/30 border border-amber-500/50 flex items-center justify-center text-amber-300">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">5. Vercel (เวอร์เซล)</h4>
                      <span className="text-[11px] text-amber-300">ช่างรับเหมาเปิดเว็บอัตโนมัติฟรี ⚡</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    เปรียบเหมือน **"ช่างรับเหมาก่อสร้างอัตโนมัติ"** ที่มี Server ฟรีให้เรายืมใช้! 
                    หน้าที่ของ Vercel คือ **ไปหยิบโค้ดจากตู้เซฟ GitHub ของเรา มาประกอบร่างเป็นหน้าเว็บจริง แล้วเปิดให้คนทั่วโลกเข้าชมได้ทันทีใน 30 วินาที** แถมแจกลิงก์โดเมนฟรีให้อีกด้วย!
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-amber-500/30 text-[11px] text-amber-200 font-medium">
                  ✨ <strong>ความมหัศจรรย์:</strong> เมื่อเชื่อม GitHub กับ Vercel แล้ว ทุกครั้งที่เราสั่ง Antigravity แก้ไขโค้ดแล้วส่งขึ้น GitHub ตัว Vercel จะอัปเดตหน้าเว็บจริงให้อัตโนมัติ 100% โดยที่เราไม่ต้องทำอะไรเพิ่มเลย!
                </div>
              </div>
            </div>
          </div>

          {/* How It All Connects Pipeline */}
          <div className="minimal-card rounded-3xl p-6 sm:p-7 border border-slate-800 bg-slate-900/90 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>สรุปแผนผังการเดินทาง: จากคอมพิวเตอร์ของคุณ สู่คนทั้งโลก</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs text-center">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-2xl block">💻</span>
                <strong className="text-sky-400 block">1. คอมพิวเตอร์เรา</strong>
                <p className="text-[11px] text-slate-400">Antigravity ช่วยเขียนโค้ดและทดสอบในเครื่อง</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-2xl block">📦</span>
                <strong className="text-purple-400 block">2. ส่งเข้า GitHub</strong>
                <p className="text-[11px] text-slate-400">เก็บไฟล์โค้ดเข้าตู้เซฟออนไลน์ (Push to Main)</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-2xl block">⚡</span>
                <strong className="text-amber-400 block">3. Vercel รับช่วงต่อ</strong>
                <p className="text-[11px] text-slate-400">ดึงโค้ดไปประกอบร่างและเปิดรันบน Server ทันที</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/40 space-y-1 bg-emerald-950/20">
                <span className="text-2xl block">🎉</span>
                <strong className="text-emerald-400 block">4. เว็บไซต์ออนไลน์!</strong>
                <p className="text-[11px] text-slate-300">ได้ลิงก์ Domain ส่งให้คนทั้งโลกเปิดดูได้ 24 ชม.</p>
              </div>
            </div>
          </div>

          {/* 3 Step Deployment Guide */}
          <div className="minimal-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                วิธีลงมือทำจริง
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                3 ขั้นตอนง่ายๆ นำโปรเจกต์ขึ้น Vercel (ทำครั้งเดียวจบ)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
              {/* Step 1 */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-sky-600 text-white font-extrabold flex items-center justify-center text-sm">
                    1
                  </div>
                  <h4 className="text-sm font-bold text-white">สั่ง Antigravity ส่งโค้ดขึ้น GitHub</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    แค่พิมพ์บอก Antigravity ในช่องแชทว่า: <br />
                    <code className="text-sky-300 bg-slate-900 px-1 rounded">"ช่วย commit และ push โค้ดทั้งหมดขึ้น GitHub ให้หน่อย"</code>
                  </p>
                </div>
                <span className="text-[11px] text-sky-400">✓ โค้ดทั้งหมดจะเข้าไปอยู่ในตู้เซฟ GitHub</span>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-purple-600 text-white font-extrabold flex items-center justify-center text-sm">
                    2
                  </div>
                  <h4 className="text-sm font-bold text-white">เปิดเว็บ Vercel แล้วกด Import</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    1. เข้าเว็บ <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-purple-400 underline">vercel.com/new</a> <br />
                    2. ล็อกอินด้วยบัญชี GitHub <br />
                    3. มองหาชื่อ Repository แล้วกดปุ่ม <strong>"Import"</strong>
                  </p>
                </div>
                <span className="text-[11px] text-purple-400">✓ Vercel จะตรวจจับการตั้งค่าให้อัตโนมัติ</span>
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-500/30 bg-emerald-950/20 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-extrabold flex items-center justify-center text-sm">
                    3
                  </div>
                  <h4 className="text-sm font-bold text-white">กดปุ่ม Deploy & รับลิงก์ใช้งาน</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    กดปุ่มสีฟ้า <strong>"Deploy"</strong> รอระบบสร้างเว็บประมาณ 30 วินาที จะได้ลิงก์โดเมนจริง (เช่น <code className="text-emerald-300">my-app.vercel.app</code>) ส่งให้ทุกคนเปิดดูได้ทันที!
                  </p>
                </div>
                <span className="text-[11px] text-emerald-400 font-bold">🎉 เสร็จสิ้น! ออนไลน์ฟรี 24 ชม.</span>
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
