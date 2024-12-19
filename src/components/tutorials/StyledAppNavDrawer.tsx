import { styled } from "@mui/material/styles";
import AppNavDrawer from "@/components/tutorials/AppNavDrawer";

export const StyledAppNavDrawer = styled(AppNavDrawer)(({ theme }) => ({
  variants: [
    {
      props: {
        disablePermanent: false,
      },
      style: {
        [theme.breakpoints.up("lg")]: {
          flexShrink: 0,
          width: "var(--MuiDocs-navDrawer-width)",
        },
      },
    },
  ],
}));
