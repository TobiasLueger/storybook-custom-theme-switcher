import { useState } from "react";
import { STORYBOOK_IFRAME_ID } from "../constants";
import { Theme } from "./types";

export const getIframe = (selector: string): HTMLElement => {
  const iframe = document.getElementById(
    STORYBOOK_IFRAME_ID
  ) as HTMLIFrameElement;
  return iframe.contentDocument?.querySelector(selector) as HTMLElement;
};

export const useTheme = (theme: Theme, themeOption: string) => {
    const iframe = getIframe(theme.selector);

    //Todo: remove existing currentTheme from Attribute and push new themeOption to Attribute
    iframe.setAttribute(
      theme.dataAttr,
      theme.themeOptions[`${themeOption}`]
    );
    
};