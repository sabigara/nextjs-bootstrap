import { LayoutMenu } from '../../components/LayoutMenu';
import { BaseButton } from '@/components/elements/buttons/BaseButton';
import './index.css';

export const Index = () => {
  return (
    <LayoutMenu
      className="menu-3"
      contents={
        <>
          <div className="pt-3 pb-2 mb-3">
            <h1 className="h1">メニュー3</h1>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
          <div className="position-absolute bottom-0 end-0 m-5">
            <BaseButton
              url="/"
              className="btn-primary btn-sm"
              title="トップに戻る"
            />
          </div>
        </>
      }
    />
  );
};
