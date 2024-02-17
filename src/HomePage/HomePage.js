import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';
import * as d3 from 'd3';
import axios from 'axios';

function HomePage() {
    const [budgetData, setBudgetData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/budget');
                console.log('Response: ', response);
                setBudgetData(response.data.myBudget);
            } catch (error) {
                console.error('Error fetching budget data 2:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (budgetData) {
            // Extract data for the ChartJS chart
            const labels = budgetData.map(item => item.title);
            const values = budgetData.map(item => item.budget);

            // Create the ChartJS pie chart
            const ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        data: values,
                        backgroundColor: ['#2020d4', '#23d420', '#d42020', '#cbd420', '#7720d4',
                            '#ce20d4', '#20d49e', '#20d4bf', '#d42089', '#d4b020'
                        ],
                    }]
                }
            });

            // Extract data for the D3.js chart
            const data = values;

            // Check if the D3JS chart already exists before rendering
            if (!document.getElementById('donutChart').getElementsByTagName('svg').length) {
                // Create the donut chart using D3.js
                const width = 400;
                const height = 400;
                const radius = Math.min(width, height) / 2;
                const color = d3.scaleOrdinal().range([
                    '#2020d4', '#23d420', '#d42020', '#cbd420', '#7720d4',
                    '#ce20d4', '#20d49e', '#20d4bf', '#d42089', '#d4b020'
                ]);

                const svg = d3.select('#donutChart')
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height)
                    .append('g')
                    .attr('transform', `translate(${width / 2},${height / 2})`);

                const arc = d3.arc()
                    .innerRadius(radius * 0.5)
                    .outerRadius(radius * 0.8);

                const pie = d3.pie()
                    .value(d => d)
                    .sort(null);

                const arcs = svg.selectAll('arc')
                    .data(pie(data))
                    .enter()
                    .append('g')
                    .attr('class', 'arc');

                arcs.append('path')
                    .attr('d', arc)
                    .attr('fill', (d, i) => color(i));
            }
        }
    }, [budgetData]);

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
        </article>
    </section>

    </main>
  );
}

export default HomePage;
