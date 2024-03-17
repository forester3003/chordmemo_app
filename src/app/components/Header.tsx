import Link from "next/link"
import BurgerMenu2 from "./BurgerMenu2"

export default function Header() {
  return (
    <header className="w-full bg-indigo-600">
      <nav className="p-4 bg-indigo-500">
        <div className="hidden md:flex justify-between min-w-3xl bg-indigo-300">
          <Link href={'/'} className="ml-1 text-xl font-bold hover:opacity-50">
            Chord Memo App
          </Link>
          <div>
            <ul className="flex">
              <Link href={'/'} className="mx-2 hover:opacity-50">
                Home
              </Link>
              <Link href={'/chords'} className="mx-2 hover:opacity-50">
                Chord
              </Link>
              <Link href={'/fretboard'} className="mx-2 hover:opacity-50">
                Fretboard
              </Link>
              <li className="mx-2">
                Signup
              </li>
              <li className="mx-2">
                Login
              </li>
            </ul>
          </div>
        </div>
        <div className="md:hidden flex justify-between max-w-3xl bg-indigo-300">
          <Link href={'/'} className="text-xl font-bold hover:opacity-50">
            Chord Memo App
          </Link>
          <div className="text-xl font-bold">
            <BurgerMenu2 />
          </div>
        </div>
      </nav>
    </header>
  )
}