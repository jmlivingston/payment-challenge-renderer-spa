import queryString from 'query-string'
import React from 'react'

const PaymentChallengeRenderer = () => {
  const { creq, url } = queryString.parse(window.location.search)

  return (
    <form method="POST" action={url}>
      creq:
      <input
        type="area"
        id="creq"
        name="creq"
        onChange={() => null}
        value={creq}
      />
      <input type="submit" value="proceed to issuer" />
    </form>
  )
}

export default PaymentChallengeRenderer
