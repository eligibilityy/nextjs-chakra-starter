import Head from "next/head"
import Footer from "../footer"
import { Box } from "@chakra-ui/react"

const Main = ({ children }) => {
    return (
        <Box as='main'>
            <Head>
                <title>Liya+</title>
            </Head>

                {children}
                <Footer />
        </Box>
    )
}

export default Main