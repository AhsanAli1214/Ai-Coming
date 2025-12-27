import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Privacy() {
  return (
    <div className="container mx-auto py-12 px-6 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Privacy Policy</CardTitle>
          <p className="text-muted-foreground">Last updated: December 2025</p>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h3>1. Our Privacy Commitment</h3>
          <p>
            At Ahsan AI Hub, your privacy is our top priority. We've built this platform with a 
            "Privacy-First" architecture. This means we avoid collecting your personal information 
            wherever possible.
          </p>

          <h3>2. Data Storage</h3>
          <p>
            <strong>Local Storage:</strong> Your chat history, personality settings, and theme 
            preferences are stored exclusively on your device using browser local storage or 
            IndexedDB. This data never leaves your device unless you choose to export it.
          </p>
          <p>
            <strong>No Server Storage:</strong> We do not store your chat logs or personal inputs 
            on our servers. Once your session ends or you clear your history, that data is 
            permanently removed from your device.
          </p>

          <h3>3. AI Processing</h3>
          <p>
            When you interact with our AI tools, your prompts are sent to Google's Gemini API 
            for processing. This is necessary to generate responses. We do not associate these 
            prompts with any personally identifiable information.
          </p>

          <h3>4. Third-Party Services</h3>
          <p>
            We use OneSignal for push notifications and Tawk.to for support tickets. These services 
            have their own privacy policies. You can choose not to use these features if you 
            prefer.
          </p>

          <h3>5. Your Rights</h3>
          <p>
            Since your data is stored locally, you have full control over it. You can:
          </p>
          <ul>
            <li>View your data at any time in the History page.</li>
            <li>Delete individual conversations or clear all data in Settings.</li>
            <li>Export your data for your own records.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
