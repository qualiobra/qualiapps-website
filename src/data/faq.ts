export interface FAQItem {
  id: string
  questionKey: string
  answerKey: string
}

export const faqItems: FAQItem[] = [
  {
    id: 'pricing',
    questionKey: 'faq.questions.pricing',
    answerKey: 'faq.answers.pricing',
  },
  {
    id: 'timeline',
    questionKey: 'faq.questions.timeline',
    answerKey: 'faq.answers.timeline',
  },
  {
    id: 'support',
    questionKey: 'faq.questions.support',
    answerKey: 'faq.answers.support',
  },
  {
    id: 'differentials',
    questionKey: 'faq.questions.differentials',
    answerKey: 'faq.answers.differentials',
  },
  {
    id: 'ai',
    questionKey: 'faq.questions.ai',
    answerKey: 'faq.answers.ai',
  },
]
