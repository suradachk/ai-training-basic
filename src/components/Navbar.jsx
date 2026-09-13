import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Zap,
  Rocket,
  GraduationCap,
  User,
  Clock,
  Play,
  Pause,
  RotateCcw,
  Type,
  Home
} from 'lucide-react'

export default function Navbar({
  timerSeconds,
  setTimerSeconds,
  isTimerRunning,
  setIsTimerRunning,
  fontSizeLevel,
  setFontSizeLevel,
  fontSizes
}) {
  const location = useLocation()
  const currentPath = location.pathname

  const formatTimer = (totalSec) => {
    const hours = Math.floor(totalSec / 3600)
    const minutes = Math.floor((totalSec % 3600) / 60)
    const seconds = totalSec % 60
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  return (
    <header className="sticky top-0 z-50 bg-[#0e1424] border-b border-slate-800 px-4 lg:px-8 py-3.5 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand & Home */}
        <div className="flex items-center space-x-3">
          <Link
            to="/"
            className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 hover:bg-slate-700 transition"
            title="กลับหน้าหลัก"
          >
            <Zap className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center space-x-2">
              <Link to="/" className="text-base sm:text-lg font-bold text-white tracking-wide hover:text-sky-300 transition">
                AI + Antigravity
              </Link>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-sky-300">
                5 ระดับ AI
              </span>
            </div>
            <p className="text-xs text-slate-400">Minimal Dark Mode • อ่านง่าย สบายตา</p>
          </div>
        </div>

        {/* Mode Route Switcher */}
        <div className="flex items-center bg-[#060911] p-1 rounded-xl border border-slate-800 text-xs sm:text-sm font-medium">
          <Link
            to="/teacher"
            className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition ${
              currentPath === '/teacher'
                ? 'bg-sky-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>โหมดคนสอน (Teacher)</span>
          </Link>

          <Link
            to="/student"
            className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition ${
              currentPath === '/student'
                ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <User className="w-4 h-4" />
            <span>โหมดนักเรียน (Student)</span>
          </Link>

          <Link
            to="/antigravity-guide"
            className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition ${
              currentPath === '/antigravity-guide'
                ? 'bg-purple-600 text-white font-semibold shadow-sm'
                : 'text-purple-300 hover:text-white hover:bg-purple-950/50'
            }`}
          >
            <Rocket className="w-4 h-4 text-purple-400" />
            <span>คู่มือ Antigravity (No-Code) 🚀</span>
          </Link>
        </div>

        {/* Quick Tools: Font size, Handbook & Timer */}
        <div className="flex items-center space-x-2.5">
          {/* PDF Handbook Link */}
          <a
            href="/AI_Mastery_Family_Handbook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900/90 border border-emerald-500/40 text-xs text-emerald-300 flex items-center space-x-1.5 transition font-semibold"
            title="เปิดอ่าน / ดาวน์โหลดคู่มือฉบับ PDF (A4 พร้อมพิมพ์)"
          >
            <span>📄</span>
            <span className="hidden sm:inline">คู่มือ PDF</span>
          </a>

          {/* Font Size Toggle */}
          <button
            onClick={() => setFontSizeLevel((prev) => (prev + 1) % 3)}
            className="px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-xs text-slate-200 flex items-center space-x-1.5 transition"
            title="ปรับขนาดตัวอักษร"
          >
            <Type className="w-3.5 h-3.5 text-sky-400" />
            <span>{fontSizes.label}</span>
          </button>

          {/* Timer */}
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-slate-200">
              {formatTimer(timerSeconds)}
            </span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className={`p-1 rounded transition ${
                isTimerRunning ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-700 text-slate-300 hover:text-white'
              }`}
              title={isTimerRunning ? 'หยุดชั่วคราว' : 'เริ่มจับเวลา'}
            >
              {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => {
                setIsTimerRunning(false)
                setTimerSeconds(120 * 60)
              }}
              className="p-1 rounded text-slate-400 hover:text-white transition"
              title="รีเซ็ตเวลา 2 ชม."
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
