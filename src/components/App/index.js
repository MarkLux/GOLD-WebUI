import React, {Component} from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MenuAppBar from '../NavBar'
import MenuList from '../MenuList'
import { Grid } from '@material-ui/core';

// this.props.children 会展示 router.js 中 <Route path="/" component={App}></Route> 中包含的路由组件
class App extends Component {
  render() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#006ee7',
            },
            background: {
                main: '#eeeeee',
            }
          },
    });
    return (
        <MuiThemeProvider theme={theme}>
            <div class="root" style={{background: '#eeeeee'}}>
                <MenuAppBar/>
                <Grid container spacing={8}>
                    <Grid item xs={2}>
                        <MenuList />
                    </Grid>
                    <Grid item xs={10} style={{padding: '20px'}}>
                        {
                            this.props.children
                        }
                    </Grid>
                </Grid>
            </div>
        </MuiThemeProvider>
    )
  }
}

export default App;