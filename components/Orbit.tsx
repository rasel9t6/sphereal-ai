import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Orbit(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="absolute-center isolate -z-10 ">
      <div
        className={twMerge(
          "size-[200px] rounded-full border border-gray-200/30",
          props.className,
        )}
      ></div>
    </div>
  );
}
