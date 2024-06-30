
import { CheckBoxOutlineBlank } from "@mui/icons-material"
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Button } from "@mui/material"

const Icon = ({ todoId, isCompleted, updateIsComplete }: {
    todoId: string
    isCompleted: boolean;
    updateIsComplete: (todoId: string) => void
}) => {
    return <div onClick={() => updateIsComplete(todoId)}>
        {isCompleted ? <CheckBoxIcon /> : <CheckBoxOutlineBlank />}
    </div>
}

const Todo = ({ name, isCompleted, updateIsComplete, todoId }: {
    name: string,
    isCompleted: boolean
    updateIsComplete: (todoId: string) => void,
    todoId: string
}) => {
    return (
        <div>
            <Button style={{ justifyContent: "space-between" }} fullWidth={true}
                endIcon={<Icon
                    todoId={todoId}
                    isCompleted={isCompleted}
                    updateIsComplete={updateIsComplete}
                />}
            >{name}</Button>

        </div>

    )
}

export default Todo
