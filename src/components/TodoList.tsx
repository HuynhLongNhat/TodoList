import { TodoType } from '../App'
import Todo from './Todo'

type IProps = {
    todoList: TodoType[],
    updateIsComplete: (todoId: string) => void
}

const TodoList = ({
    todoList,
    updateIsComplete
}: IProps) => {
    return (
        <div>
            <div>
                {todoList.map((todo) => {
                    return (
                        <Todo name={todo.name}
                            isCompleted={todo.isCompleted}
                            updateIsComplete={updateIsComplete}
                            todoId={todo.id}
                        />
                    )
                })}


            </div>
        </div>
    )
}

export default TodoList
