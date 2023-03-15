
import VideoList from './VideoList';
import { data, shows} from './database';
import { Routes,Route } from 'react-router-dom';
import SlideShow from './SlideShow';
import Topbar from './Topbar';
import SerchBar from './SerchBar';

function App() {
  return (
    <div className="App">     
      
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/movies' element = {<Movies />} />
        <Route path='/shows' element = {<Shows />} />
        {/* <Route path='/contact' element = {<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;

function Home ()
{
  return (
    <div>
      <Topbar />
      <SlideShow   />
        </div>
  );
}

function Movies()
{
  return (
    <div>
      <Topbar />
      <SerchBar />
      <VideoList list = {data} />    </div>
  );
}

function Shows()
{
  return (
    <div>
            <Topbar />
            <SerchBar />
            <VideoList list = {shows} />  
    </div>
  );
}


