import type { DropdownType } from "./form.type";

export type LinearFilterType = {
  data: DropdownType;
  onChange: (data: DropdownType) => void;
};
