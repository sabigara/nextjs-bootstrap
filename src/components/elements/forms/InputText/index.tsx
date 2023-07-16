import { ValidErrorText } from '../../typographies/ValidErrorText';

type Props = {
  title: string;
  name: string;
  type: 'text' | 'tel' | 'email' | 'password';
  placeholder?: string;
  required?: boolean;
};

export const InputText = ({
  title,
  name,
  type,
  placeholder,
  required = false,
}: Props) => {
  return (
    <>
      <label htmlFor={name} className="form-label">
        {title}
      </label>
      <input
        type={type}
        className="form-control"
        id={name}
        placeholder={placeholder}
        required={required}
      />
      <ValidErrorText ErrorMessage="errormessage" />
    </>
  );
};
