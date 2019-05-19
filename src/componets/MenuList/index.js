import React, {Component} from 'react';
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

const styles = {
};

class MenuList extends React.Component {

    render() {
        return (
        <div>
            <List 
            component="nav" 
            subheader={<ListSubheader component="div" style={{fontSize: '18px'}}>服务</ListSubheader>}
            >
                <ListItem button>
                    <ListItemIcon>
                        <SortIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="服务列表" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AddCircleIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="创建服务" />
                </ListItem>
            </List>
            <Divider />
            <List 
            component="nav" 
            subheader={<ListSubheader component="div" style={{fontSize: '18px'}}>操作日志</ListSubheader>}
            >
                <ListItem button>
                    <ListItemIcon>
                        <PlayCircleFilledIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="正在进行" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ReplayIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="操作历史" />
                </ListItem>
            </List>
        </div>
        )
    }
}

export default (MenuList);