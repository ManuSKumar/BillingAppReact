import { Link, Typography } from "@mui/material";

// Define the type for the props in the Copyright component
interface CopyrightProps {
  sx?: object;
}

export function Copyright(props: CopyrightProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="www.example.com">
        EPEX Studio
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
