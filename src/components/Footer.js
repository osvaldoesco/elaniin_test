import React, { Component } from 'react';
import { Container } from 'reactstrap';
import '../styles/components/footer.scss';

class Footer extends Component {

	render() {

		return(
			<footer>
				<Container className="footer__container">
					<div>
						<h3>Office</h3>
						<ul>
							<li> 756 Livingston Street, <br/>
								Brooklyn, NY 11201 
							</li>
						</ul>
					</div>
					<div>
						<h3>Get in touch</h3>
						<ul>
							<li>work@e.oliver.com</li>
							<li>+1 (00) 123-45-67m</li>
						</ul>
					</div>
					<div>
						<h3>Social</h3>
						<ul>
							<li>Connect with me on facebook, <br />
								twitter or instagrem
							</li>
						</ul>
					</div>
				</Container>
			</footer>
			
		);
	}
}

export default Footer;