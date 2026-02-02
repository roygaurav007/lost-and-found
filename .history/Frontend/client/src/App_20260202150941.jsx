import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="app-container">
      <Toaster /> {/* This is for popup notifications */}
      <Routes>
        <Route path="/" element={<h1>Home: FindIt Lost & Found</h1>} />
        <Route path="/report" element={<h1>Report an Item</h1>} />
        <Route path="/browse" element={<h1>Browse Items</h1>} />
      </Routes>
    </div>
  )
}

export default App