import { useTodos } from '../hooks/useTodos'

function Todoitem({ todo }) {
    const { toggleChecked, deleteTodo } = useTodos()
    return (
        <li key={todo.id}>
            <input type="checkbox" checked={todo.checked} onChange={() => toggleChecked(todo.id)} />
            {todo.text}
            {todo.id}
            <button type="button" onClick={() => deleteTodo(todo.id)}>
                삭제
            </button>
        </li>
    )
}

export default Todoitem
