import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-main',
  templateUrl: './news-main.component.html',
  styleUrls: ['./news-main.component.css']
})
export class NewsMainComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  categories = [
    {
      id: 1,
      name: "Muzika"
    },
    {
      id: 2,
      name: "Fotografija"
    },
    {
      id: 3,
      name: "Pozoriste"
    },
    {
      id:4,
      name: "Knjizevnost"
    },
    {
      id: 5,
      name: "Film"
    },
    {
      id: 6,
      name: "Slikarstvo"
    },
    {
      id: 7,
      name: "Vajarstvo"
    },
    {
      id: 8,
      name: "Balet"
    },
    {
      id: 9,
      name: "Festival"
    }
  ]

  news = [
    {
      categoryName: this.categories[0].name,
      categoryGroup: "Scena",
      title: "Koncert u Novom Sadu",
      author: "Beogradski Sindikat",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: new Date(),
      image:"https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      categoryName: this.categories[1].name,
      categoryGroup: "Likovna",
      title: "Izložba fotografija",
      author: "Galerija New Art",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: new Date(),
      image:"https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      categoryName: this.categories[3].name,
      categoryGroup: "Pisana",
      title: "Promocija knjige Ljudi bez grobova Enesa Halilovića",
      author: "Gradska biblioteka Novi Pazar",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: new Date(),
      image:"https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      categoryName: this.categories[2].name,
      categoryGroup: "Scena",
      title: "Nagrada Sterijino pozorište",
      author: "Sterijino pozorište",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: new Date(),
      image:"https://material.angular.io/assets/img/examples/shiba2.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
