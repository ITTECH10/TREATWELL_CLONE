import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { RegisterForm } from '../components/authentication/register';
// import AuthSocial from '../components/authentication/AuthSocial';
import { manipulateCloudinaryImage } from '../utils/manipulateCloudinaryImage'
// ----------------------------------------------------------------------

const RegisterImage = manipulateCloudinaryImage('https://res.cloudinary.com/dt5o99tph/image/upload/v1645180812/register_cqrbag.jpg', ['w_1024'])

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

export default function Register() {
  return (
    <RootStyle title="Register | Minimal-UI">
      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Buchen Sie einfach einen Termin über unsere Website
          </Typography>
          <img alt="register" src={RegisterImage} />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Erstellen Sie kostenfrei Ihr persönliches Konto und verwalten Sie bequem Ihre Termine!
            </Typography>
          </Box>
          <RegisterForm />

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            Mit der Anmeldung akzeptiere ich&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Nutzungsbedingungen der Website
            </Link>
            &nbsp;und&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Datenschutz-Bestimmungen
            </Link>
            .
          </Typography>

          <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              Sie haben bereits ein Konto?&nbsp;
              <Link to="/login" component={RouterLink}>
                Anmeldung
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle >
  );
}
