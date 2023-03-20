import { Container } from "@mui/system"
import Head from "next/head"
import { Navbar } from "./Navbar"

export const Layout = ({ title, children }) => {

    return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content="Simple task list app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Navbar />

    <Container sx={{mt:3}} >
        {children}
    </Container>
    </>
  )
}