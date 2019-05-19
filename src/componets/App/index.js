import React, {Component} from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css';
import MenuAppBar from '../NavBar'
import MenuList from '../MenuList'
import FunctionTable from '../FunctionTable'
import { Grid } from '@material-ui/core';

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
                        <FunctionTable />
                    </Grid>
                </Grid>
            </div>
        </MuiThemeProvider>
    )
  }
}

export default App;