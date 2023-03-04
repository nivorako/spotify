
import './App.css'
import { useEffect, useState } from 'react'




function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch("http://localhost:3000/user/12")
      .then((res) => res.json())
      .then((actualData) => setData(actualData.data.id))
      .catch((err) => console.log(err.message))
  }, [])
  return (
    <div className="App">
      id : {data}
      
    </div>
  );
}

export default App;
