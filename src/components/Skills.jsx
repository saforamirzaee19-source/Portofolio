import { useState } from "react";
import CommunicationSkills from "./ComunicationSkills";
import ProgrammingSkills from "./ProgramingSkills";
import ToolsSkills from "./ToolsSkills";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("programming");

  const categories = [
    { id: "programming", label: "Programming Skills" },
    { id: "tools", label: "Tools Skills" },
    { id: "communication", label: "Communication Skills" },
  ];

  return (
    <div id="skills" className="skills-section">
      <div className="container">
        <div
          className="skills-category-grid"
          role="group"
          aria-label="Skill categories"
        >
          {categories.map((category) => (
            <div className="skills-category-box" key={category.id}>
              <button
                type="button"
                className={`skills-category-button${activeCategory === category.id ? " active" : ""}`}
                aria-pressed={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div hidden={activeCategory !== "programming"}>
        <ProgrammingSkills />
      </div>
      <div hidden={activeCategory !== "tools"}>
        <ToolsSkills />
      </div>
      <div hidden={activeCategory !== "communication"}>
        <CommunicationSkills />
      </div>
    </div>
  );
}
