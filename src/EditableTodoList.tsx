import React from "react";
import EditableTodo from "./EditableTodo";
import { TodoInterface } from "./interfaces";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

interface TodoListProps {
  todos: TodoInterface[];
  update: (Todo: TodoInterface) => void;
  remove: (id: string) => void;
}

function EditableTodoList({ todos, update, remove }: TodoListProps): JSX.Element[] {
  return todos.map(todo => (
    <EditableTodo
      key={todo.id}
      todo={todo}
      update={update}
      remove={remove}
    />
  ));
}

export default EditableTodoList;
