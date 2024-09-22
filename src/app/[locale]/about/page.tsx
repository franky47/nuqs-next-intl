import { CounterButton } from '@/app/components/counter-button'
import { SearchInput } from '@/app/components/search-input'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { Suspense } from 'react'

export default function () {
  const t = useTranslations('AboutPage')
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('about')}</p>
      <Link href="/">{t('link')}</Link>
      <p>
        <Suspense>
          <CounterButton />
          <SearchInput />
        </Suspense>
      </p>
    </div>
  )
}
