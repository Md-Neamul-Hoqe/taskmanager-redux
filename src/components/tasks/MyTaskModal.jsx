import Modal from "../ui/Modal";

const MyTaskModal = ({ isOpen, setIsOpen, task }) => {
  console.log(isOpen, setIsOpen, task);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
      <p className="my-3 text-base font-mono">{task?.description}</p>

      <p className="text-sm">Assigned to - {task?.assignedTo}</p>

      {/* Footer */}
      <div className="flex justify-between mt-3">
        <p>{task?.deadline}</p>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MyTaskModal;
