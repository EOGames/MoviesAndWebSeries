import Activebar from './Activebar';
import Header from './Header';
import VideoList from './VideoList';
import { data, shows } from './database';
import { Routes,Route } from 'react-router-dom';
import SlideShow from './SlideShow';

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
      <Header />
      <Activebar />
      <SlideShow />
        </div>
  );
}

function Movies()
{
  return (
    <div>
      <Header />
      <Activebar />
      <VideoList list = {data} />    </div>
  );
}

function Shows()
{
  return (
    <div>
      <Header />
      <Activebar />
      <VideoList list = {shows} />    </div>
  );
}
