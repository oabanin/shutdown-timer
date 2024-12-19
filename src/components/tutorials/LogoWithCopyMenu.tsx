import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextFieldsRoundedIcon from "@mui/icons-material/TextFieldsRounded";

interface LogoWithCopyMenuProps {
  logo?: React.ComponentType<any>;
  logoSvgString?: string;
  wordmarkSvgString?: string;
  marginLeft?: boolean;
}

export default function LogoWithCopyMenu({
  marginLeft,
}: LogoWithCopyMenuProps) {
  const [contextMenu, setContextMenu] = React.useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 8,
            mouseY: event.clientY - 8,
          }
        : null,
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <React.Fragment>
      <Box
        component={Link}
        href="/"
        aria-label="Go to homepage"
        onContextMenu={handleContextMenu}
        sx={{
          mr: 1,
          ml: marginLeft ? 1.5 : undefined,
          "& > svg": { m: "0 !important" }, // override the 2px margin-left coming from the Link component
        }}
      >
        LOGO
      </Box>
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        sx={(theme) => ({
          "& .MuiMenuItem-root": {
            gap: 1,
            "& path": {
              fill: (theme.vars || theme).palette.text.tertiary,
              color: (theme.vars || theme).palette.text.tertiary,
            },
            "&:hover, &:focus-visible": {
              "& path": {
                fill: (theme.vars || theme).palette.text.primary,
                color: (theme.vars || theme).palette.text.primary,
              },
            },
          },
        })}
      >
        <MenuItem onClick={() => null}>LOGO Copy logo as SVG</MenuItem>
        <MenuItem onClick={() => null}>
          <TextFieldsRoundedIcon sx={{ fontSize: "18px" }} />
          Copy wordmark as SVG
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
