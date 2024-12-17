import { Button } from "./ui/MovingBorders";

interface StackProps {
  title: string;
  sections: {
    name: string;
    lists: {
      name: string;
      icon: string;
    }[];
  }[];
}

interface StackContentProps {
  stack: StackProps;
}

export const StackContent = ({ stack }: StackContentProps) => {
  return (
    <>
      {stack.sections.map((section, idx1) => (
        <Button
          key={idx1}
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1rem"
          className="flex flex-col gap-5 items-start p-5 text-white border-neutral-200 dark:border-slate-800"
          containerClassName="w-full cursor-auto min-h-[150px] md:min-h-[230px] bg-black-300"
        >
          <h1 className="mb-2 sm:mb-5 text-xl">{section.name}</h1>
          <div className="flex flex-wrap gap-5">
            {section.lists.map((list, idx2) => (
              <div
                key={idx2}
                className="flex flex-col items-center justify-center gap-5 w-16 md:w-24 lg:w-36"
              >
                <div>
                  <img src={list.icon} alt="icon" />
                </div>
                <span className="text-xs text-white-100 line-clamp-1">
                  {list.name}
                </span>
              </div>
            ))}
          </div>
        </Button>
      ))}
    </>
  );
};
