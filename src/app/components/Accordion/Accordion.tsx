import React, { FC, ReactElement, useState } from 'react';
import './style.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Accordion {
  title: string;
  content: ReactElement;
  isDialogOpen?: boolean;
}

export const Accordion: FC<Accordion> = ({
  title,
  content,
  isDialogOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(isDialogOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const contentRef = React.useRef(null);
  React.useEffect(() => {
    const contentElement = contentRef.current as HTMLElement | null;
    if (contentElement && isOpen) {
      contentElement.style.height = `${contentElement.scrollHeight}px`;
    } else if (contentElement) {
      contentElement.style.height = '0';
    }
  }, [isOpen]);

  return (
    <div className="accordion">
      <button
        className={`accordion__button ${isOpen ? 'open' : ''}`}
        onClick={toggleAccordion}
      >
        {title}
        {isOpen ? (
          <ChevronUp color="var(--highlight-secondary)" />
        ) : (
          <ChevronDown color="var(--highlight-secondary)" />
        )}
      </button>
      <div
        ref={contentRef}
        className={`accordion__content ${isOpen ? 'open' : ''}`}
      >
        {isOpen && <div>{content}</div>}
      </div>
    </div>
  );
};
<ChevronDown />;
