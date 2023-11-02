const FormInput = ({ title, type, placeholder }) => {
  return (
    <fieldset className="w-full border-2 border-neutral-300 rounded-full bg-neutral-100">
      <legend className="px-6 ml-10 select-none text-red-300 bg-red-500 rounded-full border-t-2 border-red-400 outline-1 outline-double outline-red-700">
        {title}
      </legend>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full py-2 pl-6 rounded-full bg-transparent focus:outline-none text-neutral-500"
      />
    </fieldset>
  );
};

export default FormInput;
