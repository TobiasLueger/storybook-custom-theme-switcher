export type Theme = {
  selector?: string;
  dataAttr?: string;
  themeOptions: { [key: string]: string };
  defaultTheme?: string;
};