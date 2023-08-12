'use client'
import { PageProps } from '@/.next/types/app/layout'
import { fetchQuestions } from '@/app/data/fetchQuestions'
import React, { useCallback, useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/router'

export default function NextButton() {
  const router = useRouter()
  const nextQuestion = useCallback(() => {
    router.push('/')
  }, [router])

  return <Button onClick={nextQuestion}>Next</Button>
}
