import css from 'components/Header/Header.module.css'
import Button from 'components/Button/Button'
import Box from 'components/Box/Box'

const Header = () => {
    return (
        <Box display='flex' alignItems='center' justifyContent="space-between">
            <Box display='flex' alignItems='center' as="nav">
               <Box display='flex' as="ul" mr="272px">
                    <li className={css.navListItem}>
                        <a className={css.navLink}>Home</a>
                    </li>
                    <li className={css.navListItem}>
                        <a className={css.navLink}>About</a>
                    </li>
                    <li className={css.navListItem}>
                        <a className={css.navLink}>Contact</a>
                    </li>       
                </Box>
                <a className={css.logo}>Landie</a>     
            </Box>   
            <Button>Buy Now</Button>
        </Box>
        
    )
}

export default Header;
