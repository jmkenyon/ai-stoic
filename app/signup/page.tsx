import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const Page = () => {
  return (
    <section className="flex flex-col h-screen bg-primary text-white justify-center items-center">
      <div className="min-w-md">
        <form>
          <FieldGroup className="flex flex-col">
            <FieldSet className="">
              <FieldLegend className="font-bold text-center">Sign up</FieldLegend>
              <FieldDescription className="font-bold text-center">
                Join the 1000s bettering themselves with Stoic AI
              </FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    type="email"
                    id="email"
                    placeholder="e.g. johndoe@email.com"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input type="password" id="password" required />
                </Field>
              </FieldGroup>
            </FieldSet>
            <Field orientation="horizontal" className="justify-center">
              <Button variant={"outline"} type="submit">
                Sign up
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </section>
  );
};

export default Page;
