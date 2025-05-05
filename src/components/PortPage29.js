import React from 'react';

const PortPage29 = () => {
  return (
    <div
      className="container"
      style={{
        marginTop: '50px',
        marginBottom: '50px',
        padding: '20px',
        border: '1px solid #d0cdcd',
        boxShadow: '2px 2px 3px 2px #d0cdcd',
        borderRadius: '10px',
      }}
    >
      <h3
        style={{
          color: 'white',
          textAlign: 'center',
          marginTop: '25px',
          backgroundColor: '#bc9e51',
          padding: '15px',
          borderRadius: '10px',
        }}
      >
        Why Mutual Fund Investors Shouldn't Stop SIPs In This Economic Slowdown
      </h3>
      <div style={{ textAlign: 'center' }}>
        <img
          id="blogImg"
          src="https://newapps.anchoredge.in/branding/Content/Blogimage/thumb/1681383217195blog_.jpg"
          alt="blog_image"
        />
      </div>
      <div style={{ fontSize: '16px', padding: '20px' }}>
        <p>
          With the looming recession fears, many investors are pausing their
          SIPs. It has also been historically observed that investors tend to
          stop their SIP investments during an economic slowdown. However, if
          you look at the mutual fund returns from 2008 till now, a recession
          can be the best time to invest in the market. So, if you are thinking
          about stopping or pausing SIPs for a while, you need to read this
          article.
        </p>

        <strong>How can SIPs help in a recession?</strong>
        <p>
          Recession is never welcomed. However, if you are investing in mutual
          funds via SIPs, an economic slowdown can be a boon for you. The most
          important aspect of investing via SIPs is rupee cost averaging. This
          term refers to investing practice that involves investing an equal sum
          on a particular date without worrying about the fund's unit price.
          This is when you do not try to time the market but regularly invest a
          certain sum of money and stay invested for a longer time to reap the
          benefits.
        </p>

        <p>
          To understand this better, let’s look at how rupee cost averaging
          works:
        </p>
        <table
          style={{
            width: '100%',
            marginTop: '15px',
            borderCollapse: 'collapse',
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: '1px solid #d0cdcd',
                  padding: '8px',
                  backgroundColor: '#bc9e51',
                  color: 'white',
                }}
              >
                Months
              </th>
              <th
                style={{
                  border: '1px solid #d0cdcd',
                  padding: '8px',
                  backgroundColor: '#bc9e51',
                  color: 'white',
                }}
              >
                Amount Invested
              </th>
              <th
                style={{
                  border: '1px solid #d0cdcd',
                  padding: '8px',
                  backgroundColor: '#bc9e51',
                  color: 'white',
                }}
              >
                Per Unit Price
              </th>
              <th
                style={{
                  border: '1px solid #d0cdcd',
                  padding: '8px',
                  backgroundColor: '#bc9e51',
                  color: 'white',
                }}
              >
                Number of Units Bought
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                15th January
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                Rs. 10000
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                100
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                100
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                15th February
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                Rs. 10000
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                95
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                105.26
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                15th March
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                Rs. 10000
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                90
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                111.11
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                15th April
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                Rs. 10000
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                85
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                117.65
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                15th June
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                Rs. 10000
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                89
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                112.36
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                15th July
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                Rs. 10000
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                92
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                108.70
              </td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: '15px' }}>
          Suppose you started investing in this (say) fund A in January, and the
          date of SIP investment you set is the 15th of every month. However,
          due to the recession, markets started to tank, and unit prices kept
          going down, then they started to revive in the 5th month, June. Now,
          take a close look at the number of units you get when the price goes
          down. As the price went down from Rs. 100 per unit to Rs. 95 per unit,
          the number of units received went up from 100 to 105.26. This example
          depicts the benefit of staying invested even when the economy slows
          down. As a SIP investor, when the prices go down, you should stay
          invested rather than pause your SIPs, as you will get more units than
          when the prices are soaring.
        </p>

        <p>
          Now let’s compare it with lump sum investment to understand another
          benefit of SIP: risk mitigation. The total sum invested in the six
          months is Rs. 60000 divided into equal parts over 6 months. Now, if
          you had invested this total amount on 15th January, the total number
          of units you would have received was Rs. 60000/100 = 600 units.
        </p>

        <p>
          At the end of the 6th month, you have a total of 655.08 units, as you
          invested via SIPs. So, you achieved a clear profit of 55.05 units just
          by breaking down your investment into small parts. This also reduced
          the risk to quite an extent, as you didn’t put all the money in the
          fund immediately.
        </p>

        <strong>
          Why do you stay invested for the long term while investing via SIPs?
        </strong>
        <p>
          Now you know why you shouldn’t stop investing during the economic
          slowdown, so next, let’s find out why you should stay invested for a
          longer tenure to reap better returns.
        </p>

        <p>
          Suppose you and your friend started investing in the same fund, say,
          Fund X, on the same date and the same amount of Rs. 10000 every month.
          However, you stopped the SIP after five years due to the recession,
          while your friend continued it for ten years. Now let’s take a look at
          the returns:
        </p>
        <table
          style={{
            width: '100%',
            marginTop: '15px',
            borderCollapse: 'collapse',
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: '1px solid #d0cdcd',
                  padding: '8px',
                  backgroundColor: '#bc9e51',
                  color: 'white',
                }}
              >
                Particulars
              </th>
              <th
                style={{
                  border: '1px solid #d0cdcd',
                  padding: '8px',
                  backgroundColor: '#bc9e51',
                  color: 'white',
                }}
              >
                You (5 years investment)
              </th>
              <th
                style={{
                  border: '1px solid #d0cdcd',
                  padding: '8px',
                  backgroundColor: '#bc9e51',
                  color: 'white',
                }}
              >
                Your friend (10 years investment)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                Total Investment
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                Rs. 600000
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                Rs. 1200000
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                Returns (@12% rate)
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                Rs. 224864
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                Rs. 1123391
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                Total value
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                Rs. 824864
              </td>
              <td style={{ border: '1px solid #d0cdcd', padding: '8px' }}>
                Rs. 2323391
              </td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: '15px' }}>
          The returns and total value of your friend who stayed invested for ten
          years are higher than yours. You may say that you invested half of
          your friend, which is true. However, you haven’t achieved half of the
          returns generated by your friend while you have invested half of what
          he did. This is due to the computing of returns which helps in the
          growth of the returns when you stay invested for a longer tenure.
        </p>

        <strong>Conclusion</strong>
        <p>
          While the recession is something to worry about, if you plan your
          investments thoroughly and stay invested and regularly monitor the
          investments, recession can also benefit you in the long term.
        </p>

        <p style={{ fontStyle: 'italic' }}>
          This blog is purely for educational purposes and not to be treated as
          personal advice. Mutual funds are subject to market risks, read all
          scheme-related documents carefully.
        </p>
      </div>
    </div>
  );
};

export default PortPage29;
