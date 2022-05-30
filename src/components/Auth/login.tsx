import * as React from 'react';
import { Container, FormContainer, BackgroundContainer, ErrorMessage, Logo, Form, FloatingLabel, BottomLinks, LinkTitle, Link } from './auth.styled';
import { NavTitle, GreenText } from '../Navigation/navigation.styled';
import { GreenButton } from '../Buttons/buttons.styled';
import { WhiteLogo, ColorLogo } from '../../images/ImageExporter';
import { Header3, Paragraph } from '../Typography/typography.styled';

const Login: React.FC = () => {
	const [isEmailActive, setIsEmailActive] = React.useState(false);
	const [emailValue, setEmailValue] = React.useState('');
	const [isPasswordActive, setIsPasswordActive] = React.useState(false);
	const [passwordValue, setPasswordValue] = React.useState('');

	const [errorValue, setErrorValue] = React.useState('');

	const handleEmailChange = (email: string) => { setEmailValue(email); email !== '' ? setIsEmailActive(true) : setIsEmailActive(false); };
    const handlePasswordChange = (password: string) => { setPasswordValue(password); password !== '' ? setIsPasswordActive(true) : setIsPasswordActive(false); };

	return (
		<>
            <Container>
                <FormContainer>
                    <Logo>
                        <img src={ColorLogo} alt="logo" width={'30px'} height={'40px'}/>
                        <NavTitle><GreenText>Geo</GreenText>tagger</NavTitle>
                    </Logo>

                    <Header3>Sign in</Header3>
			        <Paragraph>Welcome back to Geotagger. We are glad that you are back.</Paragraph>

                    <ErrorMessage>{errorValue}</ErrorMessage>

			        <Form>
			        	<FloatingLabel>
			        		<label htmlFor='email' className={isEmailActive ? 'Active' : ''}>Email</label>
			        		<input id='email' type='email' value={emailValue} onChange={(e) => handleEmailChange(e.target.value)} />
			        	</FloatingLabel>

			        	<FloatingLabel>
			        		<label htmlFor='password' className={isPasswordActive ? 'Active' : ''}>Password</label>
			        		<input id='password' type='password' value={passwordValue} onChange={(e) => handlePasswordChange(e.target.value)} />
			        	</FloatingLabel>
			        </Form>
			        <GreenButton>SIGN IN</GreenButton>

                    <BottomLinks>
                        <LinkTitle>Do you want to create an account?</LinkTitle>
                        <Link href='/'>Sign up</Link>
                    </BottomLinks>
                </FormContainer>

                <BackgroundContainer>
                    <img src={WhiteLogo} alt='logo' height={'300px'} width={'200px'}/>
                </BackgroundContainer>
            </Container>
		</>
	);
};

export default Login;
