import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegistrationForm";
import { Suspense } from "react";
import UserProfile from "./components/Userprofile";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function App() {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Form Validation System
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <RegisterForm />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Card>
            <CardContent>
             <Suspense fallback={<h2>Loading User...</h2>}>
             <UserProfile />
             </Suspense>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}