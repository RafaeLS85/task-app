import { useState, useEffect } from "react";
import { getTasks } from "../services/tasks.api";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function loadTasks() {
      getTasks()
        .then(({ data }) => {
          setTasks(data);
          setLoading(false); 
        })
        .catch((err) => {
          setErrors(err);
          setLoading(false);
        });
    }
    loadTasks();
  }, []);

  return {
    actions: [],
    state: { loading, data: tasks, errors },
  };
};
