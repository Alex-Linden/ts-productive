import React from "react";

import Todo from "./Todo";
import { TodoInterface } from "./interfaces";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }: { todos: TodoInterface[] }): JSX.Element | null {
  if (todos.length === 0) return null;

  // lowest-priority # is the highest priority
  let top = todos.reduce(
      (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  return <Todo todo={top} />;
}

export default TopTodo;