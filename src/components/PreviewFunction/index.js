import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Build from '@material-ui/icons/Build';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class PreviewFunction extends React.Component {
    state = {
        name: '',
        functionId: 1,
        targetBranch: 'master',
        targetVersion: 'daf3123',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="h5" component="h3">
                        服务预览
                    </Typography>
                    <FormControl style={{ width: '100%' }}>
                        <br />
                        <Typography variant="h6" component="h5">
                            服务信息
                        </Typography>
                        <TextField
                            id="serviceName"
                            label="服务名称"
                            defaultValue="hx-demo-service"
                            style={{ margin: 8 }}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="gitRepo"
                            label="github仓库"
                            style={{ margin: 8 }}
                            defaultValue="https://github.com/MarkLux/GOLD-Bootstrap"
                            helperText="关联的github仓库名，如GOLD-Bootstrap"
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <Grid container>
                            <TextField
                                id="currentBranch"
                                label="当前分支"
                                defaultValue="master"
                                style={{ margin: 8, width: '47%' }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                id="currentVersion"
                                label="当前版本"
                                defaultValue="91cb7ecd"
                                style={{ margin: 8, width: '47%' }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Typography variant="h6" component="h3">
                        预览环境配置
                        </Typography>
                        <Grid container>
                            <TextField
                                id="targetBranch"
                                label="目标分支"
                                defaultValue="master"
                                style={{ margin: 8, width: '47%' }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="targetVersion"
                                label="目标版本"
                                defaultValue="91cb7ecd"
                                style={{ margin: 8, width: '47%' }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Button variant="contained" color="primary" className={classes.button}>
                            预览构建
                            <Build className={classes.rightIcon} />
                        </Button>
                    </FormControl>
                </Paper>
            </div>
        )
    }
}

PreviewFunction.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PreviewFunction);