//import { useEffect, useState } from "react";
import { use } from "react";
import { getUser } from "../utils/api";
import { pickFields } from "../utils/helpers";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function UserProfile() {
  const user=use(getUser());

  const filteredUser = pickFields(user,["name","email",]);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        User Profile
      </Typography>

      <Typography variant="h6">
        Complete User Data
      </Typography>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <Typography variant="h6">
        Selected Fields (keyof)
      </Typography>

      <pre>{JSON.stringify(filteredUser, null, 2)}</pre>
    </Box>
  );
}