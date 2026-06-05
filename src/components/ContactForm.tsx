import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Field } from "@components/Field";
import Input, { inputClass } from "@components/Input";
import Button from "@components/Button";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<"idle" | "success" | "error">("idle");

  function onSubmit(data: FormValues) {
    startTransition(async () => {
      try {
        const res = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            "form-name": "contact",
            ...data,
          }).toString(),
        });
        if (!res.ok) throw new Error();
        setResult("success");
        reset();
      } catch {
        setResult("error");
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 max-w-lg"
    >
      <input type="hidden" name="form-name" value="contact" />

      <Field label="Name" error={errors.name}>
        <Input {...register("name")} type="text" />
      </Field>

      <Field label="Email" error={errors.email}>
        <Input {...register("email")} type="email" />
      </Field>

      <Field label="Message" error={errors.message}>
        <textarea
          {...register("message")}
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </Field>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Sending..." : "Send message"}
      </Button>

      {result === "success" && (
        <p className="text-sm text-green-600">Message sent!</p>
      )}
      {result === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
