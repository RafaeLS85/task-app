import { useTasks } from "../hooks/useTasks";
import { TaskCard } from "./TaskCard";
import { Error } from "./shared/Error";
import { Spinner } from "./shared/Spinner";

export const TaskList = () => {
  const { state } = useTasks();
  const { data, loading, errors } = state;

  if (errors) return <Error errors={errors} />;

  return (
    <>
      <div>{loading && <Spinner />}</div>
      <div>
        {data && data.map((task) => <TaskCard key={task.id} task={task} />)}
      </div>
    </>
  );
};
