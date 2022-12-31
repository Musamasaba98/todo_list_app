import React from "react";
import { useFetcher } from "react-router-dom";

const Checkbox = ({ task }) => {
  const toggle = useFetcher();
  const checked = toggle.formData
    ? toggle.formData.get("checked") === "on"
    : task.checked;
  if (false) {
    console.log(checked);
  }
  return (
    <toggle.Form method="put" action={`tasks/${task.id}/edit`}>
      <input
        name="checked"
        type="checkbox"
        checked={checked}
        onChange={(e) => toggle.submit(e.target.form)}
        className="checkbox"
      />
      <label>
        <span className="custom-checkbox"></span>
      </label>
    </toggle.Form>
  );
};
export default Checkbox;
