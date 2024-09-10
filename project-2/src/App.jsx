
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/ContactHeader/ContactHeader'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  

  return (
    <div>
      <Navigation />
     <main className='main_container'>
     <ContactHeader/>
     <ContactForm/>
     </main>
    </div>
  )
}

export default App
