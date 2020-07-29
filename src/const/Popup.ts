export enum PopupPlacement {
  Top = "top",
  TopStart = "top-start",
  TopEnd = "top-end",
  Right = "right",
  RightStart = "right-start",
  RightEnd = "right-end",
  Bottom = "bottom",
  BottomStart = "bottom-start",
  BottomEnd = "bottom-end",
  Left = "left",
  LeftStart = "left-start",
  LeftEnd = "left-end",
}

export enum PopupColor {
  Dark = "dark",
  Light = "light",
}

export const POPUP_ARROW_SIZE = 12;
export const POPUP_OOFFSET = 10;

export function popupPosition(
  placement: PopupPlacement,
  tooltipElement: HTMLElement,
  popupElement: HTMLElement
): {
  x: number;
  y: number;
} {
  const textClientRect = tooltipElement.getBoundingClientRect();
  const popupClientRect = popupElement.getBoundingClientRect();

  let y = 0;
  let x = 0;

  if (placement.indexOf("top") !== -1) {
    if (placement.indexOf("start") !== -1) {
      x = textClientRect.left;
    } else if (placement.indexOf("end") !== -1) {
      x = textClientRect.right - popupClientRect.width;
    } else {
      x =
        textClientRect.left +
        textClientRect.width / 2 -
        popupClientRect.width / 2;
    }

    y = textClientRect.top - popupClientRect.height - POPUP_OOFFSET;
  } else if (placement.indexOf("right") !== -1) {
    if (placement.indexOf("start") !== -1) {
      y = textClientRect.top;
    } else if (placement.indexOf("end") !== -1) {
      y = textClientRect.bottom - popupClientRect.height;
    } else {
      y =
        textClientRect.top +
        textClientRect.height / 2 -
        popupClientRect.height / 2;
    }

    x = textClientRect.right + POPUP_OOFFSET;
  } else if (placement.indexOf("bottom") !== -1) {
    if (placement.indexOf("start") !== -1) {
      x = textClientRect.left;
    } else if (placement.indexOf("end") !== -1) {
      x = textClientRect.right - popupClientRect.width;
    } else {
      x =
        textClientRect.left +
        textClientRect.width / 2 -
        popupClientRect.width / 2;
    }

    y = textClientRect.bottom + POPUP_OOFFSET;
  } else if (placement.indexOf("left") !== -1) {
    if (placement.indexOf("start") !== -1) {
      y = textClientRect.top;
    } else if (placement.indexOf("end") !== -1) {
      y = textClientRect.bottom - popupClientRect.height;
    } else {
      y =
        textClientRect.top +
        textClientRect.height / 2 -
        popupClientRect.height / 2;
    }

    x = textClientRect.left - popupClientRect.width - POPUP_OOFFSET;
  }
  return {
    x,
    y,
  };
}
