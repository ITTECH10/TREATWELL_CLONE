import React from 'react';
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// import { useApp } from '../context/AppContext'
// mui
import { Grid, Paper, Typography, Box } from '@mui/material'
// rest
import Page from '../components/Page'

const PrivacyPolicy = () => {
    // const { setGeneralAlertOptions, setLogedInPacient, logedInPacient } = useApp()
    // const navigate = useNavigate()

    // const acceptPoliciesHandler = () => {
    //     axios('/users/accept-policies')
    //         .then(res => {
    //             if (res.status === 200) {
    //                 navigate('/')
    //                 setLogedInPacient({ ...logedInPacient, policiesAccepted: true })
    //                 setGeneralAlertOptions({
    //                     open: true,
    //                     severity: 'info',
    //                     message: 'Vielen Dank, dass Sie unseren Datenshutz akzeptiert haben!',
    //                     hideAfter: 5000
    //                 })
    //             }
    //         }).catch(err => {
    //             // console.log(err.response)
    //             setGeneralAlertOptions({
    //                 open: true,
    //                 severity: 'error',
    //                 message: 'Beim Akzeptieren Ihrer Anfrage ist etwas schief gelaufen, wenden Sie sich bitte an unseren Kundenservice!',
    //                 hideAfter: 5000
    //             })
    //         })
    // }

    return (
        <Page title="Datenshutz">
            <Grid container>
                <Grid sm={3} item />
                <Grid sm={6} item>
                    <Paper p={3} elevation={1} sx={{ p: 5 }}>
                        <Box>
                            <Typography variant="h4">Datenschutzerkl√§rung</Typography>
                            <Box>
                                <Typography>
                                    Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl√§rung.
                                </Typography>
                                <Typography variant="subtitle1" my={1}>1. Verantwortlicher f√ľr die Datenverarbeitung (nachfolgend: ‚Äěwir‚Äú)</Typography>
                                <Typography>
                                    Gesundo24
                                    Lichtenrader Damm 67
                                    12305 Berlin
                                    Gesch√§ftsf√ľhrer: Tanja Bastek
                                    Telefon: +49 30 22 38 98 38
                                    E-Mail:¬†info@gesundo24.de
                                    Weitere Einzelheiten √ľber uns finden Sie in unserer Anbieterkennzeichnung ( Impressum einf√ľgen)
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" my={1}>2. Personenbezogene Daten, Zwecke ihrer Verarbeitung und Rechtsgrundlagen</Typography>
                                <Typography>
                                    Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten m√∂glich. Die Angabe von personenbezogenen Daten ist freiwillig.
                                    Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare nat√ľrliche Person (im Folgenden ‚Äěbetroffene Person‚Äú) beziehen. Als identifizierbar wird eine nat√ľrliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der Identit√§t dieser nat√ľrlichen Person sind.
                                    Der Zweck der Verarbeitung von Daten ist das Betreiben einer Website mit Informationen zu unserem Dienstleistungsangebot nebst Kontaktm√∂glichkeiten und Online-Bewerbungsm√∂glichkeiten f√ľr Bewerber und Kunden.
                                    Personenbezogene Daten werden auf unserer Website dann erhoben, wenn dies
                                    f√ľr die Nutzung der Website (Rechtsgrundlage: Artikel 6 Absatz 1 a) und/ oder Artikel 6 Absatz 1 b) Datenschutzgrundverordnung),
                                    zur Wahrung unseres Interesses zur Verbesserung des Nutzererfahrung und zur Aufrechterhaltung der Sicherheit der Nutzung (Rechtsgrundlage: Artikel 6 Absatz 1 f) Datenschutzgrundverordnung),
                                    f√ľr die Nutzung der auf der Website angebotenen Leistungen sowie vorvertraglicher Ma√ünahmen, insbesondere etwa f√ľr Formulareingaben (Rechtsgrundlage: Artikel 6 Absatz 1 a) und/ oder Artikel 6 Absatz 1 b) Datenschutzgrundverordnung) oder
                                    f√ľr einen Vertragsabschluss und f√ľr die Vertragsdurchf√ľhrung (Rechtsgrundlage: Artikel 6 Absatz 1 a) und b) Datenschutzgrundverordnung)
                                    erforderlich ist.
                                    Weitere Details zur Verarbeitung von Daten finden Sie nachfolgend unter entsprechenden √úberschriften:
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" my={1}>3. Zugriffsdaten/Server-Logfiles</Typography>
                                <Typography>
                                    Bei dem Besuch unserer Website speichern die Server automatisch die Informationen, die Ihr¬†Browser¬†sendet, sog.¬†Server-Logfiles. Die Informationen umfassen
                                    Name der abgerufenen Webseite,
                                    Datei,
                                    Datum und Uhrzeit des Abrufs,
                                    Meldung √ľber erfolgreichen Abruf,
                                    Browsertyp nebst Version,
                                    Betriebssystem des Nutzers,
                                    Referrer URL,
                                    IP-Adresse und
                                    Provider.
                                    Eine Zusammenf√ľhrung dieser Daten mit anderen Datenquellen erfolgt nicht. Die Informationen werden ausschlie√ülich zur Analyse und Aufrechterhaltung des technischen Betriebs der Server und des Netzwerkes benutzt. Diese Datenverarbeitung dient der Wahrung unseres Interesses zur Verbesserung des Nutzererfahrung und zur Aufrechterhaltung der Sicherheit der Nutzung (Rechtsgrundlage: Artikel 6 Absatz 1 f) Datenschutzgrundverordnung),
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" my={1}>4. Kontakt via E-Mail</Typography>
                                <Typography>
                                    Wenn Sie uns per E-Mail Anfragen zukommen lassen, werden Ihre dortigen Angaben aus der E-Mail inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f√ľr den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Wir werden die von Ihnen freiwillig zur Verf√ľgung gestellten Daten streng vertraulich behandeln. Freiwillig von Ihnen mitgeteilten personenbezogenen Daten speichern und nutzen wir, soweit es also f√ľr die weitere Korrespondenz mit Ihnen erforderlich ist. Die Datenverarbeitung beruht auf Ihrer Einwilligung (Rechtsgrundlage: Artikel 6 Abs. 1 a) Datenschutzgrundverordnung) bzw. zur Durchf√ľhrung vorvertraglicher Ma√ünahmen oder der Vertragsdurchf√ľhrung (Rechtsgrundlage: Artikel 6 Abs. 1 b) Datenschutzgrundverordnung).
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" my={1}>5. Cookies</Typography>
                                <Typography>
                                    Cookies sind kleine Dateien, die es erm√∂glichen, auf dem Zugriffsger√§t der Nutzer (PC, Smartphone o.√§.) spezifische, auf das Ger√§t bezogene Informationen zu speichern. Sie dienen zum einem der Benutzerfreundlichkeit von Webseiten und damit den Nutzern (z.B. Speicherung von Logindaten). Zum anderen dienen sie, um die statistische Daten der Webseitennutzung zu erfassen und sie zwecks Verbesserung des Angebotes analysieren zu k√∂nnen. Die Nutzer k√∂nnen auf den Einsatz der Cookies Einfluss nehmen. Die meisten Browser verf√ľgen eine Option mit der das Speichern von Cookies eingeschr√§nkt oder komplett verhindert wird. Allerdings wird darauf hingewiesen, dass die Nutzung und insbesondere der Nutzungskomfort ohne Cookies eingeschr√§nkt werden.
                                    Die Datenverarbeitung dient der Wahrung unseres berechtigten Interesses zur Verbesserung des Nutzererfahrung und zur Aufrechterhaltung der Sicherheit der Nutzung (Rechtsgrundlage: Artikel 6 Absatz 1 f) Datenschutzgrundverordnung).
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" my={1}>6. Registrierung f√ľr Kunden</Typography>
                                <Typography>
                                    Wir bieten Kunden an, ein optionales Kundenkonto anzulegen. Die hierf√ľr erforderlichen Angaben (Pflichtangaben) werden den Kunden im Registrierungsvorgang angegeben. Diese Pflichtangeben sind erforderlich, um unser Angebot nutzen zu k√∂nnen. Wir behalten uns vor, Kunden via E-Mail √ľber √Ąnderungen zu informieren, die in unmittelbaren Zusammenhang mit der Registrierung oder Nutzung unseres Dienstes stehen. Die durch den Kunden angelegten Profile sind √∂ffentlich und k√∂nnen von Suchmaschinen indexiert werden. Die Profile des Paketes "Premium" und "Premium Plus" erscheinen auch auf unserer Partner-Website ‚Äěphytodoc.de‚Äú.
                                    Die Datenverarbeitung beruht auf Ihrer Einwilligung (Rechtsgrundlage: Artikel 6 Abs. 1 a) Datenschutzgrundverordnung) bzw. zur Durchf√ľhrung vorvertraglicher Ma√ünahmen oder der Vertragsdurchf√ľhrung (Rechtsgrundlage: Artikel 6 Abs. 1 b) Datenschutzgrundverordnung).
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" my={1}>7. Kundenkonto</Typography>
                                <Typography>
                                    Wir verarbeiten die von unseren Kunden Daten, um ihnen die gew√§hlten Leistungspakete im Rahmen der Vertragserf√ľllung zur Verf√ľgung zu stellen. Zu den Daten geh√∂ren Bestandsdaten, Kommunikationsdaten, Vertragsdaten sowie Zahlungsdaten. Die Datenverarbeitung dient der Vertragsdurchf√ľhrung (Rechtsgrundlage: Artikel 6 Abs. 1 b) Datenschutzgrundverordnung).
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" my={1}>8. Google Analytics</Typography>
                                <Typography>
                                    Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google LLC, 1600 Amphitheatre Parkway Mountain View, CA 94043, USA.
                                    Google Analytics verwendet Cookies, die auf Computer der Nutzer gespeichert werden und die eine Analyse der Benutzung der Website durch sie erm√∂glichen. Die durch den Cookie erzeugten Informationen √ľber Benutzung dieser Website durch die Nutzer werden in der Regel an einen Server von Google in den USA √ľbertragen und dort gespeichert.
                                    Die IP-Anonymisierung ist aktiviert. Die IP-Adresse der Nutzer wird daher von Google innerhalb von Mitgliedstaaten der Europ√§ischen Union oder in anderen Vertragsstaaten des Abkommens √ľber den Europ√§ischen Wirtschaftsraum gek√ľrzt. Nur in Ausnahmef√§llen wird die volle IP-Adresse an einen Server von Google in den USA √ľbertragen und dort gek√ľrzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um die Nutzung der Website durch die Nutzer auszuwerten, um Reports √ľber die Websiteaktivit√§ten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegen√ľber dem Websitebetreiber zu erbringen.
                                    Die im Rahmen von Google Analytics von dem Browser des Nutzers √ľbermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengef√ľhrt. Die Nutzer k√∂nnen die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; dieses Angebot weist die Nutzer jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht s√§mtliche Funktionen dieser Website vollumf√§nglich nutzen werden k√∂nnen. Die Nutzer k√∂nnen dar√ľber hinaus die Erfassung der durch das Cookie erzeugten und auf ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verf√ľgbare Browser-Plugin herunterladen und installieren:¬†<a href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noreferrer">http://tools.google.com/dlpage/gaoptout?hl=de</a>. Dabei wird ein Opt-Out-Cookie auf Ihrem Ger√§t abgelegt. Wenn Sie Ihre Cookies l√∂schen, m√ľssen Sie diesen Link erneut anklicken.
                                    Die Google LLC ist unter dem US-EU-Datenschutzabkommen ‚ÄěPrivacy Shield‚Äú zertifiziert und verpflichtet sich damit, die EU-Datenschutzvorgaben einzuhalten. Dar√ľber hinaus haben wir mit der Google LLC ein Auftragsverarbeitungsvertrag abgeschlossen. Dabei handelt es sich um einen Vertrag, in dem sich Google dazu verpflichtet, die Daten unserer Nutzer zu sch√ľtzen, entsprechend dessen Datenschutzbestimmungen in unserem Auftrag zu verarbeiten und insbesondere nicht an Dritte weiterzugeben.
                                    Die Datenverarbeitung dient der Wahrung unseres berechtigten Interesses der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes (Rechtsgrundlage: Artikel 6 Absatz 1 f) Datenschutzgrundverordnung).
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" my={1}>9. Google AdSense</Typography>
                                <Typography>
                                    Wir benutzen au√üerdem Google Adsense. Hierbei handelt es sich um einen Webanzeigendienst der ebenfalls von der Google LLC, 1600 Amphitheatre Parkway Mountain View, CA 94043, USA.
                                    Google AdSense verwendet sog. ‚ÄěCookies‚Äú und ‚ÄěWeb Beacons‚Äú. Cookies sind Textdateien, die auf Computer der Nutzer gespeichert werden und die eine Analyse der Benutzung der Website durch sie erm√∂glichen. Web Beacons sind unsichtbare Grafiken. Durch diese k√∂nnen Informationen wie der Besucherverkehr auf den Seiten dieses Angebots ausgewertet werden.
                                    Die durch Cookies und Web Beacons erzeugten Informationen √ľber die Benutzung dieser Website (einschlie√ülich der IP-Adresse der Nutzer) und Auslieferung von Werbeformaten werden an einen Server von Google in den USA √ľbertragen und dort gespeichert. Diese Informationen k√∂nnen von Google an Vertragspartner weiter gegeben werden. Google wird die IP-Adresse jedoch nicht mit anderen von Ihnen gespeicherten Daten zusammenf√ľhren.
                                    Nutzer k√∂nnen die Anzeige von Web Beacons und die Speicherung der Cookies durch eine entsprechende Einstellung ihrer Browser-Software verhindern; dieses Angebot weist die Nutzer jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht s√§mtliche Funktionen dieser Website vollumf√§nglich nutzen werden k√∂nnen. N√§here Informationen zur Verwendung von Cookies f√ľr Werbung bei Google AdSense finden Sie bei Google, unter¬†<a href="https://www.google.de/intl/de/policies/technologies/ads" target="_blank" rel="noreferrer">http://www.google.de/intl/de/policies/technologies/ads</a>¬†sowie unter¬†<a href="http://support.google.com/adsense/answer/2839090" target="_blank" rel="noreferrer">http://support.google.com/adsense/answer/2839090</a>.
                                    Die Datenverarbeitung dient der Wahrung unseres berechtigten Interesses der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes (Rechtsgrundlage: Artikel 6 Absatz 1 f) Datenschutzgrundverordnung).
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" my={1}>10. Empf√§nger von personenbezogenen Daten</Typography>
                                <Typography>
                                    Personenbezogene Daten werden folgenden Kategorien von Empf√§ngern mitgeteilt:
                                    An Mitarbeiter sowie Kunden des Verantwortlichen und an Auftragsverarbeiter.
                                    Dar√ľber hinaus werden Ihre personenbezogenen Daten ohne Ihre ausdr√ľckliche Zustimmung nicht an Dritte weitergegeben, es sei denn, wir sind gesetzlich dazu verpflichtet oder die Datenweitergabe ist zur Durchf√ľhrung eines Vertragsverh√§ltnisses zwingend erforderlich.
                                    Wir weisen darauf hin, dass die Daten√ľbertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitsl√ľcken aufweisen kann. Ein l√ľckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m√∂glich.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" my={1}>11. Dauer der Speicherung</Typography>
                                <Typography>
                                    Wir l√∂schen Ihre personenbezogenen Daten unverz√ľglich nach Zweckerreichung. So speichern wir Ihre Daten aus Ihren E-Mails bis Ihre Anfrage vollst√§ndig bearbeitet und erledigt ist. Danach werden die Angaben in der Regel gel√∂scht. Im √úbrigen wird in j√§hrlichen Turni gepr√ľft, ob eine L√∂schung der Daten erfolgen kann.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" my={1}>12. Rechte der betroffenen Personen</Typography>
                                <Typography>
                                    Sie sind gesetzlich nicht verpflichtet, Ihre personenbezogenen Daten bereitzustellen. Die Bereitstellung kann jedoch f√ľr einen Vertragsabschluss bzw. eine Vermittlung erforderlich sein.
                                    Die Rechte von betroffenen Personen ergeben sich insbesondere aus Artikel 15 bis 23 und Artikel 77 Datenschutzgrundverordnung sowie ¬ß¬ß 32 bis 37 Bundesdatenschutzgesetz-neu. Wir weisen Sie vor allem auf die nachfolgenden M√∂glichkeiten f√ľr betroffene Personen hin:
                                    Sie haben uns gegen√ľber im Hinblick auf Ihre personenbezogenen Daten das Recht auf
                                    Auskunft,
                                    Berichtigung,
                                    L√∂schung,
                                    Einschr√§nkung der Verarbeitung und
                                    √úbertragbarkeit.
                                    Sie haben ferner das Recht, gegen die Verarbeitung von personenbezogenen Daten
                                    Widerspruch
                                    zu erheben.
                                    Wenn Sie eine Einwilligung zur Verarbeitung von personenbezogenen Daten erteilt haben, haben Sie das Recht des
                                    Widerrufs
                                    gegen√ľber uns mit Wirkung f√ľr die Zukunft.
                                    Alle Anfragen, Aufforderungen und Mitteilungen richten Sie bitte an uns, siehe oben unter 1.
                                    Sind Sie der Ansicht, dass die Verarbeitung der sie betreffenden personenbezogenen Daten gegen das Datenschutzrecht verst√∂√üt, haben Sie stets das
                                    Recht auf Beschwerde
                                    bei der zust√§ndigen Aufsichtsbeh√∂rde, vgl. Artikel 77 DSGVO. Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen dieses Recht auf Beschwerde bei einer Aufsichtsbeh√∂rde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutma√ülichen Versto√ües, zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verst√∂√üt.
                                    Die f√ľr uns zust√§ndige Aufsichtsbeh√∂rde ist Der Berliner Beauftragte f√ľr den Datenschutz und die Informationsfreiheit Berlin, Friedrichstr. 219, 10969 Berlin.

                                    Datenschutzerkl√§rung vom 23. Mai 2018, die im Hinblick auf die neue DSGVO aktualisiert wurde
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid sm={3} item />
            </Grid>
        </Page>
    )
};

export default PrivacyPolicy;
