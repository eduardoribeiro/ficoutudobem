import { Typography, Grid, Box, Stack } from "@mui/material"
import { navigate } from "gatsby"
import React from "react"
import { PartnersLogos } from "../../content/partners"
import theme from "../../theme"
import PartnerLogo from "../logos"

export interface PartnersProps {
  partnersData: PartnersLogos[]
}

const Partners = ({ partnersData }: PartnersProps) => {
  const handleOnClick = (link: string | undefined) => {
    console.log(link)
    link !== undefined && window.open(link)
  }
  return (
    <Box
      sx={{position: 'absolute', bottom: 100, display: 'block'}}
    >
      <Typography
        variant="subtitle1"
        sx={{ margin: theme.spacing(0, 0, 2, 0), display: 'inline-block' } }
      >
        PATROCINADORES
      </Typography>
      {/* <Grid container spacing={2} sx={{ padding: theme.spacing(2, 0) }}> */}
      <Stack direction={{ xs: "row" }} justifyContent="center" spacing={2}>
        {partnersData.map(partner => (
          <PartnerLogo
            key={partner.image}
            image={partner.image}
            alt={partner.alt}
            onClick={() => handleOnClick(partner.link)}
          />
        ))}
      </Stack>
    </Box>
  )
}

export default Partners
