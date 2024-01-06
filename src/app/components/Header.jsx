import { Acme, Sevillana } from 'next/font/google'
const acme = Acme({ subsets: ['latin'], weight: ['400'] })
const sevillana = Sevillana({ subsets: ['latin'], weight: ['400'] })

export default function Header() {
    return (
        <div className='text-white p-[10px] mb-[0px] md:mb-[30px] font-bold' >
            <div className={`${acme.className} font-bold text-[2rem]`}><span className={sevillana.className}>A</span>rogundade</div>
            <div className='text-center'>
                <div>Mrs Rachel Omoladun Arogundade of blessed memory</div>
                <div className='text-[.8rem]'>{"("}20<sup>th</sup> Feb, 1957 - 1<sup>st</sup> Jan, 2024{")"}</div>
            </div>
        </div>
    )
}

