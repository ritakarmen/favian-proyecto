import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout.jsx'
import { RedLayout } from '../components/layouts/RedLayout.jsx'

export default function About() {
  return (
    <>
      <h1> About Page</h1>
      <h1 className={'title'}>
        {/* Ir al <a href=" / ">Home</a> */}
        Ir a <Link  href=" / ">Home</Link>
      </h1>
      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/about.jsx</code>
      </p>
    </>
  )
}

About.getLayout = function getLayout( page ) {
  return (
    <MainLayout>
      <RedLayout>
        { page}
      </RedLayout>
    </MainLayout>
  )
}