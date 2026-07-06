class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <style>
      footer {
        justify-content: center;
        width: 100%;
        height: 2.5rem; 
     
    }

    
    
    .footerContents{
        width: 90%;
        margin: 0 auto;
    }
    
    .copyright{
        font-size: .75rem;
        text-align: center;
    }
    
    .credits{
        font-size: 1rem;
    }
    
    .footerNav{
        list-style-type: none;
        display: flex;
        justify-content: center;
    }

    @media only screen and (max-width: 480px) {
 
        .footerNav{
            flex-direction: column;
            align-items: center;
            margin-bottom: 1rem;
         }
       }
    
    .footerNavItem{
            padding: 0 1rem 3rem 1rem;
            font-size: .75rem;
    }

    @media only screen and (max-width: 480px) {
 
        .footerNavItem{
            padding: 1rem 0 0 0;
         }
       }
    
    .footerNavItem :hover{
        color: #c9da2a;
    }
      </style>

       <footer>
              <div class="footerContents">

                  <div class="copyright">Copyright © 2022
                  </div>

                  <ul class="footerNav">
                    <li class="footerNavItem">Site created by <a href="https://www.columbusmuseum.org/">Columbus Museum of Art</a></li>
                    <li class="footerNavItem"><a href="/rights">Rights & Restrictions</a></li>

                  </ul>
                  
                </div>  

          </footer>
    `;
    }
}

customElements.define('footer-component', Footer);