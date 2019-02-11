import { Injectable } from '@angular/core';
import { IPersonalInfo } from '../models/personal-info';
import { ITextBlockWithDate } from '../models/text-block-with-date';
import { ITextBlock } from '../models/text-block';
import { IProjectBlock } from '../models/project-block';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly _personalInfo: IPersonalInfo;
  private readonly _bio: string;
  private readonly _education: ITextBlockWithDate[];
  private readonly _workExperience: ITextBlockWithDate[];
  private readonly _skills: ITextBlock[];
  private readonly _projects: IProjectBlock[];

  constructor() {
    this._personalInfo = {
      firstName: 'Sorin-Ionut',
      lastName: 'Zamfir',
      email: 'dexterionut@gmail.com',
      phone: '+40761546038',
      address: 'Bucuresti, Sector 4'
    };

    this._bio = 'Student la licență , Calculatoare si Tehnologia Informatiei, Facultatea de Matematică și Informatică, ' +
      'Universitatea București. Sunt o persoana ambitioasa, nu refuz niciodata o provocare si nu ma dau batut foarte usor, ' +
      'pasiunile mele cele mai mari fiind programarea si tehnologiile web.';

    this._education = [
      {
        startDate: '2015',
        endDate: 'Prezent',
        title: 'Facultatea de Matematica si Informatica, Universitatea Bucuresti',
        contentLines: [
          'Calculatoare si Tehnologia Informatiei'
        ]
      },
      {
        startDate: '2011',
        endDate: '2015',
        title: 'Liceul Teoretic Zimnicea',
        contentLines: [
          'Matematica Informatica'
        ]
      }
    ];

    this._workExperience = [
      {
        startDate: '07.2018',
        endDate: 'Prezent',
        title: 'Gameloft Romania',
        contentLines: [
          'Backend web developer',
          'Tehnologii: Java, Python, PHP',
        ]
      },
      {
        startDate: '06.2016',
        endDate: '07.2018',
        title: 'Be IT Systems',
        contentLines: [
          'Full stack web developer',
          'Tehnologii: PHP, HTML, CSS, JavaScript',
          'Framework-uri: Laravel, AngularJS 1, Angular 2+, Bootstrap 3',
        ]
      }
    ];

    this._skills = [
      {
        title: 'PHP & MySQL',
        contentLines: [
          'Cunostinte solide dobandite in urma dezvoltarii de aplicatii web lucrand cu framework-ul Laravel, in special ' +
          'aplicatii backend de tip RESTful care expun JSON-uri.'
        ]
      },
      {
        title: 'AngularJS 1 & Angular 2+',
        contentLines: [
          'Cunostinte solide dobandite in urma dezvoltarii de aplicatii web lucrand cu framework-ul Laravel, in special ' +
          'aplicatii backend de tip RESTful care expun JSON-uri.'
        ]
      },
      {
        title: 'Java (Spring Boot)',
        contentLines: [
          'Cunostinte de baza dobandite in urma realizarii unui backend de tip RESTful pentru administrarea unui magazin online.'
        ]
      },
      {
        title: 'Python',
        contentLines: [
          'Cunostinte de baza dobandite in urma realizarii unei aplicatii de introducere in Computer Vision de ' +
          'procesare si reconstructie a imaginilor, dar si in urma crearii unor scripturi de automatizare si procesare de date'
        ]
      },
      {
        title: 'Git',
        contentLines: [
          'Cunostinte minime de branching, merging, pushing dobandite in urma folosirii sistemului de versionare la ' +
          'toate proiectele in care am fost implicat'
        ]
      },
    ];

    this._projects = [
      {
        startDate: '20.04.2018',
        endDate: '06.06.2018',
        title: 'Budget planner',
        description: 'Acesta este un mic proiect pentru facultate. Obiectivul aplicatiei este de a te ajuta sa-ti ' +
          'urmaresti si manageriezi veniturile si cheltuielile, introducand fiecare suma pe care o primesti si pe ' +
          'care o cheltuiesti, dar si sa urmaresti progresul unui target de economie setat, cat si cheltuielile pe care ' +
          'le ai intr-o anumita perioada.',
        technologies: [
          'Backend: C#, .NET Core, Entiy Framework, MySQL',
          'Frontend: HTML, CSS, Javascript, Angular 5+, Bootstrap 3',
          'Frontend mobile: Swift 4',
        ]
      },
      {
        startDate: '13.04.2018',
        endDate: '01.06.2018',
        title: 'Platforma cercetare',
        description: 'Am ajutat la implementarea unei plaforme de cercetare pentru o universitate. ' +
          'Aplicatia prezinta o functionalitate minimala unde se puteau adauga metadate despre ' +
          'carti/articole/conferinte stiintifice, cat si despre autori si co-autori.',
        technologies: [
          'Backend: PHP, MySQL, Laravel',
          'Frontend: HTML, CSS, Javascript, AngularJS, Bootstrap 3',
        ]
      },
      {
        startDate: '03.2018',
        endDate: '04.2018',
        title: 'Platforma management business servere',
        description: 'Aplicatia este folosita pentru managementul unui business de inchiriere servere. ' +
          'Ca functionalitati aplicatia contine: ' +
          'o interfata administrare utilizatori produse, servere, ip-uri, plati; ' +
          'interfata clientului unde isi poate urmari serviciile active, stirile legate de starea servelor, platile; ' +
          'un sistem de referral(invita prieten); ' +
          'un forum atat pt knowledge base cat si pentru intrebari si raspunsuri; ' +
          '',
        technologies: [
          'Backend: PHP, MySQL, Laravel',
          'Frontend: HTML, CSS, Javascript, AngularJS, Bootstrap 3',
        ]
      },
      {
        startDate: '11.2017',
        endDate: '03.2018',
        title: 'Platforma in genul UberEats(v2)',
        description: 'Am ajutat atat la proiectarea bazei de date, cat si la implementarea sistemului ce are la ' +
          'baza un backend de tip RESTful.',
        technologies: [
          'Backend: PHP, MySQL, Laravel',
          'Frontend: HTML, CSS, Javascript, Angular 5, Angular Material, Bootstrap 3',
        ]
      },
      {
        startDate: '08.11.2017',
        endDate: '09.12.2017',
        title: 'Mozaic imagini',
        description: 'Un proiect pentru facultate care consta in scalarea si construirea unei imagini date din imagini ' +
          'mai mici, astfel ca la ZOOM OUT, imaginea rezultata semana cu cea data, iar la ZOOM IN se puteau observa ' +
          'imaginile mici. Acest proiect a fost unul foarte interesant fiind o introducere in Computer Vision.',
        technologies: [
          'Python, OpenCV, NumPy',
        ]
      },
      {
        startDate: '13.05.2017',
        endDate: '22.05.2017',
        title: 'Admin panel magazin online',
        description: 'A fost un proiect la care am lucrat pentru facultate, cu ocazia caruia am dobandit cunosinte de ' +
          'baza in utilizarea framework-ului Spring Boot si tot odata prima interactiune pe care am avut-o cu Angular 2+.',
        technologies: [
          'Backend: Java, Mysql, Spring Boot, Hibernate',
          'Frontend: HTML, CSS, Javascript, Angular 2, Bootstrap 3',
        ]
      },
      {
        startDate: '05.2017',
        endDate: '07.2017',
        title: 'Aplicatie externa pentru sistemul intern al firmei de asigurari',
        description: 'Am implementat un sistem extern care se conecteaza la anumite servicii din cadrul ' +
          'sistemului intern al firmei de asigurari(vezi mai jos) si expune diverse informatii.',
        technologies: [
          'Backend: PHP, MySQL, Laravel',
          'Frontend: HTML, CSS, Javascript, AngularJS, Bootstrap 3',
        ]
      },
      {
        startDate: '04.2017',
        endDate: '05.2017',
        title: 'Sistem de reporting',
        description: 'Am implementat un sistem intern de reporting care se conecteaza la ' +
          'sistemul intern al firmei de asigurari(vezi mai jos) pentru a trage date, prin intermediul ' +
          'cariua se puteau vizualiza si exporta diverse rapoarte',
        technologies: [
          'Backend: PHP, MySQL, Laravel',
          'Frontend: HTML, CSS, Javascript, AngularJS, Bootstrap 3',
        ]
      },
      {
        startDate: '11.2016',
        endDate: '04.2017',
        title: 'Sistem intern pentru o firma de asigurari',
        description: 'Acest sistem consta in managerierea diverselor documente primite pe email, pe care ' +
          'aplicatia le prelua si crea task-uri pentru angajati in vederea prelucrarii acestora. Am ajutat la ' +
          'dezvoltarea acestui sistem de la 0, timp in care am dobandit: cunostinte solide de Laravel, partea de ' +
          'servicii RESTful(API), cunostinte solide de MySQL si baze de date relationale, cunostinte solide de ' +
          'AngularJS 1.3, in special partea de JavaScript si cunostinte decente de HTML si CSS, respectiv ' +
          'famework-ul Boostrap 3.',
        technologies: [
          'Backend: PHP, MySQL, Laravel',
          'Frontend: HTML, CSS, Javascript, AngularJS, Bootstrap 3',
        ]
      },
      {
        startDate: '04.10.2016',
        endDate: '24.10.2016',
        title: 'Aplicatie interna pentru comunicare si partajare de fisiere',
        description: 'Am dezvoltat o platforma interna cu urmatoarele functionalitati: mesagerie instanta, ' +
          'file sharing, video preview, dashboard stiri',
        technologies: [
          'Backend: PHP, MySQL, Laravel',
          'Frontend: HTML, CSS, Javascript, AngularJS, Bootstrap 3',
        ]
      },
      {
        startDate: '06.2016',
        endDate: '10.2016',
        title: 'Platforma in genul UberEats',
        description: 'Am ajutat la dezvoltarea de feature-uri noi si mentenanta aplicatiei in vederea functionarii corecte.',
        technologies: [
          'Backend: PHP, MySQL, Laravel',
          'Frontend: HTML, CSS, Javascript, AngularJS, Bootstrap 3',
        ]
      }
    ];
  }

  getPersonalInfo(): IPersonalInfo {
    return this._personalInfo;
  }

  getBio(): string {
    return this._bio;
  }

  getEducation(): ITextBlockWithDate[] {
    return this._education;
  }

  getWorkExperience(): ITextBlockWithDate[] {
    return this._workExperience;
  }

  getSkills(): ITextBlock[] {
    return this._skills;
  }

  getProjects(): IProjectBlock[] {
    return this._projects;
  }
}