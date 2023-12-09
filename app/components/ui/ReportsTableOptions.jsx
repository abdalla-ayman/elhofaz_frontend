"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { updateReport } from "../../../application-api/http/reports";
import { Snackbar } from "@mui/material";

const StyledMenu = styled((props) => (
	<Menu
		className="bg-blue-500"
		elevation={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiPaper-root": {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 180,
		color: theme.palette.grey[700],
		boxShadow:
			"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
		"& .MuiMenu-list": {
			padding: "4px 0",
		},
		"& .MuiMenuItem-root": {
			"& .MuiSvgIcon-root": {
				fontSize: 18,
				marginRight: theme.spacing(1.5),
			},
			"&:active": {
				backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
			},
		},
	},
}));

export default function CustomizedMenus({ report }) {
	const router = useRouter();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [showError, setShowError] = React.useState(false);
	const [error, setError] = React.useState("");

	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const update = async () => {
		const res = await updateReport({ id: report.id, visible: !report.visible });
		if (res.success) {
			window.location.reload();
		} else {
			setError(res.error);
			showError(true);
		}
	};

	return (
		<div>
			<svg
				aria-controls={open ? "demo-customized-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				variant="contained"
				onClick={handleClick}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="currentColor"
				className="text-white w-6 h-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
				/>
			</svg>

			<StyledMenu
				id="demo-customized-menu"
				MenuListProps={{
					"aria-labelledby": "demo-customized-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<MenuItem disableRipple onClick={() => router.push(`/user/reports/${report.id}`)}>
					عرض
				</MenuItem>
				<MenuItem disableRipple>تعديل</MenuItem>
			</StyledMenu>
			<Snackbar
				open={showError}
				autoHideDuration={4000}
				onClose={() => setShowError(false)}
				message="Note archived"
				action={error}
			/>
		</div>
	);
}
