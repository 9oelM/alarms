import React, { FC } from 'react';
import { Modal, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Gray } from '@/constants/colors';

export interface Props {
  msg: string;
}

const ModalStyled = styled.Modal({})

const TextStyled = styled.Text({
  textAlign: 'center',
  color: Gray.Gray50,
});

const InnerViewStyled = styled.View({
  padding: 15,
  borderRadius: 10,
  borderColor: Gray.Gray500,
  borderWidth: 1,

  backgroundColor: Gray.Gray900,
  margin: 'auto',


  shadowColor: `#000`,
  shadowOpacity: `1`,
  shadowRadius: 150,
})

export const AlertModal: FC<Props> = ({ msg }) => {
  return (
    <View
      style={{ 
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: '100%',
      }}
    >
      <ModalStyled
        animationType='fade'
        transparent={true}
      >
        <InnerViewStyled>
          <TextStyled>{msg}</TextStyled>
        </InnerViewStyled>
      </ModalStyled>
    </View>
  );
}
