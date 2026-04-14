import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`p-0 sticky top-0 border-b z-50 shadow-md ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-800'} text-white`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
                <NavLink to="/" className="text-xl font-bold text-white no-underline transition-colors duration-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>
                    Vehicle Dashboard
                </NavLink>
                <div className="flex items-center gap-4">
                    
                    <div className={`flex flex-col md:flex-row md:static absolute top-16 left-0 w-full md:w-auto transition-all duration-300 ${isOpen ? 'left-0' : '-left-full md:left-auto'} ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-800'} md:bg-transparent`}>
                        <NavLink to="/" className={({ isActive }) => `text-white ${isActive ? 'border-b' : ''} no-underline px-4 py-2 mx-2 my-1 md:my-0 rounded transition-all duration-300 hover:bg-gray-700 hover:text-blue-400`} onClick={() => setIsOpen(false)}>
                            Home
                        </NavLink>
                        <NavLink to="/user-form" className={({ isActive }) => `text-white ${isActive ? 'border-b' : ''} no-underline px-4 py-2 mx-2 my-1 md:my-0 rounded transition-all duration-300 hover:bg-gray-700 hover:text-blue-400`} onClick={() => setIsOpen(false)}>
                            User Form
                        </NavLink>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-md transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-700 hover:bg-gray-600'}`}
                        aria-label="Toggle dark mode"
                    >
                        {theme === 'light' ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        )}
                    </button>
                    <div className="md:hidden flex flex-col cursor-pointer" onClick={toggleMenu}>
                        <span className="w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
                        <span className="w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
                        <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;