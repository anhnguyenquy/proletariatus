import { ThemeProvider } from '@mui/material/styles'
import { Button } from '@mui/material'
import fptCover from '../../../../../../core/media/fpt_cover.png'
import fptLogo from '../../../../../../core/media/icons/page-logo.png'
import { theme } from '../../../../../../core/components'
import { useHistory } from 'react-router-dom'
import { useStyles } from './style'
const OfferItem = (): JSX.Element => {
    const history = useHistory()
    const classes = useStyles()
    return (
        <div className={classes['offer-item']}>
            
        </div>
    )
}
export default OfferItem