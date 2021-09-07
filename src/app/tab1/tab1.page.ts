import { IFilme } from './../models/iFilme_models';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo='Filmes';
  listaFilmes: IFilme[] = [
    {
      nome: 'O Esquadrão Suicida',
      lancamento: '05/08/2021 (BR)',
      duracao: '1h 50m',
      classificacao: 7.6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wTS3dS2DJiMFFgqKDz5fxMTri.jpg',
      generos: ['Ação', 'Aventura', 'Fantasia', 'Comédia'],
      pagina:'/esquadrao'
    },
    {
      nome: 'Cinderela(2021)',
      lancamento: '03/09/2021 (US)',
      duracao: '1h 53m',
      classificacao: 6.9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hlwbrbdYfPzy3LBL7zOva3cKbM6.jpg',
      generos: ['fantasia', 'romance', 'comédia'],
      pagina:'/cinderela'
    },
    {
      nome:'Shang-Chi e a Lenda dos Dez Anéis (2021)',
      lancamento:'02/09/2021 (BR)',
      duracao:'2h 12m',
      classificacao: 8.0,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6T0r3jBs0xbmzVnM9u7e3vUXMYk.jpg',
      generos:['ação', 'aventura', 'fantasia'],
      pagina:'/'
    },
    {
      nome:'Jungle Cruise (2021)',
      lancamento:'29/07/2021 (BR)',
      duracao:'2h 7m',
      classificacao:7.9,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9E76j2DcQv8LdbX1Wa9jpbDBfw1.jpg',
      generos:['aventura', 'fantasia',' comédia',' ação'],
      pagina:'/jungle-cruise'
    },
    {
      nome:'Viúva Negra (2021)',
      lancamento:'08/07/2021 (BR)',
      duracao:'2h 15',
      classificacao:7.8,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg',
      generos:['Ação', 'Aventura',' Thriller',' Ficção científica'],
      pagina:'/viuva_negra'
    }
  ];

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async exibirAlertaFav() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Favoritar?',
      message: 'ao confirmar esta mensagem esta adicionando esse título entre os mais adimiráveis',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.presentToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'filme adicionado aos favoritos',
      duration: 2000
    });
    toast.present();
  }
}
