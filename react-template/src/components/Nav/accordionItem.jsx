import React from "react";
import TextInput from "./TextInput";

function AccordionItem({ title, collapseId, parentId, inputFieldNames=[], formData, onChange }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded="false"
          aria-controls={collapseId}
        >
          {title}
        </button>
      </h2>
      <div
        id={collapseId}
        className="accordion-collapse collapse"
        data-bs-parent={`#${parentId}`}
      >
        <div className="accordion-body">
            {inputFieldNames.map((item, index) =>(
                <TextInput
                    key={index}
                    name={item}
                    value={formData[name]}
                    onChange={onChange}
                />
            ))}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
