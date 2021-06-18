import React from "react";
import {PageTitleContainer, PageTitleStyled} from "./PageTitle.styles";

interface PageTitleProps {
  title: string
  subtitle: string
}

const PageTitle: React.FC<PageTitleProps> = ({title, subtitle}) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{title}</PageTitleStyled>
      <h1>{subtitle}</h1>
    </PageTitleContainer>
  )
}

export default PageTitle
