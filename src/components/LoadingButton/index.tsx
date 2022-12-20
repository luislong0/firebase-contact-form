import ClipLoader from "react-spinners/ClipLoader";
import { defaultTheme } from '../../styles/themes/default'
import { CSSProperties } from "react";
import { Button } from "./styles";

interface LoadingButtonProps {
  loading: boolean;
}

export function LoadingButton(props: LoadingButtonProps) {
  return (
    <Button disabled={props.loading}>
      <ClipLoader
        color={defaultTheme["gray-100"]}
        loading={props.loading}
        // cssOverride={override}
        size={16}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Button>
  )
}