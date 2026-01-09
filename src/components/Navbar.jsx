import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    isActive ? 'text-indigo-600 font-medium' : 'hover:opacity-70'

  return (
    <nav className="flex justify-between items-center px-8 py-5 font-inter text-sm">
      <NavLink to="/" className="font-semibold text-lg">
        Ryze
      </NavLink>

      {/* Desktop */}
      <div className="hidden md:flex gap-8">
        <NavLink to="/benefits" className={linkClass}>
          Benefits
        </NavLink>
        <NavLink to="/who-are-we" className={linkClass}>
          Who are we?
        </NavLink>
      </div>

      {/* Mobile */}
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (
        <div className="absolute top-16 right-6 bg-white shadow-lg rounded-xl px-6 py-4 flex flex-col gap-4 md:hidden">
          <NavLink to="/benefits" onClick={() => setOpen(false)}>
            Benefits
          </NavLink>
          <NavLink to="/who-are-we" onClick={() => setOpen(false)}>
            Who are we?
          </NavLink>
        </div>
      )}
    </nav>
  )
}
