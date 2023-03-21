import { RouterProvider } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { router } from './Router/Router';
// {/* <img src={image2} style={{WebkitMaskImage:`url(${svg})`,width:'500px', marginTop:'100px',WebkitMaskRepeat:'no-repeat'}} alt="" /> */ }
function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
