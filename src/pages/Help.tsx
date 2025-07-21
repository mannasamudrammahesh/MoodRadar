import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  HelpCircle, 
  MessageSquare, 
  Mail, 
  Book, 
  ExternalLink,
  Search,
  Send,
  Bot,
  Slack,
  Settings,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";

const Help = () => {
  const faqs = [
    {
      question: "How do I connect my Slack workspace?",
      answer: "Go to Settings → Integrations and enter your Slack Bot Token and Signing Secret. You can get these from your Slack app configuration in the Slack API dashboard. Make sure your bot has the necessary permissions to read messages from the channels you want to monitor."
    },
    {
      question: "What permissions does the bot need?",
      answer: "The bot needs 'channels:read', 'channels:history', and 'chat:write' permissions. It should be added to the specific channels you want to monitor. The bot only analyzes sentiment and never stores actual message content."
    },
    {
      question: "How accurate is the sentiment analysis?",
      answer: "Our AI models (Gemini 2.0 Flash and GPT-4o) achieve 90%+ accuracy on sentiment classification. The system continuously learns and improves. You can adjust confidence thresholds in Settings to balance sensitivity vs. accuracy."
    },
    {
      question: "What triggers an alert?",
      answer: "Alerts are triggered when negative sentiment exceeds your configured threshold within a specified time window. Default settings: 70% negative messages in 5 minutes with minimum 3 messages. You can customize these thresholds in Settings → Alerts."
    },
    {
      question: "Is my data secure and private?",
      answer: "Yes! We only analyze sentiment without storing message content. Only metadata (timestamps, sentiment scores, channel info) is retained. All data is encrypted and stored securely. You can configure data retention periods in Settings → Privacy."
    },
    {
      question: "Can I monitor multiple channels?",
      answer: "Absolutely! Add multiple channels in Settings → Integrations. Separate channel names with commas (e.g., #support, #billing, #help). Each channel can have different alert thresholds if needed."
    },
    {
      question: "How do I configure alert thresholds?",
      answer: "Go to Settings → Alerts to customize when you receive notifications. You can set sentiment thresholds, time windows, minimum message counts, and choose notification methods (email, Slack, dashboard)."
    },
    {
      question: "What AI models are supported?",
      answer: "We support Gemini 2.0 Flash (recommended), OpenAI GPT-4o, and Anthropic Claude. Gemini 2.0 Flash offers the best balance of speed and accuracy. Configure your preferred model in Settings → AI Models."
    }
  ];

  const quickLinks = [
    {
      title: "Getting Started Guide",
      description: "Step-by-step setup instructions",
      icon: Book,
      href: "#setup"
    },
    {
      title: "Slack Integration",
      description: "Connect your Slack workspace",
      icon: Slack,
      href: "/settings"
    },
    {
      title: "Configure Alerts",
      description: "Set up notifications and thresholds",
      icon: AlertTriangle,
      href: "/settings"
    },
    {
      title: "AI Model Settings",
      description: "Choose and configure AI models",
      icon: Bot,
      href: "/settings"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero">
              <HelpCircle className="h-7 w-7 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold">Help & Support</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get help with setup, troubleshooting, and making the most of your Slack Sentiment Watchdog
          </p>
        </div>

        {/* Search */}
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for help articles, FAQs, or guides..."
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Card key={index} className="group hover:shadow-md transition-all duration-300 cursor-pointer">
                <Link to={link.href}>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{link.title}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Contact & Resources */}
          <div className="space-y-6">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Describe your issue briefly" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your question or issue..."
                    className="min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-gradient-hero hover:opacity-90">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  We typically respond within 24 hours
                </p>
              </CardContent>
            </Card>

            {/* Setup Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Setup Guide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      1
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Create Slack App</p>
                      <p className="text-xs text-muted-foreground">
                        Create a new Slack app in your workspace
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      2
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Configure Permissions</p>
                      <p className="text-xs text-muted-foreground">
                        Add required OAuth scopes and install to workspace
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      3
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Add Credentials</p>
                      <p className="text-xs text-muted-foreground">
                        Enter bot token and signing secret in Settings
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      4
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Configure AI</p>
                      <p className="text-xs text-muted-foreground">
                        Add your AI model API key and set preferences
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Go to Settings
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-between" asChild>
                  <a href="https://api.slack.com/start/building" target="_blank" rel="noopener noreferrer">
                    Slack API Documentation
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-between" asChild>
                  <a href="https://ai.google.dev/docs" target="_blank" rel="noopener noreferrer">
                    Gemini API Guide
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-between" asChild>
                  <Link to="/about">
                    How It Works
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Status */}
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">API Status</span>
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    Operational
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">AI Models</span>
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    Available
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Slack Integration</span>
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    Connected
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;