import styled from 'styled-components'

const ContDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  color: darkorange;
  font-weight: 700;
  font-size: 20px;
  & input{
    border: 2px solid white;
    padding: 14px;
    background-color: transparent;
    box-shadow: 0px 2px 4px 2.90px wheat;
    border-radius: 10px ;
    margin-bottom: 12px;
    color: white;
    font-size: 20px;
  }
  & input::-webkit-calendar-picker-indicator {
    cursor: pointer;
    color: wheat;
    opacity: 1;
    background-color: aqua;
    .as{
      background-color: red;
    }
}
  
`

function Form(props) {
    
    const { label, type = 'text', name, value, onChange, className,onBlur } = props;
    const as = props.sadyr
  
    return (
      <ContDiv className={as}>
        
        <label>{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={className}
          onBlur={onBlur}
        />
      </ContDiv>
    )
  }


export default Form