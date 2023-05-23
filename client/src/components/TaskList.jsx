import { useTasksList } from "../hooks/useTasksList";
import { TaskCard } from "./TaskCard";
import { Error } from "./shared/Error";
import { Spinner } from "./shared/Spinner";

export const TaskList = () => {
  const { state } = useTasksList();
  const { data: { results }, loading, errors } = state;

  if (errors) return <Error errors={errors} />;

  return (
    <>
      <div>{loading && <Spinner />}</div>
      <div>
        {results && results.map((task) => <TaskCard key={task.id} task={task} />)}
      </div>
    </>
  );
};
