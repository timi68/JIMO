import React from "react";
import * as Interfaces from "../../utils/interfaces";
import Footer from "../../components/global/footer";
import Box from "@mui/material/Box";
import Menu from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {IconButton} from "@mui/material";

function Layout(props: Interfaces.LayoutInterface) {
	const [state, setState] = React.useState<
		Partial<Interfaces.LayoutStateInterface>
	>({openDrawer: false});
	const {children, type, text} = props;
	return (
		<div className="container">
			<div className="wrapper page-wrapper">
				<div className="header page-header top-header">
					<div className="logo-wrapper">
						<div className="logo">JIMO</div>
					</div>
					<div className="navigation-icon">
						<IconButton
							onClick={() =>
								setState({...state, openDrawer: true})
							}
						>
							<Menu fontSize="medium" />
						</IconButton>
					</div>
					<SwipeableDrawer
						anchor="right"
						open={state.openDrawer}
						onClose={() => setState({...state, openDrawer: false})}
						onOpen={() => setState({...state, openDrawer: true})}
					>
						no list
					</SwipeableDrawer>
				</div>
				<div className="main page-content">{children}</div>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
