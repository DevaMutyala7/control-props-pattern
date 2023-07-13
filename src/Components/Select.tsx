import { useSelect } from "../../src/hooks/useSelect";
import { Option } from "../../src/Styled/Option";

export default function Select({
  options,
  value,
  onValueChange
}: {
  options: { [key: string]: any }[];
  value?: string;
  onValueChange?: (value: string) => void;
}) {
  const { open, setOnClick, selectOption, selectedOption } = useSelect({
    value,
    onValueChange
  });
  return (
    <div>
      <input onClick={setOnClick} value={selectedOption} />
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
