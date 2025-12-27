import { useMutation } from "@tanstack/react-query";
import { api, type InsertSubscriber } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

export function useCreateSubscriber() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertSubscriber) => {
      // Validate locally first (good practice)
      const validated = api.subscribe.create.input.parse(data);
      
      const res = await fetch(api.subscribe.create.path, {
        method: api.subscribe.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        // Handle specific error codes defined in routes
        if (res.status === 400) {
          const error = api.subscribe.create.responses[400].parse(await res.json());
          throw new Error(error.message || "Invalid email address");
        }
        if (res.status === 409) {
          const error = api.subscribe.create.responses[409].parse(await res.json());
          throw new Error(error.message || "You are already subscribed!");
        }
        if (res.status === 500) {
          throw new Error("Something went wrong on our end. Please try again.");
        }
        throw new Error("Failed to subscribe");
      }

      return api.subscribe.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "You're on the list! 🚀",
        description: "Thanks for joining Ahsan AI Hub. We'll verify your spot shortly.",
        variant: "default",
        className: "bg-primary text-primary-foreground border-primary/20"
      });
    },
    onError: (error) => {
      toast({
        title: "Could not subscribe",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
