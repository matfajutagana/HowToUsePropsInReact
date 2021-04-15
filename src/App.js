import {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'

function App() {

  const [diary, setDiary] = useState('')
  
  const changeHandler = (e) => {
    setDiary(e.target.value)
  }

  return (
    <>
    <Header />
    <main>
    <Form myDiary={diary} handleChange={changeHandler}/>
    </main>
    <Footer />
    </>

  );
}

export default App;
