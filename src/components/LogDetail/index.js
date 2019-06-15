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
import querystring from 'querystring'
import { browserHistory } from 'react-router'

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

    state = {
        serviceId: '',
        operator: '',
        type: '',
        start: '',
        update: '',
        end: '',
        currentAction: '',
        log: '',
        reason: '',
        originBranch: '',
        originVersion: '',
        targetBranch: '',
        targetVersion: ''
    }
    
    transferServiceName(id) {
        if(id == '1') {
            return 'greeting-demo'
        } else if (id == '2') {
            return 'form-demo'
        } else {
            return 'greeting-demo'
        }
    }

    transferDate(raw) {
        console.log(raw)
        let date = new Date(parseInt(raw) * 1000)
        return date.toLocaleDateString() + " " + date.toLocaleTimeString()
    }

    transferType(raw) {
        if (raw == 'PUBLISH') {
            return '发布'
        } else if(raw == 'ROLL_BACK') {
            return '回滚'
        } else {
            return '未知'
        }
    }

    transferAction(raw) {
        if (raw == 'IMG_BUILDING') {
            return '镜像构建中'
        } else if (raw == 'IMG_PUSHING') {
            return '镜像上传中'
        } else if (raw == 'PUBLISHING') {
            return '服务发布中'
        } else if (raw == 'FINISH') {
            return '完成'
        } else if (raw == 'FAILED') {
            return '异常'
        } else {
            return '???'
        }
    }

    componentDidMount() {
        let qs = browserHistory.getCurrentLocation().hash.split('?')
        let query = querystring.parse(qs[1])
        let url = 'http://marklux.cn:8094/operate/log/detail?opId=' + query.id
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(json => {
            if (json.data) {
                this.setState({
                    serviceId: json.data.serviceId,
                    operator: json.data.operator,
                    type: json.data.type,
                    start: json.data.start,
                    update: json.data.update,
                    end: json.data.end,
                    currentAction: json.data.currentAction,
                    log: json.data.log,
                    reason: json.data.reason,
                    originBranch: json.data.originBranch,
                    originVersion: json.data.originVersion,
                    targetBranch: json.data.targetBranch,
                    targetVersion: json.data.targetVersion
                })
                console.log(this.state)
            }
        })
    }

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
                            value={this.transferServiceName(this.state.serviceId)}
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
                            value={this.transferType(this.state.type)}
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
                            value={this.state.originBranch}
                            style={{ margin: 8, width: '22%' }}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="originVersion"
                            label="原始版本"
                            value={this.state.originVersion}
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
                            value={this.state.targetBranch}
                            style={{ margin: 8, width: '22%' }}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="targetVersion"
                            label="目标版本"
                            value={this.state.targetVersion}
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
                            value={this.transferAction(this.state.currentAction)}
                            style={{ margin: 8, width: '31%' }}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="udpate"
                            label="更新时间"
                            value={this.transferDate(this.state.update)}
                            style={{ margin: 8, width: '31%' }}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="start"
                            label="开始时间"
                            value={this.transferDate(this.state.start)}
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
                            value={this.state.log}
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