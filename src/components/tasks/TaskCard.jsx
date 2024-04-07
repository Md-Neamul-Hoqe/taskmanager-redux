import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { removeTask, updateStatus } from "../../redux/features/todoSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const updatedStatus =
    task?.status === "pending" ? "in-progress" : "completed";

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      {/* Header */}
      <h1
        className={`text-lg font-semibold mb-3  ${
          task?.priority === "high" ? "text-red-500" : ""
        } ${task?.priority === "medium" ? "text-yellow-500" : ""} ${
          task?.priority === "low" ? "text-green-500" : ""
        }`}>
        {task?.title}
      </h1>

      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>

      {/* Footer */}
      <div className="flex justify-between mt-3">
        <p>{task?.deadline}</p>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => dispatch(removeTask(task?._id))}
            title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>

          <button
            type="button"
            onClick={() =>
              dispatch(updateStatus({ _id: task?._id, status: updatedStatus }))
            }
            title="In progress">
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
