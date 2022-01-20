const globalTheme = {
  switchWidth: "40px",
  switchHeight: "20px",
  switchPadding: "3px",
  switchColorPrimary: "#302C40",
  switchAnimationDuration: "0.2s",
  colorWhite: "#FFF",
  colorContrastLow: "#d3d3d4",
  colorGreen: "#50c390",
  colorGray: "#adadad",
  gradient:
    "linear-gradient(122deg, rgba(128,74,216,1) 0%, rgba(90,75,217,1) 100%)",
};

export const lightTheme = {
  primary: "#fff",
  secondary: "#f8f8f8",
  textColor: "#585280",
  header: "#585280",
  headerNumber: "#fff",
  activeMenu: "#585280",
  ...globalTheme,
};

export const darkTheme = {
  primary: "#302c40",
  secondary: "#2c2839",
  textColor: "#fff",
  header: "#ff",
  headerNumber: "#585280",
  activeMenu: "#fff",
  ...globalTheme,
};
