import { useRef, useState } from 'react'

function App() {
    const [todos, setTodo] = useState([
        { id: 3, text: '공부하기', checked: false },
        { id: 2, text: '청소하기', checked: false },
        { id: 1, text: '운동하기', checked: false },
    ])
    const lastId = useRef(3)

    const doSubmit = (e) => {
        e.preventDefault()
        const todo = e.target.todo.value

        if (todo == false) {
            alert('할 일을 입력해주세요')
            e.target.todo.focus()
            return
        }

        setTodo([{ id: lastId.current + 1, text: todo, checked: false }, ...todos])
        lastId.current += 1
        e.target.todo.value = ''
    }

    const deleteTodo = (selectedId) => {
        setTodo(todos.filter((todo) => todo.id !== selectedId))
    }

    const toggleChecked = (selectedId) => {
        setTodo(todos.map((todo) => (todo.id === selectedId ? { ...todo, checked: !todo.checked } : todo)))
    }

    return (
        <>
            <form onSubmit={doSubmit}>
                <input type="text" name="todo" autoComplete="off" />
                <button type="submit">추가하기</button>
            </form>
            <ul>
                {todos.map((todo, i) => (
                    <li key={i}>
                        <input type="checkbox" checked={todo.checked} onChange={() => toggleChecked(todo.id)} />
                        {todo.text}
                        {todo.id}
                        <button type="button" onClick={() => deleteTodo(todo.id)}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
