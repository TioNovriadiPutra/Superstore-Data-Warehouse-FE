import { IconChevronDown } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { DropdownType } from "../types/form.type";
import Flex from "./Flex";

type Props = {
  data: DropdownType[];
  value: DropdownType;
  onPick: (data: DropdownType) => void;
};

const DropdownButton = ({ data, value, onPick }: Props) => {
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside, true);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside, true);
    };
  }, []);

  return (
    <Flex ref={wrapperRef} className="relative">
      <button
        className="justify-between! border border-neutral-200 rounded-md px-3 py-2.75 min-w-30.25 gap-6 hover:bg-neutral-200 transition-colors duration-300"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
      >
        <p className="text-sm text-neutral-800">{value.label}</p>

        <IconChevronDown size={18} className="text-neutral-500" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="flex flex-col absolute p-1.25 top-[calc(100%+5px)] right-0 border border-neutral-200 rounded-md min-w-30.25 origin-top-right z-10 bg-white"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, ease: "circInOut" }}
          >
            {data.map((item, index) => (
              <button
                key={index.toString()}
                className="p-2 justify-start! hover:bg-neutral-200 transition-colors duration-300 rounded-md"
                onClick={(e) => {
                  e.stopPropagation();
                  onPick(item);
                  setOpen(false);
                }}
              >
                <p className="text-sm text-neutral-900">{item.label}</p>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default DropdownButton;
