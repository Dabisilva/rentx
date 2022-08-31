import React from "react";

import {
  Container,
  ImageIndexes,
  ImageDoot,
  CarImageWrapeper,
  CarImage,
} from "./styles";

interface Props {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: Props) {
  return (
    <Container>
      <ImageIndexes>
        <ImageDoot active={true} />
        <ImageDoot active={false} />
        <ImageDoot active={false} />
        <ImageDoot active={false} />
      </ImageIndexes>
      <CarImageWrapeper>
        <CarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </CarImageWrapeper>
    </Container>
  );
}
