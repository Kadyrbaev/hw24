import { useDispatch, useSelector } from "react-redux"
import { deleteExpense } from "../redux/actions/action"
import styled from 'styled-components'
import { useState } from "react";


function Rend(props){

    console.log(props.title);
    const expenses = useSelector((state)=>state.expense)
    const dispatcher = useDispatch()
    const deleteHandler=()=>{
        dispatcher(deleteExpense(props.id))

      }
    return(
        <ContWrap>
            <span>{props.title}</span>
            <span>{props.price}</span>
            <span>{props.date.toString()}</span>
            <button className="del" onClick={()=>deleteHandler(props.id)}>X</button>
        </ContWrap>
    )
}
export default Rend



const ContWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 4px solid brown;
    width: 790px;
    margin: 20px auto;
    
    padding: 10px 30px 10px 30px;
    border-radius: 14px;
    box-shadow: 0px 0px 6px 3.90px aqua;
    color: darkorange;
    font-weight:800;
    font-size: 28px;
    list-style:none;

    .del{
        background-color: white;
        color: black;
        text-align: center;
        width: 50px;
        font-size: 28px;
        padding: 6px;
        border-radius: 50%;
        cursor: pointer;
    }
    .del:hover{
        background-color: aqua;
    }
`
