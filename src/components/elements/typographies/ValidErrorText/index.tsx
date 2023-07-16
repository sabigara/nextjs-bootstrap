type Props = {
  ErrorMessage: string;
};

export const ValidErrorText = ({ ErrorMessage }: Props) => {
  return <div className="invalid-feedback">{ErrorMessage}</div>;
};
