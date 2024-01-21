import { Route, Routes } from "react-router-dom"
import Home from "../../templates/Home";
import Characters from "../../templates/Characters";
import Character from "../../templates/Character";
import Comics from "../../templates/Comics";
import Events from "../../templates/Events";
import Series from "../../templates/Series";
import NotFound from "../../templates/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Characters />} path='/characters' />
      <Route element={<Character />} path='/characters/:id' />
      <Route element={<Comics />} path='/comics' />
      <Route element={<Events />} path='/events' />
      <Route element={<Series />} path='/series' />
      <Route element={<NotFound />} path="*" />
    </Routes>
  )
}

export default Router;
