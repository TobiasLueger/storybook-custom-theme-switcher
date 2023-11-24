import React, { useLayoutEffect, useState } from "react";
import { IconButton, Icons, WithTooltip } from "@storybook/components";
import { DEFAULT_PARAMS, PARAM_THEME } from "../constants";
import { getIframe, useTheme } from "./useTheme";
import { useParameter } from "@storybook/api";

export const ThemeSwitcher = () => {
  const theme = useParameter(PARAM_THEME, DEFAULT_PARAMS);

  

  useLayoutEffect( () => {  
      const iframe = getIframe(theme.selector);
      iframe.setAttribute(
          theme.dataAttr,
          theme.themeOptions[`${Object.keys(theme.themeOptions)[0]}`]
      );
  }, [])

  const [selectedTheme, setSelectedTheme] = useState(`Select Theme`);

  const handleTheme = (theme, themeOption) => {
      useTheme(theme, themeOption, selectedTheme);
      setSelectedTheme(`${theme.themeOptions[themeOption]}`);
  }
  

  let themeNames: string[] = [];

  for (const themeOption in theme.themeOptions) {
      themeNames.push(theme.themeOptions[themeOption]);
  }

  return (
      <WithTooltip
          tooltip={
              <div style={{display: "flex", flexDirection: "column", gap: "3px", padding: "10px"}}>
                  {Object.keys(theme.themeOptions).map((themeOption, key) => {
                      return (
                          <IconButton key={key} title="Change theme mode" onClick={() => handleTheme(theme, themeOption)} style={{textAlign: "start", backgroundColor: "white", color:"black", fontWeight:"normal"}}>
                              {theme.themeOptions[themeOption]}
                          </IconButton>
                      );
                  })}
              </div>
          }
          closeOnClick
          >
          <IconButton
              key="theme"
              active={true}
              title="Change the theme of the preview"
              style={{backgroundColor: "initial", color:"initial"}}
          >
              <Icons icon="contrast" style={{marginRight: "5px"}}/>
              {selectedTheme}
          </IconButton>
      </WithTooltip>
  );
};