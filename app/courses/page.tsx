
import Link from 'next/link';
import courses from '../../data/courses.json';

export default function Courses(){
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-ecomyBlue">Catalogo Corsi</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {courses.map(c => (
          <Link key={c.slug} href={`/courses/${c.slug}`} className="border rounded-xl p-4 hover:shadow">
            <div className="text-sm text-gray-500">{c.category}</div>
            <div className="font-semibold mt-1">{c.title}</div>
            <div className="text-sm mt-2">{c.description}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
