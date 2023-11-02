const FormInput = ({ title, type, placeholder }) => {
  return (
    <fieldset className="w-full border-2 border-neutral-200 rounded-full">
      <legend className="px-3 ml-6 select-none text-neutral-400">
        {title}
      </legend>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full py-2 px-5 rounded-full bg-transparent focus:outline-none text-neutral-500"
      />
    </fieldset>
  );
};

export default FormInput;
