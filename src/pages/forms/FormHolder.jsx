import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, IconButton } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import AddUser from "./AddUser";
const FormHolder = ({
  formDialog,
  setFormDialog,
  handleClickFormDialogOpen,
  handleFormDialogClose,
}) => {
  const theme = useTheme();
  return (
    <div>
      <IconButton
        onClick={handleClickFormDialogOpen}
        sx={{
          p: 1.75,
          background: "#fff",
          "&:hover": { background: "#fff" },
          boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25)",
          mb: 2,
        }}
        variant="contained"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            d="M13 1V25M1 13H25"
            stroke="#155C9E"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M21.8694 1V7.26087M18.739 4.13043H24.9999"
            stroke="#FC2861"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </IconButton>
      <Dialog
        open={formDialog}
        onClose={handleFormDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ background: "#F0F9F9", color: theme.palette.text.light }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            style={{ position: "relative", top: 3 }}
          >
            <path
              d="M16.5 6.2025V3.1725C16.5 1.98 16.02 1.5 14.8275 1.5H11.7975C10.605 1.5 10.125 1.98 10.125 3.1725V6.2025C10.125 7.395 10.605 7.875 11.7975 7.875H14.8275C16.02 7.875 16.5 7.395 16.5 6.2025Z"
              stroke="#555555"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.875 6.39V2.985C7.875 1.9275 7.395 1.5 6.2025 1.5H3.1725C1.98 1.5 1.5 1.9275 1.5 2.985V6.3825C1.5 7.4475 1.98 7.8675 3.1725 7.8675H6.2025C7.395 7.875 7.875 7.4475 7.875 6.39Z"
              stroke="#555555"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.875 14.8275V11.7975C7.875 10.605 7.395 10.125 6.2025 10.125H3.1725C1.98 10.125 1.5 10.605 1.5 11.7975V14.8275C1.5 16.02 1.98 16.5 3.1725 16.5H6.2025C7.395 16.5 7.875 16.02 7.875 14.8275Z"
              stroke="#555555"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.875 13.125H15.375"
              stroke="#555555"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M13.125 15.375V10.875"
              stroke="#555555"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          &nbsp;Add
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleFormDialogClose}
            aria-label="close"
            sx={{
              position: "absolute",
              right: "15px",
              top: "10px",
              background: "#fff",
              "&:hover": {
                background: "#fff",
              },
            }}
          >
            <CloseIcon sx={{ color: "#222", fontSize: "18px" }} />
          </IconButton>
          <Box sx={{ mt: 1.75, textAlign: "center" }}>
            <Button
              sx={{
                borderRadius: "100vw",
                textTransform: "none",
                minWidth: "120px",
                mr: 1,
                background: "#fff",
                boxShadow:
                  "0px 2px 3px 0px rgba(0, 0, 0, 0.10) inset, 0px 0px 1px 0px rgba(0, 0, 0, 0.10) inset",
              }}
              //   variant="outlined"
              color="secondary"
              size="small"
            >
              Add User
            </Button>
            <Button
              sx={{
                borderRadius: "100vw",
                textTransform: "none",
                minWidth: "120px",
                mr: 1,
                background: "#fff",
                boxShadow:
                  "0px 2px 3px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
              }}
              //   variant="outlined"
              color="secondary"
              size="small"
            >
              Adding Option
            </Button>
            <Button
              sx={{
                borderRadius: "100vw",
                textTransform: "none",
                minWidth: "120px",
                mr: 1,
                background: "#fff",
                boxShadow:
                  "0px 2px 3px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
              }}
              //   variant="outlined"
              color="secondary"
              size="small"
            >
              Adding Option
            </Button>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <Box >
            <AddUser />
          </Box>
          {/* <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText> */}
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleFormDialogClose}>Disagree</Button>
          <Button onClick={handleFormDialogClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default FormHolder;
