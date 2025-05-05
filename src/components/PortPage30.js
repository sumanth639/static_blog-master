import React from 'react';

const PortPage30 = () => {
  return (
    <div
      className="container"
      style={{
        marginTop: '100px',
        marginBottom: '100px',
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
          paddingTop: '15px',
          paddingBottom: '15px',
          borderRadius: '10px',
        }}
      >
        Whether to go for mutual funds or PMS Blog from anchoredge
      </h3>
      <div style={{ textAlign: 'center' }}>
        <img
          id="blogImg"
          src="https://newapps.anchoredge.in/branding/Content/Blogimage/thumb/791whether_to_go_for_mutual_fund_or_PMS.png"
          alt="blog_image"
        />
      </div>
      <div className="container" style={{ fontSize: '18px', padding: '25px' }}>
        <strong>Whether to go for mutual funds or PMS?</strong>
        <p style={{ fontSize: '12pt', marginTop: '15px' }}>
          Portfolio Management Services (PMS) may sound like mutual funds. Are
          you confused between PMS and Mutual Funds? While there are
          similarities, they are not the same.
        </p>

        <strong style={{ marginTop: '15px' }}>Mutual Funds</strong>
        <p style={{ fontSize: '12pt', marginTop: '15px' }}>
          When an entity invests money in stocks, bonds, money market
          instruments, or other securities after collecting funds from several
          investors with similar investment goals, such a financial instrument
          is known as a Mutual Fund. And by determining a scheme's "Net Asset
          Value," or NAV, the returns earned from this collective investment are
          distributed proportionately among the investors after considering any
          applicable expenses and levies.
        </p>

        <strong style={{ marginTop: '15px' }}>
          Portfolio Management Services
        </strong>
        <p style={{ fontSize: '12pt', marginTop: '15px' }}>
          PMS is a financial service provided by the portfolio manager to
          achieve the required rate of return while maintaining the desired
          level of risk. A portfolio manager is a qualified investment
          professional with extensive knowledge of the market's various
          instruments who focuses on analyzing the investor's investment goals.
          Stocks, fixed income, commodities, real estate, other structured
          products, and cash can all be included in an investment portfolio.
        </p>

        <strong style={{ marginTop: '15px' }}>
          Comparing Mutual Funds and PMS
        </strong>
        <p style={{ fontSize: '12pt', marginTop: '15px' }}>
          Mutual Funds work in a rigid framework by their mandate and invest in
          instruments as per the scheme’s investment objective. However, PMS
          offers a customizable regime to their investors, where the portfolio
          is constructed at a macro level.
          <br />
          The cost of a PMS is higher than that of mutual funds. Mutual funds
          are more cost-effective and more suitable for retail investors.
          <br />
          As mutual funds are pooled investments, other investors' actions can
          impact the mutual fund's performance. For example, suppose an investor
          withdraws a considerable sum of their invested amount from the fund.
          In that case, the fund manager might have to sell good papers to cover
          the liquidity requirements. In such a case, the NAV of the scheme
          might fall due to redemption pressures. But in PMS, the actions of
          individuals do not affect the returns and investments of other
          investors.
          <br />
          Investors may choose funds as per their financial goals and risk
          appetite. In mutual funds, you can start investing at as low as Rs 500
          monthly. In PMS, a minimum investment of Rs 50 lakh is required.
          <br />
          You pay short-term or long-term capital gains on every transaction.
          Long-term capital gains in equity mutual funds are taxable at 10% per
          annum, including cess and surcharge without indexation on gains above
          Rs 1,00,000 in a financial year. Short-term capital gains are taxable
          at 15%, including cess and surcharge. Moreover, mutual fund scheme
          owners have to pay tax only on redemption. The tax on Portfolio
          Management Services is not as efficient.
          <br />
          The investing process in mutual funds is easy. The investment process
          for Portfolio Management Service is more tiresome considering the
          higher value of transactions.
          <br />
          PMS must make timely disclosures to the client for transparency, as
          these are not freely available to the public. Moreover, it is not easy
          to assess and compare the performance of different PMS products. But
          in the case of Mutual Funds, they are strictly regulated, and all the
          information is public. You can easily compare performances.
          <br />A PMS can focus on performance and can make investment decisions
          such that the absolute returns are maximized. They can focus more on
          returns as compared to MFs that have to take care of diversification
          rules, valuation guidelines, and redemption-related regulations.
        </p>

        <strong style={{ marginTop: '15px' }}>Conclusion</strong>
        <p style={{ fontSize: '12pt', marginTop: '15px' }}>
          By comparing mutual funds and PMS, you can make investment decisions
          according to your financial objectives and ability to take risks.
          <br />
          This blog is purely for educational purposes and not to be treated as
          personal advice. Mutual fund investments are subject to market risks,
          read all scheme-related documents carefully.
        </p>
      </div>
    </div>
  );
};

export default PortPage30;
