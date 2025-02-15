import React from 'react';
import { Button, Flex, FormControl, Input } from "@chakra-ui/react"
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../redux/actions";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  //IMPUT SUMBMIT
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  }
  //BUTTON 
  const handleInput = e => {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex my="8">
        <FormControl>
          <Input
            type="text"
            value={value}
            placeholder="Create a new to-do"
            onChange={handleInput}
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
          />
        </FormControl>
        <Button
          colorScheme="blue"
          type="submit"
          disabled={!value}
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
        >Add Todo</Button>
      </Flex>
    </form>
  )
}