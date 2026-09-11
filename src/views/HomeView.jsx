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
  Heart,
  Smile
} from 'lucide-react'

export default function HomeView({ fontSizes }) {
  const manifestoPoints = [
    {
      icon: Globe2,
      color: "text-sky-400 bg-sky-950/60 border-sky-500/30",
      title: "1. อีกหน่อยทุกอย่างรอบตัวจะมี AI หมดเลย",
      desc: "เหมือนตอนที่จู่ๆ ทุกคนก็ต้องหัดใช้สมาร์ตโฟน โทรคุยวิดีโอกับลูกหลาน หรือสั่งของออนไลน์... อีกไม่กี่ปี AI จะไปอยู่ในมือถือ ทีวี ตู้เย็น รถยนต์ และที่ทำงาน ถ้าเราเริ่มคุยกับมันเป็นตั้งแต่ตอนนี้ จะทำอะไรก็ง่ายไปหมด"
    },
    {
      icon: Zap,
      color: "text-amber-400 bg-amber-950/60 border-amber-500/30",
      title: "2. มี 'เด็กฝึกงานรู้ทุกเรื่อง' คอยช่วยงานเรา",
      desc: "AI ไม่ได้มาแย่งอะไรเราไป แต่มันเหมือนผู้ช่วยรู้ใจที่สั่งอะไรก็ทำ งานที่เคยนั่งหลังขดหลังแข็งทำ 5-6 ชั่วโมง (พิมพ์เอกสาร, คิดเมนู, สรุปข้อมูล) ให้ AI ช่วยทำแป๊บเดียวเสร็จ เราจะได้มีเวลาไปพักผ่อน อยู่กับคนที่เรารัก"
    },
    {
      icon: ShieldCheck,
      color: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30",
      title: "3. ปลอดภัย รู้ทัน ไม่โดนแก๊งมิจฉาชีพหลอก",
      desc: "ทุกวันนี้มีทั้งข่าวปลอมแชร์ใน LINE ลิงก์หลอกโอนเงิน และคลิปเสียงปลอมจากแก๊งคอลเซ็นเตอร์... ถ้าเราเข้าใจว่า AI ทำงานยังไง เราจะเช็กความจริงเป็น ไม่ตกใจ ไม่หลงเชื่ออะไรง่ายๆ ปลอดภัยสบายใจทั้งบ้าน"
    },
    {
      icon: HeartHandshake,
      color: "text-rose-400 bg-rose-950/60 border-rose-500/30",
      title: "4. สบายขึ้น เก่งขึ้น ไปด้วยกันทั้งบ้าน",
      desc: "ลูกๆ หลานๆ มีติวเตอร์ใจดีคอยอธิบายการบ้านให้เข้าใจง่ายๆ, คนทำงานเหนื่อยน้อยลง, คุณพ่อคุณแม่ตรวจผลสุขภาพและหาข้อมูลดูแลตัวเองได้ ทุกคนในบ้านคุยภาษาเดียวกันและก้าวทันโลกไปพร้อมกัน"
    }
  ]

  return (
    <div className="max-w-5xl mx-auto py-8 sm:py-12 space-y-12 animate-fadeIn">
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
          เพราะอีกหน่อย <strong className="text-white">"ทุกอย่างรอบตัวเราจะใช้ AI ช่วยหมดเลย"</strong> การเรียนรู้วันนี้ไม่ใช่เรื่องยาก ไม่ต้องมีความรู้คอมพิวเตอร์ลึกซึ้ง แค่พูดคุยภาษาไทยธรรมดา เราก็สามารถมีผู้ช่วยเก่งๆ ไว้ข้างตัว ช่วยให้ชีวิตง่ายขึ้นเยอะครับ!
        </p>
      </div>

      {/* 4 CORE REASONS (ภาษาคนในบ้าน) */}
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
          💡 สรุปสั้นๆ ให้เห็นภาพ
        </span>
        <p className="text-base sm:text-xl font-bold text-white leading-relaxed">
          "AI ไม่ได้มาแทนคนเราหรอกครับ... แต่ <span className="text-sky-300 underline decoration-sky-500/50 underline-offset-4">'คนที่ใช้ AI เป็น'</span> จะใช้ชีวิตและทำงานได้สบายกว่าคนที่ไม่ยอมแตะมันเลย"
        </p>
      </div>

      {/* 🚀 COURSE SESSIONS ROADMAP BANNER */}
      <div className="minimal-card rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <Rocket className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white">สิ่งที่เราจะได้เรียนรู้ด้วยกันในคอร์สนี้ (2 ช่วงง่ายๆ)</h3>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded">
            ใช้เวลารวมประมาณ 2 ชม. ครึ่ง
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#060911] border border-slate-800 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sky-400">🌟 Session 1: คุยสนุกๆ ปูพื้นฐาน 6 เรื่อง AI (30 นาที)</span>
              <span className="text-[10px] font-mono text-slate-500">ฟังเพลินๆ</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              มาดูว่า AI คืออะไร ทำอะไรให้เราได้บ้าง ตอนนี้เก่งไปถึงไหนแล้ว และเอามาช่วยงานบ้าน งานประจำวัน หรือช่วยลูกเรียนได้อย่างไร
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#060911] border border-slate-800 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-emerald-400">🚀 Session 2: จับมือทำจริง สร้างเว็บของตัวเอง! (120 นาที)</span>
              <span className="text-[10px] font-mono text-slate-500">ลงมือทำจริง</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              ลองสั่ง AI ด้วยภาษาคนธรรมดา ให้ช่วยสร้างหน้าเว็บสนุกๆ (เช่น เว็บสุ่มอาหาร, โปรไฟล์ตัวเอง) ดับเบิลคลิกเปิดเล่นได้ทันที!
            </p>
          </div>
        </div>
      </div>

      {/* 👥 CHOOSE ROLE SECTION */}
      <div className="space-y-4 pt-2">
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            เลือกหน้าที่ของคุณ เพื่อเริ่มเข้าสู่บทเรียน
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            จะเปิดสอนคนอื่น หรือจะนั่งเรียนสบายๆ เลือกได้เลยครับ
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
                  สำหรับคนสอน & พี่ติว
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition">
                  👨‍🏫 โหมดคนสอน (Teacher Mode)
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  มีสไลด์ฉายขึ้นจอทีวี/โปรเจกเตอร์ 2 ชุด พร้อมบทพูดชวนคุยสนุกๆ และแนวทางช่วยน้องๆ เมื่อติดขัด
                </p>
              </div>

              <ul className="text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-4">
                <li className="flex items-center space-x-2">
                  <span className="text-sky-400 font-bold">✓</span>
                  <span>สไลด์ Session 1: เล่า 6 เรื่อง AI แบบเห็นภาพ</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sky-400 font-bold">✓</span>
                  <span>สไลด์ Session 2: พาทำเว็บ 5 หัวข้อ (กดลูกศรเปลี่ยนสไลด์ได้)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sky-400 font-bold">✓</span>
                  <span>บทพูดเปิดคลาส & วิธีช่วยแก้ปัญหาในห้อง</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-sky-400 text-sm font-bold">
              <span>เปิดโหมดคนสอน</span>
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
                  สำหรับคนเรียน & ทุกคนในบ้าน
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition">
                  🎓 โหมดคนเรียน (Student Mode)
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  สรุปเนื้อหาอ่านง่าย ไม่ใช้ศัพท์ยาก มีช่องให้ลองพิมพ์สั่ง AI และมีคำสั่งพร้อมใช้ให้กดก๊อปปี้ไปลองเล่นได้เลย
                </p>
              </div>

              <ul className="text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-4">
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>อ่านสรุป 6 เรื่อง AI และ 5 หัวข้อแบบง่ายๆ</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>เครื่องมือช่วยประกอบร่างคำสั่ง (สูตร RTCF)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>รวมคำสั่งพร้อมก๊อปปี้ & โจทย์ทำเว็บ 15 นาที</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-emerald-400 text-sm font-bold">
              <span>เปิดโหมดคนเรียน</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
