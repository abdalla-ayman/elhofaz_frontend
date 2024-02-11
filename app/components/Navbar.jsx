import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

// export default function Navbar() {
//
//   return (
//     <div className="flex p-3 bg-sky-300">
//       <h3 className="mx-4 text-xl">مقارئ الحفاظ</h3>
//       {session && (
//         <ul className="flex flex-grow justify-end mx-4 items-center">
//           <li className="mx-2">
//             <button onClick={signOut}>تسجيل الخروج</button>
//           </li>
//           <li>الصفحة الشخصية</li>
//         </ul>
//       )}

//       {!session && (
//         <ul className="flex justify-center">
//           <li className="mx-2">
//             <Link href={"/auth/login"}> تسجيل الدخول</Link>
//           </li>
//           <li className="mx-2">
//             <Link href={"/auth/register"}> التسجيل</Link>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// }
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = [
  { name: "التسجيل", link: "/auth/register" },
  { name: "تسجيل الدخول", link: "/auth/login" },
];

function DrawerAppBar(props) {
  const { data: session } = useSession();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        مقارئ السفرة
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <Link href={"/"}>الرئيسية</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        {session && (
          <>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <Link href={"/user/profile"}>الملف الشخصي</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <Link href={"/events"}>البرامج المصاحبة</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <Link href={"/tajweedLessons"}>دروس التجويد</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <Link href={"/contact"}>تواصل معنا</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            {/* <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <Link href={"/user/reports"}>التقارير</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem> */}
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <Button sx={{ width: "100%", mx: "auto" }} onClick={signOut}>
                    تسجيل الخروج
                  </Button>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </>
        )}

        {!session && (
          <>
            {/* <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <Link href={"/auth/register"}>التسجيل</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem> */}
            {/* <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <Link href={"/events"}>البرامج المصاحبة</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem> */}
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <Link href={"/tajweedLessons"}>دروس التجويد</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <Link href={"/contact"}>تواصل معنا</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <Link href={"/auth/login"}>تسجيل الدخول</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Link
            href={"/"}
            style={{
              display: { xs: "none", sm: "block" },
              textAlign: "center",
            }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}>
              مقارئ السفرة
            </Typography>
          </Link>
          <Link href={"/"} style={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                display: { xs: "block", sm: "none", md: "none" },
              }}>
              مقارئ السفرة
            </Typography>
          </Link>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link href={"/events"}>
              <Button sx={{ color: "#fff", mx: 1 }}>البرامج المصاحبة</Button>
            </Link>
            <Link href={"/tajweedLessons"}>
              <Button sx={{ color: "#fff", mx: 1 }}>دروس التجويد</Button>
            </Link>
            <Link href={"/contact"}>
              <Button sx={{ color: "#fff", mx: 1 }}>تواصل معنا</Button>
            </Link>

            {session && (
              <>
                {/* <Link href={"/"}>
                  <Button sx={{ color: "#fff", mx: 1 }}>الرئيسية</Button>
                </Link> */}
                <Link href={"/user/profile"}>
                  <Button sx={{ color: "#fff", mx: 1 }}>الملف الشخصي</Button>
                </Link>
                <Link href={"/user/reports"}>
                  <Button sx={{ color: "#fff", mx: 1 }}>التقارير</Button>
                </Link>

                <Button sx={{ color: "#fff", mx: 1 }} onClick={signOut}>
                  تسجيل الخروج
                </Button>
              </>
            )}
            {!session && (
              <>
                <Link href={"/auth/login"}>
                  <Button sx={{ color: "#fff", mx: 1 }}>تسجيل الدخول</Button>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;
