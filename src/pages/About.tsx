import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Shield, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  Bot,
  CheckCircle,
  Slack,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const technologies = [
    {
      name: "Slack API",
      description: "Real-time message monitoring and integration",
      icon: Slack
    },
    {
      name: "Gemini 2.0 Flash",
      description: "Advanced sentiment analysis with Google's latest AI",
      icon: Brain
    },
    {
      name: "GPT-4o",
      description: "Backup AI model for comprehensive analysis",
      icon: Bot
    },
    {
      name: "Firebase",
      description: "Secure cloud infrastructure and real-time database",
      icon: Zap
    }
  ];

  const features = [
    "Real-time sentiment analysis of all monitored channels",
    "Configurable alert thresholds and notification preferences",
    "Historical trend analysis and reporting",
    "Multi-channel monitoring with team management",
    "Privacy-first approach - no message content stored",
    "Advanced filtering and categorization options",
    "Integration with existing workflow tools",
    "24/7 automated monitoring and alerting"
  ];

  const useCases = [
    {
      title: "Customer Support Teams",
      description: "Monitor support channels to identify frustrated customers quickly and improve response times.",
      icon: MessageSquare
    },
    {
      title: "Product Teams",
      description: "Track user sentiment about new features and product changes across feedback channels.",
      icon: TrendingUp
    },
    {
      title: "Sales Teams",
      description: "Identify potential churn signals and opportunities for upselling based on client sentiment.",
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background to-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            <Bot className="mr-1 h-3 w-3" />
            About the AI Agent
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            How <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Slack Sentiment Watchdog
            </span> Works
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our AI agent continuously monitors your Slack channels, analyzing sentiment in real-time 
            to help your team stay ahead of customer satisfaction issues and respond proactively.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Technology Behind the Magic</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powered by cutting-edge AI and built with privacy and security in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Process Flow */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-center text-2xl">How Our AI Agent Processes Your Data</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                      1
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Monitor</h4>
                  <p className="text-sm text-muted-foreground">
                    Connect to your Slack workspace and monitor specified channels in real-time.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                      2
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Analyze</h4>
                  <p className="text-sm text-muted-foreground">
                    Process messages through Gemini 2.0 Flash for accurate sentiment analysis.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                      3
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Detect</h4>
                  <p className="text-sm text-muted-foreground">
                    Identify sentiment spikes and patterns using configurable thresholds.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                      4
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Alert</h4>
                  <p className="text-sm text-muted-foreground">
                    Send instant notifications to your team when intervention is needed.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Feature Set</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Everything you need to monitor, analyze, and respond to sentiment changes in your Slack workspace.
              </p>
              <div className="grid gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <Card key={index} className="group hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                          <p className="text-muted-foreground">{useCase.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Privacy & Security First</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We take your privacy seriously. Our AI agent analyzes sentiment without storing message content.
            </p>
          </div>
          <Card className="text-left">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">What We Process</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Message timestamps</li>
                    <li>• Sentiment scores and classifications</li>
                    <li>• Channel and user metadata</li>
                    <li>• Trend and pattern data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">What We Never Store</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Original message content</li>
                    <li>• Personal user information</li>
                    <li>• Sensitive business data</li>
                    <li>• Conversation history</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Monitoring?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Set up your Slack Sentiment Watchdog in minutes and start improving customer satisfaction today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link to="/auth">
                <Slack className="mr-2 h-5 w-5" />
                Add to Slack
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white/20 text-white hover:bg-white/10" asChild>
              <Link to="/dashboard">
                View Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;