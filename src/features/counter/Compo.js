import React from 'react'
import { useSelector } from 'react-redux';
import { selectCount } from './counterSlice';

export default function Compo() {
     const count = useSelector(selectCount);
  return (
    <div>{count}</div>
  )
}
