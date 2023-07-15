import { clsx } from 'clsx';

type Props = {
  className?: string;
  buttonType?: 'button' | 'submit' | 'reset';
  targetId: string;
};

export const NavBarToggleButton = ({
  className,
  buttonType = 'button',
  targetId,
}: Props) => {
  return (
    <button
      className={clsx(className, 'navbar-toggler')}
      type={buttonType}
      data-bs-toggle="collapse"
      data-bs-target={`#${targetId}`}
      aria-controls={`${targetId}`}
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};
