import capitalize from "../../utils/capitalize";

const InputHookForm = ({
  register,
  label = "Label of title",
  type = "text",
  placeholder = "title...",
  name = "title",
  options = {},
  errors,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-base font-mono">
        {capitalize(label)}
      </label>

      {type === "textarea" ? (
        <textarea
          className="w-full rounded-md font-mono"
          type={type}
          placeholder={placeholder}
          {...register(name, { ...options })}
        />
      ) : (
        <input
          className="w-full rounded-md font-mono"
          type={type}
          placeholder={placeholder}
          {...register(name, { ...options })}
        />
      )}

      {errors[`${name}`] && (
        <p className="text-red-600 font-mono pt-2">
          {capitalize(name)} is required.
        </p>
      )}
    </div>
  );
};

export default InputHookForm;
