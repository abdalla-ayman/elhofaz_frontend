"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { reportTypes } from "../../constants";

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

export default function CustomizedMenus({ params }) {
	const router = useRouter();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				id="demo-customized-button"
				aria-controls={open ? "demo-customized-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				variant="contained"
				className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
			>
				التصفية حسب
			</Button>
			<StyledMenu
				id="demo-customized-menu"
				MenuListProps={{
					"aria-labelledby": "demo-customized-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<MenuItem
					disableRipple
					onClick={() => router.push(`/user/reports?${new URLSearchParams({ ...params, status: "null" })}`)}
				>
					إعادة تعيين
				</MenuItem>
				<MenuItem
					disableRipple
					onClick={() => router.push(`/user/reports?${new URLSearchParams({ ...params, status: "pending" })}`)}
				>
					التقارير المعلقة فقط
				</MenuItem>
				<MenuItem
					disableRipple
					onClick={() => router.push(`/user/reports?${new URLSearchParams({ ...params, status: "approved" })}`)}
				>
					التقارير المعتمدة فقط
				</MenuItem>
				<MenuItem
					disableRipple
					onClick={() =>
						router.push(`/user/reports?${new URLSearchParams({ ...params, status: "changes_requested" })}`)
					}
				>
					التقارير التي تحتاج إلى تغييرات
				</MenuItem>
				<MenuItem
					disableRipple
					onClick={() => router.push(`/user/reports?${new URLSearchParams({ ...params, status: "rejected" })}`)}
				>
					التقارير المرفوضة
				</MenuItem>
			</StyledMenu>
		</div>
	);
}
