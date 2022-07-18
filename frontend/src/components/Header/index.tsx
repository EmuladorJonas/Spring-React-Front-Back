import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>

            <div className="logo_container">
                <img src={logo} alt="DSMeta"/>
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por:
                        <a href="https://github.com/EmuladorJonas">EmuladorJonas &copy;</a>
                    </p>
            </div>

        </header>
    )
}

export default Header