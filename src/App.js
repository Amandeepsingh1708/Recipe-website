import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Details from './Components/Details';
import RecipeDetails from './Recipes/RecipeDetails';
import Errror from './Components/Errror';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Profile from './Components/Profile';
import { Provider } from 'react-redux';
import { Store } from './Store/Store';

function App() {
  return (
  <>
   <Provider store={Store} >
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='/profile' element={<Profile />} />
      <Route path="recipeDetails/:idMeal" element={<RecipeDetails />} />
      <Route path='*' element={<Errror />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  </>
  );
}

export default App;