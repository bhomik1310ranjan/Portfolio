import GradientHeading from "../components/GradientHeading";
import DescriptionContainer from "../components/DescriptionContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

function Contact() {
    const [loading, setLoading] = useState<boolean>(false);

    const formSchema = z.object({
        name: z
            .string()
            .min(3, { message: "Your name must be atleast 3 characters long" })
            .max(32, { message: "Your name cannot exceed 32 characters" }),
        email: z.string().email({ message: "Enter a valid email address" }),
        mobile: z.string().regex(/^[0-9]{10}$/, {
            message: "Enter a valid 10 digit mobile number",
        }),
        message: z
            .string()
            .min(2, {
                message: "Your message must be atleast 3 characters long",
            })
            .max(2000, {
                message: "Your message cannot exceed 2000 characters",
            }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            mobile: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setLoading(true);
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_CONTACT_FORM_ACCESS_KEY,
                    ...values,
                }),
            });
            const result = await response.json();
            if (result.success) {
                toast("Your message has been sent successfully!");
            } else {
                throw new Error("Error occurred while sending message");
            }
        } catch (error) {
            console.error(error);
            toast("There was an error sending your message. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-11/12 max-w-7xl mx-auto flex flex-col items-center gap-y-5 pt-28 pb-6">
            <GradientHeading heading="Contact" />
            <DescriptionContainer description="🌟 Feel free to reach out if you have any questions or opportunities to discuss! 📬 I'm always thrilled to connect and explore new possibilities! ✨ Let's create something incredible together! 🚀 Your message will be warmly welcomed and promptly responded to! 📩" />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full sm:w-3/4 max-w-3xl space-y-4 bg-card/70 border rounded-xl shadow p-4 sm:p-6"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="tracking-wider">
                                    Name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your name"
                                        {...field}
                                    />
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
                                <FormLabel className="tracking-wider">
                                    Email address
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your email address"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="tracking-wider">
                                    Mobile number
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your mobile number"
                                        {...field}
                                    />
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
                                <FormLabel className="tracking-wider">
                                    Your message
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Enter your message"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={loading} className="w-full">
                        {loading ? (
                            <div className="flex items-center gap-x-2">
                                <LoaderCircle
                                    width={14}
                                    className="animate-spin"
                                />
                                <span className="tracking-wider">Sending</span>
                            </div>
                        ) : (
                            <div className="tracking-wider">Send</div>
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    );
}

export default Contact;
