'use client';

import { useEffect } from 'react';
import { Accordion } from './components/accordion';
import styled from './page.module.css';
import 'bootstrap/dist/js/bootstrap';

export default function Home() {
  return (
    <main className={styled.main}>
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
          <h2 className="pt-3 pb-2 mb-3 border-bottom">コンポーネント化したアコーディオン</h2>
            <Accordion eventKey="0" eventName="One">
              <Accordion.Header>アコーディオン１</Accordion.Header>
              <Accordion.Body>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </Accordion.Body>
            </Accordion>

            <Accordion eventKey="1" eventName="Two">
              <Accordion.Header>アコーディオン２</Accordion.Header>
              <Accordion.Body>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </Accordion.Body>
            </Accordion>

            <h2 className="pt-3 pb-2 mb-3 border-bottom">コンポーネント化しないアコーディオン</h2>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample3"
            >
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  アコーディオン１
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample3"
              >
                <div className="accordion-body">
                  <p>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </p>
                  <p>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </p>
                  <p>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
