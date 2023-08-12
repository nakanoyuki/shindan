import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { fetchQuestion } from '@/app/data/fetchQuestion'

export default async function QuestionDetailPage() {
  const questions = await fetchQuestion(1)
  if (!questions) return notFound()
  return (
    <div className="mt-16 border-2 p-8">
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
      <Link href={`/resultType`} prefetch={false}>
        結果
      </Link>
    </div>
  )
}
