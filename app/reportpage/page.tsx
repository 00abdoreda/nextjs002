"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DescriptionIcon from "@mui/icons-material/Description";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import type { Router } from "@toolpad/core";
import Side from "../../components/reportPage/Side";
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#1976d2", // Primary color for light mode
        },
        background: {
          default: "#ffffff", // Background color for the page in light mode
          paper: "#ffffff", // Background for elements like cards, etc.
        },
        text: {
          primary: "#000000", // Text color for light mode
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#90caf9", // Primary color for dark mode
        },
        background: {
          default: "#121212", // Background color for the page in dark mode
          paper: "#262f37", // Background for elements like cards, etc.
        },
        text: {
          primary: "#ffffff", // Text color for dark mode
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1200,
    },
  },
});

// const demoTheme = createTheme({
//   cssVariables: {
//     colorSchemeSelector: "data-toolpad-color-scheme",
//   },
//   colorSchemes: { light: true, dark: true },
//   // colorSchemes: {
//   //   light: {
//   //     palette: {
//   //       primary: {
//   //         main: "#1976d2", // Custom primary color for light mode
//   //       },
//   //       background: {
//   //         default: "#ffffff", // Custom background color for light mode
//   //         paper: "#edf4fb", // Background for elements like cards, paper, etc.
//   //       },
//   //       text: {
//   //         primary: "#000000", // Text color for light mode
//   //       },
//   //     },
//   //   },
//   //   dark: {
//   //     palette: {
//   //       primary: {
//   //         main: "#90caf9", // Custom primary color for dark mode
//   //       },
//   //       background: {
//   //         default: "#121212", // Custom background color for dark mode
//   //         paper: "#262f37", // Background for elements like cards, paper, etc.
//   //       },
//   //       text: {
//   //         primary: "#ffffff", // Text color for dark mode
//   //       },
//   //     },
//   //   },
//   // },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1200,
//     },
//   },
// });

function DemoPageContent({ pathname }: { pathname: string }) {
  return (
    <Box
      sx={{
        py: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        background: "var(--mui-palette-background-paper)",
        color: "var(--mui-palette-text-primary)",
        height: "calc(100% - 66px)",
      }}>
      <Side />
    </Box>
  );
}

interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function DashboardLayoutNavigationLinks(props: DemoProps) {
  const { window } = props;

  const [pathname, setPathname] = React.useState("/home");

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return (
    // preview-start
    <AppProvider
      navigation={[
        {
          segment: "home",
          title: "Home",
          icon: <DescriptionIcon />,
        },
        {
          segment: "about",
          title: "About Us",
          icon: <DescriptionIcon />,
        },
      ]}
      router={router}
      theme={demoTheme}>
      <DashboardLayout
        sx={{
          backgroundColor: "inherit",
          color: "inherit",
        }}>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}
