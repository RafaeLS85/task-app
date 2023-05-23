import { useForm } from "react-hook-form";
import {
  createTasks,
  deleteTasks,
  updateTasks,
  getTask,
} from "../services/tasks.service";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from 'react-hot-toast'

export const TaskFormPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { id } = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (!id) {
      await createTasks(data);
      toast.success('Task created successfully', {
        position: 'bottom-right',
      })
    } else {
      await updateTasks(id, data);
      toast.success('Task updated successfully',{position: 'bottom-right',})
    }
    navigate("/tasks");
  });

  const handleDelete = async (id) => {
    const ok = window.confirm("Delete task?");
    if (ok) {
      await deleteTasks(id);
      toast.success('Task deleted',{position: 'bottom-right',})
      navigate("/tasks");
    }
  };

  useEffect(() => {
    async function loadTask() {
      if (id) {
        const {
          data: { title, description },
        } = await getTask(id);
        setValue("title", title);
        setValue("description", description);
      }
    }
    loadTask();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>Title is required</span>}
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>Description is required</span>}
        <button>Save</button>
      </form>
      {id && <button onClick={() => handleDelete(id)}>Delete</button>}
    </div>
  );
};
