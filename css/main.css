:root{
    --black:#0A0A0A;
    --off-white:#F8F7F4;
    --editorial-blue:#4A6173;
    --gray-medium:#707070;

    --font-heading:Geist, sans-serif;
    --font-body:'Inter', sans-serif;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:var(--off-white);
    font-family:var(--font-body);
    overflow-x:hidden;
}

/* ==========================
   NAVBAR
========================== */

.navbar{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:80px;

    display:flex;
    justify-content:center;
    align-items:center;

    z-index:1000;

    transition:.4s ease;
}

.navbar.scrolled{
    backdrop-filter:blur(16px);
    background:rgba(248,247,244,.7);
}

.nav-links{
    display:flex;
    gap:48px;
  
}

.nav-links a{
    font-family:var(--font-heading);
    font-weight:500;
    letter-spacing:-0.02em;
  
    text-decoration:none;
    color:white;
    mix-blend-mode:difference;
    font-size:.95rem;
    transition:.3s;
}

.nav-links a:hover{
    color:var(--editorial-blue);
}

/* ==========================
   HERO
========================== */

.hero{
    height:100vh;
    position:relative;

    display:flex;
    align-items:flex-end;

    padding:80px;
}

.hero-video,
.hero-video video,
.overlay{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
}

.hero-video video{
    object-fit:cover;
}

.overlay{
    background:rgba(0,0,0,.55);
}

.hero-content{
    position:relative;
    z-index:2;

    color:var(--off-white);
    max-width:850px;
}

.eyebrow{
    text-transform:uppercase;
    letter-spacing:.15em;
    margin-bottom:24px;
}

.hero-title{
    font-family:var(--font-heading);

    font-size:clamp(4.5rem,9vw,9rem);

    line-height:.88;

    font-weight:700;

    letter-spacing:-0.06em;

    margin-bottom:24px;
}


.hero-subtitle{
    font-size:clamp(1.6rem,2vw,2.2rem);
    font-weight:300;
    line-height:1.25;
    max-width:520px;
    margin-bottom:70px;
}

.hero-cta{
    color:white;
    text-decoration:none;
    border-bottom:1px solid rgba(255,255,255,.5);
    padding-bottom:8px;
    margin-bottom:24px;
}

/* ==========================
   MOBILE MENU
========================== */

.mobile-menu{
    position:fixed;
    inset:0;

    background:rgba(10,10,10,.95);
    backdrop-filter:blur(20px);

    display:flex;
    justify-content:center;
    align-items:center;

    opacity:0;
    visibility:hidden;

    transition:.4s ease;

    z-index:999;
}

.mobile-menu.active{
    opacity:1;
    visibility:visible;
}

.mobile-menu nav{
    display:flex;
    flex-direction:column;
    gap:32px;
}

.mobile-menu a{
    color:white;
    text-decoration:none;
    font-size:2rem;
}

/* ==========================
   MOBILE
========================== */

.menu-toggle{
    display:none;
}

@media(max-width:767px){

    .nav-links{
        display:none;
    }

    .menu-toggle{
        display:flex;
        position:absolute;
        right:24px;

        background:none;
        border:none;

        flex-direction:column;
        gap:6px;
    }

    .menu-toggle span{
        width:24px;
        height:2px;
        background:white;
    }

    .hero{
        padding:24px;
    }

    .hero-title{
        font-size:4rem;
    }
     /* ==========================
       SELECTED WORK MOBILE
    ========================== */

    .selected-work{
        padding:120px 24px;
    }

    .section-heading{
        margin-bottom:64px;
    }

    .work-grid{
        display:flex;
        flex-direction:column;
        gap:80px;
    }

    .project-large,
    .project-small,
    .project-large.right{
        grid-column:auto;
    }
}

/* ==========================
   SELECTED WORK
========================== */

.selected-work{
    padding:160px 80px;
    background:var(--off-white);
}

.section-heading{
    margin-bottom:120px;
}

.section-label{
    font-family:var(--font-heading);
    font-size:1rem;
    color:var(--gray-medium);
}

.work-grid{
    max-width:1400px;
    margin:0 auto;

    display:grid;
    grid-template-columns:repeat(12,1fr);
    gap:48px;
}

.project{
    text-decoration:none;
    color:var(--black);

    display:flex;
    flex-direction:column;
}

.project-large{
    grid-column:span 8;
}

.project-small{
    grid-column:span 4;
}

.project-large.right{
    grid-column:5 / span 8;
}

.project-image{
    overflow:hidden;
    border-radius:12px;
    margin-bottom:24px;
}

.project-image img{
    width:100%;
    display:block;

    transition:transform .6s ease;
}

.project:hover img{
    transform:scale(1.03);
}

.project-category{
    font-size:.85rem;
    color:var(--editorial-blue);
    text-transform:uppercase;
    letter-spacing:.08em;
}

.project h3{
    font-family:var(--font-heading);

    font-size:2rem;

    margin-top:12px;
    margin-bottom:16px;
}

.project p{
    max-width:520px;
    line-height:1.7;
}
