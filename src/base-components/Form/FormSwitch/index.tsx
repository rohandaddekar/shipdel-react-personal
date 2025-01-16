import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import FormCheck, { FormCheckProps, LabelProps } from "../FormCheck";

function FormSwitch(props: FormCheckProps) {
  return <FormCheck {...props}>{props.children}</FormCheck>;
}

FormSwitch.Label = (props: LabelProps) => {
  return <FormCheck.Label {...props}>{props.children}</FormCheck.Label>;
};

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  type: "checkbox";
}

FormSwitch.Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <FormCheck.Input
      ref={ref}
      {...props}
      className={twMerge([
        // Default
        "w-[38px] h-[24px] p-px rounded-full relative",
        "before:w-[20px] before:h-[20px] before:shadow-[1px_1px_3px_rgba(0,0,0,0.25)] before:transition-[margin-left] before:duration-200 before:ease-in-out before:absolute before:inset-y-0 before:my-auto before:rounded-full before:dark:bg-darkmode-600",

        // On checked
        "checked:bg-primary checked:border-primary checked:bg-none",
        "before:checked:ml-[14px] before:checked:bg-white",

        props.className,
      ])}
    />
  );
});

export default FormSwitch;
