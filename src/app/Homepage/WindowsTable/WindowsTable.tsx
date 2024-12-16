import * as React from "react";
import { ReactNode } from "react";
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
import s from "./WindowsTable.module.scss";
import { Time } from "@/const/const";
import { generateAll } from "@/utils/generateAll";
import { TextareaAutosize } from "@mui/material";
import Box from "@mui/material/Box";
import { useCopyAndNotify } from "@/hooks/useCopyAndNotify";
import { download } from "@/utils/download";

function createData(title: ReactNode, time: number) {
  return {
    title,
    time,
  };
}

const Cell = ({
  cmd,
  open,
  filename,
}: {
  open: boolean;
  cmd: string;
  filename: string;
}) => {
  return (
    <TableCell sx={{ verticalAlign: "top" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Buttons cmd={cmd} filename={filename} />
        <Collapse in={open} timeout="auto">
          <TextareaAutosize
            style={{ minWidth: "100%" }}
            contentEditable={false}
            minRows={3}
            value={cmd}
          />
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
  } = generateAll(row.time);

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
        <Cell open={open} cmd={shutdown} filename={shutdownFilename} />
        <Cell open={open} cmd={restart} filename={restartFilename} />
        <Cell open={open} cmd={sleep} filename={sleepFilename} />
      </TableRow>
    </React.Fragment>
  );
}

const Buttons = ({ cmd, filename }: { cmd: string; filename: string }) => {
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
          download(cmd, filename, "text/plain;charset=utf-8");
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

export default function WindowsTable() {
  const t = useTranslations();
  const rows = [
    createData(t("now"), Time.immediate),
    createData(t("tenMinutes"), Time.tenMinutes),
    createData(t("twentyMinutes"), Time.twentyMinutes),
    createData(t("halfAnHour"), Time.halfAnHour),
    createData(t("oneHour"), Time.oneHour),
    createData(t("twoHours"), Time.twoHours),
    createData(t("threeHours"), Time.threeHours),
    createData(t("fourHours"), Time.fourHours),
    createData(t("fiveHours"), Time.fiveHours),
    createData(t("sixHours"), Time.sixHours),
  ];
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell>{t("shutdown")}</TableCell>
            <TableCell>{t("restart")}</TableCell>
            <TableCell>{t("sleep")}</TableCell>
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
