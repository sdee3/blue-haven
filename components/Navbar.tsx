import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  )
}
