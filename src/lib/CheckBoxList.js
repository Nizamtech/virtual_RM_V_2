import { Checkbox2 } from "./checkbox2";

function CheckBoxList({ options, isCheckedAll, onCheck }) {
  const checkBoxOptions = (
    <div className="checkbox-list">
      {options.map((option, index) => {
        return (
          <Checkbox2
            key={index}
            name={option.name}
            value={option.value}
            tick={option.checked}
            onCheck={(e) => onCheck(option.value, e.target.checked)}
          />
        );
      })}
    </div>
  );

  return (
    <div className="checkbox-list">
      <Checkbox2
        name="select-all"
        value="ALL"
        tick={isCheckedAll}
        onCheck={(e) => onCheck("all", e.target.checked)}
      />
      {checkBoxOptions}
    </div>
  );
}
