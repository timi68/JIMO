import React from "react";
import * as Interfaces from "../../utils/interfaces";
import Footer from "../../components/global/footer";
import Menu from "@mui/icons-material/Navigation";

function Layout(props: Interfaces.LayoutInterface) {
	const {children, type, text} = props;
	return (
		<div className="container">
			<div className="wrapper page-wrapper">
				<div className="header page-header top-header">
					<div className="logo-wrapper">
						<div className="logo">JIMO</div>
					</div>
					<div className="navigation-icon">
						<Menu fontSize="medium" />
					</div>
				</div>
				<div className="main page-content">{children}</div>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
