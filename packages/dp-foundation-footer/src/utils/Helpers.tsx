interface IEventProps {
  key: string;
  keyCode: number;
  shiftKey: any;
  preventDefault: () => void;
}

interface ITrapFocusProps {
  element: any;
  querySelectorAll: (arg0: string) => any;
  addEventListener: (arg0: string, arg1: (e: any) => void) => void;
  focusFirstEl: boolean;
  setAttribute: (attr: string, val: string) => void;
  focus: () => void;
}

export function trapFocus(element: ITrapFocusProps) {
  const focusableEls = element.querySelectorAll(
    'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])',
  );
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];
  const KEYCODE_TAB = 9;

  element.addEventListener('keydown', (e: IEventProps) => {
    const isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      /* shift + tab */ if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } /* tab */ else if (document.activeElement === lastFocusableEl) {
      firstFocusableEl.focus();
      e.preventDefault();
    }
  });
}
