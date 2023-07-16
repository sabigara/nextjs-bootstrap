import { ValidErrorText } from '../../typographies/ValidErrorText';

type Props = {
  title: string;
  name: string;
  type: 'text' | 'tel' | 'email' | 'password';
  required: boolean;
};

export const FormFloatingSet = ({
  title,
  name,
  type,
  required = false,
}: Props) => {
  return (
    <div className="form-floating">
      <input
        type={type}
        className="form-control"
        id={name}
        placeholder={title}
        required={required}
      />
      <label htmlFor={name}>{title}</label>

      <ValidErrorText ErrorMessage="errormessage" />
    </div>
  );
};
