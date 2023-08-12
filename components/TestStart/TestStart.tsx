'use client'
import React, { useCallback } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const TestStart = () => {
  const router = useRouter()
  const onClick = useCallback(() => {
    router.push('/questions/question1')
  }, [router])
  return (
    <>
      <Button onClick={onClick}>診断スタート</Button>
    </>
  )
}

export default TestStart
