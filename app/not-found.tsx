import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Сторінку не знайдено</h2>
      <p>На жаль, ми не змогли знайти запитану нотатку.</p>
      <Link href="/notes/filter" style={{ color: 'blue', textDecoration: 'underline' }}>
        Повернутися до списку
      </Link>
    </div>
  );
}