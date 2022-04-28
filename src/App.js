import { useState } from 'react'
const App = () => {
    //los datos del campo input estan sincronizadon con la UI
    //y se encuentran guardados en el state "value"
    const [value, setValue] = useState({
        normal: '',
        texto: '',
        select: '',
    })
    const handleChange = (e) => {
        setValue((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
        // setValue({
        // ...value,
        // [e.target.name]: e.target.value,
        // })
    }
    console.log(value)
    return (
        <div>
            {value.length < 5 ? <span>valeor menor a 5</span> : null}

            <input
                type="text"
                name="normal"
                value={value.normal}
                onChange={handleChange}
            />
            <textarea
                name="texto"
                cols="30"
                rows="2"
                value={value.texto}
                onChange={handleChange}
            />
            <select value={value.select} name="select" onChange={handleChange}>
                <option value="">select</option>
                <option value="volado">volado</option>
                <option value="cafe">café</option>
                <option value="weed">weed</option>
            </select>
        </div>
    )
}
export default App
