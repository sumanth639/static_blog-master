import React from 'react';

const PortPage35 = () => {
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
        How Inflation Affects Your Investments & How Mutual Funds Can Help
      </h3>
      <div style={{ textAlign: 'center' }}>
        <img id="blogImg" src="/img/inflation-affect.png" alt="blog_image" />
      </div>
      <div className="container" style={{ fontSize: '18px', padding: '25px' }}>
        <strong>Understanding Inflation & Its Impact on Your Wealth</strong>
        <p style={{ fontSize: '12pt', marginTop: '15px' }}>
          Inflation is the silent force that reduces your money's purchasing
          power over time. For long-term financial security, it is essential to
          invest wisely to ensure your returns consistently outpace inflation.
        </p>

        <strong style={{ marginTop: '15px' }}>
          The Impact of Inflation on Investments
        </strong>
        <p style={{ fontSize: '12pt', marginTop: '15px' }}>
          <strong>Fixed Deposits & Savings Accounts:</strong> While safe, their
          low returns often fail to keep pace with inflation. If inflation is at
          6% and your FD earns 4%, your real return is negative (-2%).
          <br />
          <br />
          <strong>Bonds & Fixed-Income Investments:</strong> May not generate
          inflation-beating returns and are impacted by interest rate
          fluctuations.
          <br />
          <br />
          <strong>Cash Holdings:</strong> Holding too much cash results in
          guaranteed loss of purchasing power.
        </p>

        <strong style={{ marginTop: '15px' }}>
          How Mutual Funds Help Beat Inflation
        </strong>
        <p style={{ fontSize: '12pt', marginTop: '15px' }}>
          <strong>1. Equity Mutual Funds for Long-Term Growth</strong>
          <br />
          Historically, stock markets have outperformed inflation, making equity
          funds ideal for wealth creation.
          <br />
          <br />
          <strong>2. Hybrid Funds for Balanced Returns</strong>
          <br />
          Combine equities and debt instruments to mitigate risks while offering
          better returns than traditional options.
          <br />
          <br />
          <strong>3. Debt Mutual Funds for Stability</strong>
          <br />
          Provide better returns than fixed deposits while managing risk
          effectively.
          <br />
          <br />
          <strong>4. Systematic Investment Plans (SIPs) for Consistency</strong>
          <br />
          Through rupee cost averaging, you accumulate more units when prices
          are low, helping build wealth steadily.
        </p>

        <strong style={{ marginTop: '15px' }}>
          Why Mutual Funds Are a Smart Choice During Inflation
        </strong>
        <p style={{ fontSize: '12pt', marginTop: '15px' }}>
          • <strong>Professional Management:</strong> Expert fund managers
          optimize returns
          <br />• <strong>Diversification:</strong> Spreading investments
          reduces risk exposure
          <br />• <strong>Flexibility:</strong> Caters to different risk
          appetites and goals
          <br />• <strong>Liquidity:</strong> Easy access to funds when needed
        </p>

        <strong style={{ marginTop: '15px' }}>Conclusion</strong>
        <p style={{ fontSize: '12pt', marginTop: '15px' }}>
          Inflation is inevitable, but its impact can be managed with the right
          investment strategy. Mutual funds, especially equity and hybrid funds,
          provide an effective hedge against inflation while offering long-term
          growth potential.
          <br />
          <br />
          Disclaimer: This blog is for educational purposes only and should not
          be considered financial advice. Mutual Fund investments are subject to
          market risks. Please read all scheme-related documents carefully
          before investing.
        </p>
      </div>
    </div>
  );
};

export default PortPage35;
