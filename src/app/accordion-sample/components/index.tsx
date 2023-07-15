import { Accordion } from '@/components/elements/accordion';

export const Index = () => {
  return (
    <>
      <h2 className="h3 pt-3 pb-2 mb-3 border-bottom">
        アコーディオンをコンポーネントにする
      </h2>

      <p>アコーディオンをコンポーネント化しました。</p>
      <Accordion
        accordionId="One"
        header="アコーディオン１"
        contents={
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
        accordionId="Two"
        header="アコーディオン2"
        contents={
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
    </>
  );
};
