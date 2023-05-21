import { useTasks } from "../hooks/useTasks";
import { TaskCard } from "./TaskCard";

export const TaskList = () => {
  const { state } = useTasks();
  const { data, loading, errors } = state;

  if (errors) return <h1>Error</h1>;

  return (
    <>
      <div>{loading && <div>Loading...</div>}</div>
      <div>{data && data.map((task) => <TaskCard key={task.id} task={task}/>)}</div>
    </>
  );
};
