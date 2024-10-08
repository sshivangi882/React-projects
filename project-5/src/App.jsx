import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import {FiSearch} from 'react-icons/fi'
import {AiFillPlusCircle} from 'react-icons/ai'

function App() {

  return (
    <div className='max-w-[370px] mx-auto px-4'>
      <Navbar />
     <div className='flex gap-2'>
     <div className='flex relative flex-grow items-center' >
        <FiSearch className='text-white text-xl flex-grow absolute mx-1' />
        <input type='text' className='border bg-transparent px-7 border-white flex-grow rounded-md h-[40px]' placeholder='search contact details'/>
      </div>
      <div>
        <AiFillPlusCircle className='text-white text-4xl gap-4  cursor-pointer' />
      </div>
     </div>
  </div>
  )
}

export default App
