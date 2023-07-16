import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { BaseButton } from '@/components/elements/buttons/BaseButton';
import { FormFloatingSet } from '@/components/elements/forms/FormFloatingSet';
import './index.css';

export const Index = () => {
  return (
    <div className="form-signin pt-3 pb-2 mb-3">
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
  );
};
