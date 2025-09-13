import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, TrendingDown, Target, AlertCircle, Plus, Wallet, CreditCard, PiggyBank } from 'lucide-react';

// Mock data for the dashboard
const monthlySpending = [
  { month: 'Jan', spending: 1200, budget: 1500 },
  { month: 'Feb', spending: 980, budget: 1500 },
  { month: 'Mar', spending: 1450, budget: 1500 },
  { month: 'Apr', spending: 1320, budget: 1500 },
  { month: 'May', spending: 1680, budget: 1500 },
  { month: 'Jun', spending: 1200, budget: 1500 },
];

const categoryData = [
  { name: 'Food', value: 450, color: 'hsl(var(--category-food))' },
  { name: 'Transport', value: 280, color: 'hsl(var(--category-transport))' },
  { name: 'Entertainment', value: 200, color: 'hsl(var(--category-entertainment))' },
  { name: 'Education', value: 350, color: 'hsl(var(--category-education))' },
  { name: 'Shopping', value: 180, color: 'hsl(var(--category-shopping))' },
  { name: 'Health', value: 120, color: 'hsl(var(--category-health))' },
];

const recentTransactions = [
  { id: 1, description: 'Grocery Store', amount: -65.40, category: 'Food', date: '2024-01-15' },
  { id: 2, description: 'Bus Pass', amount: -45.00, category: 'Transport', date: '2024-01-14' },
  { id: 3, description: 'Part-time Job', amount: 320.00, category: 'Income', date: '2024-01-14' },
  { id: 4, description: 'Coffee Shop', amount: -12.50, category: 'Food', date: '2024-01-13' },
  { id: 5, description: 'Movie Tickets', amount: -24.00, category: 'Entertainment', date: '2024-01-12' },
];

const goals = [
  { id: 1, name: 'Emergency Fund', current: 850, target: 2000, color: 'success' },
  { id: 2, name: 'New Laptop', current: 320, target: 1200, color: 'info' },
  { id: 3, name: 'Spring Break Trip', current: 150, target: 800, color: 'warning' },
];

const FinanceDashboard = () => {
  const totalBalance = 2450.75;
  const monthlyBudget = 1500;
  const currentSpending = 1320;
  const remainingBudget = monthlyBudget - currentSpending;

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Food: 'category-food',
      Transport: 'category-transport',
      Entertainment: 'category-entertainment',
      Education: 'category-education',
      Shopping: 'category-shopping',
      Health: 'category-health',
      Income: 'success',
    };
    return colors[category] || 'muted';
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Finance Dashboard
            </h1>
            <p className="text-muted-foreground">Manage your student finances with AI insights</p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" />
            Add Expense
          </Button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
              <Wallet className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">${totalBalance.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline w-3 h-3 mr-1" />
                +2.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Spent</CardTitle>
              <CreditCard className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${currentSpending}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingDown className="inline w-3 h-3 mr-1" />
                12% under budget
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Budget Remaining</CardTitle>
              <PiggyBank className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">${remainingBudget}</div>
              <Progress value={(remainingBudget / monthlyBudget) * 100} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Spending Trends */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle>Spending Trends</CardTitle>
              <CardDescription>Monthly spending vs budget comparison</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlySpending}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="budget" fill="hsl(var(--muted))" name="Budget" />
                  <Bar dataKey="spending" fill="hsl(var(--primary))" name="Spending" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Breakdown */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle>Expense Categories</CardTitle>
              <CardDescription>AI-categorized spending breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {categoryData.map((category) => (
                  <div key={category.name} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-sm text-muted-foreground">{category.name}</span>
                    <span className="text-sm font-medium">${category.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Goals and Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Financial Goals */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-accent" />
                Financial Goals
              </CardTitle>
              <CardDescription>Track your savings progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {goals.map((goal) => {
                const progress = (goal.current / goal.target) * 100;
                const colorClass = goal.color === 'success' ? 'text-success' : 
                                 goal.color === 'info' ? 'text-info' : 'text-warning';
                
                return (
                  <div key={goal.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{goal.name}</span>
                      <span className={`text-sm font-bold ${colorClass}`}>
                        ${goal.current} / ${goal.target}
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {progress.toFixed(1)}% complete • ${goal.target - goal.current} remaining
                    </p>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Latest spending activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-${getCategoryColor(transaction.category)}`} />
                      <div>
                        <p className="font-medium text-sm">{transaction.description}</p>
                        <p className="text-xs text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {transaction.category}
                      </Badge>
                      <span className={`font-bold ${
                        transaction.amount > 0 ? 'text-success' : 'text-destructive'
                      }`}>
                        {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Budget Alerts */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center text-warning">
              <AlertCircle className="w-5 h-5 mr-2" />
              Smart Alerts
            </CardTitle>
            <CardDescription>AI-powered spending insights and warnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-warning/10 border border-warning/20">
                <AlertCircle className="w-4 h-4 text-warning mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Food spending trending high</p>
                  <p className="text-xs text-muted-foreground">
                    You've spent 15% more on food this month compared to your average
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-success/10 border border-success/20">
                <TrendingUp className="w-4 h-4 text-success mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Great savings progress!</p>
                  <p className="text-xs text-muted-foreground">
                    You're 42% closer to your emergency fund goal this month
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinanceDashboard;