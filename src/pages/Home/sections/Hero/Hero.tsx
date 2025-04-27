import { styled } from "@mui/material/styles"

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",

    }))

    return (
      <>
            <StyledHero>
                Ola
            </StyledHero>
        </>
    )
}

        export default Hero