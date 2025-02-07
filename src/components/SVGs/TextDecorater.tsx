import Image from "next/image";
import { HTMLAttributes, JSX } from "react";

function BottomDecorater(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={`relative h-8 mx-auto ${props.className}`}>
      <Image
        src="/assets/events/text-decorater.png"
        alt="Bottom Decorator"
        fill={true}
        className="object-center w-full"
      />
    </div>
  );
}

function TopDecorater(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={`relative h-8 mx-auto ${props.className}`}>
      <Image
        src="/assets/events/text-decorater.png"
        alt="Top Decorator"
        fill={true}
        className="object-center rotate-180 w-full h-full"
      />
    </div>
  );
}

export default function TextDecorater({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      {...props}
      className="relative flex justify-center items-center flex-col"
    >
      <TopDecorater className="mx-auto w-3/4 h-auto min-h-6 lg:min-h-9" />
      {children}
      <BottomDecorater className="mx-auto w-3/4 min-h-6 lg:min-h-9 h-auto" />
    </div>
  );
}

export { TopDecorater, BottomDecorater };
