import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { fetchQuestion } from '@/app/data/fetchQuestion'
import NextButton from '@/components/NextButton'

export default async function QuestionDetailPage() {
  const questions = await fetchQuestion(0)
  if (!questions) return notFound()
  return (
    <div className="mt-16 border-2 p-8">
      <p>
        <strong>問い</strong>
        {questions.question}
      </p>
      <p>
        <strong>答え:</strong>
        <Button>{questions.choice1}</Button>
        <Button>{questions.choice2}</Button>
        <Button>{questions.choice3}</Button>
        <Button>{questions.choice4}</Button>
      </p>
      {/* <Link href={`/questions/question2`} prefetch={false}>
        Next
      </Link> */}
      <NextButton />
    </div>
  )
}
