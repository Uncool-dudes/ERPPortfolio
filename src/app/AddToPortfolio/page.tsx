"use client";
import NameInput from "./NameInputBox";
import EvidenceSelect from "./EvidenceSelect";
import TypeRadio from "./TypeRadio";
import { useState } from "react";
import SkillOption from "./SkillOption";
import AchievementOption from "./AchievementOption";
import ProjectOption from "./ProjectOption";
import ProfessionalExperience from "./ProfessionalExperience";

export default function Add() {
  const [childData, setChildData] = useState<string>("");

  const handleType = (data: string) => {
    setChildData(data);
  };

  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className=" basis-1/2 flex h-full items-center justify-center">
        <div className="flex flex-col w-4/5">
          <form>
            <NameInput />
            <EvidenceSelect />
            <TypeRadio onSendData={handleType} />
            {childData === "Skill" ? <SkillOption /> : null}
            {childData === "Achievement" ? <AchievementOption /> : null}
            {childData === "Project" ? <ProjectOption /> : null}
            {childData === "ProfessionalExp" ? (
              <ProfessionalExperience />
            ) : null}
          </form>
        </div>
      </div>
      <div id="renderResume"></div>
    </div>
  );
}
