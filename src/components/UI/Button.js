import styled from 'styled-components'
const Btn = styled.button`
    background-color: aqua;
    margin-top: 20px ;
    margin: auto;
    width: 160px;
    padding: 0px;
    font-size: 20px;
    font-weight:600;
    padding: 10px;
    border-radius: 14px;

    .classes:hover{
        background-color: azure;
        color: red;
    }

`

function Button(props){
   console.log(props.ondiz); 
    const classes = props.className
    return (
        <Btn disabled={props.ondiz} type={props.type} className={`${classes}`}>Click</Btn>
    )
}
export default Button