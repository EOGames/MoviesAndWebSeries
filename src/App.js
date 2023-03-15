
import VideoList from './VideoList';
import { data, shows} from './database';
import { Routes,Route } from 'react-router-dom';
import SlideShow from './SlideShow';
import Topbar from './Topbar';
import SerchBar from './SerchBar';
import React from 'react';

const App = function() 
{    
        return (
          <div className="App">     
          
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/movies' element = {<Movies />} />
            <Route path='/shows' element = {<Shows  />} />
          </Routes>
        </div>
        );    
}

export default App;

const Home = function() 
{  

  return (
      <div>
      <Topbar />
      <SlideShow   />
        </div>
  );
  
}

class Movies extends React.Component
{
  constructor ()
  {
    super()
      this.state = 
      {
        activelist : [],
        searchfield: ''
      }
  }

  componentDidMount()
  {
      this.setState({activelist: data});
  }
  onSearchChange = (event) =>
  {
    this.setState(
      {
        searchfield: event.target.value
      }
    );
    console.log(event.target.value);
  }
    render()
    {

      const fillteredList = this.state.activelist.filter (sh =>
        {      
          console.log("this is from fillter list " + this.state.searchfield.toLowerCase());
          return sh.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

      return (
        <div>
          <Topbar />
          <SerchBar searchChange ={this.onSearchChange} />
          <VideoList list = {fillteredList} /> 
        </div>
      );
    }
}

class Shows extends React.Component
{
  constructor ()
  {
    super()
      this.state = 
      {
        activelist : [],
        searchfield: ''
      }
  }

  componentDidMount()
  {
      this.setState({activelist: shows});
  }
  onSearchChange = (event) =>
  {
    this.setState(
      {
        searchfield: event.target.value
      }
    );
    console.log(event.target.value);
  }
    render()
    {

      const fillteredList = this.state.activelist.filter (sh =>
        {      
          console.log("this is from fillter list " + this.state.searchfield.toLowerCase());
          return sh.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

      return (
        <div>
              <Topbar />
              <SerchBar searchChange ={this.onSearchChange}  />
              <VideoList list = {fillteredList} />  
      </div>
      );
    }
}


