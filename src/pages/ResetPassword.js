// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Container, Typography } from '@mui/material';
// layouts
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { ResetPasswordForm } from '../components/authentication/resetPassword';
// rest
import { manipulateCloudinaryImage } from '../utils/manipulateCloudinaryImage'

// ----------------------------------------------------------------------
const optimizedResetPasswordImage = manipulateCloudinaryImage('https://res.cloudinary.com/dt5o99tph/image/upload/v1645180307/reset_password_hqwytq.jpg', ['w_1024'])

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
        <RootStyle title="Resetovanje lozinke">
            <MHidden width="mdDown">
                <SectionStyle>
                    <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                        Setze dein Passwort zurück
                    </Typography>
                    <img src={optimizedResetPasswordImage} alt="reset your password" />
                </SectionStyle>
            </MHidden>

            <Container maxWidth="sm">
                <ContentStyle>
                    <Stack sx={{ my: 1 }}>
                        <Typography variant="h4" gutterBottom>
                            Neues Passwort
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Geben Sie unten Ihre Informationen ein.</Typography>
                    </Stack>
                    <ResetPasswordForm />
                </ContentStyle>
            </Container>
        </RootStyle>
    );
}