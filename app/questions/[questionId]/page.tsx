import Link from 'next/link'
import { Database } from '@/database.types'
import { resolve } from 'path'

type Questions = Database['public']['Tables']['questions']['Row']

type PageProps = {
  params: {
    questionId: string
  }
}

async function fetchQuestions(questionId: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch(
    `${process.env.url}/rest/v1/questions?id=eq.${questionId}&select=*`,
    {
      headers: new Headers({
        apikey: process.env.apikey as string,
      }),
      cache: 'force-cache',
    }
  )
  const questions: Questions[] = await res.json()
  return questions[0]
}


export default async function QuestionList({ params }: PageProps) {
  const questions = await fetchQuestions(params.questionId)
  // if (!questions) return notFound()
  return (
    <div className="mt-16 border-2 p-8">
      <p>
        <strong>Task ID:</strong>
        {questions.id}
      </p>
      <p>
        {questions.choice1}
      </p>
      <p>
        {questions.choice2}
      </p>
    </div>
  )
}

