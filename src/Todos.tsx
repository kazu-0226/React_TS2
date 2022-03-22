import { VFC } from "react";
import { TodoType } from "./types/todo";

// Pick<TodoType, "id" | "title">
export const Todos: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}ユーザー:${userId}`}</p>;
};
