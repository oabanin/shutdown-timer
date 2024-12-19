"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {
  Link as LinkLocale,
  useRouter as useRouterLocale,
} from "src/i18n/routing";
import Link from "next/link";

import { useRouter } from "next/navigation";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { AddToBookmarks } from "@/components/home/AddToBookmarks/AddToBookmarks";

const drawerWidth = 240;

export default function DrawerAppBar({ locale }: { locale: string }) {
  const isDefaultLocale = locale === "en";
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const router = useRouter();
  const routerLocale = useRouterLocale();

  const LinkTag = isDefaultLocale ? Link : LinkLocale;

  const t = useTranslations();

  const navItems = [
    { text: t("home"), value: "/" },
    { text: t("tutorials"), value: "/tutorials" },
    { text: t("faq"), value: "/faq" },
    // { text: "Contact", value: "/contact" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Image width={65} alt="logo" height={50} src="./logo/logo-black.svg" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            onClick={() => {
              if (isDefaultLocale) {
                return router.push(item.value);
              }
              return routerLocale.push(item.value);
            }}
            key={item.value}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="lg">
          <Toolbar variant="dense" disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <LinkTag href="/">
                <Image alt="logo" width={65} height={50} src="/logo/logo.svg" />
              </LinkTag>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item.value}
                  sx={{ color: "#fff" }}
                  // variant="contained"
                  component={LinkTag}
                  href={item.value}
                >
                  {item.text}
                </Button>
              ))}
              <AddToBookmarks />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
