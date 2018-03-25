$(document).ready(function() {
    var IndexClass =
    {
      packet : null,
      load: function()
      {
        if (basePage)
        {
          this.main = basePage.createBasePage('index', this.callback_NLS.bind(this));
          sidebar.createSideBarAndOpenBtn('index');
          sidebar.openNav();
          var self = this;
          setTimeout(function() {self.dirtyFunc();}, 100);
        }
        else
        {
          alert("Pas de basePage");
        }
      },
      callback_NLS: function(data)
      {
        this.packet = data;

        this.createMain(this.main);
      },
      dirtyFunc: function()
      {
        var bg_1 = document.getElementById('intro');
        var sizeIntro = $('#divIntro').height();
        var sizeBgIntro = $('.image-1-parallax').height();
        console.log("intro : " + sizeIntro);
        console.log("bg : " + sizeBgIntro);
        if (sizeIntro > sizeBgIntro)
        {
          var min = sizeIntro  + 20 + "px";
          console.log("coucou");
          bg_1.style.minHeight = min;
        }
        else if (sizeIntro < sizeBgIntro - 40)
        {
          var min = "800px";
          console.log("coucou2");
          bg_1.style.minHeight = min;
        }

        //
          var bg_2 = document.getElementById('formation');
          var sizeIntro = $('#divFormation').height();
          var sizeBgIntro = $('.image-2-parallax').height();
          console.log("intro : " + sizeIntro);
          console.log("bg : " + sizeBgIntro);
          if (sizeIntro > sizeBgIntro)
          {
            var min = sizeIntro  + 100 + "px";
            console.log("coucou");
            bg_2.style.minHeight = min;
          }
          else if (sizeIntro < sizeBgIntro - 110)
          {
            var min = "1100px";
            console.log("coucou2");
            bg_2.style.minHeight = min;
          }

          //
            var bg_3 = document.getElementById('experiences');
            var sizeIntro = $('#divExp').height();
            var sizeBgIntro = $('#experiences').height();
            console.log("intro : " + sizeIntro);
            console.log("bg : " + sizeBgIntro);
            if (sizeIntro > sizeBgIntro)
            {
              var min = sizeIntro  + 200 + "px";
              console.log("coucou");
              bg_3.style.minHeight = min;
            }
            else if (sizeIntro < sizeBgIntro - 210)
            {
              var min = "1100px";
              console.log("coucou2");
              bg_3.style.minHeight = min;
            }

      },
      createMain: function(main)
      {
        var mainDiv = document.createElement('div');
        mainDiv.setAttribute("z-index", "1");

        mainDiv.appendChild(this.createIntro());
        mainDiv.appendChild(this.createObjectifs());
        mainDiv.appendChild(this.createFormation());
        mainDiv.appendChild(this.createExp());
        mainDiv.appendChild(this.createCompetences());

        $(window).resize(function()
        {
          var bg_1 = document.getElementById('intro');
          var sizeIntro = $('#divIntro').height();
          var sizeBgIntro = $('.image-1-parallax').height();
          console.log("intro : " + sizeIntro);
          console.log("bg : " + sizeBgIntro);
          if (sizeIntro > sizeBgIntro)
          {
            var min = sizeIntro  + 20 + "px";
            console.log("coucou");
            bg_1.style.minHeight = min;
          }
          else if (sizeIntro < sizeBgIntro - 40)
          {
            var min = "800px";
            console.log("coucou2");
            bg_1.style.minHeight = min;
          }

          //
            var bg_2 = document.getElementById('formation');
            var sizeIntro = $('#divFormation').height();
            var sizeBgIntro = $('.image-2-parallax').height();
            console.log("intro : " + sizeIntro);
            console.log("bg : " + sizeBgIntro);
            if (sizeIntro > sizeBgIntro)
            {
              var min = sizeIntro  + 100 + "px";
              console.log("coucou");
              bg_2.style.minHeight = min;
            }
            else if (sizeIntro < sizeBgIntro - 110)
            {
              var min = "1100px";
              console.log("coucou2");
              bg_2.style.minHeight = min;
            }

            //
              var bg_3 = document.getElementById('experiences');
              var sizeIntro = $('#divExp').height();
              var sizeBgIntro = $('#experiences').height();
              console.log("intro : " + sizeIntro);
              console.log("bg : " + sizeBgIntro);
              if (sizeIntro > sizeBgIntro)
              {
                var min = sizeIntro  + 200 + "px";
                console.log("coucou");
                bg_3.style.minHeight = min;
              }
              else if (sizeIntro < sizeBgIntro - 210)
              {
                var min = "1100px";
                console.log("coucou2");
                bg_3.style.minHeight = min;
              }

        });
        this.main.appendChild(mainDiv);
      },
      createImageInfo: function(json)
      {
        var res = document.createElement('div');
        res.setAttribute('class', 'row');
        res.setAttribute('style', 'margin-top : 20px');

        var paddingLeft = document.createElement('div');
        paddingLeft.setAttribute('class', 'col-md-3');

        var paddingRight = document.createElement('div');
        paddingRight.setAttribute('class', 'col-md-3');

        var linkedInDiv = document.createElement('a');
        linkedInDiv.setAttribute('href', 'https://www.linkedin.com/in/julia-fath-b760b6109');
        linkedInDiv.setAttribute('class', 'col-md-2');
        var imageLinkedIn = document.createElement('img');
        imageLinkedIn.setAttribute('class', 'imageInfo center-div');
        imageLinkedIn.setAttribute('src', json.imageLinkedIn);
        linkedInDiv.appendChild(imageLinkedIn);

        var mailDiv = document.createElement('a');
        mailDiv.setAttribute('href', 'mailto:julia.fath@hotmail.fr');
        mailDiv.setAttribute('class', 'col-md-2');
        var imageMail = document.createElement('img');
        imageMail.setAttribute('class', 'imageInfo center-div');
        imageMail.setAttribute('src', json.imageMail);
        mailDiv.appendChild(imageMail);

        var pdfDiv = document.createElement('a');
        pdfDiv.setAttribute('href', '/pdf/Julia-Fath.pdf');
        pdfDiv.setAttribute('class', 'col-md-2');
        var imagePDF = document.createElement('img');
        imagePDF.setAttribute('class', 'imageInfo center-div');
        imagePDF.setAttribute('src', json.imagePDF);
        pdfDiv.appendChild(imagePDF);


        res.appendChild(paddingLeft);
        res.appendChild(linkedInDiv);
        res.appendChild(mailDiv);
        res.appendChild(pdfDiv);
        res.appendChild(paddingRight);
        return res;
      },
      createCompetences : function()
      {




        var res = document.createElement('div');
        res.setAttribute('class', 'image-3-parallax row');
        res.setAttribute('id', 'competences');
        var json = this.packet.competences;

        var rightDiv = document.createElement('div');
        rightDiv.setAttribute('class', 'col-md-1');
        var leftDiv = document.createElement('div');
        leftDiv.setAttribute('class', 'col-md-1');

        var innerDiv = document.createElement('div');
        innerDiv.setAttribute('class', 'col-md-10');

        var title = document.createElement('div');
        title.setAttribute('class', 'center-div title');
        title.appendChild(document.createTextNode(json.title));

        var row = document.createElement('div');
        row.setAttribute('class', 'row');

        // Card langues
        var divLangues = document.createElement('div');
        divLangues.setAttribute('class', 'col-md-5');

        var cardLangue = document.createElement('div');
        cardLangue.setAttribute('class', 'card');
        var titleLangue = document.createElement('h1');
        titleLangue.setAttribute('class', 'cardTitle');
        titleLangue.appendChild(document.createTextNode(json.langues.title));

        var listLangues = document.createElement('lu');
        for (var i = 0; i < json.langues.list.length; i++)
        {
          var textList = document.createElement('li');
          textList.setAttribute('style', 'margin-left: 30px; font-weight: bold;');
          textList.appendChild(document.createTextNode(json.langues.list[i].text));
          listLangues.appendChild(textList);
        }
        cardLangue.appendChild(titleLangue);
        cardLangue.appendChild(listLangues);
        divLangues.appendChild(cardLangue);

        // Card bureau
        var divBureautique = document.createElement('div');
        divBureautique.setAttribute('class', 'col-md-5');

        var cardBurotique = document.createElement('div');
        cardBurotique.setAttribute('class', 'card');
        var titleBurotique = document.createElement('h1');
        titleBurotique.setAttribute('class', 'cardTitle');
        titleBurotique.appendChild(document.createTextNode(json.bureautique.title));

        var listBurotiques = document.createElement('lu');
        for (var i = 0; i < json.bureautique.list.length; i++)
        {
          var textList = document.createElement('li');
          textList.setAttribute('style', 'margin-left: 30px; font-weight: bold;');
          textList.appendChild(document.createTextNode(json.bureautique.list[i].text));
          listBurotiques.appendChild(textList);
        }
        cardBurotique.appendChild(titleBurotique);
        cardBurotique.appendChild(listBurotiques);
        divBureautique.appendChild(cardBurotique);


        var rowCard = document.createElement('div');
        rowCard.setAttribute('class', 'row');

        var paddingLeftCard = document.createElement('div');
        paddingLeftCard.setAttribute('class', 'col-md-1');

        var paddingInnerCard = document.createElement('div');
        paddingInnerCard.setAttribute('class', 'col-md-2');

        var paddingRightCard = document.createElement('div');
        paddingRightCard.setAttribute('class', 'col-md-1');

        rowCard.appendChild(paddingLeftCard);
        rowCard.appendChild(divLangues);
        //rowCard.appendChild(paddingInnerCard);
        rowCard.appendChild(divBureautique);
        rowCard.appendChild(paddingRightCard);

        rowCard.setAttribute('style', 'margin-top : 30px');

        innerDiv.appendChild(title);
        innerDiv.appendChild(rowCard);

        res.appendChild(leftDiv);
        res.appendChild(innerDiv);
        res.appendChild(rightDiv);

        return res;
      },
      createObjectifs : function()
      {
        var res = document.createElement('div');
        res.setAttribute('class', 'bg-objectifs');
        res.setAttribute('id', 'objectifs');
        var json = this.packet.objectifs;

        var rightDiv = document.createElement('div');
        rightDiv.setAttribute('class', 'col-md-1 intro');
        var leftDiv = document.createElement('div');
        leftDiv.setAttribute('class', 'col-md-1 intro');

        var innerDiv = document.createElement('div');
        innerDiv.setAttribute('class', 'col-md-10 intro');

        // Nom
        var title = document.createElement('div');
        title.setAttribute('class', 'center-div title');
        title.appendChild(document.createTextNode(json.title));

        var row = document.createElement('div');
        row.setAttribute('style', 'margin-top : 20px');
        row.setAttribute('class', 'row');

        // Photo
        var photo = document.createElement('div');
        photo.setAttribute('class', 'col-md-4');
        var image = document.createElement('img');
        image.setAttribute('src', json.image);
        image.setAttribute('class', 'imageObjectifs');
        image.setAttribute('style', 'margin-right: 10px !important;');
        photo.appendChild(image);
        //Texte
        var listText = document.createElement('lu');
        listText.setAttribute('class', 'col-md-12 objectif-text');
        listText.setAttribute('style', 'marging-left : 10px; margin-top : 10px;');
        for (var i = 0; i < json.listText.length; i++)
        {
          var text = document.createElement('li');
          text.appendChild(document.createTextNode(json.listText[i].text));
          listText.appendChild(text);
        }
        //text.appendChild(document.createTextNode(json.listText));

        //row.appendChild(photo);
        row.appendChild(listText);

        innerDiv.appendChild(title);
        innerDiv.appendChild(row);
        //innerDiv.appendChild();

        res.appendChild(leftDiv);
        res.appendChild(innerDiv);
        res.appendChild(rightDiv);
        return res;
      },
      parseFormation: function(json)
      {
        var res = document.createElement('div');
        if (json !== undefined)
        {
          res.setAttribute('class', 'entries timeline');


          for (var i = 0; i < json.elem.length; i++)
          {
            var item = document.createElement('div');
            item.setAttribute('class', 'item');

              var image = document.createElement('div');
              image.setAttribute('class', 'image');

                var imgSrc = document.createElement('img');
                imgSrc.setAttribute('src', json.elem[i].imageSrc);
                imgSrc.setAttribute('style', 'height : 70px; width : 70px');

                var spanImage = document.createElement('span');
                spanImage.appendChild(document.createTextNode(json.elem[i].imageText));


                image.appendChild(imgSrc);
                image.appendChild(spanImage);
              item.appendChild(image);

              var details = document.createElement('div');
              details.setAttribute('class', 'details');

                var divDetails = document.createElement('div');
                var title = document.createElement('h1');
                title.appendChild(document.createTextNode(json.elem[i].title));
                var text = document.createElement('p');
                text.appendChild(document.createTextNode(json.elem[i].text));
                divDetails.appendChild(title);
                divDetails.appendChild(text);

                details.appendChild(divDetails);
              item.appendChild(details);
              res.appendChild(item);
          }
        }
        else {
          alert("Pas de JSON Parcours");
        }
        return res;
      },
      parseExperiences: function(json)
      {
        var res = document.createElement('div');
        if (json !== undefined)
        {
          res.setAttribute('class', 'entries timeline');


          for (var i = 0; i < json.elem.length; i++)
          {
            var item = document.createElement('div');
            item.setAttribute('class', 'item');

              var image = document.createElement('div');
              image.setAttribute('class', 'image');

                var imgSrc = document.createElement('img');
                imgSrc.setAttribute('src', json.elem[i].imageSrc)
                imgSrc.setAttribute('style', 'height : 70px; width : 70px')

                var spanImage = document.createElement('span');
                spanImage.appendChild(document.createTextNode(json.elem[i].imageText));


                image.appendChild(imgSrc);
                image.appendChild(spanImage);
              item.appendChild(image);

              var details = document.createElement('div');
              details.setAttribute('class', 'details');

                var divDetails = document.createElement('div');
                var title = document.createElement('h1');
                title.appendChild(document.createTextNode(json.elem[i].title));
                var text = document.createElement('p');
                text.appendChild(document.createTextNode(json.elem[i].text));
                var list = document.createElement('lu');
                for (var j = 0; j < json.elem[i].listText.length; j++)
                {
                  var textList = document.createElement('li');
                  textList.setAttribute('style', 'margin-left: 30px;')
                  textList.appendChild(document.createTextNode(json.elem[i].listText[j].text));
                  list.appendChild(textList);
                }

                divDetails.appendChild(title);
                divDetails.appendChild(text);
                divDetails.appendChild(list);

                details.appendChild(divDetails);
              item.appendChild(details);
              res.appendChild(item);
          }
        }
        else {
          alert("Pas de JSON Parcours");
        }
        return res;
      },
      createExp : function()
      {
        var res = document.createElement('div');
        res.setAttribute('class', 'bg-experiences');
        res.setAttribute('id', 'experiences');
        var json = this.packet.exp;


        var rightDiv = document.createElement('div');
        rightDiv.setAttribute('class', 'col-md-1 intro');
        var leftDiv = document.createElement('div');
        leftDiv.setAttribute('class', 'col-md-1 intro');

        var innerDiv = document.createElement('div');
        innerDiv.setAttribute('class', 'col-md-10 intro');
        innerDiv.setAttribute('id', 'divExp');

        // Nom
        var title = document.createElement('div');
        title.setAttribute('class', 'center-div title');
        title.appendChild(document.createTextNode(json.title));


        innerDiv.appendChild(title);
        innerDiv.appendChild(this.parseExperiences(json));

        res.appendChild(leftDiv);
        res.appendChild(innerDiv);
        res.appendChild(rightDiv);
        return res;
      },
      createFormation : function()
      {
        var res = document.createElement('div');
        res.setAttribute('class', 'image-2-parallax');
        res.setAttribute('id', 'formation');
        var json = this.packet.formation;


        var rightDiv = document.createElement('div');
        rightDiv.setAttribute('class', 'col-md-2 intro');
        var leftDiv = document.createElement('div');
        leftDiv.setAttribute('class', 'col-md-2 intro');

        var innerDiv = document.createElement('div');
        innerDiv.setAttribute('class', 'col-md-8 intro');
        innerDiv.setAttribute('id', 'divFormation');

        // Nom
        var title = document.createElement('div');
        title.setAttribute('class', 'center-div title');
        title.appendChild(document.createTextNode(json.title));


        innerDiv.appendChild(title);
        innerDiv.appendChild(this.parseFormation(json));

        res.appendChild(leftDiv);
        res.appendChild(innerDiv);
        res.appendChild(rightDiv);
        return res;
      },
      createIntro : function()
      {
        var res = document.createElement('div');
        res.setAttribute('class', 'image-1-parallax');
        res.setAttribute('id', 'intro');
        var json = this.packet.intro;

        var rightDiv = document.createElement('div');
        rightDiv.setAttribute('class', 'col-md-2 intro');
        var leftDiv = document.createElement('div');
        leftDiv.setAttribute('class', 'col-md-2 intro');

        var innerDiv = document.createElement('div');
        innerDiv.setAttribute('class', 'col-md-8 intro');
        innerDiv.setAttribute('id', 'divIntro');
        //innerDiv.setAttribute('class', 'intro');

        // Photo
        var photo = document.createElement('div');
        photo.setAttribute('class', 'center-div');
        var image = document.createElement('img');
        image.setAttribute('src', json.image);
        image.setAttribute('class', 'imageIntro center-div');
        photo.appendChild(image);

        // Nom
        var name = document.createElement('div');
        name.setAttribute('class', 'center-div nom');
        name.appendChild(document.createTextNode(json.name));

        // info
        var info = document.createElement('div');
        info.setAttribute('class', 'center-div nom');

        var statut = document.createElement('div');
        statut.setAttribute('class', 'center-div info');
        statut.setAttribute('style', 'font-weight: bold');
        statut.appendChild(document.createTextNode(json.info.statut));

        var tel = document.createElement('div');
        tel.setAttribute('class', 'center-div info');
        tel.appendChild(document.createTextNode(json.info.tel));

        var date = document.createElement('div');
        date.setAttribute('class', 'center-div info');
        date.appendChild(document.createTextNode(json.info.date));

        var permis = document.createElement('div');
        permis.setAttribute('class', 'center-div info');
        permis.appendChild(document.createTextNode(json.info.permis));

        var mail = document.createElement('div');
        mail.setAttribute('class', 'center-div info');
        mail.appendChild(document.createTextNode(json.info.mail));

        info.appendChild(statut);
        info.appendChild(mail);
        info.appendChild(date);
        info.appendChild(tel);
        info.appendChild(permis);
        info.appendChild(this.createImageInfo(json.info));

        //Ajout innerDiv
        innerDiv.appendChild(photo);
        innerDiv.appendChild(name);
        innerDiv.appendChild(info);

        res.appendChild(leftDiv);
        res.appendChild(innerDiv);
        res.appendChild(rightDiv);
        return res;
      }
    };
    IndexClass.load();
});
