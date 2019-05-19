import React, {Component} from 'react';
import { Link } from 'react-router'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SortIcon from '@material-ui/icons/Sort';
import ReplayIcon from '@material-ui/icons/Replay';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Divider from '@material-ui/core/Divider';

import './index.css';

class MenuList extends React.Component {

    render() {
        return (
        <div>
            <List 
            component="nav" 
            subheader={<ListSubheader component="div" style={{fontSize: '18px'}}>服务</ListSubheader>}
            >
                <Link to="/server-list" className="Menu-link">
                    <ListItem button>
                        <ListItemIcon>
                            <SortIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="服务列表" />
                    </ListItem>
                </Link>
                <Link to="/server-create" className="Menu-link">
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="创建服务" />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List 
            component="nav" 
            subheader={<ListSubheader component="div" style={{fontSize: '18px'}}>操作日志</ListSubheader>}
            >
                <Link to="/doing" className="Menu-link">
                    <ListItem button>
                        <ListItemIcon>
                            <PlayCircleFilledIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="正在进行" />
                    </ListItem>
                </Link>
                <Link to="/history" className="Menu-link">
                    <ListItem button>
                        <ListItemIcon>
                            <ReplayIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="操作历史" />
                    </ListItem>
                </Link>
            </List>
        </div>
        )
    }
}

export default (MenuList);