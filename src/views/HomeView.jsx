import React from 'react'
import { Link } from 'react-router-dom'
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
  Lightbulb,
  CheckCircle2,
  TrendingUp,
  Cpu
} from 'lucide-react'

export default function HomeView({ fontSizes }) {
  const manifestoPoints = [
    {
      icon: Globe2,
      color: "text-sky-400 bg-sky-950/60 border-sky-500/30",
      title: "1. โลกอนาคตจะขับเคลื่อนด้วย AI ทั้งหมด",
      desc: "เหมือนยุคที่ 'ไฟฟ้า' หรือ 'สมาร์ตโฟน' เข้ามาเปลี่ยนโลก AI จะฝังอยู่ในทุกมิติ ทั้งการเรียน การทำงาน การแพทย์ และชีวิตประจำวัน การเข้าใจ AI ในวันนี้จึงไม่ใช่ทางเลือก แต่คือทักษะชีวิตพื้นฐาน"
    },
    {
      icon: Zap,
      color: "text-amber-400 bg-amber-950/60 border-amber-500/30",
      title: "2. เปลี่ยนจาก 'ผู้ลงแรง' เป็น 'ผู้กำกับ' (Director)",
      desc: "AI ไม่ได้มาแย่งงาน แต่มาเป็น 'เด็กฝึกงานอัจฉริยะ' ที่ช่วยย่นเวลางาน 8 ชั่วโมงให้เหลือ 15 นาที ขยายพลัง (Superpowers) ให้เราสร้างผลงานระดับมือโปรได้ แม้ไม่มีพื้นฐานมาก่อน"
    },
    {
      icon: ShieldCheck,
      color: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30",
      title: "3. สร้างภูมิคุ้มกัน ไม่ตกเป็นเหยื่อของเทคโนโลยี",
      desc: "ในยุคที่ข่าวปลอม ข้อมูลบิดเบือน และกลโกงไซเบอร์แพร่หลาย คนที่เข้าใจกลไก AI จะมีวิจารณญาณ รู้จัก Fact-Check และใช้งานอย่างปลอดภัยและมีจริยธรรม"
    },
    {
      icon: HeartHandshake,
      color: "text-rose-400 bg-rose-950/60 border-rose-500/30",
      title: "4. ไม่ทิ้งใครไว้ข้างหลัง เติบโตไปด้วยกันทั้งครอบครัว",
      desc: "เด็กๆ มีติวเตอร์ส่วนตัว 24 ชม., วัยทำงานลดความเหนื่อยล้า, ผู้สูงอายุเข้าใจผลสุขภาพและดูแลตัวเองได้ ทุกคนในบ้านสื่อสารภาษาเดียวกันและก้าวทันโลกไปพร้อมกัน"
    }
  ]

  return (
    <div className="max-w-5xl mx-auto py-8 sm:py-12 space-y-12">
      {/* 🌟 HERO MANIFESTO & VISION */}
      <div className="text-center space-y-5">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-slate-800 text-sky-400 border border-slate-700 shadow-sm">
          <Sparkles className="w-4 h-4 text-sky-300" />
          <span>วิสัยทัศน์ & เป้าหมายของหลักสูตร (Our Core Mission)</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          ทำไมทุกคนถึงต้องเข้าใจ AI <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">
            และใช้งานอย่างมีประสิทธิภาพ?
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
          เพราะในอนาคตอันใกล้ <strong className="text-white">"ทุกสิ่งรอบตัวเราจะเชื่อมโยงกับ AI ทั้งหมด"</strong> การเรียนรู้และปรับตัวในวันนี้ ไม่ใช่แค่การตามเทคโนโลยีให้ทัน แต่คือการติดอาวุธทางความคิด เพิ่มโอกาสในชีวิต และทำให้เราเป็น <em>"นายของเทคโนโลยี"</em> อย่างแท้จริง
        </p>
      </div>

      {/* 4 CORE REASONS / PILLARS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {manifestoPoints.map((point, idx) => {
          const Icon = point.icon
          return (
            <div
              key={idx}
              className="minimal-card rounded-2xl p-6 border border-slate-800 space-y-3.5 transition hover:border-slate-700 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${point.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{point.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* GOLDEN QUOTE BOX */}
      <div className="minimal-card-inner rounded-2xl p-5 sm:p-6 border border-slate-800 text-center space-y-2 bg-[#060911]/80">
        <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block font-bold">
          💡 ข้อคิดสำคัญสู่โลกอนาคต
        </span>
        <p className="text-base sm:text-xl font-bold text-white leading-relaxed">
          "AI จะไม่ได้มาแทนที่มนุษย์... แต่ <span className="text-sky-300 underline decoration-sky-500/50 underline-offset-4">'มนุษย์ที่เข้าใจและใช้ AI เป็น'</span> จะนำหน้าคนที่ปฏิเสธการเรียนรู้เสมอ"
        </p>
      </div>

      {/* 🚀 COURSE SESSIONS ROADMAP BANNER */}
      <div className="minimal-card rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <Rocket className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white">โครงสร้างการเรียนรู้ 2 Sessions ในคอร์สนี้</h3>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded">
            รวมเวลาประมาณ 2.5 ชม.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#060911] border border-slate-800 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sky-400">🌟 Session 1: 6 เสาหลักความรู้ AI (30 นาที)</span>
              <span className="text-[10px] font-mono text-slate-500">Overview</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              ปูพื้นฐานความเข้าใจ: AI คืออะไร, ทำอะไรได้, ตอนนี้ไปไกลถึงไหน, AI กับชีวิตประจำวัน, AI กับการทำงาน, และอนาคตข้างหน้า
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#060911] border border-slate-800 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-emerald-400">🚀 Session 2: ปฏิบัติการสร้างเว็บ 2 ชม. (120 นาที)</span>
              <span className="text-[10px] font-mono text-slate-500">Hands-on</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              ลงมือทำจริง: ฝึกเขียน Prompt สูตร R-T-C-F, สร้างเว็บแรก Single-file, สั่งงาน Antigravity CLI และทำ Mini Project ของตนเอง
            </p>
          </div>
        </div>
      </div>

      {/* 👥 CHOOSE ROLE SECTION */}
      <div className="space-y-4 pt-2">
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            เลือกโหมดการใช้งานของคุณ เพื่อเริ่มต้นเรียนรู้
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            ระบบจัดสรรเครื่องมือและหน้าจอให้เหมาะสมกับบทบาทของคนสอนและนักเรียน
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Teacher Mode Card */}
          <Link
            to="/teacher"
            className="minimal-card rounded-3xl p-7 lg:p-8 hover:border-sky-500/70 transition flex flex-col justify-between group space-y-6"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-950/60 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition">
                <GraduationCap className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider block mb-1">
                  สำหรับผู้สอน & ติวเตอร์
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition">
                  👨‍🏫 โหมดคนสอน (Teacher Mode)
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  รวมสไลด์ฉายจอ 2 ชุด (Session 1 & 2), สคริปต์พูดเปิดใจ 3 นาที, แผนการสอน และคู่มือควบคุมเวลา 2 ชั่วโมง
                </p>
              </div>

              <ul className="text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-4">
                <li className="flex items-center space-x-2">
                  <span className="text-sky-400 font-bold">✓</span>
                  <span>Session 1: สไลด์บรรยาย 6 เสาหลักความรู้ AI</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sky-400 font-bold">✓</span>
                  <span>Session 2: สไลด์สอนสด 5 หัวข้อปฏิบัติการ</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sky-400 font-bold">✓</span>
                  <span>บทพูดเปิดคลาส & คู่มือคนติว 120 นาที</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-sky-400 text-sm font-bold">
              <span>เข้าสู่โหมดคนสอน</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </Link>

          {/* Student Mode Card */}
          <Link
            to="/student"
            className="minimal-card rounded-3xl p-7 lg:p-8 hover:border-emerald-500/70 transition flex flex-col justify-between group space-y-6"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition">
                <User className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider block mb-1">
                  สำหรับผู้เรียน & สมาชิกในบ้าน
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition">
                  🎓 โหมดนักเรียน (Student Mode)
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  รวมสรุปเนื้อหาบทเรียน, เครื่องมือสร้าง Prompt (RTCF), คลังคำสั่งพร้อมก๊อปปี้ และโจทย์ Mini Project
                </p>
              </div>

              <ul className="text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-4">
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>สรุป 6 เสาหลักความรู้ AI ก่อนเริ่มเรียน</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>เครื่องมือทดลองสร้าง Prompt (สูตร R-T-C-F)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>คลัง Prompt พร้อมใช้, Mini Projects และสูตรแก้ Error</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-emerald-400 text-sm font-bold">
              <span>เข้าสู่โหมดนักเรียน</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
