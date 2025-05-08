
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not exceed 500 characters.",
  }),
})

export function ContactSection() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate form submission
    console.log(values)
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
      variant: "default", 
    })
    form.reset()
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-background p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send Us a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can we help you?" className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
          <div className="bg-background p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
            <p className="text-muted-foreground mb-6">
              Have questions or ready to start your fitness journey? Reach out to us!
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span>123 Fitness Ave, Vitality City, VC 45678</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">(123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:info@fitzafitness.com" className="hover:text-accent transition-colors">info@fitzafitness.com</a>
              </li>
            </ul>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81956131476983!3d-6.19442009551209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43a0f3c7b6f%3A0x9c1f3e4e0ed944f5!2sNational%20Monument%20(Monas)!5e0!3m2!1sen!2sid!4v1622712109000!5m2!1sen!2sid"
                width="100%"
                height="250"
                style={{ border:0 }}
                loading="lazy"
                title="Gym Location"
                className="rounded-md shadow-md"
                data-ai-hint="city map"
              ></iframe>
            </div>
            <div className="text-center mt-6">
              <Button variant="link" className="text-accent" asChild>
                <Link href="/contact-details">View More Contact Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
