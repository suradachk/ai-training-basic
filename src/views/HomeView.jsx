import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, User, Zap, Sparkles, ArrowRight, BookOpen, Presentation, Wand2, Rocket } from 'lucide-react'

export default function HomeView({ fontSizes }) {
  return (
    <div className="max-w-5xl mx-auto py-8 sm:py-12 space-y-10">
      {/* Hero Welcome */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-sky-400 border border-slate-700">
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI + AI CLI (Antigravity) คอร์ส 2 ชั่วโมง</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          ยินดีต้อนรับสู่คลาสเรียน AI ฉบับครอบครัว
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          เลือกโหมดการใช้งานตามบทบาทของคุณ เพื่อเข้าสู่หน้าจอที่ออกแบบมาเฉพาะสำหรับคนสอน หรือ นักเรียน
        </p>
      </div>

      {/* 2 Big Role Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <h2 className="text-2xl font-bold text-white group-hover:text-sky-300 transition">
                👨‍🏫 โหมดคนสอน (Teacher Mode)
              </h2>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                รวมสไลด์ฉายจอขนาดใหญ่, สคริปต์พูดเกริ่นนำ, แผนการสอน 5 หัวข้อพร้อมไทม์ไลน์ และคู่มือควบคุมเวลา 2 ชั่วโมง
              </p>
            </div>

            <ul className="text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-4">
              <li className="flex items-center space-x-2">
                <span className="text-sky-400">✓</span>
                <span>บทพูดเปิดคลาส & Icebreaking 3 นาที</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-sky-400">✓</span>
                <span>โหมดสไลด์สอนสด (รองรับการกดลูกศรคีย์บอร์ด)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-sky-400">✓</span>
                <span>Tutor Cheat Sheet & Checklist 3 นาทีก่อนเริ่ม</span>
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
              <h2 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition">
                🎓 โหมดนักเรียน (Student Mode)
              </h2>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                รวมเครื่องมือสร้าง Prompt สำเร็จรูป, สรุปเนื้อหาอ่านง่าย, คลังคำสั่งพร้อมก๊อปปี้ และไอเดีย Mini Project 15 นาที
              </p>
            </div>

            <ul className="text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-4">
              <li className="flex items-center space-x-2">
                <span className="text-emerald-400">✓</span>
                <span>สรุป 5 หัวข้อพร้อมตัวอย่างเปรียบเทียบ</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-emerald-400">✓</span>
                <span>เครื่องมือสร้าง Prompt (สูตร R-T-C-F)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-emerald-400">✓</span>
                <span>คลัง Prompt ก๊อปปี้ 1 คลิก & ไอเดียสร้างเว็บ 15 นาที</span>
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
  )
}
