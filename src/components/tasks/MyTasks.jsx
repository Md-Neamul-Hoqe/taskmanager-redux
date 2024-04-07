import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import MyTaskModal from "./MyTaskModal";
import { useEffect, useState } from "react";
import { setUserTasks, updateStatus } from "../../redux/features/todoSlice";
// import { useEffect } from "react";
// import { updateTasks } from "../../redux/features/userSlice";

const MyTasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDetails, setCurrentDetails] = useState({});
  const dispatch = useDispatch();

  const { name: userName } = useSelector((state) => state.user);
  const { todo, userAssignedTasks } = useSelector((state) => state.tasks);

  // const tasks = todo.filter((item) => item.assignedTo === userName);

  useEffect(() => {
    dispatch(setUserTasks(userName));
  }, [todo, dispatch, userName]);

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>

      <MyTaskModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        task={currentDetails}
      />
      <div className=" h-[750px] overflow-auto space-y-3">
        {userAssignedTasks?.length ? (
          userAssignedTasks.map((task) => (
            <div
              key={task?._id}
              className={`rounded-md p-3 flex justify-between ${
                task?.status === "pending"
                  ? "bg-yellow-50"
                  : task?.status === "in-progress"
                  ? "bg-green-50"
                  : "bg-secondary/10"
              }`}>
              <h1>{task?.title}</h1>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setCurrentDetails(task);
                    setIsOpen(!isOpen);
                  }}
                  className="grid place-content-center"
                  title="Details">
                  <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                </button>

                <button
                  className="grid place-content-center"
                  title="Done"
                  onClick={() =>
                    dispatch(
                      updateStatus({ _id: task._id, status: "completed" })
                    )
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
