import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '../../../atoms/authModalAtom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebase/clientApp'
import { FIREBASE_ERRORS } from '../../../firebase/errors'

const SignUp: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState)
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [createUserWithEamilAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth)

  // Firebase logic
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError('Password do not match')
      return
    }
    // password match
    createUserWithEamilAndPassword(signUpForm.email, signUpForm.password)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    // update form state
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  useEffect(() => {
    setError('')
  }, [signUpForm])

  return (
    <form onSubmit={onSubmit}>
      <Input
        name='email'
        placeholder='email'
        type='email'
        mb='2'
        onChange={onChange}
        fontSize='10pt'
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg='gray.50'
      />
      <Input
        name='password'
        placeholder='password'
        type='password'
        mb='2'
        onChange={onChange}
        fontSize='10pt'
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg='gray.50'
      />
      <Input
        name='confirmPassword'
        placeholder='confirmPassword'
        type='password'
        mb='2'
        onChange={onChange}
        fontSize='10pt'
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg='gray.50'
      />
      {error ||
        (userError && (
          <Text textAlign='center' color='red' fontSize='10pt'>
            {error ||
              FIREBASE_ERRORS[
                userError.message as keyof typeof FIREBASE_ERRORS
              ]}
          </Text>
        ))}
      <Button
        width='100%'
        height='36px'
        type='submit'
        mt='2'
        mb='2'
        isLoading={loading}
      >
        Sign Up
      </Button>
      <Flex fontSize='9pt' justifyContent='center'>
        <Text mr='1'>Already a redditor?</Text>
        <Text
          color='blue.500'
          fontWeight='700'
          cursor='pointer'
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: 'login',
            }))
          }
        >
          Log In
        </Text>
      </Flex>
    </form>
  )
}

export default SignUp
