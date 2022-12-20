import { ErrorSpan } from "./styles";

interface FormErrorSpanProps {
  err?: string;
}

export function FormErrorSpan(props: FormErrorSpanProps) {
  return (
    <ErrorSpan>{props.err}</ErrorSpan>
  )
}