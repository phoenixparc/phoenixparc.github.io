 <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Mobile Nav with JS, Step 4</title>
    
    <link rel="stylesheet" href="css/style.css">       
<style>
        
        
/* 
Reset
*/        


 #desktop-nav {
        display: none;
    }
  
        
        
/* 
Layout, mobile first
*/   
        
body,
section {
    padding-top: 13vw;
}     

article,p {
    margin: 1em 0;
}

footer {
    padding: 25vh 0;
}
        
#desktop-nav ul,        
h1,h2,h3,
p {
   padding: 0 20px;         
        }
               
        
/* 
Nav
*/        
        
        
/** 
Nav, general
**/
        

        
nav ul {
    list-style-type: none;
}

nav a {
    color: rgb(240,240,240);
    background-color: rgba(50,60,70,0.8);
} 

nav a:hover {
    color: #fff;
    background-color: rgb(255,128,0);
} 
        
/** 
Nav, mobile
**/       
        
#burger-icon {
    margin: 0 20px;
}

#burger-icon div {
    width: 30px;
    height: 5px;
    border-radius: 2px;
    background-color: rgba(150,160,170,0.9);
    margin: 3px 0 0 0;
}


#burger-icon:hover div {
    background-color: rgb(160,170,180);
}

#burger-icon:hover {
cursor: pointer;
    }

#mobile-nav ul {
    margin-top: 11px;
}

#mobile-nav ul li {
    margin-top: 1px;
}

#mobile-nav ul li a {
    display: inline-block;
    width: 100%;
    padding: 10px 20px; 
    font-size: 1em;
}


#mobile-nav {
    position: fixed;
    width: 100%;
    top: 0;
    height: 40px;
    padding-top: 5px;
    overflow-y: hidden;
    background-color: rgba(230,240,240,0.8);
}
        
        
/** 
Nav, desktop
**/   
        
#desktop-nav {
    position: fixed;
    top: 0;
}

#desktop-nav ul {
    display: flex;
}

#desktop-nav ul li a {
    padding: 3px 5px;
    margin-right: 2px;
}

        
        
/* 
Responsive design, mobile first 
*/
        
@media only screen and (min-width: 600px) {


    /* 
    Nav, desktop
    */

    #desktop-nav {
        display: block;
    }

    #mobile-nav {
        display: none;
    }

    /* 
    Layout, desktop 
    */   

    body,
    section {
        padding-top: 4vw;
    } 

    #desktop-nav ul,        
    h1,h2,h3,
    p {
        padding: 0 10vw;         
    }


}
    
    
</style>
    
<script>
        
     
        
        
function toggleMobileNav() {    
  var x = document.getElementById("mobile-nav");
  if (x.style.height === "195px") {
    x.style.height = "40px";
  } else {
    x.style.height = "195px";
  }
}
      
</script>
    
</head>
<body>
    <header>
        <h1>Mobile Navigation Menu with CSS and JS, Step 4</h1>
        
        <nav id="mobile-nav">

            <div id="burger-icon" onclick="toggleMobileNav()">
                <div></div>
                <div></div>                
                <div></div>             
            </div>
   
            <ul>
            <li><a href="#" onclick="document.getElementById('mobile-nav').style.height= '40px'">Top</a></li>
            <li><a href="#section1" onclick="document.getElementById('mobile-nav').style.height= '40px'">Section 1</a></li>   
            <li><a href="#section2" onclick="document.getElementById('mobile-nav').style.height= '40px'">Section 2</a></li>  
            <li><a href="#section3" onclick="document.getElementById('mobile-nav').style.height= '40px'">Section 3</a></li>  
            </ul>    
        </nav>
        
        <nav id="desktop-nav">
   
            <ul>
            <li><a href="#">Top</a></li>
            <li><a href="#section1">Section 1</a></li>     
            <li><a href="#section2">Section 2</a></li>    
            <li><a href="#section3">Section 3</a></li>  
            </ul>    
        </nav>
        
        <nav id="secondary-nav">
            <ul>
            <li><a href="mobile-nav-js-step3.html">Previous</a></li>
            <li><a href="index.html">Overview</a></li>
            <li><a href="mobile-nav-js-step5.html">Next</a></li>
            <li><a href="../downloads/exercise-03.zip">Download this Exercise</a></li>    
            </ul>
        </nav>
        

    
    </header>
    <main>
    <section id="section1">
        <h2>Overview</h2>
        <article>
            <h3>In comes JavaScript</h3>
            <p>
            Finally we are adding JavaScript: a function (in the script section of the head) to toggle the mobile navigation on click on the 'burger menu', as well as some inline scripts in the actual tags of the buttons of the mobile menu, to get rid of that menu on click.
            </p>
        
            <p>
            This basically works all fine, but it could be made a bit more elegant, which will happen in step 5. 
            </p>
            
            <p>
            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            </p>
        </article> 
    </section>
    
    <section id="section2">
        <h2>Section 2</h2>
        <article>
            <h3>Article</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
            </p>
        
            <p>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
            </p>
            
            <p>
            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            </p>
        </article> 
    </section>    
    
    <section id="section3">
        <h2>Section 3</h2>
        <article>
            <h3>Article</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
            </p>
        
            <p>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
            </p>
            
            <p>
            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            </p>
        </article> 
    </section>   
    </main>
    <footer>
  
        <p>
            Enno Hyttrek, 2019. This work is published under a <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons 4.0 license.</a>
        </p>
    
    </footer>
    

</body>
</html>
