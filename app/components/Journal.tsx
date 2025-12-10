"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CalendarPage from "./Calender";
import { cn } from "@/lib/utils";

export const Journal = () => {
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const handleDateSelect = (date: Date | undefined) => {
    setShowCalendar(false);
    setAiResponse(null);
  };

  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      input: "",
    },
  });

  useEffect(() => {
    if (aiResponse && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [aiResponse]);

  const onSubmit = async (data: FieldValues) => {
    const content = data.input;
    if (!content) {
      setAiResponse("Please submit a journal entry");
      return;
    }
    setIsLoading(true);
    setAiResponse(null);
    try {
      const res = await fetch("/api/journal", {
        method: "POST",
        body: JSON.stringify({ content }),
      });

      if (!res.ok) {
        toast.error("Something went wrong");
      }

      const data = await res.json();

      setAiResponse(data.edited);
      console.log(aiResponse);
    } catch (err) {
      console.error("Journal AI error: ", err);
      toast.error("An unexpected error occured");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section>
      <form
        className={cn("min-w-md", showCalendar ? "hidden" : "")}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FieldGroup className="flex flex-col">
          <FieldSet className="">
            <FieldLegend className="font-bold text-center">
              How was your day?
            </FieldLegend>
            <FieldDescription className="font-bold text-center">
              Discuss the positives and weaknesses of your day and stoic AI will
              provide actionable feedback.
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="input">Journal</FieldLabel>
                <Textarea
                  id="input"
                  placeholder="Type here..."
                  className="h-50 text-white"
                  required
                  {...register("input")}
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal" className="justify-center">
            {aiResponse ? (
              <Button variant={"outline"} onClick={() => setShowCalendar(true)}>
                Hide
              </Button>
            ) : (
              <Button variant={"outline"} type="submit">
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            )}
          </Field>
        </FieldGroup>
      </form>
      <div className="w-full max-w-3xl my-6">
        {aiResponse && !showCalendar && (
          <div
            ref={targetRef}
            className="
      mt-8
      w-full max-w-3xl

      border border-white/20
      bg-black/30
      p-6
      shadow-lg
      backdrop-blur
    "
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {aiResponse}
            </ReactMarkdown>
          </div>
        )}
      </div>
      <CalendarPage
        showCalendar={showCalendar}
        onDateSelect={handleDateSelect}
      />
    </section>
  );
};
