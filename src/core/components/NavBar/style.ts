import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
  "nav-bar-popover": {
    // overflow: 'hidden !important',
    boxSizing: "border-box",
    width: "18rem",
    boxShadow: "none !important",
    borderBottom: "1px solid grey",
    borderLeft: "1px solid grey",
    borderRight: "1px solid grey",
    maxHeight: "30rem !important",
    "&::-webkit-scrollbar": {
      backgroundColor: "#F1F1F1",
      width: "0.75rem",
    },
    "&::-webkit-scrollbar-corner": {
      // backgroundColor: 'red',
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "8px",
      backgroundColor: "#C1C1C1",
      minHeight: "24px",
      border: "3px solid #F1F1F1",
      "&:hover": {
        backgroundColor: "#a8a8a8",
      },
      "&:active": {
        backgroundColor: "#787878",
      },
    },
    "& .popover-content": {
      width: "17.25rem !important",
      boxSizing: "border-box",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      "& .filter-input": {
        fontFamily: "Montserrat",
        border: "1.5px solid #e1e1e1",
        padding: "0.5rem",
        borderRadius: "5px",
        height: "1rem",
        width: "13.5rem",
        margin: "0.3rem",
        fontSize: "0.85rem",
        paddingLeft: "1rem",

        "&::placeholder": {
          color: "#888089",
          fontWeight: "normal",
          fontStyle: "normal",
          letterSpacing: "0.015rem",
        },
      },
      "& .my-spaces-section": {
        width: "15rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Montserrat",
        marginTop: "0.75rem",
        "& .section-title": {
          color: "#888089",
          fontSize: "0.85rem",
          width: "100%",
          boxSizing: "border-box",
          marginBottom: "0.5rem",
        },
        "& .create-space-button": {
          width: "13rem",
          border: "1px solid transparent",
          marginBottom: "0.5rem",
          "& .start-icon": {
            color: "white",
            backgroundColor: "#13AA52",
            padding: "0.1rem",
            fontSize: "0.75rem",
            borderRadius: "3px",
          },
          "& .button-text": {
            color: "black",
            textTransform: "none",
          },
        },
        "& .space-items": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        },
      },
      "& .following-section": {
        width: "15rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Montserrat",
        marginTop: "0.75rem",
        "& .section-title": {
          color: "#888089",
          fontSize: "0.85rem",
          width: "100%",
          boxSizing: "border-box",
          marginBottom: "0.5rem",
        },
        "& .following-items": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        },
      },
      "& .other-section": {
        width: "15rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Montserrat",
        marginTop: "0.75rem",
        "& .section-title": {
          color: "#888089",
          fontSize: "0.85rem",
          width: "100%",
          boxSizing: "border-box",
          marginBottom: "0.5rem",
        },
        "& .other-items": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          "& .create-post-icon": {
            color: "#13AA52",
            backgroundColor: "white",
            border: "1px solid #13AA52",
            padding: "0.1rem",
            fontSize: "0.7rem",
            borderRadius: "3px",
          },
          "& .create-offer-icon": {
            color: "white",
            backgroundColor: "#13AA52",
            border: "1px solid #13AA52",
            padding: "0.1rem",
            fontSize: "0.7rem",
            borderRadius: "3px",
          },
          "& .fa-user-circle": {
            color: "#6B6C6E",
            fontSize: "0.9rem",
            // border: "1px solid orange",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            // textStroke: "1px #6B6C6E"
          },
        },
      },
    },
  },
  "nav-bar": {
    width: "100%",
    height: "8%",
    minHeight: "3rem",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    filter: "drop-shadow(0px 2px 0px rgba(0, 0, 0, 0.25))",
    "& .google-icon": {
      width: "2rem",
      height: "2rem",
      minWidth: "2rem",
      minHeight: "2rem",
      marginLeft: "8rem",
      marginRight: "2rem",
    },
    "& .popover-button": {
      width: "18rem",
      minWidth: "18rem",
      textTransform: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      color: "#888089",
      borderColor: "#888089",
      "& .start-icon": {
        marginLeft: "0.5rem",
      },
      "& .button-text": {
        marginRight: "10rem",
      },
      "& .end-icon": {
        // marginLeft: '8rem'
      },
      "&:hover": {
        borderColor: "#888089",
      },
    },

    "& .left-icons": {
      display: "flex",
      height: "96%",
      minWidth: "6rem",
      width: "6rem",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: "2rem",
      marginRight: "0rem",

      "& .icon-container": {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .fa-user-friends": {
          color: "#FFFFFF",
          fontSize: "1.3rem",
          textStroke: "1px #6B6C6E",
        },
        "& .fa-flag": {
          color: "#FFFFFF",
          fontSize: "1.3rem",
          textStroke: "1px #6B6C6E",
        },
        "& .fa-active": {
          color: "#13AA52 !important",
          textStroke: "1px transparent",
        },
      },
      "& .icon-container-active": {
        borderBottom: "2px solid #13AA52",
      },
    },
    "& .right-icons": {
      display: "flex",
      height: "100%",
      width: "9rem",
      minWidth: "9rem",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: "2rem",

      "& .icon-container": {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "& .fa-user-circle": {
          color: "#FFFFFF",
          fontSize: "1.3rem",
          textStroke: "1px #6B6C6E",
        },
        "& .fa-bell": {
          color: "#FFFFFF",
          fontSize: "1.3rem",
          textStroke: "1px #6B6C6E",
        },
        "& .fa-cog": {
          color: "#FFFFFF",
          fontSize: "1.3rem",
          textStroke: "1px #6B6C6E",
        },
      },
    },
  },
})
