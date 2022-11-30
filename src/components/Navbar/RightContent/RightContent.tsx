import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import AuthButtons from './AuthButtons'
import AuthModal from '../../Modal/Auth/AuthModal'
import { auth } from '../../../firebase/clientApp'
import { signOut } from 'firebase/auth'

type RIghtContentProps = {
  user: any
}

const RightContent: React.FC<RIghtContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify='content' align='center'>
        {user ? <Button onClick={() => signOut(auth)}>Logout</Button> : <AuthButtons />}
      </Flex>
    </>
  )
}

export default RightContent
