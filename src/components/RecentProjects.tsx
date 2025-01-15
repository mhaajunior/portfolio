import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { ChevronDown, Navigation } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link, github }) => (
          <div key={id}>
            <div className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute -bottom-4 rotate-3 rounded-lg"
                    width={400}
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-neutral-600 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <Navigation
                      className="ms-3 "
                      color="#CBACF9"
                      fill="#CBACF9"
                      size={15}
                    />
                  </div>
                </div>
              </PinContainer>
            </div>
            <div className="w-full flex items-center justify-center">
              {github.length === 0 && (
                <div
                  key={id}
                  className="w-[180px] p-3 flex justify-center items-center rounded-lg border border-black-300"
                >
                  Github Unavailable
                </div>
              )}
              {github.length === 1 && (
                <div
                  key={id}
                  className="w-[180px] p-1 cursor-pointer flex justify-center items-center rounded-lg border border-black-300"
                >
                  <a
                    href={github[0].link}
                    target="_blank"
                    className="flex items-center justify-center"
                  >
                    <img src="/git.svg" alt="github" className="p-2" />
                    <span>Repository</span>
                  </a>
                </div>
              )}
              {github.length > 1 && (
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-[180px] p-3 cursor-pointer flex gap-2 justify-center items-center rounded-lg border border-black-300">
                    <img src="/git.svg" alt="github" />
                    <span>Repository</span>
                    <ChevronDown size={15} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[180px]">
                    {github.map((item) => (
                      <DropdownMenuItem key={item.label}>
                        <a
                          href={item.link}
                          target="_blank"
                          className="block w-full"
                        >
                          {item.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
