'use client'

import {
  ReactNode,
  Children,
  cloneElement,
  isValidElement,
  useMemo,
} from'react'

type Accordion = {
  flush?: boolean
  eventKey: string
  eventName: string
  children: ReactNode
}

export const Accordion = (props: Accordion) => {
  const { flush = true, eventKey } = props
  const { children, ...newProps } = props
  // childrenにpropを渡す
  const accordionElement = useMemo(() => {
    return Children.map(children, (child, index) => {
      if (index > 0 && isValidElement(child)) {
        return cloneElement(child, { ...newProps }, null)
      }
      return child
    })
  }, [newProps, children])
  // 親要素のPropsを引き継いだ値が取得できているように見えます、、。
  console.log(accordionElement)

  return (
    <div
      className={`accordion ${flush ? 'accordion-flush' : ''}`}
      id={`accordionFlushExample${eventKey}`}
    >
      {accordionElement}
    </div>
  )
}

Accordion.Header = ({ eventName, children }: Accordion) =>
  (function AccordionHeader() {
    return (
      <>
        <h2 className='accordion-header' id={`flush-heading${eventName}`}>
          <button
            className='accordion-button collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target={`#flush-collapse${eventName}`}
            aria-expanded='false'
            aria-controls={`flush-collapse${eventName}`}
          >
            {children}
          </button>
        </h2>
      </>
    )
  })()

Accordion.Body = ({ eventKey, eventName, children }: Accordion) =>
  (function AccordionBody() {
    return (
      <>
        <div
          id={`flush-collapse${eventName}`}
          className='accordion-collapse collapse'
          aria-labelledby={`flush-heading${eventName}`}
          data-bs-parent={`#accordionFlushExample${eventKey}`}
        >
          <div className='accordion-body'>{children}</div>
        </div>
      </>
    )
  })()
