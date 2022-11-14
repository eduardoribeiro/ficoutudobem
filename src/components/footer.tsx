import { Grid } from "@mui/material"
import React from "react"
import { partners } from "../content/partners"
import Partners from "./Homepage/Partners"

const Footer: React.FC<any> = ({ children }) => (
  <footer>
    {children ? (
      children
    ) : (
      <Grid container xs={12} sx={{justifyContent: 'space-between', alignItems: 'flex-end'}}>
        <Grid item>
          © {new Date().getFullYear()} &middot;
          {` `}
          Byron Produções
        </Grid>
        <Grid item>
          <Partners partnersData={partners} />
        </Grid>
      </Grid>
    )}
  </footer>
)

export default Footer
