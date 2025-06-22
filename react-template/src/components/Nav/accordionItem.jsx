import TextInput from "./TextInput";

function AccordionItem({ title, collapseId, parentId, inputFields = [], formData, onChange }) {
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
          {inputFields.map((fieldName, index) => (
            <TextInput
              key={index}
              name={fieldName}
              value={formData[fieldName] !== undefined ? formData[fieldName] : ""}
              onChange={onChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
