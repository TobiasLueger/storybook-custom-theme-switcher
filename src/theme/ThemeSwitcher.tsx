import React, { useEffect, useState } from "react";
import { IconButton, Icons, WithTooltip } from "@storybook/components";
import { DEFAULT_PARAMS, PARAM_THEME } from "../constants";
import { getIframe, useTheme } from "./useTheme";
import { useParameter } from "@storybook/api";
import { Theme } from "./types";

export const ThemeSwitcher = () => {
  const theme:Theme = useParameter(PARAM_THEME, DEFAULT_PARAMS);

  const [selectedTheme, setSelectedTheme] = useState(`Select Theme`);
  const [firstPaint, setFirstPaint] = useState(false);
  const [isDefaultSet, setIsDefaultSet] = useState(false);

  const handleTheme = (theme: Theme, themeOption:string) => {
    useTheme(theme, themeOption);
    setSelectedTheme(`${theme.themeOptions[themeOption] || "Default Theme"}`);
  }

  return (
      <WithTooltip
          tooltip={
              <div style={{display: "flex", flexDirection: "column", gap: "3px", padding: "10px"}}>
                  {Object.keys(theme.themeOptions).map((themeOption, key) => {
                        firstPaint ? () => { 
                            !isDefaultSet ? () => {
                                const iframe = getIframe(theme.selector);
                                const getDefaultTheme = theme.defaultTheme !== undefined ? theme.defaultTheme : "";
                                iframe.setAttribute(
                                    theme.dataAttr,
                                    getDefaultTheme
                                );
                                setIsDefaultSet(true)
                            } : null;
                        } : () => {
                            setFirstPaint(true);
                        };
                      return (
                          <IconButton key={key} title="Change theme mode" onClick={() => handleTheme(theme, themeOption)} style={{textAlign: "start", backgroundColor: "white", color:"black", fontWeight:"normal"}}>
                            {theme.themeOptions[themeOption] || "☀️ Default Theme"}
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