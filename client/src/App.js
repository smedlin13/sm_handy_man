import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import Workers from './components/workers/Workers';
// import Service from './components/services/Service';
import Navbar from './components/shared/Navbar';
import WorkerShow from './components/workers/WorkerShow';
import ServiceShow from './components/services/ServiceShow';
import CommentShow from './components/comments/CommentShow';


const App = () => (
  <>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/home' element={<Home />} />
    <Route exact path='/about' element={<About />} />
    <Route exact path='/workers' element={<Workers />} />
    {/* <Route exact path='/services' element={<Service />} /> */}
    <Route exact path='/workers/:workerId' element={<WorkerShow />} />
    <Route exact path='/workers/:workerId/services/:serviceId' element={<ServiceShow />} />
    <Route exact path='/services/:serviceId/comments/:commentId' element={<CommentShow />} />
    
    <Route exact path='/*' element={<NoMatch />} />
    </Routes>
  </>
)

export default App;

