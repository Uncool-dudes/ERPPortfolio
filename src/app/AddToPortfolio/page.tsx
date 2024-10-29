import NameInput from "./NameInputBox";
import EvidenceSelect from "./EvidenceSelect";
import TypeRadio from "./TypeRadio";
export default function Add() {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className=" basis-1/2 flex h-full items-center justify-center">
        <div className="flex flex-col w-4/5">
          <NameInput />
          <EvidenceSelect />
          <TypeRadio />
        </div>
      </div>
      <div id="renderResume"></div>
    </div>
  );
}
