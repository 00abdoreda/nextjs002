"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import DescriptionIcon from "@mui/icons-material/Description";
import { createTheme } from "@mui/material/styles";
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
        primary: { main: "#1976d2" },
        background: { default: "#ffffff", paper: "#ffffff" },
        text: { primary: "#000000" },
      },
    },
    dark: {
      palette: {
        primary: { main: "#90caf9" },
        background: { default: "#121212", paper: "#262f37" },
        text: { primary: "#ffffff" },
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
  window?: () => Window;
}

export default function DashboardLayoutNavigationLinks(props: DemoProps) {
  const { window } = props;

  const [pathname, setPathname] = React.useState("/home");
  
  // State for menu items
  const [navigationItems, setNavigationItems] = React.useState([
    {
      segment: "home",
      title: "Reports",
      icon: <DescriptionIcon />,
      children: [
        {
          segment: 'lord-of-the-rings',
          title: 'Report 1',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'harry-potter',
          title: 'Report 2',
          icon: <DescriptionIcon />,
        },
      ],
    },
    {
      segment: "about",
      title: "About Us",
      icon: <DescriptionIcon />,
    },
  ]);

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  // Example of adding a new menu item
  const addMenuItem = (newItem) => {
    setNavigationItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <AppProvider
      navigation={navigationItems} // Use dynamic navigation items here
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
  );
}
