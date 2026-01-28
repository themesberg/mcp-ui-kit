import "@/index.css";

import { mountWidget } from "skybridge/web";
import { useToolInfo } from "../helpers";

function Magic8Ball() {
  const { input, output } = useToolInfo<"magic-8-ball">();
  if (!output) {
    return <div>Shaking...</div>;
  }

  return (
    <div className="container">
      <div className="ball">
        <button type="button" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">{input.question}</button>
        <button type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">{output.answer}</button>
      </div>
    </div>
  );
}

export default Magic8Ball;

mountWidget(<Magic8Ball />);
