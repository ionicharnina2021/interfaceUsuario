import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-jornada",
  templateUrl: "./jornada.page.html",
  styleUrls: ["./jornada.page.scss"],
})
export class JornadaPage implements OnInit {
  jornada = 5;
  fecha = Date.now();
  resultado = [
    { casa: "Tudelano", visitante: "Pozuelon", golesCasa: 4, golesFuera: 2 },
    { casa: "Plasencia", visitante: "Oropesa", golesCasa: 5, golesFuera: 1 },
    { casa: "Marmitako", visitante: "Rubezoco", golesCasa: 0, golesFuera: 0 },
    {
      casa: "Conquezuelo",
      visitante: "Ansueleño",
      golesCasa: 2,
      golesFuera: 4,
    },
    {
      casa: "San Chinchilla",
      visitante: "Globesano",
      golesCasa: 8,
      golesFuera: 5,
    },
  ];
  cronos = [
    { casa: 1, fuera: 0, minuto: 34 },
    { casa: 1, fuera: 1, minuto: 64 },
    { casa: 1, fuera: 2, minuto: 94 },
  ];
  constructor(private aler: AlertController, private route: Router) {}
  async pasaDato(event) {
    let extrasNavegacion: NavigationExtras = {
      state: {
        crono: this.cronos,
      },
    };
    this.route.navigate(["cronologia"], extrasNavegacion);
    // await (await this.aler.create({
    //   header: event.casa + ":" + event.visitante,
    //   subHeader: "cronologia de goles",

    //   message: "1:0 min 86",
    //   translucent: true,
    //   buttons: [
    //     {
    //       text: "Cancel",
    //       role: "cancel"
    //     },
    //   ],
    // })).present();
  }
  visible = true;
  segmentChanged(hola) {
    this.visible = !this.visible;
  }
  ngOnInit() {}
}
