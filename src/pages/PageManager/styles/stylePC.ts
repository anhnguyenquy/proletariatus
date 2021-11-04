import { makeStyles } from "@mui/styles";

export const useStylesPC = makeStyles({
  "page-manager": {
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    backgroundColor: "#F3F2EF",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "flex-start",
    "& .page-content": {
      width: "100%",
      height: "100%",
      display: "flex",
      "& .left-bar": {
        height: "100%",
        width: "19rem",
        minWidth: "19rem",
        backgroundColor: "white",
        boxShadow: "inset -2px 0px 0px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        "& .top": {
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "4.5rem",
          "& .bar-title": {
            fontSize: "1.5rem",
            fontWeight: "600",
            marginLeft: "1.5rem",
          },
          "& .icon-button": {
            marginLeft: "9.8rem",
            backgroundColor: "#e4e6eb",
            padding: "0.35rem",
            "& .fa-cog": {
              fontSize: "1rem",
              color: "black",
            },
          },
          "& .icon-button:hover": {
            backgroundColor: "#d8dadf",
          },
        },
        "& .create-new-page-button": {
          textTransform: "none",
          fontFamily: "Montserrat",
          color: "#13AA52",
          boxShadow: "none",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
          width: "16rem",
        },
        "& .bottom-items": {
          width: "90%",
          marginTop: "0.5rem",
          "& .bottom-item": {
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
              backgroundColor: "#DDDDDD",
              padding: "0.15rem",
              borderRadius: "50%",
              width: "1.5rem",
              height: "1.5em",
              "& .ava-icon": {
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // width: "1.25rem",
                // height: "1.25rem",
              },
            },
            "& .bottom-info": {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "1rem",
              "& .bottom-name": {
                display: "flex",
                fontWeight: 600,
                fontFamily: "Montserrat",
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
                  fontFamily: "Montserrat",
                  color: "#8A8A8A",
                },
              },
            },
          },
          "& .bottom-item:hover": {
            backgroundColor: "#f2f2f2",
          },
        },
      },
      "& .main": {
        flexGrow: 1,
        padding: "2rem",
        "& .main-title": {
          fontWeight: "600",
          width: "100%",
          marginBottom: "0.75rem",
          // border: "1px solid red",
          paddingLeft: "3.5rem",
          fontSize: "1.15rem"
        },
        "& .page-items": {
          // marginTop: "1rem",
          // border: "1px solid red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "0.7rem",
          "& .page-item": {
            backgroundColor: "white",
            borderRadius: "10px",
            border: "2px solid #E4E6E6",
            display: "flex",
            alignItems: "center",
            padding: "0.5rem",
            height: "4.5rem",
            margin: "0.5rem 0",
            justifyContent: "flex-start",
            width: "80%",
            minWidth: "47.875rem",
            "& .left-stuffs": {
              display: "flex",
              height: "100%",
              alignItems: "center",
              // border: "1px solid red",
              marginLeft: "1rem",
              "& img": {
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                padding: "0.75rem",
                border: "2px solid #E4E6E6",
                marginRight: "1rem",
                "&:hover": {
                  opacity: 0.85,
                },
              },
              "& .main-stuffs": {
                // border: "1px solid red",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                "& .page-name": {
                  fontWeight: "700",
                  marginBottom: "0.25rem",
                  // border: "1px solid red",
                  fontSize: '0.9rem'
                },
                "& .page-info": {
                  color: "#8A8A8A",
                  fontSize: "0.675rem",
                  // border: "1px solid red",
                  "& span": {
                    color: "black",
                    fontWeight: "600",
                  }
                },
              },
            },
            "& .notifications": {
              display: "flex",
              alignItems: "center",
              // border: "1px solid red",
              // paddingBottom: "3.5rem",
              marginTop: "0.25rem",
              marginLeft: "12rem",
              alignSelf: "flex-start",
              "& .fa-globe-americas": {
                marginRight: "0.3rem",
                fontSize: "0.875rem"
              },
              "& .title": {
                fontSize: "0.675rem"
              },
            },
          },
        },
      },
    },
  },
});
