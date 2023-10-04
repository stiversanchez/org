import "./footer.css";
const Footer = ()=>{
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
        <div className="redes">
        <a href='https://github.com/stiversanchez'> 
            <img className="icono" src="/img/github.png" alt="Github"/>
        </a>
        <a href='https://www.linkedin.com/in/stiver-sanchez-palacios-a80aa6262/'> 
            <img className="icono" src="/img/linkedin.png" alt="linkdin" />
        </a>
        <a href='https://www.instagram.com/stiver_sanchez/'> 
            <img src="/img/instagram.png" alt="instagram" />
        </a>
        </div>
        <img src='/img/Logo.png' alt='org' /> 
        <strong>Desarrollado por Stiver Sánchez Palacios</strong>
    </footer>
}
export default Footer;