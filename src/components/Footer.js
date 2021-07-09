import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        
        <p className="copyright">
         Built with <a href="http://gatsby-dimension.surge.sh">Gatsby.js</a> by <a href="https://blogsagar.netlify.app/"> Sagar Bhandari </a> with the template from <a href="http://www.adityaketkar.me"> Aditya Ketkar</a>  
        <br/>
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
