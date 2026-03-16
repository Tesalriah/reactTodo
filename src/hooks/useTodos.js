import { useRef, useState } from 'react'

export function useTodos() {
    const [todos, setTodo] = useState([
        { id: 3, text: '공부하기', checked: false },
        { id: 2, text: '청소하기', checked: false },
        { id: 1, text: '운동하기', checked: false },
    ])
    const lastId = useRef(3)

    const addTodo = (text) => {
        setTodo([{ id: lastId.current + 1, text, checked: false }, ...todos])
        lastId.current += 1
    }

    const deleteTodo = (selectedId) => {
        setTodo(todos.filter((todo) => todo.id !== selectedId))
    }

    const toggleChecked = (selectedId) => {
        setTodo(todos.map((todo) => (todo.id === selectedId ? { ...todo, checked: !todo.checked } : todo)))
    }

    return { addTodo, todos, toggleChecked, deleteTodo }
}
