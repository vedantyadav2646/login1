import React from 'react';
import StepForm from './component/StepForm';
import auth from './auth';
import Home from './component/home';


function App() {
	if (auth.isAuthenticated()) return <Home />;
	else return <StepForm />;
}

export default App;