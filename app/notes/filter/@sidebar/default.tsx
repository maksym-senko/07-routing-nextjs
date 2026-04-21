'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './Sidebar.module.css';


const TAGS = [
  { name: 'All notes', value: 'all' },
  { name: 'Todo', value: 'todo' },
  { name: 'Work', value: 'work' },
  { name: 'Personal', value: 'personal' },
  { name: 'Meeting', value: 'meeting' },
  { name: 'Shopping', value: 'shopping' },
];

export default function SidebarDefault() {
  const pathname = usePathname();

  return (
    <aside className={css.sidebar}>
      <h2 className={css.title}>Filter by Tags</h2>
      <nav>
        <ul className={css.list}>
          {TAGS.map((tag) => {
            const href = `/notes/filter/${tag.value}`;
            const isActive = pathname === href;

            return (
              <li key={tag.value}>
                <Link
                  href={href}
                  className={`${css.link} ${isActive ? css.active : ''}`}
                >
                  {tag.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}