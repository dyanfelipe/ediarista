import React from "react";
import {
  AvatarStyled,
  RatingStyled,
  UserDescription,
  UserInformationContainer,
  UserName
} from "./Userinformation.styles";

interface UserinformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const Userinformation: React.FC<UserinformationProps> = (
  {picture, name, rating, description}
) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating}/>
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  )
}

export default Userinformation
