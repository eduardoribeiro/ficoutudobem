import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PartnersLogos } from "../content/partners"
import Card from "@mui/material/Card"
import { CardActionArea } from "gatsby-theme-material-ui"
import CardContent from "@mui/material/CardContent"
import theme from "../theme"

export interface PartnersLogosButton extends PartnersLogos {
  onClick: () => void;
}

const PartnerLogo = ({
  image,
  width = 100,
  quality = 100,
    alt = "",
  onClick
}: PartnersLogosButton) => (
  <Card sx={{backgroundColor: 'rgba(255, 255, 255, 0.01)', boxShadow: 'none', transition: 'all .4s ease-in-out', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.55)', boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'}}}>
    <CardActionArea sx={{ height: 100 }} title={alt} onClick={onClick}>
      <CardContent sx={{display: 'flex', maxHeight: 48, justifyContent: 'center', alignItems: 'center', padding: theme.spacing(2)}}>
        <img src={image} alt={alt} title={alt} style={{maxHeight: 100}} />
      </CardContent>
    </CardActionArea>
  </Card>
)

export default PartnerLogo
