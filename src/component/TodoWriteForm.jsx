function TodoWriteForm({ addTodo }) {
    const doSubmit = (e) => {
        e.preventDefault()
        const todo = e.target.todo.value

        if (todo == false) {
            alert('할 일을 입력해주세요')
            e.target.todo.focus()
            return
        }

        addTodo(todo)
        e.target.todo.value = ''
    }
    return (
        <>
            할일등록
            <form onSubmit={doSubmit}>
                <input type="text" name="todo" autoComplete="off" />
                <button type="submit">추가하기</button>
            </form>
        </>
    )
}

export default TodoWriteForm
