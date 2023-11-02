import FormInput from "./form.input";

const SignIn = ({ onCLick }) => {
  return (
    <form className="bg-neutral-100 p-3 rounded-lg flex flex-col gap-3">
      <FormInput
        title={"Email"}
        type={"email"}
        placeholder={"Example@mail.com"}
      />
      <FormInput
        title={"Password"}
        type={"password"}
        placeholder={"********"}
      />

      <p className="text-neutral-500 text-sm">
        Dont have an account?{" "}
        <span className="text-indigo-500 cursor-pointer" onClick={onCLick}>
          SIGNUP
        </span>
      </p>

      <button className="bg-green-500 p-1 rounded-full text-green-950 border-2 border-green-600">
        Submit
      </button>
    </form>
  );
};

export default SignIn;
