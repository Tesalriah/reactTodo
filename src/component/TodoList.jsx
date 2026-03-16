function TodoList({ todos, deleteTodo, toggleChecked }) {
    return (
        <>
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

export default TodoList
