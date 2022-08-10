import React from 'react'

export default function TransactBloc() {
  return (
     <section className="TransactBloc">
          <div className="TransactBloc__content-wrapper">
               <h3 className="TransactBloc__title">Argent Bank Checking (x8349)</h3>
               <p className="TransactBloc__amount">$2,082.79</p>
               <p className="TransactBloc__amount-description">Available Balance</p>
          </div>
          <div className="TransactBloc__content-wrapper cta">
               <button className="TransactBloc__button">View transactions</button>
          </div>
   </section>
  )
}
