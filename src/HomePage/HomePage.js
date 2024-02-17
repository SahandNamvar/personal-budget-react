import React from 'react';

function HomePage() {
  return (
    <main className="container center">

    <section className="page-area">

        <article className="text-box">
            <h1>Income and Expenses</h1>
            <p>
                Understand your sources of income and categorize your expenses. This includes fixed costs like rent or mortgage payments, utilities, and groceries, as well as variable costs like entertainment, dining out, and discretionary spending. Having a clear picture of your financial inflows and outflows is the foundation of effective budgeting.</p>
        </article>

        <article className="text-box">
            <h1>Emergency Fund</h1>
            <p>
                Building and maintaining an emergency fund is a fundamental part of personal budgeting. Aim to set aside three to six months' worth of living expenses in case of unexpected events such as job loss, medical emergencies, or unforeseen expenses. An emergency fund provides a financial safety net and helps prevent the need to rely on credit in times of crisis.</p>
            </article>

        <article className="text-box">
            <h1>Savings and Investments</h1>
            <p>
                Allocate a portion of your budget to savings and investments. This can include contributions to a retirement account, a dedicated savings account for specific goals (e.g., buying a home or taking a vacation), and investments in assets such as stocks or bonds. Consistent saving and investing can lead to long-term financial stability and growth.</p>
        </article>

        <article className="text-box">
            <h1>Budget Tracking</h1>
            <p>
                Regularly track your spending and compare it to your budget. Use tools, apps, or spreadsheets to monitor your financial transactions. Periodically review your budget and make adjustments as needed. Life circumstances and financial goals change, so your budget should be flexible and adaptable to reflect these changes.</p>
        </article>

        <article className="text-box">
            <h1>Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </article>

        <article className="text-box">
            <h1>Knowledge is Power</h1>
            <p>
                Become a financial ninja! Many apps offer educational resources and insights, helping you understand financial concepts, make informed decisions, and avoid money traps. Learn and earn, one swipe at a time.                </p>
        </article>

        <article className="text-box">
            <h1>Financial Goals</h1>
            <p>
                Define short-term and long-term financial goals as part of your budgeting process. Whether it's saving for a down payment on a house, paying off student loans, or planning for retirement, having specific and measurable goals provides motivation and direction for your budget. Adjust your budget to align with your financial priorities.</p>
        </article>

        <article className="text-box">
            <h1>Decision Making Skills</h1>
            <p>
                Financial knowledge and decision-making skills help people make informed financial decisions through problem-solving, critical thinking, and an understanding of key financial facts and concepts. Financial knowledge and decision-making skills help people make informed financial decisions through problem-solving, critical thinking, and an understanding of key financial facts and concepts.
            </p>
        </article>
        
        {/* Pie Chart from ChartJS */}
        <article className="graph-box">
            <h1 className="center">Budget Chart</h1>
            <p><canvas id="myChart" width="400" height="400"></canvas></p>
        </article>

        {/* Donut Chart from D3JS*/}
        <article className="graph-box">
            <h1 className="center">Budget Donut Chart</h1>
            <div id="donutChart"></div>
            <div><p id="center-text"></p></div>
        </article>
    </section>

    </main>
  );
}

export default HomePage;
