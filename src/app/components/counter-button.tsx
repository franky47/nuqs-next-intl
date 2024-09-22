'use client'

import { useTranslations } from 'next-intl'
import { parseAsInteger, useQueryState } from 'nuqs'

export function CounterButton() {
  const t = useTranslations('Counter')
  const [count, setCount] = useQueryState(
    'count',
    parseAsInteger.withDefault(0).withOptions({ history: 'push' })
  )
  return (
    <button onClick={() => setCount(c => c + 1)}>
      {t('count', { count })}
    </button>
  )
}
