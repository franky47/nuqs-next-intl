import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { Suspense } from 'react'
import { CounterButton } from '../components/counter-button'
import { SearchInput } from '../components/search-input'

export default function HomePage() {
  const t = useTranslations('HomePage')
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('link')}</Link>
      <p>
        <Suspense>
          <CounterButton />
          <SearchInput />
        </Suspense>
      </p>
    </div>
  )
}
