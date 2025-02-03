"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Navigation() {
    const pathname = usePathname();

    // Helper function to determine if a link is active
    const isActive = (path: string) => pathname === path;

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-[#]">
            <div className="z-50 container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between ">
                <Link href="/" className="z-50 text-2xl font-bold text-[#5F7D6E] mb-4 sm:mb-0">
                    personal website
                </Link>
                <div className="z-50 flex space-x-8">
                    {/* Navigation links */}
                    {[
                        { href: '/about', label: 'ABOUT' },
                        { href: '/projects', label: 'EXPERIENCE' },
                        { href: '/experience', label: 'PROJECTS' },
                        { href: '/stats', label: 'STATS' },
                        { href: '/contact', label: 'CONTACT' },
                        
                    ].map(({ href, label }) => (
                        <Link 
                            key={href}
                            href={href}
                            className={cn(
                                "z-50 text-[#5F7D6E]/100 hover:text-white transition-colors",
                                isActive(href) && "z-50 text-white font-semibold"
                            )}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}