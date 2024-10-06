import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      AI-powered FAQ assistant for{' '}
      <ExternalLink href="https://www.nomura.com">Nomura</ExternalLink>{' '}
      confluence pages. Built with{' '}
      <ExternalLink href="https://nextjs.org">Next.js</ExternalLink> and{' '}
      <ExternalLink href="https://www.python.org">Python</ExternalLink>.
    </p>
  )
}
