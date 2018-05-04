import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer(['store'])
export default class TodoList extends Component {
  constructor(){
    super()
    this.filter = this.filter.bind(this)
    this.createNew = this.createNew.bind(this)
  }

 createNew(e){
   if (e.which === 13) {
     this.props.store.createTodo(e.target.value)
     e.target.value = ""
   }
 }

 filter(e) {
   this.props.store.filter = e.target.value
 }

 toggleComplete(todo){
   todo.complete = !todo.complete
 }

  render() {
    const { filter, filteredTodos, todos } = this.props.store

    const todoList = filteredTodos.map(todo => <li key={todo.id}>
      <input type="checkbox" onChange={() => this.toggleComplete(todo)} value={todo.complete} checked={todo.complete}/>
      {todo.value}
    </li>)

    console.log('this is the props', this.props)
    return (
      <div>
        <h1>Todos!</h1>
        <div>{filter}</div>

        <input className="filter" value={filter} onChange={this.filter}/>
        <ul>
          {todoList}
        </ul>
        <div>Add New Todo</div>
        <input className="create" onKeyPress={this.createNew}/>
      </div>
    )
  }
}
