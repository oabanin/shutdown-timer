import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { DrawerItem } from "@/components/tutorials/DrawerItem";
import * as React from "react";

import WindowIcon from "@mui/icons-material/Window";
import AppleIcon from "@mui/icons-material/Apple";

import { useTranslations } from "next-intl";
import { ReactNode } from "react";

const drawerWidth = 240;

export const TutorialsContentLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  const t = useTranslations();

  const routes = [
    {
      path: "/windows",
      title: "Windows",
      icon: <WindowIcon />,
      children: [
        { path: "/shutdown", title: t("shutdown") },
        { path: "/sleep", title: t("sleep") },
      ],
    },
    {
      path: "/macos",
      title: "MacOS",
      icon: <AppleIcon />,
      children: [
        { path: "/shutdown", title: t("shutdown") },
        { path: "/sleep", title: t("sleep") },
      ],
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ overflow: "auto", paddingTop: 8 }}>
          {routes.map((route) => (
            <DrawerItem route={route} key={route.path} />
          ))}
        </Box>
      </Drawer>
      <Box sx={{ width: `calc(100% - ${drawerWidth})`, paddingTop: 8 }}>
        {children}
      </Box>
    </Box>
  );
};
