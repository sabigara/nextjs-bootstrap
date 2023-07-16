import { FormFloatingSet } from '@/components/elements/forms/FormFloatingSet';
import { BaseButton } from '@/components/elements/buttons/BaseButton';
import clsx from 'clsx';

import styles from './page.module.css';

export const metadata = {
  title: 'フォームログインサンプル | nextjs-bootstrap',
  description: '',
};

export default function AccordionSample() {
  return (
    <>
      <div className={clsx(styles['form-signin'], 'pt-3 pb-2 mb-3')}>
        <h1 className="h1 text-center">ログイン画面</h1>
        <form className="mt-5">
          <FormFloatingSet
            title="メールアドレス"
            name="floatingInput"
            type="email"
            required={true}
          />

          <FormFloatingSet
            title="パスワード"
            name="floatingPassword"
            type="password"
            required={true}
          />

          <BaseButton
            className="w-100 mt-5 btn-lg btn-primary"
            buttonType="submit"
            title="ログイン"
          />
        </form>
      </div>
      <div className="position-absolute bottom-0 end-0 m-5">
        <BaseButton
          url="/"
          className="btn-primary btn-sm"
          title="トップに戻る"
        />
      </div>
    </>
  );
}
