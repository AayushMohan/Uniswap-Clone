import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import ethLogo from '../assets/eth.png'
import uniswapLogo from '../assets/uniswap.png'
import { useContext } from 'react'
// import { TransactionContext } from '../context/TransactionContext'
// import { client } from '../lib/sanityClient'

const style = {}

export const Header = () => {
  const [selectedNav, setSelectedNav] = useState('swap')

  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <img src={uniswapLogo} alt="uniswap" height={40} width={40} />
      </div>
    </div>
  )
}
