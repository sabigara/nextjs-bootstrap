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
        // name属性がinput要素に存在しているのにidに渡されているのは意図がよくわからないです。
        id={name}
        // name=""

        // title属性も存在します。
        placeholder={title}
        // title=""
        // また、labelとplaceholderは別物なのに同じ値が設定されてしまうのもよくないです。
        // Bootstrapの実装ではplaceholderが必要ですが、同じ値である必要はないようです。

        required={required}
      />
      <label htmlFor={name}>{title}</label>

      <ValidErrorText ErrorMessage="errormessage" />
    </div>
  );
};
