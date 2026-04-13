import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import FormPage from './pages/FormPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeProvider';

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
			<Footer />
		</>
	);
};

function App() {
	return (
		<ThemeProvider>
			<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
				<AppContent />
			</div>
		</ThemeProvider>
	);
}

export default App;
