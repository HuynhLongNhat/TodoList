import React, { ChangeEvent } from 'react'
import { TextField, Button } from '@mui/material'

type Props = {
    newTodoString: string,
    handleOnChangeNewTodo: (e: ChangeEvent<HTMLInputElement>) => void,
    handleAddNewToDo: () => void
}

const CreateNewTodo = ({
    newTodoString,
    handleOnChangeNewTodo,
    handleAddNewToDo,
}: Props) => {


    return (
        <div>
            <div>
                <TextField size="small" value={newTodoString} onChange={handleOnChangeNewTodo} />
                <Button variant="contained" onClick={handleAddNewToDo}>Thêm</Button>
            </div>
        </div>
    )
}

export default CreateNewTodo
