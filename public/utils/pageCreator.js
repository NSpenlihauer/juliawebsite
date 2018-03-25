var nlsManager = {
  namePage: '',
  connectionDone : false,
  initSocket: function(form, lang, callback)
  {
    if (form === undefined || lang == undefined)
    {
      alert("Pas d enom pour la page");
      return;
    }
    this.namePage = form;
    var self = this;
    this.socket = io();
    this.socket.on('connect', function(data) {
        var nameEmit = 'page' + self.namePage;
        self.socket.emit(nameEmit, lang);
        self.socket.emit('test');
        self.socket.on('page' + self.namePage + 'res', function(data){
          callback(data);
        });
    });
  },
  askFor: function(name, lang)
  {
    if (name === undefined || lang === undefined)
    {
      alert("Pas de ask || lang dans askFor");
    }
    var nameEmit = 'page' + name;
    console.log("gonna emit : " + nameEmit)
    this.socket.emit(nameEmit, 'fr');
    this.socket.on('page' + this.name + 'res', function(data){
      alert("on a le resultat");
    });
  }
};


var header = {
  createHeader: function(dest, from)
  {
    if (dest && from)
    {
      var header = document.createElement('div');
      header.setAttribute('id', 'header');
      header.setAttribute('class', 'header');

      var linkImg = document.createElement('a');
      if (from !== 'index')
      {
        linkImg.setAttribute('href', '../index.html');
      }
      var img = document.createElement('img');
      var pathImg = '../images/jackalsFactory.png';
      if (from == 'index')
      {
        pathImg = 'images/jackalsFactory.png';
      }
      img.setAttribute('src', pathImg);
      img.setAttribute('style', 'width: 157px; height: 78px;');
      linkImg.appendChild(img);
      header.appendChild(linkImg);

      dest.appendChild(header);
    }
    else {
      alert("Pas de dest || from  dans createHeader");
    }
  }
};
var sidebar = {
  createSideBarAndOpenBtn: function(from)
  {
    if (from === undefined)
    {
      from = 'index';
    }
    var self = this;
    var sideBar = document.createElement('div');
    sideBar.setAttribute('id', 'mySidenav');
    sideBar.setAttribute('class', 'sidenav');

    var closeBtn = document.createElement('a');
    closeBtn.setAttribute('href', 'javascript:void(0)');
    closeBtn.setAttribute('class', 'closebtn');
    closeBtn.onclick = function() {self.closeNav()};
    closeBtn.appendChild(document.createTextNode('X'));

    var introLink = document.createElement('a');
    introLink.setAttribute('href', '#intro');
    introLink.appendChild(document.createTextNode('Intro'));

    var objectifsLink = document.createElement('a');
    objectifsLink.setAttribute('href', '#objectifs');
    objectifsLink.appendChild(document.createTextNode('Objectifs'));

    var formationLink = document.createElement('a');
    formationLink.setAttribute('href', '#formation');
    formationLink.appendChild(document.createTextNode('Formation'));

    var expLink = document.createElement('a');
    expLink.setAttribute('href', '#experiences');
    expLink.appendChild(document.createTextNode('Expériences'));

    var competencesLink = document.createElement('a');
    competencesLink.setAttribute('href', '#competences');
    competencesLink.appendChild(document.createTextNode('Compétences'));



    var openBtn = document.createElement('i');
    openBtn.onclick = function() { self.openNav();};
    openBtn.setAttribute('class', 'fa fa-chevron-right chevron-right-side-bar');
    openBtn.setAttribute('z-index', '10');
    openBtn.setAttribute('style', 'position : fixed; top :10px; left: 10px;');




    sideBar.appendChild(closeBtn);

    sideBar.appendChild(introLink);
    sideBar.appendChild(objectifsLink);
    sideBar.appendChild(formationLink);
    sideBar.appendChild(expLink);
    sideBar.appendChild(competencesLink);

    document.body.appendChild(sideBar);
    document.body.appendChild(openBtn);
  },
  openNav: function() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    //document.body.style.backgroundColor = "rgba(215, 209, 246, 0.5)";
  },
  closeNav: function() {
    document.getElementById("mySidenav").style.width = "20px";
    document.getElementById("main").style.marginLeft = "0px";
    //document.body.style.backgroundColor = "rgba(215, 209, 246, 0.7)";
  }
};

var basePage = {
  createBasePage: function(from, callback)
  {
    if (from === undefined)
    {
      from = 'index';
    }
    if (header && sidebar)
    {
      var nls = nlsManager;
      nls.initSocket(from, 'fr', callback);

      var main = document.createElement('div');
      //sidebar.createSideBarAndOpenBtn(from);
      main.setAttribute('id', 'main');
      document.body.appendChild(main);
      return main;
    }
    else {
      alert("Pas de header && sidebar");
    }
  }
};
