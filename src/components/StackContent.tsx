import { motion } from "framer-motion";

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
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 * idx1 }}
          key={idx1}
          className="flex flex-col gap-5 p-5 border rounded-lg bg-black-300"
        >
          <h1 className="mb-2 sm:mb-5 ">{section.name}</h1>
          <div className="flex flex-wrap gap-5">
            {section.lists.map((list, idx2) => (
              <div
                key={idx2}
                className="flex flex-col items-center justify-center gap-5 w-16 md:w-24 lg:w-36"
              >
                <div>
                  <img src={list.icon} alt="icon" />
                </div>
                <span className="text-xs text-white-100 sm:line-clamp-1 hidden">
                  {list.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </>
  );
};
