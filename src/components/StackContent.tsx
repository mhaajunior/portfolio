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
        <div key={idx1} className="p-5 border rounded-lg">
          <h1 className="mb-5">{section.name}</h1>
          <div className="flex flex-wrap gap-5">
            {section.lists.map((list, idx2) => (
              <div
                key={idx2}
                className="flex flex-col items-center justify-center gap-2 w-24 lg:w-36"
              >
                <div>
                  <img src="/profile.svg" alt="profile" />
                </div>
                <span className="text-xs text-white-100 sm:line-clamp-1 hidden">
                  {list.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
