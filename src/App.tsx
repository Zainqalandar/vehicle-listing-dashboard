import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import FormPage from './pages/UserForm/index';
import Navbar from './components/Navbar';
import { useTheme } from './hooks/useTheme';

const AppContent = () => {
	return (
		<>
			<Navbar />
			<main className="flex-1">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/user-form" element={<FormPage />} />
				</Routes>
			</main>
		</>
	);
};

function App() {
	const { theme } = useTheme();
	return (
		<div
			className={`min-h-screen  ${theme === 'dark' ? 'dark:bg-gray-900' : 'bg-white'} text-gray-900 dark:text-white transition-colors duration-300`}
		>
			<AppContent />
		</div>
	);
}

export default App;
