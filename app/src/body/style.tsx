import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'absolute',
        },
        component: {
            position: 'absolute',
            margin: '1%',
            height: '48%',
            width: '48%',
            border: 'dashed medium #808080',
            borderRadius: '2%',
            '&:hover': {
                backgroundColor: '#d3d3d3',
            },
        },
        center: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
        },
    }));

export default useStyles;