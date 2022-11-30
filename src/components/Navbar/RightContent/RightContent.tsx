import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import AuthButtons from './AuthButtons'
import AuthModal from '../../Modal/Auth/AuthModal'
import { auth } from '../../../firebase/clientApp'
import { signOut, User } from 'firebase/auth'
import Icons from './Icons'
import UserMenu from './UserMenu'

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
        <UserMenu user={user} />
      </Flex>
    </>
  )
}

export default RightContent
