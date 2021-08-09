import { Component, OnInit } from "@angular/core";

import { Hero } from "../hero";
import { UserGitHub } from "../service/userGitHub";
import { UserGitService } from "../service/userGitService";

@Component({
  selector: "app-hero-form",
  templateUrl: "./hero-form.component.html",
  styleUrls: ["./hero-form.component.css"],
  providers: [UserGitService]
})
export class HeroFormComponent implements OnInit {
  powers = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];

  model = new Hero(18, "Dr IQ", this.powers[0], "Chuck Overstreet");

  submitted = false;

  ensemble = ["super", "tu", "as", "gagne", "le", "droit", "de", "continuer"];

  userBernard: UserGitHub;

  constructor(private service: UserGitService) {}

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newHero() {
    this.model = new Hero(42, "", "");
  }

  skyDog(): Hero {
    let myHero = new Hero(
      42,
      "SkyDog",
      "Fetch any object at any distance",
      "Leslie Rollover"
    );
    console.log("My hero is called " + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  ngOnInit() {
    this.service.show().subscribe((res: UserGitHub) => {
      this.userBernard = res;
    });
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls["name"] && form.controls["name"].value; // Dr. IQ
  }

  /////////////////////////////
}
