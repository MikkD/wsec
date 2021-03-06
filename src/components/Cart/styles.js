import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
        marginTop: '5%',
    },
    emptyButton: {
        minWidth: '150px',
        [theme.breakpoints.up('xs')]: {
            marginBottom: '5px',
        },
        [theme.breakpoints.up('xs')]: {
            marginRight: '20px',
        },
    },
    checkoutButton: {
        minWidth: '150px',
    },
    link: {
        textDecoration: 'none',
    },
    cardDetails: {
        display: 'flex',
        marginTop: '10%',
        width: '100%',
        justifyContent: 'space-between',
    },
    cardMed: {
        height: 0,
        paddingTop: '56.25%', // 16:
    }
}))

export default useStyles;