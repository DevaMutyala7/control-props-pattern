import { useSelect } from "../../src/hooks/useSelect";
import { Option } from "../../src/Styled/Option";

export default function Select({
  options
}: {
  options: { [key: string]: any }[];
}) {
  const { open, setOnClick, selectOption, option } = useSelect();
  return (
    <div>
      <input onClick={setOnClick} value={option} />
      {open && (
        <div>
          {options.map((option) => {
            return (
              <Option
                key={option.value}
                onClick={(e) => {
                  e.preventDefault();
                  selectOption(option.value);
                }}
              >
                {option.label}
              </Option>
            );
          })}
        </div>
      )}
    </div>
  );
}
