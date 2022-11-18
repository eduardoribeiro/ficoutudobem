// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql, HeadFC } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CanalQ from "../images/logo-q.svg"
import theme from "../theme"
import { Box, Typography } from "@mui/material"
import Partners from "../components/Homepage/Partners"
import { partners } from "../content/partners"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Homepage: React.FC<PageProps<DataProps>> = ({ data, location }) => (
  <Layout noHeader>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: theme.spacing(16),
      }}
    >
      <StaticImage
        src="../images/ficou_tudo_bem_bigger.png"
        loading="eager"
        width={800}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ margin: "0 auto", marginBottom: theme.spacing(2) }}
      />
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            margin: theme.spacing(2, 1),
            textTransform: "uppercase",
          }}
        >
          Estreia em breve
        </Typography>
        <CanalQ
          width={220}
          height="auto"
          style={{ marginTop: -2, marginLeft: 10 }}
        />
      </Box>
      <Box sx={{ xs: { display: 'block' }, sm: {display: 'none'} }}>
        <Partners partnersData={partners} />
      </Box>
    </Box>
  </Layout>
)

export const Head: HeadFC<DataProps> = () => <Seo title="Ficou Tudo Bem" />

export default Homepage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
