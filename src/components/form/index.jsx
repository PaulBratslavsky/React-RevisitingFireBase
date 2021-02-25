import React, { useState } from "react";
import { hasError } from "../../utils/hasError";

import styles from "./form.module.css";

import { useAddDocToCollection } from "../../hooks/useAddDocToCollection";

function Select({ options, onChange, name, value, label }) {
  return (
    <div className="select-container">
      <label htmlFor={name}>{label}</label>
      <div className="select">
        <select name={name} id={name} onChange={onChange} value={value}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.key}
            </option>
          ))}
        </select>
      </div>
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
  const INITIAL_STATE = {
    mood: "0",
    behavior: "",
    consequence: "",
    action: "0",
    actionDirection: "-1",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  // const [isLoading, setIsLoading] = React.useState(null);
  const [error, setError] = useState(null);

  const { status, submitError, submitData, data } = useAddDocToCollection(
    "dailyAction"
  );

  console.log(status, submitError, data);

  function handleFieldChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (hasError(formData, setError)) return;

    const doc = {
      ...formData,
      action: parseInt(formData.action),
      actionDirection: parseInt(formData.actionDirection),
      mood: parseInt(formData.mood),
      timestamp: Date.now(),
    };
    submitData(doc);
    setFormData(INITIAL_STATE);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        id="mood"
        label="How do you feel from 1 - 10"
        name="mood"
        type="number"
        placeholder="mood"
        onChange={handleFieldChange}
        value={formData.mood}
        max={10}
        min={0}
      />

      <Input
        id="behavior"
        label="What are you doing right now?"
        name="behavior"
        placeholder="behavior"
        type="text"
        onChange={handleFieldChange}
        value={formData.behavior}
      />

      <Input
        id="consequence"
        label="What are the consequences of this action?"
        name="consequence"
        placeholder="consequence"
        type="text"
        onChange={handleFieldChange}
        value={formData.consequence}
      />

      <Select
        id="action"
        name="action"
        label="Is this constructive, destructive, or idle action?"
        onChange={handleFieldChange}
        value={formData.action}
        options={[
          { key: "constructive", value: 1 },
          { key: "destructive", value: -1 },
          { key: "idle", value: 0 },
        ]}
      />

      <Select
        id="actionDirection"
        name="actionDirection"
        label="Should you do more or less of this behavior?"
        onChange={handleFieldChange}
        value={formData.actionDirection}
        options={[
          { key: "more", value: 1 },
          { key: "less", value: -1 },
        ]}
      />

      <button type="submit">Add</button>
      {error &&
        error.map((error) => (
          <p className={styles.formError} key={error.key}>
            {error.message}
          </p>
        ))}
    </form>
  );
}
