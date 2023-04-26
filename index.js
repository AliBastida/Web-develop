const about_me = document.getElementById('about_me');
about_me.addEventListener('mouseover', showtext);

function showtext(){
    const ul = document.createElement('ul');
    ul.innerHTML = 
    '<li>Breathing since 1984</li> <li>Married in 2010</li> <li>Became a Mom in 2013</li> <li>Became a Mom again in 2015</li><li>Became a student of Software developer in 2022</li>';
    document.body.appendChild(ul);
}
