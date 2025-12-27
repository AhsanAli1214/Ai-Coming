import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriberSchema } from "@shared/schema";
import { useCreateSubscriber } from "@/hooks/use-subscriber";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, ArrowRight } from "lucide-react";

export function EmailForm() {
  const { mutate, isPending } = useCreateSubscriber();
  const [success, setSuccess] = useState(false);
  
  const form = useForm({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: { email: string }) => {
    mutate(data, {
      onSuccess: () => {
        setSuccess(true);
        form.reset();
      },
    });
  };

  if (success) {
    return (
      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center animate-in fade-in zoom-in duration-300">
        <p className="text-green-400 font-semibold text-lg">You're in! 🎉</p>
        <p className="text-green-400/80 text-sm mt-1">Watch your inbox for updates.</p>
        <Button 
          variant="link" 
          onClick={() => setSuccess(false)}
          className="text-green-400 hover:text-green-300 mt-2 h-auto p-0"
        >
          Register another email
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="relative max-w-md w-full mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <Input
            {...form.register("email")}
            placeholder="Enter your email address"
            type="email"
            disabled={isPending}
            className="h-12 pl-4 pr-4 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-primary/20 rounded-xl transition-all"
          />
          {form.formState.errors.email && (
            <span className="absolute -bottom-6 left-2 text-xs text-destructive animate-pulse">
              {form.formState.errors.email.message}
            </span>
          )}
        </div>
        
        <Button 
          type="submit" 
          disabled={isPending}
          className="h-12 px-8 rounded-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Joining...
            </>
          ) : (
            <>
              Notify Me <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-3 text-center sm:text-left ml-1">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
