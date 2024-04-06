import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import MyTaskModal from "./MyTaskModal";
import { useState } from "react";
import { updateStatus } from "../../redux/features/todoSlice";
// import { useEffect } from "react";
// import { updateTasks } from "../../redux/features/userSlice";

const MyTasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.user);
  const { todo } = useSelector((state) => state.tasks);

  const tasks = todo.filter((item) => item.assignedTo === name);

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {tasks?.length ? (
          tasks.map((task) => (
            <div
              key={task?._id}
              className="bg-secondary/10 rounded-md p-3 flex justify-between">
              <h1>{task?.title}</h1>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="grid place-content-center"
                  title="Details">
                  <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                </button>
                <MyTaskModal
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  task={task}
                />

                <button
                  className="grid place-content-center"
                  title="Done"
                  onClick={() =>
                    dispatch(updateStatus({ _id: task._id, status: "archive" }))
                  }>
                  <CheckIcon className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl font-semibold pt-3">
            No Assigned Task in your todo list.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyTasks;
