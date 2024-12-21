import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import * as React from "react";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useLocale } from "next-intl";

interface IRoute {
  path: string;
  title: string;
  icon: React.JSX.Element;
  children: { path: string; title: string }[];
}

export const DrawerItem = ({ route }: { route: IRoute }) => {
  const [open, setOpen] = React.useState(false);
  const locale = useLocale();
  const { router } = useAppRouter(locale);
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton
          onClick={(e) => {
            e.preventDefault();
            setOpen((oldOpen) => !oldOpen);
          }}
        >
          <ListItemIcon>{route.icon}</ListItemIcon>
          <ListItemText primary={route.title} />
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {route.children.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              onClick={() => {
                router.push(`/tutorials/${route.path}/${item.path}`);
              }}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </Collapse>
    </List>
  );
};
