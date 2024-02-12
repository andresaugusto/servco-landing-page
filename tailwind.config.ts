import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
      themes: [
        {
          light: {
            ...require("daisyui/src/theming/themes")["light"],
            "primary": "#423475",
            "secondary": "#9AA3AF",
            "accent": "#0D0CFD",
            "base-100": "#F0F0F0",
            "base-content": "black",
            "--rounded-box": "6px", // border radius rounded-box utility class, used in card and other large boxes
            "--rounded-btn": "6px", // border radius rounded-btn utility class, used in buttons and similar element
            "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
            "--animation-btn": "0.15s", // duration of animation when you click on button
            "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
            "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
            "--border-btn": "1px", // border width of buttons
            "--tab-border": "1px", // border width of tabs
            "--tab-radius": "0.5rem", // border radius of tabs
          },
        },
        {
          dark: {
            ...require("daisyui/src/theming/themes")["dark"],
            "primary": "#423475",
            "secondary": "#9AA3AF",
            "accent": "#0D0CFD",
            "base-100": "black",
            "base-content": "#F0F0F0",
            "--rounded-box": "6px", // border radius rounded-box utility class, used in card and other large boxes
            "--rounded-btn": "6px", // border radius rounded-btn utility class, used in buttons and similar element
            "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
            "--animation-btn": "0.15s", // duration of animation when you click on button
            "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
            "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
            "--border-btn": "1px", // border width of buttons
            "--tab-border": "1px", // border width of tabs
            "--tab-radius": "0.5rem", // border radius of tabs
          },
        },
      ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  theme: {
    spacing: {
      xs: "0.625vw",
      sm: "1.25vw",
      md: "2.5vw",
      lg: "5vw",
      xl: "7.5vh",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
