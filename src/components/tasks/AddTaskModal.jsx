import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import InputHookForm from "./InputHookForm";
import { addTask } from "../../redux/features/todoSlice";
import { useDispatch } from "react-redux";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onCancel = () => {
    reset();

    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));

    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add A Task"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col py-5 gap-5">
        <InputHookForm
          name="title"
          type="text"
          label="title"
          placeholder="title..."
          register={register}
          errors={errors}
          options={{ required: true }}
        />

        <InputHookForm
          name="description"
          type="textarea"
          label="description"
          placeholder="Write description here..."
          register={register}
          errors={errors}
        />

        <InputHookForm
          name="deadline"
          type="date"
          label="deadline"
          placeholder="deadline"
          register={register}
          errors={errors}
        />

        <div className="flex flex-col gap-1">
          <label htmlFor="assignedTo">Assign To</label>

          <select
            className="w-full rounded-md font-mono"
            {...register("assignedTo")}>
            <option defaultValue="Md. Neamul Hoqe" value="Md. Neamul Hoqe">
              Md. Neamul Hoqe
            </option>
            <option value="Md. Abu Hoqe">Md. Abu Hoqe</option>
            <option value="Md. Babul Mia">Md. Babul Mia</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="priority">Priority</label>
          <select
            className="w-full rounded-md font-mono"
            {...register("priority")}>
            <option defaultValue="high" value="high">
              High
            </option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => onCancel()}
            className="btn btn-danger">
            cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
