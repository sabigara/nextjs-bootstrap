import { ValidErrorText } from '../../typographies/ValidErrorText';

export type InputSelectOption = {
  value: string;
  label: string;
};

type Props = {
  title: string;
  name: string;
  required?: boolean;
  options: InputSelectOption[];
};

export const InputSelect = ({
  title,
  name,
  required = false,
  options,
}: Props) => {
  return (
    <>
      <label htmlFor={name} className="form-label">
        {title}
      </label>
      <select className="form-select" id={name} required={required}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ValidErrorText ErrorMessage="errormessage" />
    </>
  );
};
