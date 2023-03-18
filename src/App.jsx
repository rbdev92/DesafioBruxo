import { useEffect, useState } from 'react'

export default function App() {
  const [data, setData] = useState([])

  const fetchData = () => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(response => response.json())
      .then(actualData => {
        setData(actualData)
      })
      .catch(err => {
        console.log(`Pelas barbas de Merlin! Ocorreu um erro. ${err}`)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='container'>
      <h1>Wizard Challenge</h1>
      {data.map((item, index) => (
        <h2 key={index}>
          <p>{item.name}</p>
          <img src={item.image} alt="" height={200} />
          <div>
            <p>Varinha</p>
            <ul>
              <li>Madeira: {item.wand.wood}</li>
              <li>Núcleo: {item.wand.core}</li>
              <li>Comprimento: {item.wand.length}</li>
            </ul>
          </div>
        </h2>
      ))}
    </div>
  )
}