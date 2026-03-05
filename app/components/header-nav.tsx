'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderNavProps {
  className?: string;
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function HeaderNav({ className }: HeaderNavProps) {
  const pathName = usePathname();

  return (
    <nav className={`${className}`}>
      <ul className='flex gap-40'>
        {navLinks.map((link) => {
          return (
            <li key={link.label}>
              <Link
                className={`hover:text-cyan-500 transition-colors ${pathName === link.href ? 'text-cyan-500 font-bold' : ''}`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
