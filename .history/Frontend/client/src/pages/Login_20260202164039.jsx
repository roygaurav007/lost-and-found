// Add 'onLogin' to your props
const Login = ({ onLogin }) => {
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(role); // 💡 This triggers the state change in App.jsx
    
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/browse');
    }
  };
  
  // ... rest of your beautiful login UI
}