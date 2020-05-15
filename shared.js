var underLines = document.querySelectorAll('.main-nav__item');
//console.dir(underLines);
//console.log(typeof(underLines[1]))
var toggleHamburgerMenu = document.querySelector(".hamburger-menu-icon");
var mobileNav = document.querySelector('.mobile-nav');
var backdrop = document.querySelector(".backdrop");



for (var i=0; i<underLines.length;i++){
    underLines[i].addEventListener("mouseover", function(){
        this.style.textDecoration="underline solid";
    });

    underLines[i].addEventListener("mouseout", function(){
        this.style.textDecoration="none";
    });
}

toggleHamburgerMenu.addEventListener("click", function(){
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});

backdrop.addEventListener("click", function() {
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';
});

