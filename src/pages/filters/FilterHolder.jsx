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
import FilterUser from "./FilterUser";
const FilterHolder = ({
  filterDialog,
  setFilterDialog,
  handleClickFilterDialogOpen,
  handleFilterDialogClose,
}) => {
  const theme = useTheme();
  return (
    <div>
      <IconButton
        sx={{
          p: 1.75,
          background: "#fff",
          "&:hover": { background: "#fff" },
          boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25)",
          mb: 2,
        }}
        onClick={handleClickFilterDialogOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <circle cx="11" cy="12" r="10" stroke="#155C9E" stroke-width="2" />
          <path
            d="M20 20L24 24"
            stroke="#2B2B2B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.5878 7.65385C10.9911 6.15467 7.79232 6.83385 6.44306 9.17084C5.09379 11.5078 6.10501 14.6177 8.70167 16.1169"
            stroke="#FC2861"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </IconButton>
      <Dialog
        open={filterDialog}
        onClose={handleFilterDialogClose}
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
          >
            <path
              d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
              stroke="#555555"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5 16.5L15 15"
              stroke="#555555"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          &nbsp;Search
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleFilterDialogClose}
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
              Search User
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
          <Box>
            <FilterUser />
          </Box>
          {/* <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText> */}
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleFilterDialogClose}>Disagree</Button>
          <Button onClick={handleFilterDialogClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default FilterHolder;
