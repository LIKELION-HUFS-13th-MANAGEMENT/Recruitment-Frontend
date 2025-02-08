import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom';
import './App.css';
import Write from './ui/pages/write';
import SignupPage from './ui/pages/SignupPage';
import LoginPage from './ui/pages/LoginPage';
import FormListView from './ui/pages/FormListView';
import MainPage from './ui/pages/MainPage';
import ApplianceSubmit from './ui/pages/ApplianceSubmit';
import Header from './ui/components/header';

function App() {
	
	return (
		<BrowserRouter>
			<Header/>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/write' element={<Write />} />
				<Route path='/signup' element={<SignupPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route
					path='/appliancelist'
					element={<FormListView />}
				/>
				<Route
					path='/appliance/submit/:id'
					element={<ApplianceSubmit />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
