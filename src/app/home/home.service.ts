import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

export interface Post {

  title: string;
  id?: number;
  number: string;
  name: string;
  src: string
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  postsCard: Post[] = [
    {title: 'Moscow Cinema',
      id: 1,
      number: '+374 60 154585',
      name: 'Moscow Cinema, is a cinema hall in the Armenian capital Yerevan, located at the Charles Aznavour Square, adjacent to Abovyan',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsEX5uYNmtCuglO3h63gpoje85h5qdGD5wEA&usqp=CAU',
    },
    {title: 'Cinema star',
      id: 2,
      number: '+374 98 568696',
      name: 'Submit your student ticket, get a SPECIAL PRICE from Monday to Wednesday, from 10:00 to 15:00: ',
      src: 'https://www.aysor.am/news_images/248/741501_3/f546d713c66b69_546d713c66f6c.jpg'
    },
    {title: 'nairi',
      id: 3,
      number: '+374 55 210203',
      name: 'Nairi Cinema, is the second-largest cinema hall in the Armenian capital of Yerevan, located on the intersection of Mashtots Avenue with the Isahakyan street at the central Kentron District. Opened in 1920, Nairi Cinema is the oldest movie theatre in Yerevan.',
      src: 'https://janarmenia.com/wp-content/uploads/2020/07/nairi-kinotatron.jpg',
    },
    {title: 'pioneer',
      id: 4,
      number: '+499 155 855 958',
      name: 'The most decent cinema in the city',
      src: 'https://storage.yandexcloud.net/moskvichmag/uploads/2019/11/pioner1163.png',
    },
    {title: 'Summer Pioneer in Gorky Park',
      id: 5,
      number: '+499 965 555 958',
      name: 'Cinema in the park with good sound',
      src: 'data:image/jpeg;base64,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',
    },
    {title: 'GUM cinema hall',
      id: 6,
      number: '+499 363 855 869',
      name: 'Chamber cinema in the main store of the country',
      src: 'https://gumrussia.com/local/templates/gum_main/images/kinozal/kino-new1-min.jpg',
    },
    {title: 'Movies Okko Afimoll City',
      id: 7,
      number: '+499 069 444 085',
      name: 'Presnenskaya nab., 2, TC "Afimall City',
      src: 'https://handofmoscow.com/wp-content/uploads/2019/03/454a73e88512ead8f81bf7c4fdb90c9a.jpg',
    },
    {title: 'Cinema Park Mega Teply Stan',
      id: 8,
      number: '+499 869 125 555',
      name: '41st km of MKAD, intersection with Kaluzhskoe highway, shopping',
      src: 'https://glocalabel.com/media/beingallery/uploads/mall/2016/08/09/mega-tepliy-stan-moskva.jpg',
    },
    {title: 'Cinema Park Filion',
      id: 9,
      number: '+499 458 212 363',
      name: 'Bagrationovskiy pr., 5, SEC "Filion"',
      src: 'https://avatars.mds.yandex.net/get-altay/223006/2a0000015b16dfd9b7c764c4210d63d06839/XXXL',
    }

  ];

  public esiminchSubject: Subject<any> = new Subject();


}
