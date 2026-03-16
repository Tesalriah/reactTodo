// 로컬 스토리지에 todos 저장
export function setStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// 로컬 스토리지에서 todos 불러오기
export function getStorage() {
    const stored = localStorage.getItem('todos')
    return stored ? JSON.parse(stored) : []
}
