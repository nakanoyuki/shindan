import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { fetchQuestion } from '@/app/data/fetchQuestion'

export default async function QuestionCard() {
  const questions = await fetchQuestion(0)
  if (!questions) return notFound()
  return (
    <>
      <p>
        <strong>問い</strong>
        {questions.question}
      </p>
      <p>
        <strong>答え:</strong>
        <Button> {questions.choice1}</Button>
        <Button> {questions.choice2}</Button>
        <Button> {questions.choice3}</Button>
        <Button> {questions.choice4}</Button>
      </p>
    </>
  )
}
