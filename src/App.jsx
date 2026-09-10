import React, { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomeView from './views/HomeView'
import TeacherView from './views/TeacherView'
import StudentView from './views/StudentView'

export default function App() {
  const [timerSeconds, setTimerSeconds] = useState(120 * 60) // 2 hours
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [fontSizeLevel, setFontSizeLevel] = useState(1) // 0 = ปกติ, 1 = อ่านง่าย, 2 = ฉายจอ

  // Countdown timer effect
  useEffect(() => {
    let interval = null
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1)
      }, 1000)
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false)
    }
    return () => clearInterval(interval)
  }, [isTimerRunning, timerSeconds])

  // Typography Scaling object
  const fontSizes = [
    { base: 'text-sm', title: 'text-lg', heading: 'text-2xl', label: 'ปกติ' },
    { base: 'text-base', title: 'text-xl', heading: 'text-3xl', label: 'ใหญ่ (อ่านง่าย)' },
    { base: 'text-lg', title: 'text-2xl', heading: 'text-4xl', label: 'ใหญ่พิเศษ (ฉายจอ)' }
  ][fontSizeLevel]

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-[#090d16] text-slate-100 selection:bg-sky-500 selection:text-white">
        {/* Top Navbar with Route Switcher */}
        <Navbar
          timerSeconds={timerSeconds}
          setTimerSeconds={setTimerSeconds}
          isTimerRunning={isTimerRunning}
          setIsTimerRunning={setIsTimerRunning}
          fontSizeLevel={fontSizeLevel}
          setFontSizeLevel={setFontSizeLevel}
          fontSizes={fontSizes}
        />

        {/* Main Content View with Routes */}
        <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8">
          <Routes>
            <Route path="/" element={<HomeView fontSizes={fontSizes} />} />
            <Route path="/teacher" element={<TeacherView fontSizes={fontSizes} />} />
            <Route path="/student" element={<StudentView fontSizes={fontSizes} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-[#0e1424] py-3.5 px-6 text-center text-xs text-slate-400">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>AI & AI CLI (Antigravity) Workshop — 2 ชั่วโมง</span>
            <span>Minimal Dark Mode • แยกโหมดคนสอน & นักเรียน</span>
          </div>
        </footer>
      </div>
    </HashRouter>
  )
}
