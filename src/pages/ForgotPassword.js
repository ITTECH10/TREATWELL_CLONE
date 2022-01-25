// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Container, Typography } from '@mui/material';
// layouts
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import ForgotPasswordForm from '../components/authentication/login/ForgotPasswordForm';

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

export default function ForgotPassword() {
    return (
        <RootStyle title="Passwort vergessen?">
            <MHidden width="mdDown">
                <SectionStyle>
                    <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                        Passwort vergessen?
                    </Typography>
                    <img src="/static/illustrations/forgot_password.jpg" alt="Setze dein Passwort zurück" />
                </SectionStyle>
            </MHidden>

            <Container maxWidth="sm">
                <ContentStyle>
                    <Stack sx={{ my: 1 }}>
                        <Typography variant="h4" gutterBottom>
                            Ihres E-Mail ...
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Mach dir keine Sorgen! Sie müssen lediglich die mit Ihrem Konto verknüpfte E-Mail-Adresse eingeben.</Typography>
                    </Stack>
                    <ForgotPasswordForm />
                </ContentStyle>
            </Container>
        </RootStyle>
    );
}