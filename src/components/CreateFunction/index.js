import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Backup from '@material-ui/icons/Backup';

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

class CreateFunction extends React.Component {
    state = {
        minInstance: '1',
        maxInstance: '4'
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleSubmit = () => {
        console.log(this.state)
        let body = {...this.state}
        body.minInstance=parseInt(body.minInstance)
        body.maxInstance=parseInt(body.maxInstance)

        fetch('http://marklux.cn:8094/function/service', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
        .then(json => {
            if (json.data && json.code == 0) {
                console.log('aaa')
                if (window.confirm('发布成功，即将跳转到服务列表')) {
                    window.location.href = '/'
                }
            } else {
                alert('数据错误，请检查您的表单输入')
            }
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="h5" component="h3">
                        创建函数服务
                    </Typography>
                    <FormControl style={{ width: '100%' }}>
                        <br />
                        <Typography variant="h6" component="h5">
                            基本信息
                        </Typography>
                        <TextField
                            id="name"
                            label="服务名称"
                            style={{ margin: 8 }}
                            helperText="服务名必须仅包含小写英文字母，数字及中划线（-）"
                            onChange={this.handleChange('serviceName')}
                            fullWidth
                            margin="normal"
                        />
                        <br />
                        <Typography variant="h6" component="h5">
                            代码仓库配置
                        </Typography>
                        <TextField
                            id="gitRepo"
                            label="github仓库名"
                            style={{ margin: 8 }}
                            onChange={this.handleChange('gitRepo')}
                            helperText="关联的github仓库名，如GOLD-Bootstrap"
                            // fullWidth
                            margin="normal"
                        />
                        <TextField
                            id="gitMaintainer"
                            label="github用户名"
                            onChange={this.handleChange('gitMaintainer')}
                            style={{ margin: 8 }}
                            helperText="github仓库的创建者"
                            // fullWidth
                            margin="normal"
                        />
                        <TextField
                            id="gitBranch"
                            label="git分支"
                            onChange={this.handleChange('gitBranch')}
                            style={{ margin: 8 }}
                            helperText="设定代码仓库初始化时追踪的代码分支，默认为master"
                            // fullWidth
                            margin="normal"
                        />
                        <TextField
                            id="gitHead"
                            label="代码版本"
                            style={{ margin: 8 }}
                            onChange={this.handleChange('gitHead')}
                            helperText="设定代码仓库初始化时使用的代码版本（commit-id），默认使用分支最新提交"
                            // fullWidth
                            margin="normal"
                        />
                        <br />
                        <Typography variant="h6" component="h5">
                            容量配置
                        </Typography>
                        <Grid container>
                            <TextField
                                id="minInstance"
                                label="最小实例数量"
                                type="number"
                                defaultValue="1"
                                onChange={this.handleChange('minInstance')}
                                style={{ margin: 8, width: '47%' }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="maxInstance"
                                label="最大实例数量"
                                type="number"
                                defaultValue="4"
                                onChange={this.handleChange('maxInstance')}
                                style={{ margin: 8, width: '47%' }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <br />
                        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}>
                            创建服务
                            <Backup className={classes.rightIcon}/>
                        </Button> 
                    </FormControl>
                </Paper>
            </div>
        )
    }
}

CreateFunction.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateFunction);