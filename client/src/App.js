import { Route, Routes } from 'react-router-dom';
import Home from './components/shared/Home';
const App = () => (
  <>
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/home' element={<Home />} />
    </Routes>
  </>
)

export default App;
