import { fetchQuestions } from '@/app/data/fetchQuestions'

export default async function QuestionListStatic() {
  const questions = await fetchQuestions()
  return (
    <div className="p-4">
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">
        全部で{questions.length}問あります。
      </p>
    </div>
  )
}
