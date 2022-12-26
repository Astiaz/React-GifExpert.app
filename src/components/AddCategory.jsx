import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim().toLowerCase();
        if(newInputValue.length <= 1) return;

        onNewCategory(newInputValue);
        setInputValue('');
    }

    return(
        <form onSubmit={onSubmit}>
            <input 
                type='text'
                placeholder='Introduzca categoria a buscar'
                onChange={onInputChange}
                value={inputValue}
            />
        </form>
    )
}