import { BaseButton } from '@/components/elements/buttons/BaseButton';
import { FormSet } from '@/components/elements/forms/FormSet';
import { InputSelect } from '@/components/elements/forms/InputSelect';
import { InputText } from '@/components/elements/forms/InputText';

import styles from './page.module.css';

export const metadata = {
  title: 'フォームサンプル | nextjs-bootstrap',
  description: '',
};

export type InputSelectOption = {
  value: string;
  label: string;
};

// セレクトボックスのメニュー（DBから取得予定）
const selectOptions: InputSelectOption[] = [
  {
    value: '',
    label: '選択してください',
  },
  {
    value: 'select1',
    label: 'セレクト1',
  },
  {
    value: 'select2',
    label: 'セレクト2',
  },
  {
    value: 'select3',
    label: 'セレクト3',
  },
];

export default function AccordionSample() {
  return (
    <>
      <div className={styles['form-sample']}>
        <h2 className="h3 pt-3 pb-2 mb-3 border-bottom">フォームサンプル</h2>
        <form>
          <FormSet
            className="col-sm-12 mb-3"
            contents={
              <InputText
                title="ユーザー名（必須）"
                name="user"
                type="text"
                required={true}
              />
            }
          />

          <FormSet
            className="col-md-4 mb-3"
            contents={
              <InputSelect
                title="セレクトボックス（必須）"
                name="selectExample"
                options={selectOptions}
                required={true}
              />
            }
          />
        </form>
        <div className="text-center">
          <BaseButton
            buttonType="reset"
            className="w-25 mt-5 btn-primary btn-lg"
            title="登録"
          />
        </div>
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
