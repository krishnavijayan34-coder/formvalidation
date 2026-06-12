import { Button } from "@mui/material";
import { useFormStatus } from "react-dom";


export default function SubmitButton() {
    const {pending}=useFormStatus();

    return (
        <Button variant="contained" type="submit" fullWidth disabled={pending}>
            {pending ? "Submitting...":"submit"}
        </Button>
    );
}