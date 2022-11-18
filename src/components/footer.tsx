import { Grid, styled, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import React from "react"
import { partners } from "../content/partners"
import Partners from "./Homepage/Partners"

const FooterElement = styled("footer")(({ theme }) => ({
  paddingTop: theme.spacing(1),
  position: "absolute",
  bottom: 20,
  width: `var(--size-content)`,
}))

const Footer: React.FC<any> = ({ children }) => (
  <FooterElement>
    {children ? (
      children
    ) : (
      <Grid
        container
        sx={{ justifyContent: "space-between", alignItems: "flex-end" }}
      >
        <Grid item>
          <Stack direction="row" spacing={1}>
            <Typography variant="body1">
              © {new Date().getFullYear()} &middot;
            </Typography>
            <img
              src="./images/parceiros/byron.png"
              height={22}
              alt="Fénix - Associação Cinematográfica"
              title="Fénix - Associação Cinematográfica"
            />
          </Stack>
        </Grid>
        <Grid item></Grid>
      </Grid>
    )}
  </FooterElement>
)

export default Footer
