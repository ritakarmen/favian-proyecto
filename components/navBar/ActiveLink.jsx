import { useRouter } from 'next/router'
import Link from 'next/link'

export const ActiveLink = ({text, href}) => {
    const style = {
        color: '#0070f3',
        textDecoration: 'underline'
    }

    const { asPath } = useRouter();


  return (
    <Link style={ asPath === href ? style : null } href={ href }>
        { text } 
    </Link>
  )
}
