import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="text-center mb-12 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
            <h1 style={{ color: '#5F7D6E' }}>personal website</h1>
            <nav>
                <ul className="flex justify-center space-x-4">
                    <li><Link href="#about" className="text-blue-600 hover:text-white">About</Link></li>
                    <li><Link href="#projects" className="text-blue-600 hover:text-white">Projects</Link></li>
                    <li><Link href="#stats" className="text-blue-600 hover:text-white">Stats</Link></li>
                    <li><Link href="#contact" className="text-blue-600 hover:text-white">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
