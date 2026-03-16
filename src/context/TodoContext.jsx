import { createContext, useEffect, useState } from 'react'
import { getStorage, setStorage } from '../utils/storage'

export const TodoContext = createContext()

export function TodoProvider({ children }) {
    const [todos, setTodo] = useState(getStorage())

    useEffect(() => {
        setStorage(todos)
    }, [todos])

    const addTodo = (text) => {
        const newId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1
        setTodo([{ id: newId, text, checked: false }, ...todos])
    }

    const deleteTodo = (selectedId) => {
        setTodo(todos.filter((todo) => todo.id !== selectedId))
    }

    const toggleChecked = (selectedId) => {
        setTodo(todos.map((todo) => (todo.id === selectedId ? { ...todo, checked: !todo.checked } : todo)))
    }

    const value = { addTodo, todos, toggleChecked, deleteTodo }

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

// export function useTodos() {
//     const conetxt = useContext(TodoContext)

//     return conetxt
// }
