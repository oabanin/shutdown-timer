import * as React from "react";
import { ReactNode } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTranslations } from "next-intl";
import Button from "@mui/material/Button";
import s from "./TableCommands.module.scss";
import { NewLine, OS, Time } from "@/const/const";
import { generateAll } from "@/utils/generateAll";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Box from "@mui/material/Box";
import { useCopyAndNotify } from "@/hooks/useCopyAndNotify";
import { download } from "@/utils/download";
import ModeNightIcon from "@mui/icons-material/ModeNight";
function createData(os: OS, title: ReactNode, time: number) {
  return {
    os,
    title,
    time,
  };
}

const Cell = ({
  cmd,
  open,
  filename,
  os,
}: {
  open: boolean;
  cmd: string;
  filename: string;
  os: OS;
}) => {
  return (
    <TableCell sx={{ verticalAlign: "top" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Buttons os={os} cmd={cmd} filename={filename} />
        <Collapse in={open} timeout="auto">
          <div className={s.pre} contentEditable={true}>
            {cmd}
          </div>
        </Collapse>
      </Box>
    </TableCell>
  );
};

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const {
    shutdown,
    restart,
    sleep,
    shutdownFilename,
    restartFilename,
    sleepFilename,
  } = generateAll(row.time, row.os);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell sx={{ verticalAlign: "top" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ verticalAlign: "top" }} component="th" scope="row">
          {row.title}
        </TableCell>
        <Cell
          os={row.os}
          open={open}
          cmd={shutdown}
          filename={shutdownFilename}
        />
        <Cell
          os={row.os}
          open={open}
          cmd={restart}
          filename={restartFilename}
        />
        <Cell os={row.os} open={open} cmd={sleep} filename={sleepFilename} />
      </TableRow>
    </React.Fragment>
  );
}

const Buttons = ({
  cmd,
  filename,
  os,
}: {
  cmd: string;
  filename: string;
  os: OS;
}) => {
  const t = useTranslations();
  const { copyToClipboard } = useCopyAndNotify();
  return (
    <>
      <Button
        onClick={() => {
          copyToClipboard(cmd);
        }}
        className={s.button}
        type="button"
        variant="outlined"
        size="small"
      >
        {t("copy")}
      </Button>
      <Button
        onClick={() => {
          const isMacOS = os === OS.MACOS;
          const prefix = isMacOS ? `#!/bin/bash${NewLine.masOs}` : "";
          download(prefix + cmd, filename, "text/plain;charset=utf-8");
        }}
        className={s.button}
        type="button"
        variant="contained"
        size="small"
      >
        {t("download")}
      </Button>
    </>
  );
};

export default function TableCommands({ os }: { os: OS }) {
  const t = useTranslations();
  const rows = [
    createData(os, t("now"), Time.immediate),
    createData(os, t("thirtySeconds"), Time.thirtySeconds),
    createData(os, t("fiveMinutes"), Time.fiveMinutes),
    createData(os, t("tenMinutes"), Time.tenMinutes),
    createData(os, t("fifteenMinutes"), Time.fifteenMinutes),
    createData(os, t("twentyMinutes"), Time.twentyMinutes),
    createData(os, t("halfAnHour"), Time.halfAnHour),
    createData(os, t("oneHour"), Time.oneHour),
    createData(os, t("twoHours"), Time.twoHours),
    createData(os, t("threeHours"), Time.threeHours),
    createData(os, t("fourHours"), Time.fourHours),
    createData(os, t("fiveHours"), Time.fiveHours),
    createData(os, t("sixHours"), Time.sixHours),
    createData(os, t("eightHours"), Time.eightHours),
    createData(os, t("nineHours"), Time.nineHours),
  ];
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell align="center">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                }}
              >
                {t("shutdown")}
                <PowerSettingsNewIcon />
              </Box>
            </TableCell>
            <TableCell align="center">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                }}
              >
                {t("restart")}
                <RestartAltIcon />
              </Box>
            </TableCell>
            <TableCell align="center">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                }}
              >
                {t("sleep")}
                <ModeNightIcon />
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.time} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
