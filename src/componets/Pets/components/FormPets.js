import React, { useState } from 'react'
import{ compose }from 'recompose'
import { TextField, Button, Select, MenuItem } from '@material-ui/core'

const FormPets = ({
    state
}) => {
    const [ form, setForm ] = useState({})
    const submit = e => { e.preventDefault() }
    const handleChange = e => {}

    return (
        <>
            <div> <h1> FormPets  </h1> </div>

            <form noValidate autoComplete="off" onSubmit={submit}>
            {/* id name type obs */}
                <TextField 
                    fullWidth
                    margin="normal"
                    value={form.name}
                    name="name"
                    onChange={handleChange}
                    label="Name" />
                <TextField 
                    fullWidth
                    margin="normal"
                    value={form.name}
                    name="name"
                    onChange={handleChange}
                    label="Obs" />
                <Select
                    margin="normal"
                    fullWidth
                    // value={age}
                    onChange={handleChange}
                    autoWidth
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>

                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary"> Salvar</Button>
            </form> 
        </>
    )
}

FormPets.prototype = {

}

export default compose(

)(FormPets)