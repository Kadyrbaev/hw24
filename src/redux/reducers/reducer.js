
const initialState={
    expense: [],
    isValid: false
}

let nextId = 0
export const reducerFunc=(state = initialState, action)=>{
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                expense:[
                    ...state.expense,
                    {
                        title: action.title,
                        price: action.price,
                        date: action.date,
                        id: nextId++
                    },
                ],
            }
            case 'DELETE':
                return {
                    ...state,
                    expense: state.expense.filter((exp)=>exp.id !== action.id),
                }
           
        default:
            return state
    }
}