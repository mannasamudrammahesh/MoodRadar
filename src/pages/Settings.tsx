import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Settings as SettingsIcon, 
  Slack, 
  Key, 
  Brain, 
  Bell, 
  Shield, 
  Save,
  Upload,
  AlertTriangle,
  Eye,
  EyeOff
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [showSlackSecret, setShowSlackSecret] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Settings saved",
        description: "Your configuration has been updated successfully.",
      });
    }, 1500);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast({
        title: "File uploaded",
        description: `${file.name} has been uploaded successfully.`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <SettingsIcon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">Configure your Slack Sentiment Watchdog</p>
          </div>
        </div>

        <Tabs defaultValue="integrations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="ai">AI Models</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>

          {/* Integrations Tab */}
          <TabsContent value="integrations" className="space-y-6">
            {/* Slack Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Slack className="h-5 w-5 text-[#4A154B]" />
                  Slack Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="slack-token">Bot Token</Label>
                    <div className="relative">
                      <Input
                        id="slack-token"
                        type={showSlackSecret ? "text" : "password"}
                        placeholder="xoxb-your-bot-token"
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowSlackSecret(!showSlackSecret)}
                      >
                        {showSlackSecret ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Get this from your Slack app's OAuth & Permissions page
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="slack-secret">Signing Secret</Label>
                    <Input
                      id="slack-secret"
                      type="password"
                      placeholder="Your signing secret"
                    />
                    <p className="text-xs text-muted-foreground">
                      Found in your Slack app's Basic Information page
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slack-channels">Monitored Channels</Label>
                  <Textarea
                    id="slack-channels"
                    placeholder="#customer-support, #billing-help, #general-support"
                    className="min-h-[80px]"
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter channel names separated by commas. Use # for public channels.
                  </p>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium">Connection Status</div>
                    <div className="text-sm text-muted-foreground">
                      Your Slack workspace integration status
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    Connected
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Firebase Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-orange-500" />
                  Firebase Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="firebase-config">Service Account JSON</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="firebase-config"
                      type="file"
                      accept=".json"
                      onChange={handleFileUpload}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-primary file:text-primary-foreground"
                    />
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Upload your Firebase service account JSON file for secure data storage
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firebase-project">Project ID</Label>
                    <Input
                      id="firebase-project"
                      placeholder="your-firebase-project-id"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firebase-region">Region</Label>
                    <Select defaultValue="us-central1">
                      <SelectTrigger>
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us-central1">US Central (Iowa)</SelectItem>
                        <SelectItem value="us-east1">US East (South Carolina)</SelectItem>
                        <SelectItem value="europe-west1">Europe West (Belgium)</SelectItem>
                        <SelectItem value="asia-southeast1">Asia Southeast (Singapore)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Alerts Tab */}
          <TabsContent value="alerts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Alert Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Sentiment Thresholds</h3>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="negative-threshold">Negative Sentiment Threshold</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            id="negative-threshold"
                            type="number"
                            defaultValue="70"
                            min="0"
                            max="100"
                            className="w-20"
                          />
                          <span className="text-sm text-muted-foreground">% negative messages</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time-window">Time Window</Label>
                        <Select defaultValue="5">
                          <SelectTrigger>
                            <SelectValue placeholder="Select time window" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 minute</SelectItem>
                            <SelectItem value="5">5 minutes</SelectItem>
                            <SelectItem value="10">10 minutes</SelectItem>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="60">1 hour</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="min-messages">Minimum Messages</Label>
                        <Input
                          id="min-messages"
                          type="number"
                          defaultValue="3"
                          min="1"
                          className="w-20"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Notification Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Email Alerts</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive email notifications for high-priority alerts
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Slack Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Send alerts to a designated Slack channel
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Real-time Dashboard</Label>
                          <p className="text-sm text-muted-foreground">
                            Show live alerts in the dashboard
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="alert-channel">Alert Channel</Label>
                  <Input
                    id="alert-channel"
                    placeholder="#sentiment-alerts"
                    defaultValue="#sentiment-alerts"
                  />
                  <p className="text-xs text-muted-foreground">
                    Slack channel where alerts will be sent
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Models Tab */}
          <TabsContent value="ai" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI Model Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="primary-model">Primary AI Model</Label>
                    <Select defaultValue="gemini">
                      <SelectTrigger>
                        <SelectValue placeholder="Select AI model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gemini">Gemini 2.0 Flash (Recommended)</SelectItem>
                        <SelectItem value="gpt4o">OpenAI GPT-4o</SelectItem>
                        <SelectItem value="claude">Anthropic Claude</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <div className="relative">
                      <Input
                        id="api-key"
                        type={showApiKey ? "text" : "password"}
                        placeholder="Enter your API key"
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowApiKey(!showApiKey)}
                      >
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Get your API key from Google AI Studio or OpenAI dashboard
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fallback-model">Fallback Model</Label>
                    <Select defaultValue="gpt4o">
                      <SelectTrigger>
                        <SelectValue placeholder="Select fallback model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="gpt4o">OpenAI GPT-4o</SelectItem>
                        <SelectItem value="claude">Anthropic Claude</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Analysis Settings</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="confidence-threshold">Confidence Threshold</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          id="confidence-threshold"
                          type="number"
                          defaultValue="0.8"
                          min="0"
                          max="1"
                          step="0.1"
                          className="w-20"
                        />
                        <span className="text-sm text-muted-foreground">(0.0 - 1.0)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="batch-size">Batch Processing Size</Label>
                      <Select defaultValue="10">
                        <SelectTrigger>
                          <SelectValue placeholder="Select batch size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 message</SelectItem>
                          <SelectItem value="5">5 messages</SelectItem>
                          <SelectItem value="10">10 messages</SelectItem>
                          <SelectItem value="25">25 messages</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Privacy & Data Handling
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Store Message Metadata</Label>
                      <p className="text-sm text-muted-foreground">
                        Store timestamps, user IDs, and channel information
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Historical Data Retention</Label>
                      <p className="text-sm text-muted-foreground">
                        Keep sentiment analysis results for trending
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Anonymous Analytics</Label>
                      <p className="text-sm text-muted-foreground">
                        Help improve our models with anonymous usage data
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Data Retention Settings</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="retention-period">Sentiment Data Retention</Label>
                      <Select defaultValue="90">
                        <SelectTrigger>
                          <SelectValue placeholder="Select retention period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="7">7 days</SelectItem>
                          <SelectItem value="30">30 days</SelectItem>
                          <SelectItem value="90">90 days</SelectItem>
                          <SelectItem value="365">1 year</SelectItem>
                          <SelectItem value="unlimited">Unlimited</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="alert-retention">Alert History Retention</Label>
                      <Select defaultValue="365">
                        <SelectTrigger>
                          <SelectValue placeholder="Select retention period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 days</SelectItem>
                          <SelectItem value="90">90 days</SelectItem>
                          <SelectItem value="365">1 year</SelectItem>
                          <SelectItem value="unlimited">Unlimited</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-medium">Privacy Commitment</p>
                      <p className="text-sm text-muted-foreground">
                        We never store the actual content of your messages. Only sentiment scores, 
                        metadata, and statistical information are retained according to your settings.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button 
            onClick={handleSave} 
            disabled={isLoading}
            className="bg-gradient-hero hover:opacity-90"
          >
            {isLoading ? "Saving..." : "Save Configuration"}
            <Save className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;