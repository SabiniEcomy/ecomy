
import Link from 'next/link';
import courses from '../data/courses.json';

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold text-ecomyBlue">Benvenuto in ECOMY Academy</h1>
          <p className="mt-4 text-gray-700">
            La piattaforma di formazione pratica su Strategia, Marketing + AI, Counseling & Coaching.
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="/courses" className="px-5 py-3 rounded-xl bg-ecomyGreen text-white">Sfoglia i corsi</Link>
            <Link href="/about" className="px-5 py-3 rounded-xl border">Scopri di più</Link>
          </div>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="font-semibold">Corsi in evidenza</h2>
          <ul className="mt-3 space-y-2">
            {courses.slice(0,3).map(c => (
              <li key={c.slug} className="flex items-center justify-between">
                <span>{c.title}</span>
                <Link className="text-ecomyGreen" href={`/courses/${c.slug}`}>Apri</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
