
import courses from '../../../data/courses';

import Link from 'next/link';

type Props = { params: { slug: string } };

export default function CourseDetail({ params }: Props){
  const course = courses.find(c => c.slug === params.slug);
  if(!course) return <div className="max-w-5xl mx-auto px-4 py-12">Corso non trovato</div>;
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Link href="/courses" className="text-sm">← Torna ai corsi</Link>
      <h1 className="text-3xl font-bold text-ecomyBlue mt-2">{course.title}</h1>
      <p className="mt-2 text-gray-700">{course.description}</p>
      <div className="mt-6 space-y-2">
        {course.lessons.map((l:any, i:number) => (
          <div key={i} className="border rounded-xl p-4">
            <div className="font-semibold">{l.title}</div>
            <div className="text-sm text-gray-600">{l.type} • {l.length}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
