import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to Nomura's AI-Powered FAQ Assistant!
        </h1>
        <p className="leading-normal text-muted-foreground">
          This is an intelligent chatbot designed to help you find answers to
          frequently asked questions about{' '}
          <ExternalLink href="https://www.nomura.com">Nomura</ExternalLink>'s
          services, products, and processes.
        </p>
        <p className="leading-normal text-muted-foreground">
          Our AI assistant is connected to Nomura's confluence pages, allowing
          it to provide up-to-date and accurate information. Simply type your
          question in the chat box below, and I'll do my best to assist you!
        </p>
        <p className="leading-normal text-muted-foreground">
          If you can't find the answer you're looking for, please don't hesitate
          to contact our support team for further assistance.
        </p>
        <p className="leading-normal text-muted-foreground">
          It uses{' '}
          <ExternalLink href="https://vercel.com/blog/ai-sdk-3-generative-ui">
            React Server Components
          </ExternalLink>{' '}
          to combine text with generative UI as output of the LLM.
        </p>
      </div>
    </div>
  )
}
