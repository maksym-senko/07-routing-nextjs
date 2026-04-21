'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import css from './SearchBox.module.css';


export const SearchBox = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    params.set('page', '1');
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={css.container}>
      <input
        className={css.input}
        placeholder="Search notes..."
        defaultValue={searchParams.get('search')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};