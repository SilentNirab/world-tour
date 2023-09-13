
import './App.css'
import Countries from './components/countries/Countries/Countries'

function App() {


  return (
    <>
      <div className='text-center flex flex-col justify-start items-center'>
        <h1 className='text-5xl font-bold text-center'>
          React World Tour
        </h1>

        <Countries></Countries>
      </div>
    </>
  )
}

export default App
