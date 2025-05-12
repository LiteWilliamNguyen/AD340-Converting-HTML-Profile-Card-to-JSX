import './App.css';
import UserProfile from './components/UserProfile';
import caramelApple from './image/caramel-apple.jpg';

function App() {
  return (
    <UserProfile
      name="John Doe" 
      email="8V5sK@example.com" 
      photoUrl={caramelApple}/>
  );
}

export default App;
