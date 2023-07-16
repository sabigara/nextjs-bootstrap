import { BaseButton } from '@/components/elements/buttons/BaseButton';
import { Accordion } from '@/components/elements/accordion';
import { LayoutDefault } from '@/layouts/Default';

export const metadata = {
  title: 'アコーディオンサンプル | nextjs-bootstrap',
  description: '',
};

export default function AccordionSample() {
  return (
    <>
      <h2 className="h3 pt-3 pb-2 mb-3 border-bottom">
        アコーディオンをコンポーネントにする
      </h2>

      <p>アコーディオンをコンポーネント化しました。</p>
      <Accordion
        button="アコーディオン１"
        body={
          <>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </>
        }
      ></Accordion>

      <Accordion
        button="アコーディオン2"
        body={
          <>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </>
        }
      ></Accordion>
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
