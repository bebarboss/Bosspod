import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" ,color:'#fff'}}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light">Navbar</NavLink>
                    <Nav className="me-auto">
                        <Nav.Link href="/" className="text-decoration-none text-light">หน้าหลัก</Nav.Link>
                        <Nav.Link href="pod">พอตไฟฟ้า</Nav.Link>
                        <Nav.Link href="liquid">น้ำยาพอดไฟฟ้า</Nav.Link>
                        <Nav.Link href="cart">หัวพอด</Nav.Link>
                    </Nav>
                    <div style={{marginRight:"3px"}}>เข้าสู่ระบบ | </div>
                    <Badge budgeContent={4} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 20, cursor: "pointer" }}></i>
                    </Badge>


                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>

            </Navbar></>
    )
}

export default Header