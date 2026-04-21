import Link from 'next/link';
import css from './NotFound.module.css'; 

export default function NotFound() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404</h1>
      <p className={css.message}>Oops! The page you are looking for doesn`t exist.</p>
      <Link href="/notes/filter/all" className={css.link}>
        Back to Notes
      </Link>
    </div>
  );
}