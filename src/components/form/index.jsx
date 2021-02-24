import React, { useState } from "react";

function Select({ options, onChange, name, value, label }) {
  return (
    <div className="select">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={onChange} value={value}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.key}
          </option>
        ))}
      </select>
    </div>
  );
}

function Input({
  type,
  icon,
  placeholder,
  onChange,
  value,
  name,
  label,
  ...rest
}) {
  return (
    <div className="input-container">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input">
        {icon && <span>{icon}</span>}
        <input
          name={name}
          type={type}
          autoComplete="off"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          {...rest}
        />
      </div>
    </div>
  );
}

export default function Form() {
  const INITIAL_STATE = { title: "", outcome: "", mood: "0", action: "0" };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [isLoading, setIsLoading] = React.useState(null);
  const [error, setError] = useState(null);

  function handleFieldChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData, "DATA TO SEND");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleFieldChange}
        value={formData.title}
      />

      <Input
        name="outcome"
        type="text"
        placeholder="outcome"
        onChange={handleFieldChange}
        value={formData.outcome}
      />

      <Input
        name="mood"
        type="number"
        placeholder="mood"
        onChange={handleFieldChange}
        value={formData.mood}
        label="How do you feel"
        max={10}
        min={0}
        id="mood"
      />

      <Select
        name="action"
        label="Choose Action"
        onChange={handleFieldChange}
        value={formData.action}
        options={[
          { key: "constructive", value: 1 },
          { key: "destructive", value: -1 },
          { key: "idle", value: 0 },
        ]}
      />

      <button type="submit">Add</button>
    </form>
  );
}
