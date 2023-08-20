'use client'
import React, { useCallback } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

export default function NextButton() {
  const router = useRouter()
  const onClick = useCallback(() => {
    router.push('/questions/question2')
  }, [router])

  return <Button onClick={onClick}>Next</Button>
}
