import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { LoginForm } from '../components/authentication/login';
import { manipulateCloudinaryImage } from '../utils/manipulateCloudinaryImage'

const LoginImage = manipulateCloudinaryImage('https://res.cloudinary.com/dt5o99tph/image/upload/v1645180491/login-illustration_cj6p4b.jpg', ['w_1024'])

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle title="Anmelden">
      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Hallo, willkommen zurück!
          </Typography>
          <img src={LoginImage} alt="login" />
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 2 }}>
            <Typography variant="h4" gutterBottom>
              Melden Sie sich an
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Geben Sie unten Ihre Informationen ein.</Typography>
          </Stack>
          <LoginForm />

          <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Sie haben kein Konto?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="register">
                Anmeldung
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle >
  );
}
