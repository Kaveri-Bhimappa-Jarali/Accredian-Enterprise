"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { leadSchema, type LeadInput } from "@/lib/validations/lead";
import { Button } from "@/components/ui/Button";

export function LeadCaptureForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadInput) => {
    try {
      setServerError("");
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong");
      }

      setIsSuccess(true);
      reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      if (error instanceof Error) {
        setServerError(error.message);
      } else {
        setServerError("Failed to submit form. Please try again.");
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-background p-8 rounded-2xl shadow-xl border border-border">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2">Request a Demo</h3>
        <p className="text-sm text-muted-foreground">
          See how Accredian Enterprise can transform your workforce.
        </p>
      </div>

      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-300">
          <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
          <p className="text-muted-foreground text-sm">
            Your request has been received. Our enterprise team will contact you shortly.
          </p>
          <Button 
            variant="outline" 
            className="mt-6 w-full"
            onClick={() => setIsSuccess(false)}
          >
            Submit Another Request
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {serverError && (
            <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-950/50 rounded-md border border-red-200 dark:border-red-900">
              {serverError}
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Full Name *
            </label>
            <input
              id="name"
              {...register("name")}
              className="w-full px-3 py-2 border border-border rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Work Email *
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full px-3 py-2 border border-border rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
              placeholder="john@company.com"
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-foreground">
                Company Name *
              </label>
              <input
                id="company"
                {...register("company")}
                className="w-full px-3 py-2 border border-border rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                placeholder="Acme Corp"
              />
              {errors.company && <p className="text-xs text-red-500">{errors.company.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className="w-full px-3 py-2 border border-border rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                placeholder="+1 (555) 000-0000"
              />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="employees" className="text-sm font-medium text-foreground">
              Company Size *
            </label>
            <select
              id="employees"
              {...register("employees")}
              className="w-full px-3 py-2 border border-border rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm appearance-none"
            >
              <option value="" disabled>Select company size</option>
              <option value="1-50">1-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501-1000">501-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>
            {errors.employees && <p className="text-xs text-red-500">{errors.employees.message}</p>}
          </div>

          <Button type="submit" className="w-full mt-6" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Request"
            )}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground mt-4">
            By submitting, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      )}
    </div>
  );
}
