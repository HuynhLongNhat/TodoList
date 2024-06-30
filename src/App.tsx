
import CreateNewTodo from "./components/CreateNewTodo"
import TodoList from "./components/TodoList";
import { ChangeEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type TodoType = {
  id: string;
  name: string;
  isCompleted: boolean;
}


function App() {
  const [todoList, setTodoList] = useState<TodoType[]>(() => {
    const saveTodoList = JSON.parse(localStorage.getItem('todoList') ?? "[]")
    if (saveTodoList?.length) {
      return saveTodoList;
    }
    return []
  });
  const [newTodoString, setNewTodoString] = useState('')

  const handleAddNewToDo = () => {
    const newTodoItem: TodoType = {
      id: uuidv4(),
      name: newTodoString,
      isCompleted: false
    }
    setTodoList([newTodoItem, ...todoList])
    setNewTodoString('')

  }

  const updateIsComplete = (todoId: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted }
        }
        return todo;
      })
    })
  }

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

  const handleOnChangeNewTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value)
  }
  return (
    <>
      <p>This is todo app</p>
      <CreateNewTodo
        handleAddNewToDo={handleAddNewToDo}
        handleOnChangeNewTodo={handleOnChangeNewTodo}
        newTodoString={newTodoString} />
      <TodoList todoList={todoList}
        updateIsComplete={updateIsComplete}
      />
    </>
  )
}

export default App
