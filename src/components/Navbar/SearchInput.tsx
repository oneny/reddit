import { SearchIcon } from '@chakra-ui/icons'
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { User } from 'firebase/auth'

type SearchInputProps = {
  user?: User | null
}

const SearchInput: React.FC<SearchInputProps> = ({ user }) => {
  return (
    <Flex flexGrow='1' maxWidth={user ? 'auto' : '600px'} ml='1' mr='2' align='center'>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.300' mb='1' />
        </InputLeftElement>
        <Input
          placeholder={'Search'}
          fontSize='10pt'
          height='34px'
          bg='gray.50'
          _placeholder={{ color: 'gray.500' }}
          _hover={{ bg: 'white' }}
          _focus={{
            outline: 'none',
            border: '1px solid',
            borderColor: 'blue.500',
          }}
        />
      </InputGroup>
    </Flex>
  )
}

export default SearchInput
