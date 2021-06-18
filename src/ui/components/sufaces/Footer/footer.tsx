import React from "react"
import {Applist, FooterContainer, FooterStyled, FooterTitle} from "./footer.styles";
import {Box, Typography} from "@material-ui/core";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{maxWidth: '400px'}}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={'body2'} sx={{mt: 2}}>
            O incentivo ao avanço tecnológico, assim como o fenômeno da Internet oferece uma interessante oportunidade
            para verificação do sistema de participação geral.
          </Typography>
        </Box>

        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <Applist>
            <li>
              <a href="/" target={'_blank'} rel={'noopener noreferrer'}>
                <img src="/img/logos/app-store.png" alt={'App Store'}/></a>
            </li>
            <li>
              <a href="/" target={'_blank'} rel={'noopener noreferrer'}>
                <img src="/img/logos/google-play.png" alt={'Google play'}/></a>
            </li>
          </Applist>
        </div>
      </FooterContainer>
    </FooterStyled>
  )
}

export default Footer
