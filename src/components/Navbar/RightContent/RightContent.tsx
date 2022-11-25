import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';
import AuthModal from "../../Modal/Auth/AuthModal";

type Props = {}

const RightContent = (props: Props) => {
  return (
    <>
      <AuthModal />
      <Flex justify="content" align="center">
        <AuthButtons />
      </Flex>
    </>
  )
}

export default RightContent