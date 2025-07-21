import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  MessageCircle, 
  Users, 
  Activity,
  Filter,
  RefreshCw,
  Download
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const Dashboard = () => {
  // Mock data for sentiment analysis
  const sentimentData = [
    { time: "09:00", positive: 85, neutral: 60, negative: 15 },
    { time: "10:00", positive: 78, neutral: 65, negative: 25 },
    { time: "11:00", positive: 92, neutral: 55, negative: 12 },
    { time: "12:00", positive: 73, neutral: 70, negative: 35 },
    { time: "13:00", positive: 68, neutral: 75, negative: 45 },
    { time: "14:00", positive: 81, neutral: 68, negative: 28 },
    { time: "15:00", positive: 89, neutral: 58, negative: 18 },
  ];

  const recentMessages = [
    {
      id: 1,
      channel: "#customer-support",
      message: "The new feature is amazing! Really improved our workflow.",
      sentiment: "positive",
      score: 0.89,
      user: "Sarah Chen",
      time: "2 min ago"
    },
    {
      id: 2,
      channel: "#billing-support",
      message: "I'm really frustrated with the billing system, it's been down for hours.",
      sentiment: "negative",
      score: -0.76,
      user: "Mike Johnson",
      time: "5 min ago"
    },
    {
      id: 3,
      channel: "#general-help",
      message: "How do I reset my password? Thanks for any help.",
      sentiment: "neutral",
      score: 0.12,
      user: "Alex Rivera",
      time: "8 min ago"
    },
    {
      id: 4,
      channel: "#customer-support",
      message: "Your team was incredibly helpful today. Thank you!",
      sentiment: "positive",
      score: 0.95,
      user: "Emma Davis",
      time: "12 min ago"
    },
  ];

  const alerts = [
    {
      id: 1,
      type: "spike",
      message: "Negative sentiment spike detected in #billing-support",
      time: "3 min ago",
      severity: "high"
    },
    {
      id: 2,
      type: "threshold",
      message: "Sentiment score dropped below 70% in #customer-support",
      time: "15 min ago",
      severity: "medium"
    },
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive": return "sentiment-positive";
      case "negative": return "sentiment-negative";
      default: return "sentiment-neutral";
    }
  };

  const getSentimentBadge = (sentiment: string, score: number) => {
    const color = getSentimentColor(sentiment);
    return (
      <Badge variant="secondary" className={`bg-${color}/10 text-${color} border-${color}/20`}>
        {sentiment} ({score > 0 ? '+' : ''}{score.toFixed(2)})
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Sentiment Dashboard</h1>
            <p className="text-muted-foreground">Real-time sentiment analysis for your Slack channels</p>
          </div>
          <div className="flex items-center gap-3">
            <Select defaultValue="all-channels">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select channel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-channels">All Channels</SelectItem>
                <SelectItem value="customer-support">#customer-support</SelectItem>
                <SelectItem value="billing-support">#billing-support</SelectItem>
                <SelectItem value="general-help">#general-help</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall Sentiment</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-sentiment-positive">78.5%</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +2.1% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Messages Today</CardTitle>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +12% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Channels</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">3 channels monitored</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">2</div>
              <p className="text-xs text-muted-foreground">
                <TrendingDown className="inline h-3 w-3 mr-1" />
                1 high priority
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Charts */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Sentiment Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="hourly" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="hourly">Last 24 Hours</TabsTrigger>
                    <TabsTrigger value="daily">Last 7 Days</TabsTrigger>
                    <TabsTrigger value="weekly">Last 4 Weeks</TabsTrigger>
                  </TabsList>
                  <TabsContent value="hourly" className="space-y-4">
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={sentimentData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="positive" 
                          stroke="hsl(var(--sentiment-positive))" 
                          strokeWidth={2}
                          name="Positive"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="neutral" 
                          stroke="hsl(var(--sentiment-neutral))" 
                          strokeWidth={2}
                          name="Neutral"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="negative" 
                          stroke="hsl(var(--sentiment-negative))" 
                          strokeWidth={2}
                          name="Negative"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Recent Messages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Recent Messages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMessages.map((msg) => (
                    <div key={msg.id} className="border-l-4 border-primary/20 pl-4 py-2">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-xs">
                              {msg.channel}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{msg.time}</span>
                          </div>
                          <p className="text-sm text-foreground mb-2 truncate">
                            "{msg.message}"
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">— {msg.user}</span>
                            {getSentimentBadge(msg.sentiment, msg.score)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Active Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {alerts.map((alert) => (
                    <div key={alert.id} className="p-3 rounded-lg border border-destructive/20 bg-destructive/5">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="destructive" className="text-xs">
                          {alert.severity}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{alert.time}</span>
                      </div>
                      <p className="text-sm">{alert.message}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Filter className="h-4 w-4 mr-2" />
                  Configure Filters
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Set Alert Thresholds
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;