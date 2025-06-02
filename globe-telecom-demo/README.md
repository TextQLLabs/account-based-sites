# Globe Telecom CLTV Command Center Demo Datasets

## Overview
This dataset collection simulates Globe Telecom's intelligent data agent scenario for Customer Lifetime Value (CLTV) management. The data enables demonstration of real-time insights and strategic recommendations for high-value customer retention.

## Dataset Files

### 1. `high_value_customers.csv`
**Core customer data for the CLTV command center scenario**
- 50 high-value customers with 20%+ data usage reduction in 30 days
- Key fields: customer_id, tenure, revenue, usage patterns, churn probability, CLTV
- Supports the executive query: "Show me our top 10% revenue-generating customers who've reduced their data usage by more than 20%"

### 2. `network_coverage_performance.csv`
**Network infrastructure and performance data**
- Coverage gaps and performance issues affecting high-value customers
- Key fields: location coordinates, signal strength, network issues, competitor presence
- Enables correlation between network quality and customer behavior

### 3. `competitor_analysis.csv`
**Real-time competitive intelligence**
- 50 areas with active DITO and Smart campaigns
- Key fields: campaign type, intensity, target segments, Globe customers affected
- Supports threat assessment and response prioritization

### 4. `customer_transactions.csv`
**Customer transaction patterns and cross-sell opportunities**
- Payment behavior, GCash usage, family network analysis
- Key fields: transaction history, payment methods, family member competitors, cross-sell opportunities
- Enables personalized retention offer recommendations

### 5. `retention_campaign_performance.csv`
**Historical campaign performance for AI recommendations**
- 30 different retention campaigns with performance metrics
- Key fields: campaign type, response rates, A/B test results, revenue impact
- Powers predictive recommendations for optimal retention strategies

## Demo Scenario Instructions

### Executive Query Simulation
Use these datasets to demonstrate how an AI agent would respond to:
**"Show me our top 10% revenue-generating customers who've reduced their data usage by more than 20% in the last 30 days"**

### Expected AI Agent Analysis
1. **Customer Identification**: Filter high_value_customers.csv for top revenue + usage reduction
2. **Network Correlation**: Cross-reference with network_coverage_performance.csv for coverage issues
3. **Competitive Threat**: Check competitor_analysis.csv for campaign activity in customer locations
4. **Retention Strategy**: Use retention_campaign_performance.csv to recommend optimal interventions
5. **Revenue Impact**: Calculate potential CLTV uplift from successful retention

### Key Business Insights to Highlight
- **₱2.8 billion** in annual revenue at risk from identified cohort
- **31% average save rate** for data allocation increase campaigns
- **4.3% CLTV uplift** achievable with 72-hour response time
- **67% response rate** for high-value customer data boost offers

### Follow-up Queries for Deep Dive
1. "What personalized retention offers would be most effective for this segment?"
2. "Which areas need immediate network attention to prevent churn?"
3. "How do competitor campaigns correlate with our customer behavior changes?"
4. "What's the ROI forecast for implementing these retention strategies?"

## Data Relationships
- `customer_id` links high_value_customers.csv ↔ customer_transactions.csv
- `latitude/longitude` coordinates link customers to network coverage areas
- Geographic areas in competitor_analysis.csv align with customer locations
- Campaign performance data provides historical context for recommendations

## Business Value Demonstration
This dataset showcases how Globe Telecom can:
- Reduce time-to-insight from days to minutes
- Increase CLTV by 15-20% through proactive retention
- Optimize capital allocation using data-driven insights
- Accelerate techco transformation with real-time intelligence

Perfect for demonstrating the competitive advantage of intelligent data agents in the Philippine telecom market.