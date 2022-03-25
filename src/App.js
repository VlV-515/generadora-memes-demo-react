import html2canvas from 'html2canvas'
import { useState } from 'react'
import './App.css'

function App() {
  const [textoArriba, setTextoArriba] = useState('')
  const [textoAbajo, setTextoAbajo] = useState('')
  const [imgName, setImgName] = useState('')

  const onChangeTxtArriba = (e) => setTextoArriba(e.target.value)
  const onChangeTxtAbajo = (e) => setTextoAbajo(e.target.value)
  const onChangeSelect = (e) => setImgName(e.target.value)
  const onClickExportar = () => {
    html2canvas(document.querySelector('#meme')).then((canvas) => {
      let img = canvas.toDataURL('image/png')
      let link = document.createElement('a')
      link.download = 'meme.png'
      link.href = img
      link.click()
    })
  }

  return (
    <div className='App'>
      <select onChange={onChangeSelect}>
        <option disabled selected>
          Selecciona una imagen
        </option>
        <option value='fire.jpg'>Casa en llamas</option>
        <option value='futurama.jpg'>Futurama</option>
        <option value='history.jpg'>History Channel</option>
        <option value='matrix.jpg'>Matrix</option>
        <option value='philosoraptor.jpg'>Philosoraptor</option>
        <option value='smart.jpg'>Smart Guy</option>
      </select>
      <br />
      <input
        onChange={onChangeTxtArriba}
        type='text'
        placeholder='Texto arriba'
      />
      <br />
      <input
        onChange={onChangeTxtAbajo}
        type='text'
        placeholder='Texto abajo'
      />
      <br />
      <button onClick={onClickExportar}>Exportar</button>
      <div className='meme' id='meme'>
        <span>{textoArriba}</span>
        <br />
        <span>{textoAbajo}</span>
        <img src={'./img/' + imgName} alt={imgName} />
      </div>
    </div>
  )
}

export default App
