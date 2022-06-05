import styled from 'styled-components'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Rend from './components/Rend';
import Form from './components/Form';
import { addExpense } from './redux/actions/action';
import Button from './components/UI/Button';


function App() {
  const [isPrice, setIsPrice] =useState(true)
  const [isTitle, setIsTitle] =useState(true)
  const [signIn, setSignIn] = useState(false)
  const [isDate, setIsData] =useState(true)
  function ChangeHand(){
    setSignIn(prev=>!prev)
  }

  const dispatch = useDispatch()
  const expenses = useSelector((state)=>state.expense)
  const [state, setState] = useState(false)


  const [data, setData] = useState({
    title: '',
    price: '',
    date: ''
  })

  const handleFormChange=(e)=>{
    const value = e.target.value
    setData({
      ...data,
      [e.target.name]: value,
    })
    setIsData(true)

    
    if(data.title.length > 2){
      setIsTitle(false)
    }else{
      setIsTitle(true)
    }
    

    if(data.price.length > 2){
      setIsPrice(false)
      console.log(555);
    }else{
      setIsPrice(true)
    }

    if(!isTitle && !isPrice){
      setState(true)
      setIsData(false)
    }else{
      setState(false)
    }

  }

  const submitHandler =(e)=>{
    e.preventDefault()

    dispatch(addExpense(data))

  setData({
    title: '',
    price: '',
    date: ''
  })

  setIsPrice(true)
  setIsTitle(true)

  if(data.date === ''){
    setIsData(false)
  }
  setState(false)
  }

  
  return (
    <>
      {!signIn && <SignWrap><h1 onClick={ChangeHand}>SignUp</h1></SignWrap>}
      {signIn && <Section className='sectin'>
        <h1>Fill in the Form</h1>
        <form onSubmit={submitHandler} className='forma'>
        
      <Form 
        
        label="Title" 
        name="title" 
        value={data.title}
        onChange={handleFormChange} />
        {isTitle && <p className='empty'>'Minimum be 3 characters or more'</p>}
      <Form
      
        label="Price" 
        type="text" 
        name="price" 
        value={data.price}
        onChange={handleFormChange} />
        {isPrice && <p className='empty'>'Minimum be 1 characters or more'</p>}
      <Form
      
        label="Date" 
        type="date" 
        name="date" 
        value={data.date}
        onChange={handleFormChange} />
        {!isDate && <p className='empty'>Kaalasanyz datany da belgilep koisonuz bolot</p>}
        <Button ondiz={!state} type='submit' className="button"/>
        </form>
        
      </Section>}
      {expenses.map((item)=>(
          <Rend key={item.id} id={item.id} title={item.title} price={item.price} date={item.date} />
        ))}
    </>
  );
}


export default App;




const Section = styled.section`
padding: 20px;
width: 800px;
margin: 40px auto;
border-radius: 20px;
box-shadow: 0px 0px 19px 8.90px aqua;
color: white;
.empty{
  color: red;
  margin-top: -10px;
  margin-bottom: -2px;
}
.button{
  cursor: pointer;
  margin-top:30px;
  box-shadow: 0px 0px 8px 1.90px aqua;
}
.button:hover{
  background-color: aquamarine;
  color: blueviolet;
}
`
const SignWrap = styled.div`
  margin: 40px auto;
  background-color: red;
  width: 600px;
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  height: 400px;
  background-color: transparent;
  border: 3px solid aqua;
  border-radius: 20px;
  & h1{
    color: blanchedalmond;
    background-color: blueviolet;
    width: 260px;
    padding-bottom:10px;
    border-radius: 12px;
    margin: 130px auto;
    box-shadow: 0px 0px 18px 12.90px aqua;
    cursor: pointer;
  }
  & h1:hover{
    background-color: yellowgreen;
    color: blueviolet;
    width: 320px;
    padding: 30px;
  }
 
`