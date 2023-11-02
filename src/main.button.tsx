const MainButton = ({ id, title, val, onCLick }) => {
  return (
    <button
      onClick={onCLick}
      className={`${
        val === id
          ? "bg-neutral-100 text-neutral-500"
          : "bg-red-500 text-red-200 border-2 border-red-600"
      } p-3 rounded-full relative w-20 h-10`}
    >
      <span className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {title}
      </span>
      {val === id && (
        <div className="w-full bg-neutral-100 absolute h-8 left-0 -bottom-3">
          <div className="absolute bottom-0 bg-indigo-500 w-full h-2"></div>
        </div>
      )}
    </button>
  );
};

export default MainButton;
