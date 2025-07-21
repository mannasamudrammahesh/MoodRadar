import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, MessageSquare, TrendingUp, Shield, Zap, Bell, ArrowRight, Slack } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sentiment-dashboard.jpg";

const Home = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Real-time Monitoring",
      description: "Monitor all your Slack channels for customer sentiment in real-time using advanced AI analysis."
    },
    {
      icon: TrendingUp,
      title: "Sentiment Analytics",
      description: "Get detailed insights with charts and trends to understand your team's performance over time."
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Receive instant notifications when negative sentiment spikes or patterns emerge."
    },
    {
      icon: Bot,
      title: "AI-Powered",
      description: "Powered by Gemini 2.0 Flash and GPT-4o for accurate sentiment analysis and insights."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your messages stay private. We only analyze sentiment metadata, never store content."
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get started in minutes with our simple Slack integration and automated configuration."
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "< 200ms", label: "Response Time" },
    { value: "50K+", label: "Messages Analyzed" },
    { value: "24/7", label: "Monitoring" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-4">
                <Bot className="mr-1 h-3 w-3" />
                AI-Powered Sentiment Analysis
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Slack Sentiment
                </span>
                <br />
                Watchdog
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Keep your finger on the pulse of customer support with real-time sentiment analysis. 
                Get alerted when negative sentiment spikes and improve your team's response time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-hero hover:opacity-90 text-lg px-8" asChild>
                  <Link to="/auth">
                    <Slack className="mr-2 h-5 w-5" />
                    Add to Slack
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link to="/dashboard">
                    View Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Slack Sentiment Analysis Dashboard"
                  className="rounded-2xl shadow-2xl border border-border/50"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need to monitor sentiment
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform provides comprehensive sentiment analysis 
              and alerting for your Slack support channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to improve your support sentiment?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join teams already using Slack Sentiment Watchdog to monitor and improve customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link to="/auth">
                <Slack className="mr-2 h-5 w-5" />
                Add to Slack
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white/20 text-white hover:bg-white/10" asChild>
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;