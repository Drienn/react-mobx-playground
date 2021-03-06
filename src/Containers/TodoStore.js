import React from 'react'
import { computed, observable } from 'mobx'

class Todo {
  @observable value
  @observable id
  @observable complete

  constructor(value){
    this.value = value
    this.id = Date.now()
    this.complete = false
  }
}

class TodoStore {
  @observable todos = []
  @observable filter = ''
  @computed get filteredTodos(){
    let matchedFilter = new RegExp(this.filter, "i")
    return this.todos.filter(todo => !this.filter || matchedFilter.test(todo.value))
  }
  createTodo(value){
    this.todos.push(new Todo(value))
  }
}

let store = window.store = new TodoStore()

export default store
