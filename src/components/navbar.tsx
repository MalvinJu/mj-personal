'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { IconMJ } from './icons';

const navItems = {
    '/': {
        name: 'home',
    },
    '/about': {
        name: 'about',
    },
    '/project': {
        name: 'projects',
    },
    '/film': {
      name: '35mm',
    },
};


export default function Navbar() {
    let pathname = usePathname() || '/';
    if (pathname.includes('/blog/')) {
      pathname = '/blog';
    }

    return (
      <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
        <div className="lg:sticky lg:top-20">
          <div className="mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
            <IconMJ/>
          </div>
            <nav
              className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
              id="nav"
            >
              <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
                {Object.entries(navItems).map(([path, { name }]) => {
                  const isActive = path === pathname;
                  return (
                    <Link
                      key={path}
                      href={path}
                      className={clsx(
                        'border-l-4transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                        {
                          'text-neutral-500': !isActive,
                          'font-bold': isActive,
                        }
                      )}
                    >
                      <span className="relative py-[5px] px-[15px]">
                        {name}
                        {path === pathname ? (
                          <section>
                            <div className="absolute border-l-4 inset-0 border-neutral-500 hover:border-neutral-800 dark:hover:border-neutral-200 mr-3 z-[-1]"/>
                            <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-2]"/>
                          </section>
                        ) : null}
                      </span>
                     
                    </Link>
                  );
                })}
              </div>
            </nav>
        </div>
      </aside>
    );
  }
