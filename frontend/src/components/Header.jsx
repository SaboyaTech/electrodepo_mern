import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Logo from '../transparent_logo_dark.png';

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand href='/'>
						<img src={Logo} alt='electro depot logo' height='45' />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link href='/cart'>
								<i className='fas fa-shopping-cart'></i>
								Cart
							</Nav.Link>
							<Nav.Link href='/login'>
								<i className='fas fa-user'></i>
								Sign In
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;