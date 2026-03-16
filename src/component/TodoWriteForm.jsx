import { useTodos } from '../hooks/useTodos'

function TodoWriteForm() {
    const { addTodo } = useTodos()

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
            <div>할일등록</div>
            <form onSubmit={doSubmit}>
                <input type="text" name="todo" autoComplete="off" className="p-2 border border-gray-300 rounded" />
                <button type="submit" className="p-2 border border-gray-300 rounded hover:bg-gray-200 cursor-pointer">
                    추가하기
                </button>
            </form>
        </>
    )
}

export default TodoWriteForm
