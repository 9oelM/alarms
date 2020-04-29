import styled from "styled-components/native";

interface PaddingProps {
  height: string;
}

export const Padding = styled.View<PaddingProps>(({ height }) => ({
  height,
}));

export const Normalizer = Padding;
