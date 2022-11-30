import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import AuthButtons from './AuthButtons'
import AuthModal from '../../Modal/Auth/AuthModal'
import { auth } from '../../../firebase/clientApp'
import { signOut, User } from 'firebase/auth'
import Icons from './Icons'

type RIghtContentProps = {
  user?: User | null
}

const RightContent: React.FC<RIghtContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify='content' align='center'>
        {user ? (
          <Icons />
        ) : (
          <AuthButtons />
        )}
      </Flex>
    </>
  )
}

export default RightContent
