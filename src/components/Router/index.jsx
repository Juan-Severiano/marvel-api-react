import { Route, Routes } from "react-router-dom"
import Home from "../../templates/Home";
import Characters from "../../templates/Characters";
import Character from "../../templates/Character";
import Comics from "../../templates/Comics";
import Events from "../../templates/Events";
import Stories from "../../templates/Stories";
import Series from "../../templates/Series";

const Router = () => {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Characters />} path='/characters' />
      <Route element={<Character />} path='/characters/:id' />
      <Route element={<Comics />} path='/comics' />
      <Route element={<Events />} path='/events' />
      <Route element={<Stories />} path='/stories' />
      <Route element={<Series />} path='/series' />
    </Routes>
  )
}

export default Router;
