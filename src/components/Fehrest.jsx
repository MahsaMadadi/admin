import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import HomeIcon from '@material-ui/icons/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: "#FFF",
    fontFamily: "system-ui !important"
  },
  a: {
    color: "#000000"
  },
  nested: {
    paddingLeft: theme.spacing(4),
    fontFamily: "Yekan",
    color: "black"
  },
}));

export default function Fehrest() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [list, setList] = React.useState(false);
  const [barname, setBarname] = React.useState(false);
  const [tamrin, setTamrin] = React.useState(false);
  const [follower, setFollower] = React.useState(false);
  const [malli, setMalli] = React.useState(false);
  const [search, setSearch] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <div className="flex-end" style={{ textAlign: "right", fontSize: "16px", color: "black" }}>
      <ListItem button onClick={handleClick}>
            <ListItemIcon style={{ fontFamily: "Yekan" }}>
            </ListItemIcon>
            <Link to="/Users">Users</Link>
          </ListItem>
          
      <ListItem button onClick={handleClick}>
            <ListItemIcon style={{ fontFamily: "Yekan" }}>
            </ListItemIcon>
            <Link to="/payments">PAYMENTS</Link>
          </ListItem>

          <ListItem button onClick={handleClick}>
            <ListItemIcon style={{ fontFamily: "Yekan" }}>
            </ListItemIcon>
            <Link to="/Gateways">GATEWAYS</Link>
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemIcon style={{ fontFamily: "Yekan" }}>
            </ListItemIcon>
            <Link to="/Urls">DOMAINS</Link>
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemIcon style={{ fontFamily: "Yekan" }}>
            </ListItemIcon>
            <Link to="/Statics">STATICS</Link>
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemIcon style={{ fontFamily: "Yekan" }}>
            </ListItemIcon>
            <Link to="/Errors">Errors</Link>
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemIcon style={{ fontFamily: "Yekan" }}>
            </ListItemIcon>
            <Link to="/Notification">Notification</Link>
          </ListItem>

      </div>

    </List>
  );
}
{/* <ListItem button onClick={handleClick1}>
  <ListItemIcon style={{fontFamily:"Yekan"}}>
  <SettingsIcon  className="text-black" style={{ fontSize: 40 }} />
  </ListItemIcon>
  <span className="text-right">تنظبمات پروفایل</span>
  {list ? <ExpandLess /> : <ExpandMore />}
</ListItem>
<Collapse in={list} timeout="auto" unmountOnExit>
  <List component="div" disablePadding>
    <ListItem style={{fontFamily:"Yekan",direction:"rtl"}} button className={classes.nested}>
      <span className="text-right">اطلاعات شخصی</span>
    </ListItem>
    <ListItem button className={classes.nested}>
      <span className="text-right">اطلاعات جسمانی</span>
    </ListItem>
  </List>
</Collapse> */}