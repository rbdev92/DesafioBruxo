import { useEffect, useState } from "react"

export default function App() {
  const [data, setData] = useState([])

  const fetchData = () => {
    fetch(`https://hp-api.onrender.com/api/characters`)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container">
      <h1>Wizard Challenge</h1>
      {data.map((item, index) => (
        <h3 key={index}>
          <p>{item.name}</p>
          <img src={item.image} alt="" height={200} />
        </h3>
      ))}
    </div>
  )
}