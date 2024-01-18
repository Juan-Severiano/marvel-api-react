import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import api from '../../services/api'

function App() {
  useEffect(() => {
    const fetch = async () => {
      const response = await api.get('/characters');
      console.log(response.data.data.results)
    }
    fetch()
  }, [])

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
