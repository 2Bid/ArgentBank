import React from 'react'
import Banner from '../../components/banner/Banner'
import ServiceBloc from '../../components/serviceBloc/ServiceBloc'

import bannerImage from "../../images/bank-tree.jpeg"
import iconChat from "../../images/icon-chat.png"
import iconMoney from "../../images/icon-money.png"
import iconSecurity from "../../images/icon-security.png"

export default function Home() {
  return (
    <div className='home'>
      <Banner img={bannerImage}/>

      <div className='serviceBloc__container'>
        <ServiceBloc
          icon={iconChat}
          titre="You are our #1 priority"
          texte="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />

        <ServiceBloc
          icon={iconMoney}
          titre="More savings means higher rates"
          texte="The more you save with us, the higher your interest rate will be!"
        />
        
        <ServiceBloc
          icon={iconSecurity}
          titre="Security you can trust"
          texte="We use top of the line encryption to make sure your data and money is always safe."
        />
      </div>
    </div>
  )
}
