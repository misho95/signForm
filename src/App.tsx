import { useState } from "react";
import MainButton from "./main.button";
import SignIn from "./signin";
import SignUp from "./signup";

function App() {
  const [formActive, setFormActive] = useState(0);

  return (
    <div className="w-full min-h-screen bg-neutral-300 flex justify-center items-center">
      <div className="w-[500px] p-5 flex flex-col gap-3">
        <div className="flex justify-around gap-3">
          <MainButton
            id={0}
            title={"SIGNIN"}
            val={formActive}
            onCLick={() => setFormActive(0)}
          />
          <MainButton
            id={1}
            title={"SIGNUP"}
            val={formActive}
            onCLick={() => setFormActive(1)}
          />
        </div>
        {formActive === 0 && <SignIn onCLick={() => setFormActive(1)} />}
        {formActive === 1 && <SignUp onCLick={() => setFormActive(0)} />}
      </div>
    </div>
  );
}

export default App;
