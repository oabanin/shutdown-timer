import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import * as React from "react";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useLocale } from "next-intl";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import { usePathname } from "@/i18n/routing";

interface IRoute {
  path: string;
  title: string;
  icon: React.JSX.Element;
  children: { path: string; title: string }[];
}

export const DrawerItem = ({ route }: { route: IRoute }) => {
  const locale = useLocale();
  const { router } = useAppRouter(locale);
  const pathName = usePathname();
  const paths = pathName.split("/");
  const isCurrentUrl = route.path === "/" + paths[2];
  const [open, setOpen] = React.useState(route.path === "/" + paths[2]);

  return (
    <List disablePadding>
      <ListItem disablePadding disableGutters>
        <ListItemButton
          onClick={(e) => {
            e.preventDefault();
            setOpen((oldOpen) => !oldOpen);
          }}
          sx={{
            borderRadius: 2, // Add border radius
            textDecoration: isCurrentUrl ? "underline" : "inherit",
            "&:hover": {
              bgcolor: "rgba(0, 0, 255, 0.10)",
              textDecoration: isCurrentUrl ? "underline" : "inherit",
            },
          }}
        >
          <ListItemIcon>
            <KeyboardArrowRightRoundedIcon
              sx={{
                transform: open ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
            {route.icon}
          </ListItemIcon>
          <ListItemText primary={route.title} />
        </ListItemButton>
      </ListItem>
      <Collapse sx={{ pl: 2 }} in={open} timeout="auto" unmountOnExit>
        {route.children.map((item) => {
          const isActive = isCurrentUrl && "/" + paths[3] === item.path;
          return (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                disableGutters
                onClick={() => {
                  router.push(`/tutorials/${route.path}/${item.path}`);
                }}
                sx={{
                  py: "2px",
                  borderRadius: 2, // Add border radius
                  pl: 3,
                  bgcolor: isActive ? "rgba(0, 0, 255, 0.04)" : "inherit",
                  position: "relative", // Required for the pseudo-element
                  "&:hover": {
                    bgcolor: "rgba(0, 0, 255, 0.10)", // Adjust hover styling
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    zIndex: 1,
                    left: "10px",
                    height: "100%",
                    width: "2px",
                    background: isActive
                      ? "hsl(210, 100%, 60%)" // Active background
                      : "hsl(215, 15%, 92%)", // Default background
                    transition: "opacity 0.3s",
                  },
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontWeight: isActive ? "bold" : "normal",
                  }}
                  primary={item.title}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </Collapse>
    </List>
  );
};
