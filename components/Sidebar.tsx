'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import links from '@/utils/links';
import Logo from '@/assets/logo.svg';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="px-8 py-4 bg-muted h-full">
      <Image src={Logo} alt="logo" />
      <div className="flex flex-col mt-20 gap-y-4">
        {links.map((link) => (
          <Button
            key={link.href}
            variant={pathname === link.href ? 'default' : 'link'}
            asChild
          >
            <Link className="flex items-center gap-x-2" href={link.href}>
              {link.icon} <span className="capitalize">{link.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </aside>
  );
}
