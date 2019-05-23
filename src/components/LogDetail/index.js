import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TrendingFlat from '@material-ui/icons/TrendingFlat';

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

class LogDetail extends React.Component {
    render() {
        const { classes } = this.props;

        let mocklog = '{"stream":"Step 1/11 : FROM registry.cn-qingdao.aliyuncs.com/gold-faas/gold-faas-wrapper:0.7.beta"}\n{"stream":" ---\u003e 3e80d1ae079b"}\n{"stream":"Step 2/11 : WORKDIR /home"}\n{"stream":" ---\u003e 3b68b933c7fd"}\n' 
        + '{"stream":"Step 3/11 : ARG REPO_URL"}\n{"stream":" ---\u003e Running in f0d775600eb4"}\n{"stream":" ---\u003e 6ed4fd47b83a"}\n{"stream":"Step 4/11 : ARG REPO_NAME"}\n{"stream":" ---\u003e Running in 381f5675eeab"}\n' 
        + '{"stream":" ---\u003e c1784c62a323"}\n{"stream":"Step 5/11 : ARG BRANCH"}\n{"stream":" ---\u003e Running in 427efc63c4a7"}\n{"stream":" ---\u003e 20e67cca0f06"}\n{"stream":"Step 6/11 : ARG COMMIT_ID"}'

        return (
            <div>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="h5" component="h3">
                        操作执行单
                    </Typography>
                    <br />
                    <Typography variant="h6" component="h3">
                        基本信息
                    </Typography>
                    <br />
                    <Grid container>
                        <TextField
                            id="service"
                            label="目标服务"
                            defaultValue="greeting-service"
                            style={{ margin: 8, width: '31%' }}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="operator"
                            label="执行人"
                            defaultValue="lumin"
                            style={{ margin: 8, width: '31%' }}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="type"
                            label="操作类型"
                            defaultValue="发布"
                            style={{ margin: 8, width: '31%' }}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                    </Grid>
                    <br />
                    <Typography variant="h6" component="h3">
                        版本信息
                    </Typography>
                    <br />
                    <Grid container>
                        <TextField
                            id="originBranch"
                            label="原始分支"
                            defaultValue="master"
                            style={{ margin: 8, width: '22%' }}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="originVersion"
                            label="原始版本"
                            defaultValue="－"
                            style={{ margin: 8, width: '22%' }}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TrendingFlat style={{margin: 8}}/>
                        <TextField
                            id="targetBarnch"
                            label="目标分支"
                            defaultValue="master"
                            style={{ margin: 8, width: '22%' }}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="targetVersion"
                            label="目标版本"
                            defaultValue="fa2cd15"
                            style={{ margin: 8, width: '22%' }}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                    </Grid>
                    <br />
                    <Typography variant="h6" component="h3">
                        动态
                    </Typography>
                    <br />
                    <Grid container>
                        <TextField
                            id="currentAction"
                            label="当前动作"
                            defaultValue="镜像构建中"
                            style={{ margin: 8, width: '31%' }}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="udpate"
                            label="更新时间"
                            defaultValue="2019-04-22 10:06:45"
                            style={{ margin: 8, width: '31%' }}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="start"
                            label="开始时间"
                            defaultValue="2019-04-22 10:05:31"
                            style={{ margin: 8, width: '31%' }}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                    </Grid>
                    <br />
                    <Typography variant="h6" component="h3">
                        日志输出
                    </Typography>
                    <br />
                    <TextField
                            id="log"
                            value={mocklog}
                            multiline
                            style={{ margin: 8, width: '96%' }}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                </Paper>
            </div>
        )
    }
}

LogDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogDetail);