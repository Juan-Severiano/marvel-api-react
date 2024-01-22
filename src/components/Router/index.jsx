import { Route, Routes } from "react-router-dom"
import Home from "../../templates/Home";
import Characters from "../../templates/Characters";
import Character from "../../templates/Character";
import Comics from "../../templates/Comics";
import Events from "../../templates/Events";
import Series from "../../templates/Series";
import NotFound from "../../templates/NotFound";
import Comic from "../../templates/Comic";
import Event from "../../templates/Event";

const Router = () => {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Characters />} path='/characters' />
      <Route element={<Character />} path='/characters/:id' />
      <Route element={<Comics />} path='/comics' />
      <Route element={<Comic />} path='/comics/:id' />
      <Route element={<Events />} path='/events' />
      <Route element={<Event />} path='/events/:id' />
      <Route element={<Series />} path='/series' />
      <Route element={<NotFound />} path="*" />
    </Routes>
  )
}

export default Router;
