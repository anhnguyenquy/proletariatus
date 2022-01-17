import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
  "drop-down-menu": {
    marginTop: "0rem",
    maxHeight: "100%",
    width: "16rem",
    boxShadow: "none !important",
    borderRadius: "5px !important",
    margin: "0px !important",
    position: "static !important" as any,
    "& .accordion-summary": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#F3F2EF",
      boxSizing: "border-box",
      paddingTop: 0,
      paddingBottom: 0,
      minHeight: "0px !important",
      "& .expand-icon": {
        borderRadius: "50%",
        height: "1.5rem",
        width: "1.5rem",
        "&:hover": {
          backgroundColor: "#E4E6E8",
        },
        "&:active": {
          backgroundColor: "#D8D9DC",
          height: "1.4rem",
          width: "1.4rem",
        },
      },
      "& .MuiAccordionSummary-content": {
        position: "static",
        margin: "0.4rem !important",
      },
      "& .typography": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "& .summary-icon-container": {
          backgroundColor: "#13AA52",
          borderRadius: "50%",
          width: "1.5rem",
          height: "1.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "-0.5rem",
          marginRight: "1rem",
          "& .summary-icon": {
            color: "white",
            width: "0.9rem",
            height: "0.9rem",
          },
        },
        "& .summary-text": {
          color: "black",
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700,
        },
      },
    },
    "& .accordion-details": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0.5rem",

      "& .typography": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "16rem",
        "& .page-items": {
          width: "100%",
          "& .page-item": {
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            borderRadius: "5px",
            margin: "0.2rem",
            minHeight: "2.5rem",
            "& .ava-container": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              border: "3px solid #E4E6E6",
              borderRadius: "50%",
              width: "1.5rem",
              height: "1.5em",
              "& img": {
                width: "1.25rem",
                height: "1.25rem",
              },
            },
            "& .page-info": {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "1rem",
              "& .page-name": {
                display: "flex",
                fontWeight: 600,
                fontFamily: 'Montserrat, sans-serif',
                fontSize: "0.9rem",
                color: "black",
              },
              "& .notification-alert": {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                "& .fa-circle": {
                  color: "#13AA52",
                  width: "0.3rem",
                  height: "0.3rem",
                  marginRight: "0.25rem",
                },
                "& .notification-text": {
                  fontSize: "0.7rem",
                  fontFamily: 'Montserrat, sans-serif',
                  color: "#8A8A8A",
                },
              },
            },
          },
          "& .page-item:hover": {
            backgroundColor: "#f2f2f2",
          },
        },
      },
    },
  },
})
