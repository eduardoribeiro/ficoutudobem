import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          /*
          background-color: #FAACA8;
          background-image: linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%);

          */
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',
          width: "100%",
          height: "100vh",
          "& ul.circles": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "& li": {
              position: "absolute",
              display: "block",
              listStyle: "none",
              width: "20px",
              height: "20px",
              background: "rgba(255, 255, 255, 0.2)",
              animation: "animate 25s linear infinite",
              bottom: "-150px",
              "&:nth-child(1)": {
                left: "25%",
                width: "80px",
                height: "80px",
                animationDelay: "0s",
              },
              "&:nth-child(2)": {
                left: "10%",
                width: "20px",
                height: "20px",
                animationDelay: "2s",
                animationDuration: "12s",
              },

              "&:nth-child(3)": {
                left: "70%",
                width: "20px",
                height: "20px",
                animationDelay: "4s",
              },

              "&:nth-child(4)": {
                left: "40%",
                width: "60px",
                height: "60px",
                animationDelay: "0s",
                animationDuration: "18s",
              },

              "&:nth-child(5)": {
                left: "65%",
                width: "20px",
                height: "20px",
                animationDelay: "0s",
              },

              "&:nth-child(6)": {
                left: "75%",
                width: "110px",
                height: "110px",
                animationDelay: "3s",
              },

              "&:nth-child(7)": {
                left: "35%",
                width: "150px",
                height: "150px",
                animationDelay: "7s",
              },

              "&:nth-child(8)": {
                left: "50%",
                width: "25px",
                height: "25px",
                animationDelay: "15s",
                animationDuration: "45s",
              },

              "&:nth-child(9)": {
                left: "20%",
                width: "15px",
                height: "15px",
                animationDelay: "2s",
                animationDuration: "35s",
              },

              "&:nth-child(10)": {
                left: "85%",
                width: "150px",
                height: "150px",
                animationDelay: "0s",
                animationDuration: "11s",
              },
            },
          },
          "@keyframes animate": {
            "0%": {
              transform: "translateY(0) rotate(0deg)",
              opacity: 1,
              borderRadius: 0,
            },
            "100%": {
              transform: "translateY(-1000px) rotate(720deg)",
              opacity: 0,
              borderRadius: "50%",
            },
          },
        },
      },
    },
  },
})

export default theme
